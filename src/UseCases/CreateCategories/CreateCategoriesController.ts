import { Request, Response } from "express";
import { CreateCategoriesUseCase } from "./CreateCategoriesUseCase";

export class CreateCategoriesController {
  constructor(private createCategoriesUseCase: CreateCategoriesUseCase) { }

  handle(req: Request, res: Response): Response {

    try {
      const { name, description } = req.body;
      this.createCategoriesUseCase.execute({ name, description });
      return res.status(201).send();

    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}
