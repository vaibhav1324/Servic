import { Express } from "express";
import { validate } from "./middleware/validation";
import test from "./handlers/test";
import { ROUTES } from "./common/routes";

export default (app: Express) => {
  app.get(ROUTES.test, validate, test);
  // all route handlers would go here.
};
