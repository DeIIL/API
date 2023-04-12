import { Router } from 'express';

import { listCategoriesController } from '../modules/cars/useCases/listCategories';
import { createCategoryController } from '../modules/cars/useCases/createCategory';

const categoriesRouter = Router();

categoriesRouter.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRouter.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { categoriesRouter };
