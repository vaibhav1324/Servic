import * as express from "express";
import apiRoutes from "./apiRoutes";

export default ({ firebaseAdmin, firebase }: any) => {
  console.log("initializing");
  const app = express();
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(express.json());
  app.use(
    (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept, Authorization"
      );
      //@ts-ignore
      req.firebaseAdmin = firebaseAdmin;
      //@ts-ignore
      req.firebase = firebase;

      next();
    }
  );

  apiRoutes(app);

  return app;
};
