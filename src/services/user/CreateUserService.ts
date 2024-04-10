import { PrismaClient } from "@prisma/client";
import primsaClient from "../../prisma";

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

    const user = await primsaClient.user.create({
      //data = data for crating a new user ind the db
      data: {
        name: name,
        email: email,
        password: password,
      },
    });

    return user;
  }
}

export { CreateUserService };
