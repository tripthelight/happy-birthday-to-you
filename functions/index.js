const functions = require('firebase-functions')
const admin = require('firebase-admin')

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

admin.initializeApp()

console.log(functions.config().admin.email)

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!123123");
});

exports.test = functions.https.onRequest(require('./test'))
