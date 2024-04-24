import primsaClient from "../../prisma";

interface OrderDetails {
  order_id: string;
}

export default class FinishedOrderService {
  async execute({ order_id }: OrderDetails) {
    const order = await primsaClient.order.update({
      where: {
        id: order_id,
      },
      data: {
        status: true,
      },
    });

    return order;
  }
}
