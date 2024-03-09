import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";

import { Employeedetails } from "./models/Employeedetails";
import employeedetailsrouter from "./routes/employeedetails.routes";
dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(express.json());
app.use(express.static(__dirname + "/files", { index: false }));
app.use(cors());

Employeedetails.sync()
  .then(() => console.log("Employeedetails model synced with the database"))
  .catch((err) => console.error("Unable to sync Employeedetails model:", err));
   
  app.use(employeedetailsrouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
