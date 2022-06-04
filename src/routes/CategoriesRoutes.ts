import { Router } from "express";
import multer from "multer";
import { createCategoriesController } from "../UseCases/CreateCategories";
import { importCategoriesController } from "../UseCases/importCategories";
import { listCategoriesController } from "../UseCases/ListCategories";

export const categoriesRoutes = Router();

const upload = multer({ dest: "./tmp" });

categoriesRoutes.post("/", (req, res) => {
  createCategoriesController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  listCategoriesController.handle(req, res);
});

categoriesRoutes.post("/import", upload.single("file"), (req, res) => {
  importCategoriesController.handle(req, res);
});
