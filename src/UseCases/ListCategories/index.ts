import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesRepository = new ListCategoriesUseCase(
  categoriesRepository
);
export const listCategoriesController = new ListCategoriesController(
  listCategoriesRepository
);
