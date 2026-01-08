import connectToDatabase from './db';
import { Board as BoardModel, Task as TaskModel } from './models';

// Keep interfaces exported for the rest of the app
export interface Board {
  id: string;
  name: string;
  members: string[];
  createdAt: string;
}

export interface Task {
  id: string;
  boardId: string;
  title: string;
  description?: string;
  status: 'todo' | 'in-progress' | 'done';
  priority?: 'low' | 'medium' | 'high';
  dueDate?: string;
  assignees: string[];
  createdAt: string;
}

// --- Board Operations ---

export async function getBoards(): Promise<Board[]> {
  await connectToDatabase();
  const boards = await BoardModel.find({}).lean();
  return boards.map((b: any) => ({
    ...b,
    id: b.id, // Ensure we use the string ID, not _id
    _id: undefined,
    __v: undefined
  })) as Board[];
}

export async function createBoard(name: string): Promise<Board> {
  await connectToDatabase();
  const newBoard = await BoardModel.create({
    id: crypto.randomUUID(),
    name,
    members: [],
    createdAt: new Date().toISOString(),
  });
  
  // Convert mongoose doc to plain object and clean up
  const obj = newBoard.toObject();
  return {
      ...obj,
      _id: undefined,
      __v: undefined
  } as Board;
}

export async function updateBoard(id: string, updates: Partial<Board>): Promise<Board | null> {
  await connectToDatabase();
  // Exclude _id from updates to avoid immutable field error
  const { id: _, ...safeUpdates } = updates as any;
  
  const updated = await BoardModel.findOneAndUpdate(
    { id: id },
    { $set: safeUpdates },
    { new: true, runValidators: true }
  ).lean();

  if (!updated) return null;

  return {
    ...updated,
    _id: undefined,
    __v: undefined
  } as unknown as Board;
}

export async function deleteBoard(id: string): Promise<boolean> {
  await connectToDatabase();
  const result = await BoardModel.deleteOne({ id });
  
  if (result.deletedCount > 0) {
      // Cascade delete tasks
      await TaskModel.deleteMany({ boardId: id });
      return true;
  }
  return false;
}

// --- Task Operations ---

export async function getTasks(boardId?: string): Promise<Task[]> {
  await connectToDatabase();
  const query = boardId ? { boardId } : {};
  const tasks = await TaskModel.find(query).lean();
  
  return tasks.map((t: any) => ({
      ...t,
      id: t.id,
      _id: undefined,
      __v: undefined
  })) as Task[];
}

export async function addTask(task: Omit<Task, 'id' | 'createdAt'>): Promise<Task> {
  await connectToDatabase();
  const newTask = await TaskModel.create({
    ...task,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  });

  const obj = newTask.toObject();
  return {
      ...obj,
      _id: undefined,
      __v: undefined
  } as Task;
}

export async function updateTask(id: string, updates: Partial<Task>): Promise<Task | null> {
  await connectToDatabase();
    // Exclude _id from updates
  const { id: _, ...safeUpdates } = updates as any;

  const updatedTask = await TaskModel.findOneAndUpdate(
    { id },
    { $set: safeUpdates },
    { new: true, runValidators: true }
  ).lean();

  if (!updatedTask) return null;
  
  return {
      ...updatedTask,
      _id: undefined,
      __v: undefined
  } as unknown as Task;
}

export async function deleteTask(id: string): Promise<boolean> {
  await connectToDatabase();
  const result = await TaskModel.deleteOne({ id });
  return result.deletedCount > 0;
}
