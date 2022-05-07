export interface IFeedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface IFeedback {
  id: string;
  type: string;
  comment: string;
  screenshot: string | null;
}

export interface IFeedbacksRepository {
  create: (data: IFeedbackCreateData) => Promise<IFeedback>;
}
