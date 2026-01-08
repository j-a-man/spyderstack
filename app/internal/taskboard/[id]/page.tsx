import { getTasks, getBoard } from '@/lib/storage';
import { TaskBoard } from '@/components/internal/task-board';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function BoardPage({ params }: PageProps) {
  const { id } = await params;
  
  // Verify board exists
  const board = await getBoard(id);

  if (!board) {
    redirect('/internal/taskboard');
  }

  const tasks = await getTasks(id);

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex items-center gap-4 mb-6">
        <a href="/internal/taskboard" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100">
          ← Back to Boards
        </a>
      </div>
      <TaskBoard initialTasks={tasks} boardId={id} boardName={board.name} />
    </div>
  );
}
