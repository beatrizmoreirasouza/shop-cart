import { Router } from "express";
import { getHomeIndex } from "../app/controllers/homeController";
import {
  getCategoryIndex,
  postCategoryStore,
  getCategoryShow,
  putCategoryUpdate,
  deleteCategoryDestroy,
} from "../app/controllers/categoryController";
import {
  getProductIndex,
  postProductStore,
  getProductShow,
  putProductUpdate,
  deleteProductDestroy,
} from "../app/controllers/productCrontoller";
import { route } from "express/lib/application";

const router = Router();

router.get("/", getHomeIndex);

router.get("/categories", getCategoryIndex);
router.post("/categories", postCategoryStore);
router.get("/categories/:id", getCategoryShow);
router.put("/categories/:id", putCategoryUpdate);
router.delete("/categories/:id", deleteCategoryDestroy);

router.get("/products", getProductIndex);
router.post("/products", postProductStore);
router.get("/products/:id", getProductShow);
router.put("/products/:id", putProductUpdate);
router.delete("/products/:id", deleteProductDestroy);

export default router;
