import { Router } from "express";
import { createcarcontrol, readcarcontrol, updatecarcontrol, delecarcontrol, indexcarcontrol } 
  from "./domain/usecases/";

const router = Router()

router.post('/cars/create', (request, response) => {
  return createcarcontrol.handle(request, response);
});

router.get('/cars/read/:id', (request, response) => {
  return readcarcontrol.handle(request, response);
});

router.patch('/cars/update:id', (request, response) => {
  return updatecarcontrol.handle(request, response);
});

router.delete('/cars/delete:id', (request, response) => {
  return delecarcontrol.handle(request, response);
});

router.get('/cars/', (request, response) => {
  return indexcarcontrol.handle(request, response);
});

export { router }