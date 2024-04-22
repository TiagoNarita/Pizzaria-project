import { Request, Response } from "express";

class RemoveItemController {
  async handle(req: Request, res: Response) {
    const { itemId } = req.body;
  }
}
