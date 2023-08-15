import { Response, Router } from "express";

const router = Router();

router.get("/hello", (_, res: Response) => res.json("hello"));

export { router };
