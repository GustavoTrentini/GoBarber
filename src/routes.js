import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({message : 'Bem vindo a api!'});
});

export default routes;