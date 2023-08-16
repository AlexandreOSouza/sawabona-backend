import { Request, Response } from "express-serve-static-core";
import { User } from "../../entity/User";
import { IRequest } from "../../types/IRequest";
import { userSchema } from "./schema";

class UserController implements IRequest {
  static init() {
    return new UserController();
  }

  async execute(req: Request, resp: Response) {
    const { name, email } = req.body;

    try {
      await userSchema.validate(req.body, { abortEarly: false });
    } catch {
      return resp.status(400).json();
    }

    const newUser = new User(name, email);

    return resp.json(newUser);
  }
}

export { UserController };
