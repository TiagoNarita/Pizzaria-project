interface ProductRequest {
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}

class createProductService {
  async execute({
    name,
    banner,
    category_id,
    description,
    price,
  }: ProductRequest) {
    return { ok: true };
  }
}

export { createProductService };
