import { PrismaClient } from "@prisma/client";
import primsaClient from "../../prisma";
import { compare } from "bcryptjs";

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    //check if the email exists
    const user = await primsaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error("User/password incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("User/password incorrect");
    }

    return { email };
  }
}

export default AuthUserService;
