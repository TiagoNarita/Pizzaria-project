import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserControllers";
import AuthUserController from "./controllers/user/AuthUserController";
import DetailUserController from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

const router = Router();

//-- Routes USERS --
router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/me", isAuthenticated, new DetailUserController().handle);

//-- Routes CATEGORY --

router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);

router.get("/category", isAuthenticated, new ListCategoryController().handle);

// -- Routes PRODUCTS --

export { router };
