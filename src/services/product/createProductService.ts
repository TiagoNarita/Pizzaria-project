import primsaClient from "../../prisma";

interface ProductRequest {
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}

class CreateProductService {
  async execute({
    name,
    banner,
    category_id,
    description,
    price,
  }: ProductRequest) {
    const product = await primsaClient.product.create({
      data: {
        name: name,
        price: price,
        description: description,
        banner: banner,
        category_id: category_id,
      },
    });
    return { product };
  }
}

export { CreateProductService };
