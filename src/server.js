require('dotenv').config();
const app = require('./api');
const { userController } = require('./controllers/userControllers');
const { newUserValidate } = require('./middlewares/newUserValidate');
const { validateToken } = require('./middlewares/auth');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', userController.createLogin);
app.post('/user', newUserValidate, userController.create);
app.get('/user', validateToken, userController.getAll);
app.get('/user/:id', validateToken, userController.findId);

app.listen(port, () => console.log('ouvindo porta', port));
