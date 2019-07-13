import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Diego',
    email: 'teste@teste.com',
    password_hash: '123123132',
    provider: false,
    // precisei declarar o provider para funcionar
  });

  return res.json(user);
});

export default routes;
