import { Request, Response } from "express";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

export class ListSpecificationsController {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}

  handle(req: Request, res: Response): Response {
    const allSpecifications = this.listSpecificationsUseCase.execute();

    if (allSpecifications.length === 0) {
      return res.status(204).send();
    }

    return res.json({ all_specifications: allSpecifications });
  }
}
