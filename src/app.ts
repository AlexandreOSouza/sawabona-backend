import { AppDataSource } from "./database";
import express, { NextFunction, Request, Response } from "express";
import { router } from "./router";

AppDataSource.initialize();

const app = express();

app.use(express.json());
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, _next: NextFunction) => {
    return response.status(500).json({
      status: "Error",
      message: `Internal server error ${err.message}`,
    });
  },
);

export { app };
