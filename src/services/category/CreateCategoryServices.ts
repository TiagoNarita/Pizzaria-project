import primsaClient from "../../prisma";

interface CategoryRequest {
  name: string;
}

class CreateCategoryService {
  async execute({ name }: CategoryRequest) {
    if (name === "") {
      throw new Error("Name invalid");
    }

    const categoryAlreadyExist = await primsaClient.category.findFirst({
      where: {
        name: name,
      },
    });

    if (categoryAlreadyExist) {
      throw new Error("Category already exist");
    }

    const category = await primsaClient.category.create({
      data: {
        name: name,
      },
      select: {
        id: true,
        name: true,
      },
    });

    return category;
  }
}

export { CreateCategoryService };
