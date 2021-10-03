import { Router } from "express";

const routes = Router();
//routes.get('/user', (request, response) => response.json({
//    message: 'Hello World'
//}))

routes.get("/user", (request, response) => {
  response.json({
    message: "Hello World",
  });
});

routes.get("/user/:id/", (request, response) => {
  const { id } = request.params;
  response.json({
    userId: id,
  });
});

routes.get("/user/", (request, response) => {
  const { nome, idade } = request.query;
  response.json({
    idade,
    nome,
  });
});

export default routes;
