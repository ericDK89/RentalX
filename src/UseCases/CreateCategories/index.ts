import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoriesController } from "./CreateCategoriesController";
import { CreateCategoriesUseCase } from "./CreateCategoriesUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const createCategoriesUseCase = new CreateCategoriesUseCase(
  categoriesRepository
);
export const createCategoriesController = new CreateCategoriesController(
  createCategoriesUseCase
);
