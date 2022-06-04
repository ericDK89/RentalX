import { Router } from "express";
import { categoriesRoutes } from "./CategoriesRoutes";
import { specificationRoutes } from "./SpecificationRoutes";

export const routes = Router();

routes.use("/categories", categoriesRoutes);
routes.use("/specifications", specificationRoutes);
