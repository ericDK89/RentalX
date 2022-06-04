import { CategoriesRepository } from "../../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const alreadyExists = this.categoriesRepository.findByName(name);

    if (alreadyExists) {
      throw new Error("Category already exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}
