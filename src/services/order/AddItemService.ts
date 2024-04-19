import primsaClient from "../../prisma";

interface ItemRequest {
  order_id: string;
  amount: number;
  product_id: string;
}

class AddItemService {
  async execute({ order_id, amount, product_id }: ItemRequest) {
    const order = primsaClient.item.create({
      data: {
        order_id: order_id,
        amount: amount,
        product_id: product_id,
      },
    });

    return order;
  }
}

export { AddItemService };
