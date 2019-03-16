import * as express from "express";

import core from "~/core";
import { SomeClass } from "~/core";
import infrastructure from "~/infrastructure";

const helloWorldController = express.Router();

helloWorldController.get("/core", (req: any, res: any) => {
  // Talk to a service that talks to a db
  const sc = new SomeClass("arindam", 33);
  res.json({message: core, ...sc});
});
helloWorldController.get("/infrastructure", (req: any, res: any) => {
  // Talk to a service that talks to a db,
  res.json(infrastructure);
});

export default helloWorldController;
