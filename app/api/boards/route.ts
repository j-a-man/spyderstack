import { NextRequest, NextResponse } from 'next/server';
import { getBoards, createBoard, updateBoard, deleteBoard } from '@/lib/storage';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const boards = await getBoards();
    return NextResponse.json(boards);
  } catch (error) {
    console.error('Failed to fetch boards:', error);
    return NextResponse.json({ error: 'Failed to fetch boards' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body.name) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }
    const newBoard = await createBoard(body.name);
    return NextResponse.json(newBoard, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create board' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
    try {
        const body = await req.json();
        if (!body.id) {
            return NextResponse.json({ error: 'ID is required' }, { status: 400 });
        }
        const updated = await updateBoard(body.id, body);
        if (!updated) {
            return NextResponse.json({ error: 'Board not found' }, { status: 404 });
        }
        return NextResponse.json(updated);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update board' }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        
        if (!id) {
            return NextResponse.json({ error: 'ID is required' }, { status: 400 }); 
        }

        const success = await deleteBoard(id);
        if (!success) {
            return NextResponse.json({ error: 'Board not found' }, { status: 404 });
        }
        
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete board' }, { status: 500 });
    }
}
