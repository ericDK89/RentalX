import { Category } from "../model/Category";

export interface ICategoryRepositoryDTO {
  name: string;
  description: string;
}

export interface ICategoryRepository {
  findByName(name: string): Category;
  create({ name, description }: ICategoryRepositoryDTO): void;
  listAll(): Category[];
}
