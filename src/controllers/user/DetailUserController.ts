import { Request, Response } from "express";
import DetailUserService from "../../services/user/DetailUserService";

class DetailUserController {
  async handle(req: Request, res: Response) {
    const detailUserService = new DetailUserService();

    const user_id = req.user_id;

    const user = await detailUserService.execute(user_id);

    return res.json(user);
  }
}

export default DetailUserController;
