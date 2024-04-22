import primsaClient from "../../prisma";

interface orderItem {
  itemId: string;
}

class RemoveItemService {
  async execute({ itemId }: orderItem) {
    const order = await primsaClient.item.delete({
      where: {
        id: itemId,
      },
    });

    return order;
  }
}

export { RemoveItemService };
