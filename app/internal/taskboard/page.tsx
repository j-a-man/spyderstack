'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Board } from '@/lib/storage'; // Only type import
import { Trash2 } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function BoardSelectionPage() {
  const [boards, setBoards] = useState<Board[]>([]);
  const [newBoardName, setNewBoardName] = useState('');
  const [loading, setLoading] = useState(true);
  const [createOpen, setCreateOpen] = useState(false);
  const [creating, setCreating] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchBoards();
  }, []);

  const fetchBoards = async () => {
    try {
        const res = await fetch('/api/boards');
        if (res.ok) {
            const data = await res.json();
            setBoards(data);
        }
    } finally {
        setLoading(false);
    }
  };

  const handleCreateBoard = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBoardName.trim()) return;
    
    setCreating(true);
    try {
        const res = await fetch('/api/boards', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: newBoardName })
        });
        
        if (res.ok) {
            const newBoard = await res.json();
            setBoards([...boards, newBoard]);
            setCreateOpen(false);
            setNewBoardName('');
        }
    } finally {
        setCreating(false);
    }
  };

  const handleDeleteBoard = async (e: React.MouseEvent, boardId: string) => {
    e.stopPropagation(); // Double check propagation is stopped
    
    // Optimistic update
    const previousBoards = [...boards];
    setBoards(boards.filter(b => b.id !== boardId));

    try {
        const res = await fetch(`/api/boards?id=${boardId}`, {
            method: 'DELETE',
        });
        
        if (!res.ok) {
            throw new Error('Failed to delete');
        }
    } catch (error) {
        // Revert on failure
        setBoards(previousBoards);
        alert('Failed to delete board');
    }
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Your Task Boards</h1>
        <Dialog open={createOpen} onOpenChange={setCreateOpen}>
            <DialogTrigger asChild>
                <Button>Create Board</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create New Board</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleCreateBoard} className="space-y-4 py-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Board Name</Label>
                        <Input 
                            id="name" 
                            value={newBoardName} 
                            onChange={(e) => setNewBoardName(e.target.value)} 
                            placeholder="e.g., Marketing, Engineering"
                            required
                        />
                    </div>
                    <DialogFooter>
                        <Button type="submit" disabled={creating}>
                            {creating ? 'Creating...' : 'Create Board'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div className="text-center py-10">Loading boards...</div>
      ) : boards.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-dashed">
            <h3 className="text-lg font-medium">No boards found</h3>
            <p className="text-gray-500 mb-4">Create your first board to get started.</p>
            <Button variant="outline" onClick={() => setCreateOpen(true)}>Create Board</Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {boards.map((board) => (
                <Card 
                    key={board.id} 
                    className="cursor-pointer hover:border-primary/50 transition-colors relative group"
                    onClick={() => router.push(`/internal/taskboard/${board.id}`)}
                >
                    <CardHeader>
                        <div className="flex justify-between items-start">
                            <CardTitle className="truncate pr-8">{board.name}</CardTitle>
                            
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8 text-gray-400 hover:text-red-500 hover:bg-red-50 absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent onClick={(e) => e.stopPropagation()}>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Delete board "{board.name}"?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete the board and 
                                            <span className="font-bold text-destructive"> ALL associated tasks</span>.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction 
                                            onClick={(e) => handleDeleteBoard(e, board.id)}
                                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                        >
                                            Delete Board
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                        <CardDescription>Created {new Date(board.createdAt).toLocaleDateString()}</CardDescription>
                    </CardHeader>
                </Card>
            ))}
        </div>
      )}
    </div>
  );
}
