import mongoose, { Schema, model, models } from 'mongoose';

const BoardSchema = new Schema({
  id: { type: String, required: true, unique: true }, // Keeping string ID for compatibility/UUIDs
  name: { type: String, required: true },
  members: { type: [String], default: [] },
  createdAt: { type: String, required: true },
}, {
    timestamps: true 
});

const TaskSchema = new Schema({
  id: { type: String, required: true, unique: true },
  boardId: { type: String, required: true, index: true },
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ['todo', 'in-progress', 'done'], required: true },
  priority: { type: String, enum: ['low', 'medium', 'high'] },
  dueDate: { type: String },
  assignees: { type: [String], default: [] },
  createdAt: { type: String, required: true },
}, {
    timestamps: true
});

// Prevent overwrite on model compilation
export const Board = models.Board || model('Board', BoardSchema);
export const Task = models.Task || model('Task', TaskSchema);
