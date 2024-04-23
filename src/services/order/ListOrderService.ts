import primsaClient from "../../prisma";

class ListOrderService {
  async execute() {
    const order = await primsaClient.order.findMany({
      where: {
        draft: false,
        status: false,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return order;
  }
}

export { ListOrderService };
