import { Router } from "express";
import { createSpecificationController } from "../UseCases/CreateSpecifications";
import { listSpecificationsController } from "../UseCases/ListSpecifications";

export const specificationRoutes = Router();

specificationRoutes.post("/", (req, res) => {
  createSpecificationController.handle(req, res);
});

specificationRoutes.get("/", (req, res) => {
  listSpecificationsController.handle(req, res);
});
