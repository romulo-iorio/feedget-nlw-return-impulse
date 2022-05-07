import express from "express";
import cors from "cors";

import { routes } from "./routes";

const { PORT = 3333 } = process.env;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
