
var admin = require("firebase-admin");

var serviceAccount = require("./test-microservice-f8317-firebase-adminsdk-fs3ig-280d14dfc8.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const DB = admin.firestore();
module.exports = {admin , DB};
