import { api } from ".";
import { FeedbackType } from "../../components/WidgetForm";

export interface IFeedback {
  id?: string;
  screenshot: string | null;
  comment: string;
  type: FeedbackType;
}

export interface IFeedbackResponse {
  data: IFeedback;
}

export const createFeedback = async (data: IFeedback) =>
  api.post("/feedbacks", data);
