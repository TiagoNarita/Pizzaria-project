import primsaClient from "../../prisma";
import { hash } from "bcryptjs";

interface userRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: userRequest) {
    //verificar se ele enviou um email
    if (!email) {
      throw new Error("Email incorrect");
    }

    const userAlreadyExist = await primsaClient.user.findFirst({
      where: { email: email },
    });

    if (userAlreadyExist) {
      throw new Error("User already exist");
    }

    const passwordHash = await hash(password, 8);

    const user = await primsaClient.user.create({
      //data = data used for creating a new user in the db
      data: {
        name: name,
        email: email,
        password: passwordHash,
      },
      // select - data that you want to show in your return
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    return user;
  }
}

export { CreateUserService };
