import primsaClient from "../../prisma";

interface productRequest {
  category_id: string;
}

class ListByCategoryService {
  async execute({ category_id }: productRequest) {
    //id-bebidas
    const findByCategory = await primsaClient.product.findMany({
      where: {
        category_id: category_id,
      },
    });

    return findByCategory;
  }
}

export { ListByCategoryService };
