import { Router, Request, Response, response } from "express";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}


const routes = Router();


routes.post('/user', () => console.log("User route"));
routes.post('/activy', () => console.log("Activy route"));
routes.post('/courseunit', () => console.log("Course Unit route"));

export default routes;
