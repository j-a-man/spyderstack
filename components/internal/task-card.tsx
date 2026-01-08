'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Task } from '@/lib/storage';
import { format, isPast, isToday, isTomorrow } from 'date-fns';
import { CalendarIcon, Pencil } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
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

interface TaskCardProps {
  task: Task;
  onUpdateStatus: (id: string, status: Task['status']) => void;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
  onUnassign: (taskId: string, member: string) => void;
}

export function TaskCard({ task, onUpdateStatus, onDelete, onEdit, onUnassign }: TaskCardProps) {
  
  const getPriorityIcon = (p?: Task['priority']) => {
      switch(p) {
          case 'high': return <span className="text-red-500 font-bold ml-2">!!!</span>;
          case 'medium': return <span className="text-yellow-500 font-bold ml-2">!!</span>;
          case 'low': return <span className="text-green-500 font-bold ml-2">!</span>;
          default: return null;
      }
  };

  const formatDate = (dateStr?: string) => {
      if (!dateStr) return null;
      const date = new Date(dateStr);
      if (isToday(date)) return 'Today';
      if (isTomorrow(date)) return 'Tomorrow';
      return format(date, 'MMM d');
  };

  const isOverdue = task.dueDate && isPast(new Date(task.dueDate)) && !isToday(new Date(task.dueDate)) && task.status !== 'done';

  return (
    <Card className={cn("mb-4 transition-all hover:shadow-md relative group", isOverdue && "border-red-200 dark:border-red-900/50 bg-red-50/10")}>
      <CardHeader className="pb-2 pr-10">
        <div className="flex justify-between items-start">
            <CardTitle className="text-lg font-semibold flex items-center">
                {task.title}
                {getPriorityIcon(task.priority)}
            </CardTitle>
            {task.dueDate && (
                <Badge variant="outline" className={cn("text-xs font-normal", isOverdue ? "text-red-500 border-red-200" : "text-gray-500")}>
                    <CalendarIcon className="mr-1 h-3 w-3" />
                    <span suppressHydrationWarning>
                        {formatDate(task.dueDate)}
                    </span>
                </Badge>
            )}
        </div>
        <CardDescription className="text-xs text-gray-400">
          Created <span suppressHydrationWarning>{new Date(task.createdAt).toLocaleDateString()}</span>
        </CardDescription>
        
        {/* Edit Button */}
        <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-2 right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => onEdit(task)}
        >
            <Pencil className="h-3 w-3" />
        </Button>
      </CardHeader>
      
      <CardContent>
        <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap mb-3">
          {task.description}
        </p>

        {/* Assignees */}
        {task.assignees && task.assignees.length > 0 && (
            <div className="flex flex-wrap gap-1">
                <TooltipProvider>
                    {task.assignees.map(member => (
                        <Tooltip key={member}>
                            <TooltipTrigger asChild>
                                <Badge 
                                    variant="secondary" 
                                    className="cursor-pointer hover:line-through hover:bg-destructive hover:text-destructive-foreground transition-colors"
                                    onClick={() => onUnassign(task.id, member)}
                                >
                                    {member}
                                </Badge>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Click to unassign</p>
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </TooltipProvider>
            </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-between pt-2">
        <Select
          defaultValue={task.status}
          onValueChange={(val) => onUpdateStatus(task.id, val as Task['status'])}
        >
          <SelectTrigger className="w-[120px] h-8 text-xs">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todo">To Do</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="done">Done</SelectItem>
          </SelectContent>
        </Select>
        
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button 
                    variant="destructive" 
                    size="sm" 
                    className="h-8 text-xs px-2 z-10 relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    Delete
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent onClick={(e) => e.stopPropagation()}>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete the task "{task.title}".
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => onDelete(task.id)} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  );
}
