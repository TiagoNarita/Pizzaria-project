import { Request, Response } from "express";
import CreateCategoryService from "../../services/category/CreateCategoryServices";

class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const createCategoryService = new CreateCategoryService();
    const category = await createCategoryService.execute();

    return res.json(category);
  }
}

export { CreateCategoryController };
