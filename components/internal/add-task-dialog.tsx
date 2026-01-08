'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarIcon, Check } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format, addDays, nextDay, Day } from 'date-fns';
import { cn } from '@/lib/utils';
import { Task } from '@/lib/storage';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"

interface AddTaskDialogProps {
  onAddTask: (title: string, description: string, priority: Task['priority'], dueDate?: string, assignees?: string[]) => Promise<void>;
  members: string[];
}

export function AddTaskDialog({ onAddTask, members }: AddTaskDialogProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<Task['priority']>('medium');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [dateInput, setDateInput] = useState('');
  const [assignees, setAssignees] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // Improved Smart date parsing logic
  const handleDateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setDateInput(val);

    const lower = val.toLowerCase().trim();
    const today = new Date();
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    if (lower === 'today') {
        setDate(today);
    } else if (lower === 'tomorrow' || lower === 'tmrw') {
        setDate(addDays(today, 1));
    } else if (lower.startsWith('next ')) {
         const dayName = lower.replace('next ', '').trim();
         const dayIdx = days.indexOf(dayName);
         if (dayIdx !== -1) {
             setDate(nextDay(today, dayIdx as Day));
         }
    } else if (days.includes(lower)) {
        // "Thursday" -> Next recurring thursday (including today if it's thursday? usually means next)
        // date-fns `nextDay` returns the next occurance.
        // If user types today's day name, usually they mean next week, or today? 
        // Let's assume next upcoming instance.
        const dayIdx = days.indexOf(lower);
        setDate(nextDay(today, dayIdx as Day));
    }
  };

  const handleCalendarSelect = (d: Date | undefined) => {
    setDate(d);
    if (d) {
        setDateInput(format(d, 'PPP'));
    } else {
        setDateInput('');
    }
  };

  const toggleAssignee = (name: string) => {
      setAssignees(prev => 
          prev.includes(name) 
              ? prev.filter(n => n !== name)
              : [...prev, name]
      );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    setLoading(true);
    try {
      await onAddTask(
          title, 
          description, 
          priority, 
          date ? date.toISOString() : undefined,
          assignees
      );
      setOpen(false);
      resetForm();
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
      setTitle('');
      setDescription('');
      setPriority('medium');
      setDate(undefined);
      setDateInput('');
      setAssignees([]);
  };

  return (
    <Dialog open={open} onOpenChange={(val) => {
        setOpen(val);
        if (!val) resetForm();
    }}>
      <DialogTrigger asChild>
        <Button>Add Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
          <DialogDescription>
            Create a new task for the board.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="col-span-3"
                required
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">Details</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="priority" className="text-right">Priority</Label>
              <Select value={priority} onValueChange={(val: any) => setPriority(val)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">! Low</SelectItem>
                  <SelectItem value="medium">!! Medium</SelectItem>
                  <SelectItem value="high">!!! High</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Due Date */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="date" className="text-right">Due Date</Label>
              <div className="col-span-3 flex gap-2">
                <Input 
                    id="date-input"
                    placeholder='"Tomorrow", "Thursday"'
                    value={dateInput}
                    onChange={handleDateInputChange}
                    className="flex-1"
                />
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant={"outline"}
                            className={cn(
                                "w-[40px] px-0 pl-2 text-left font-normal",
                                !date && "text-muted-foreground"
                            )}
                        >
                           <CalendarIcon className="h-4 w-4" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={handleCalendarSelect}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
              </div>
              {date && (
                 <div className="col-start-2 col-span-3 text-xs text-green-600">
                    Will be set to: {format(date, 'PPP')}
                 </div>
              )}
            </div>

            {/* Assignees */}
            <div className="grid grid-cols-4 items-start gap-4">
                <Label className="text-right mt-2">Assign to</Label>
                <div className="col-span-3">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-between">
                            {assignees.length > 0 
                                ? `${assignees.length} selected`
                                : "Select members..."}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[240px] p-0">
                            <Command>
                                <CommandInput placeholder="Search members..." />
                                <CommandList>
                                    <CommandEmpty>No members found. Manage board members to add more.</CommandEmpty>
                                    <CommandGroup>
                                        {members.map((member) => (
                                            <CommandItem
                                                key={member}
                                                value={member}
                                                onSelect={() => toggleAssignee(member)}
                                            >
                                                <Check
                                                    className={cn(
                                                        "mr-2 h-4 w-4",
                                                        assignees.includes(member) ? "opacity-100" : "opacity-0"
                                                    )}
                                                />
                                                {member}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    <div className="flex flex-wrap gap-1 mt-2">
                        {assignees.map(a => (
                            <span key={a} className="bg-secondary text-xs px-2 py-1 rounded">
                                {a}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

          </div>
          <DialogFooter>
            <Button type="submit" disabled={loading}>
              {loading ? 'Adding...' : 'Add Task'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
