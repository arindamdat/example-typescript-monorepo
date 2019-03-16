require("module-alias").addAlias("~", __dirname + "/../../../packages/"); // tslint:disable-line no-var-requires

import * as bodyParser from "body-parser";
import * as express from "express";
import controllers from "./controllers";

const app = express();
const port = process.env.PORT || 9229;

app.use(bodyParser.json());

app.use((req: any, res: any, next: any) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  next();
});

app.get("/", (req: any, res: any) => {
  res.json("Example MonoRepo API");
});
app.get("/ping", (req: any, res: any) => {
  res.json("Live!!!");
});
app.use("/api", controllers);

app.listen(port);

export default app;
