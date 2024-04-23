import primsaClient from "../../prisma";

interface order {
  order_id: string;
}

class SendOrderService {
  async execute({ order_id }: order) {
    const order = await primsaClient.order.update({
      where: {
        id: order_id,
      },
      data: {
        draft: false,
      },
    });

    return order;
  }
}

export { SendOrderService };
