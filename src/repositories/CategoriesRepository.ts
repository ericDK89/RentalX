import { Category } from "../model/Category";
import {
  ICategoryRepository,
  ICategoryRepositoryDTO
} from "./ICategoriesRepository";

export class CategoriesRepository implements ICategoryRepository {
  private categories: Category[];

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }

  create({ name, description }: ICategoryRepositoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date().toLocaleString("pt-BR"),
    });

    this.categories.push(category);
  }

  findByName(name: string): Category {
    const existsCategory = this.categories.find(
      (category) => category.name === name
    );

    return existsCategory;
  }

  listAll(): Category[] {
    const allCategories = this.categories;

    return allCategories;
  }
}
