import primsaClient from "../../prisma";

class DetailUserService {
  async execute(user_id: string) {
    const user = await primsaClient.user.findFirst({
      where: {
        id: user_id,
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });
    return user;
  }
}
//forget to commit
export default DetailUserService;
