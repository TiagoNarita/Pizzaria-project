import primsaClient from "../../prisma";

class ListCategoryService {
  async execute() {
    const category = await primsaClient.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return category;
  }
}

export { ListCategoryService };
