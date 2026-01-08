import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectToDatabase from '@/lib/db';
import { Board } from '@/lib/models';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await connectToDatabase();
    const db = mongoose.connection.db;
    
    if (!db) {
        return NextResponse.json({ error: 'No DB connection' });
    }

    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map(c => c.name);
    
    // Count boards using the model
    const boardCount = await Board.countDocuments();
    const allBoards = await Board.find({}).lean();
    
    // Check specific 'test' collection if it exists
    let testCollectionDocs = 'N/A';
    if (collectionNames.includes('test')) {
        testCollectionDocs = await db.collection('test').find({}).toArray();
    }

    return NextResponse.json({
      databaseName: db.databaseName,
      collections: collectionNames,
      modelCounts: {
        Board: boardCount,
      },
      boardsData: allBoards,
      debugInfo: {
        uri_masked: process.env.MONGODB_URI ? process.env.MONGODB_URI.split('@')[1] : 'undefined'
      }
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message, stack: error.stack });
  }
}
