import * as admin from 'firebase-admin';
import { applicationDefault } from 'firebase-admin/app';
import { getStorage } from 'firebase-admin/storage';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: applicationDefault(),
    storageBucket: 'loft121-ceeaf.appspot.com',
  });
} else {
  admin.app();
}

const bucket = getStorage().bucket();

export { bucket };
