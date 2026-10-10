let server;

setup(async function() {
  let students = [
    {"name" : "Steve", "email" : "steve@gmail.com"},
    {"name" : "Tina", "email" : "tina@yahoo.com"}
  ];
  const express = require('express');
  const app = express();
  server = require('http').createServer(app);
  app.set('view engine', 'pug');
  app.use(require('body-parser')
    .urlencoded({extended:true}));
  const studentsController = 
    require("../controllers/students-controller");
  studentsController.setup(app, students);
  await new Promise((resolve, reject) => {
    const onError = error => {
      server.removeListener('listening', onListening);
      reject(error);
    };
    const onListening = () => {
      server.removeListener('error', onError);
      resolve();
    };

    server.once('error', onError);
    server.once('listening', onListening);
    server.listen(8888);
  });
});

teardown(async function() {
  await new Promise((resolve, reject) => {
    server.close(error => error ? reject(error) : resolve());
  });
});
