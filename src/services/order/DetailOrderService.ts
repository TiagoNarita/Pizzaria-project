import primsaClient from "../../prisma";

interface DetailRequest {
  order_id: string;
}

class DetailOrderService {
  async execute({ order_id }: DetailRequest) {
    const orders = primsaClient.item.findMany({
      where: {
        order_id: order_id,
      },
    });

    return orders;
  }
}

export { DetailOrderService };
