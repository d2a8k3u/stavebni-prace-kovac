import firebaseConfig from '@/config/firebase';
import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getDatabase, connectDatabaseEmulator } from 'firebase/database';

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);

export const database = getDatabase(app);

if ('development' === import.meta.env.MODE) {
  connectAuthEmulator(authentication, 'http://127.0.0.1:9099');
  connectDatabaseEmulator(database, 'localhost', 9000);
}
