import { Router } from 'express';

import { categoriesRepository } from '../modules/cars/useCases/createCategory';
import { createCategoryController } from '../modules/cars/useCases/createCategory';

const categoriesRouter = Router();

categoriesRouter.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRouter.get('/', (request, response) => {
  return response.json(categoriesRepository.list());
});

export { categoriesRouter };
