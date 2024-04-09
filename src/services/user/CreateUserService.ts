interface userRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: userRequest) {
    console.log(name, email, password);

    return { name: name };
  }
}

export { CreateUserService };
