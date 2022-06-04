import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  handle(req: Request, res: Response) {
    const allCategories = this.listCategoriesUseCase.execute();

    if (allCategories.length === 0) {
      return res.status(204).send();
    }

    return res.json({ all_categories: allCategories });
  }
}
