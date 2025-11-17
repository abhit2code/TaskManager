import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import { schema } from './schema';

// Create the adapter
const adapter = new SQLiteAdapter({
    schema,
    jsi: true,
    onSetUpError: (error) => {
        console.error('Error setting up the database:', error);
    }
})


// Create the database
export const database = new Database({
    adapter,
    modelClasses: [
        
    ],
})

// Helper function to get collections
export const getCollection = (tableName) => {
  return database.get(tableName);
};

// Helper to clear database (useful for testing/logout)
export const resetDatabase = async () => {
  await database.write(async () => {
    await database.unsafeResetDatabase();
  });
};