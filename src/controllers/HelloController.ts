import { Request, Response } from "express";
import { IRequest } from "../types/IRequest";

class HelloController implements IRequest {
  static init() {
    return new HelloController();
  }

  async execute(req: Request, resp: Response) {
    return resp.json("Hello from controller");
  }
}

export { HelloController };
