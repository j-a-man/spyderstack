'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';

interface ManageMembersDialogProps {
  initialMembers: string[];
  onUpdateMembers: (members: string[]) => Promise<void>;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ManageMembersDialog({ initialMembers, onUpdateMembers, open, onOpenChange }: ManageMembersDialogProps) {
  const [members, setMembers] = useState<string[]>(initialMembers);
  const [newName, setNewName] = useState('');
  const [loading, setLoading] = useState(false);

  // Sync state when prop changes (if dialog re-opens with new data)
  // simpler to just use effect or key from parent. parent will handle key usually.
  
  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;
    if (members.includes(newName.trim())) return;

    const updated = [...members, newName.trim()];
    setMembers(updated);
    setNewName(''); // Optimistic local update, we'll save on close or explicit save? 
    // Let's save immediately for better UX on this simple list
    setLoading(true);
    await onUpdateMembers(updated);
    setLoading(false);
  };

  const handleRemove = async (name: string) => {
    const updated = members.filter(m => m !== name);
    setMembers(updated);
    setLoading(true);
    await onUpdateMembers(updated);
    setLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Manage Members</DialogTitle>
          <DialogDescription>
            Add people who can be assigned to tasks on this board.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <form onSubmit={handleAdd} className="flex gap-2">
            <Input 
              placeholder="Enter name (e.g. Alice)" 
              value={newName} 
              onChange={(e) => setNewName(e.target.value)}
            />
            <Button type="submit" disabled={loading || !newName.trim()}>
              Add
            </Button>
          </form>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Current Members</h4>
            {members.length === 0 && (
                <p className="text-sm text-gray-500 italic">No members yet.</p>
            )}
            <div className="flex flex-wrap gap-2">
                {members.map(member => (
                    <div key={member} className="flex items-center gap-1 bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm">
                        {member}
                        <button 
                            onClick={() => handleRemove(member)}
                            className="text-gray-500 hover:text-red-500 transition-colors"
                        >
                            <X className="h-3 w-3" />
                        </button>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
