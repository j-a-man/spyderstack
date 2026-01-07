'use client';

import { useState, useEffect } from 'react';
import { Task, Board } from '@/lib/storage';
import { AddTaskDialog } from './add-task-dialog';
import { TaskCard } from './task-card';
import { ManageMembersDialog } from './manage-members-dialog';
import { EditTaskDialog } from './edit-task-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Pencil, Users, Check } from 'lucide-react';

interface TaskBoardProps {
  initialTasks: Task[];
  boardId: string;
  boardName: string;
}

export function TaskBoard({ initialTasks, boardId, boardName: initialBoardName }: TaskBoardProps) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [boardName, setBoardName] = useState(initialBoardName);
  // We need to fetch members separately since they are on the board object, not passed initially except name
  // Actually, we should probably fetch the board details on mount or modify props.
  // Let's fetch board details to be safe.
  const [members, setMembers] = useState<string[]>([]);
  
  const [isEditingName, setIsEditingName] = useState(false);
  const [editedName, setEditedName] = useState(initialBoardName);
  
  const [showMembersDialog, setShowMembersDialog] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  useEffect(() => {
      fetchBoardDetails();
  }, [boardId]);

  const fetchBoardDetails = async () => {
      const res = await fetch('/api/boards'); // We might want a specific endpoint but filtering client side for now is fine for small scale
      if (res.ok) {
          const boards: Board[] = await res.json();
          const board = boards.find(b => b.id === boardId);
          if (board) {
              setMembers(board.members || []);
              setBoardName(board.name);
              setEditedName(board.name);
          }
      }
  };

  const refreshTasks = async () => {
    const res = await fetch(`/api/tasks?boardId=${boardId}`);
    if (res.ok) {
        const data = await res.json();
        setTasks(data);
    }
  };

  // --- Handlers ---

  const handleAddTask = async (title: string, description: string, priority: Task['priority'], dueDate?: string, assignees?: string[]) => {
    const res = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
          title, 
          description, 
          boardId,
          priority,
          dueDate,
          assignees
      }),
    });

    if (res.ok) {
      const newTask = await res.json();
      setTasks((prev) => [...prev, newTask]);
    }
  };

  const handleUpdateTask = async (id: string, updates: Partial<Task>) => {
      // Optimistic
      setTasks(prev => prev.map(t => t.id === id ? { ...t, ...updates } : t));
      
      await fetch('/api/tasks', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id, ...updates }),
      });
      refreshTasks(); // Sync to be sure
  };

  const handleDeleteTask = async (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
    await fetch(`/api/tasks?id=${id}`, { method: 'DELETE' });
  };

  const handleUnassign = async (taskId: string, member: string) => {
      const task = tasks.find(t => t.id === taskId);
      if (!task) return;
      
      const newAssignees = (task.assignees || []).filter(m => m !== member);
      await handleUpdateTask(taskId, { assignees: newAssignees });
  };


  // --- Board Management ---

  const handleUpdateBoardName = async () => {
      if (!editedName.trim()) return;
      setBoardName(editedName);
      setIsEditingName(false);
      
      await fetch('/api/boards', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: boardId, name: editedName })
      });
  };

  const handleUpdateMembers = async (newMembers: string[]) => {
      setMembers(newMembers);
      await fetch('/api/boards', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: boardId, members: newMembers })
      });
  };

  // --- Render ---

  const columns: { id: Task['status']; label: string }[] = [
    { id: 'todo', label: 'To Do' },
    { id: 'in-progress', label: 'In Progress' },
    { id: 'done', label: 'Done' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        {/* Header / Title Edit */}
        <div className="flex items-center gap-2">
            {isEditingName ? (
                <div className="flex items-center gap-2">
                    <Input 
                        value={editedName} 
                        onChange={(e) => setEditedName(e.target.value)} 
                        className="text-2xl font-bold h-10 w-[300px]"
                    />
                    <Button size="icon" onClick={handleUpdateBoardName}>
                        <Check className="h-4 w-4" />
                    </Button>
                </div>
            ) : (
                <div className="flex items-center gap-2">
                    <h1 className="text-3xl font-bold tracking-tight">{boardName}</h1>
                    <Button variant="ghost" size="icon" onClick={() => setIsEditingName(true)}>
                        <Pencil className="h-4 w-4 opacity-50 hover:opacity-100" />
                    </Button>
                </div>
            )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
            <Button variant="outline" onClick={() => setShowMembersDialog(true)}>
                <Users className="mr-2 h-4 w-4" />
                Manage Members
            </Button>
            <AddTaskDialog onAddTask={handleAddTask} members={members} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map((col) => (
          <div key={col.id} className="bg-gray-50/50 dark:bg-gray-800/20 rounded-lg p-4 min-h-[500px] border border-gray-100 dark:border-gray-800">
            <h2 className="text-xl font-semibold mb-4 px-2 flex items-center justify-between">
              {col.label}
              <span className="text-sm font-normal text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                {tasks.filter((t) => t.status === col.id).length}
              </span>
            </h2>
            <div className="space-y-4">
              {tasks
                .filter((t) => t.status === col.id)
                .map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onUpdateStatus={(id, status) => handleUpdateTask(id, { status })}
                    onDelete={handleDeleteTask}
                    onEdit={setEditingTask}
                    onUnassign={handleUnassign}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>

      <ManageMembersDialog 
        open={showMembersDialog} 
        onOpenChange={setShowMembersDialog}
        initialMembers={members}
        onUpdateMembers={handleUpdateMembers}
      />

      <EditTaskDialog
        open={!!editingTask}
        onOpenChange={(open) => !open && setEditingTask(null)}
        task={editingTask}
        onUpdate={handleUpdateTask}
        members={members}
      />
    </div>
  );
}
