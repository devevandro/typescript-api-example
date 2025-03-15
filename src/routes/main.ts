import { Router, Request, Response } from "express";
import * as pingController from "../controllers/ping";
import * as authController from "../controllers/auth";

export const mainRouter = Router();

mainRouter.get("/health-check", (req: Request, res: Response) => {
  res.json({ message: "API is up and running" });
});

mainRouter.get("/ping", pingController.ping);

mainRouter.post('/forgot', authController.forgot);
