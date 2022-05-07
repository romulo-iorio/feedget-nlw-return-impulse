import express from "express";

import { createFeedback } from "./handlers/feedbacks";

export const routes = express.Router();

routes.post("/feedbacks", createFeedback);
