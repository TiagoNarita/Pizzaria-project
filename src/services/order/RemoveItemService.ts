import primsaClient from "../../prisma";

interface orderItem {
  item_id: string;
}

class RemoveItemService {
  async execute({ item_id }: orderItem) {
    const order = await primsaClient.item.delete({
      where: {
        id: item_id,
      },
    });

    return order;
  }
}

export { RemoveItemService };
