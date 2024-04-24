import { Request, Response } from "express";
import FinishedOrderService from "../../services/order/FinishedOrderService";

export default class FinishedOrderController {
  async handle(req: Request, res: Response) {
    const { order_id } = req.body;

    const finishedOrderService = new FinishedOrderService();
    const order = await finishedOrderService.execute({ order_id });

    res.json(order);
  }
}
