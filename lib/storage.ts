import fs from 'fs/promises';
import path from 'path';

export interface Board {
  id: string;
  name: string;
  members: string[]; // List of names available to assign
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
  assignees: string[]; // List of names assigned
  createdAt: string;
}

interface DataSchema {
  boards: Board[];
  tasks: Task[];
}

const DATA_DIR = path.join(process.cwd(), 'data');
const TASKS_FILE = path.join(DATA_DIR, 'tasks.json');

async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
}

async function getRawData(): Promise<DataSchema | any> {
  await ensureDataDir();
  try {
    const data = await fs.readFile(TASKS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return null;
  }
}

async function saveData(data: DataSchema): Promise<void> {
  await ensureDataDir();
  await fs.writeFile(TASKS_FILE, JSON.stringify(data, null, 2));
}

async function getData(): Promise<DataSchema> {
  const raw = await getRawData();
  
  if (!raw) {
    // New file
    return { boards: [], tasks: [] };
  }

  // Handle migration if needed
  if (Array.isArray(raw)) {
      // Very old format
      return { boards: [], tasks: [] }; // Should have been migrated already or wiped
  }

  // Ensure fields exist (Migration for new fields)
  // We modify the in-memory object but only save if we write.
  // Ideally, we'd do a pass to ensure everything matches schema.
  raw.boards.forEach((b: any) => {
      if (!b.members) b.members = [];
  });
  raw.tasks.forEach((t: any) => {
      if (!t.assignees) t.assignees = [];
  });

  return raw as DataSchema;
}

// --- Board Operations ---

export async function getBoards(): Promise<Board[]> {
  const data = await getData();
  return data.boards;
}

export async function createBoard(name: string): Promise<Board> {
  const data = await getData();
  const newBoard: Board = {
    id: crypto.randomUUID(),
    name,
    members: [],
    createdAt: new Date().toISOString(),
  };
  data.boards.push(newBoard);
  await saveData(data);
  return newBoard;
}

export async function updateBoard(id: string, updates: Partial<Board>): Promise<Board | null> {
    const data = await getData();
    const index = data.boards.findIndex(b => b.id === id);
    if (index === -1) return null;

    const updated = { ...data.boards[index], ...updates };
    data.boards[index] = updated;
    await saveData(data);
    return updated;
}

export async function deleteBoard(id: string): Promise<boolean> {
  const data = await getData();
  const initialLength = data.boards.length;
  data.boards = data.boards.filter(b => b.id !== id);
  if (data.boards.length < initialLength) {
     data.tasks = data.tasks.filter(t => t.boardId !== id);
     await saveData(data);
     return true;
  }
  return false;
}

// --- Task Operations ---

export async function getTasks(boardId?: string): Promise<Task[]> {
  const data = await getData();
  if (boardId) {
    return data.tasks.filter(t => t.boardId === boardId);
  }
  return data.tasks;
}

export async function addTask(task: Omit<Task, 'id' | 'createdAt'>): Promise<Task> {
  const data = await getData();
  const newTask: Task = {
    ...task,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  data.tasks.push(newTask);
  await saveData(data);
  return newTask;
}

export async function updateTask(id: string, updates: Partial<Task>): Promise<Task | null> {
  const data = await getData();
  const index = data.tasks.findIndex((t) => t.id === id);
  if (index === -1) return null;

  const updatedTask = { ...data.tasks[index], ...updates };
  data.tasks[index] = updatedTask;
  await saveData(data);
  return updatedTask;
}

export async function deleteTask(id: string): Promise<boolean> {
  const data = await getData();
  const initialLength = data.tasks.length;
  data.tasks = data.tasks.filter((t) => t.id !== id);
  
  if (data.tasks.length < initialLength) {
      await saveData(data);
      return true;
  }
  return false;
}
