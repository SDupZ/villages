const admin = require('firebase-admin');
let serviceAccount = require('./tiny-towns-firebase-adminsdk-py34p-789ee50c66.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

module.exports = db;