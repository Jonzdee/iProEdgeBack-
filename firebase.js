const admin = require('firebase-admin');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(), // Uses the GOOGLE_APPLICATION_CREDENTIALS
  });
}

const db = admin.firestore();
module.exports = { admin, db };
