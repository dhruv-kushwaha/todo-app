import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { router as taskRouter } from "./routes/taskRoutes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", taskRouter);

app.all("*", (req, res, next) => {
  return res.status(404).json({
    message: `Couldn't find ${req.originalUrl} on the server`,
  });
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);

  res.status(err.status ?? 500).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
});

app.listen(3000, () => console.log("Listening to requests on PORT 3000"));
