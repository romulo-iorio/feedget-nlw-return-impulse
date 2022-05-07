import { IMailAdapter } from "../adapters/mail-adapter";
import {
  IFeedbacksRepository,
  IFeedback,
} from "../repositories/feedbacks-repository";

interface ISubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: IFeedbacksRepository,
    private mailAdapter: IMailAdapter
  ) {}

  async execute(
    requestData: ISubmitFeedbackUseCaseRequest
  ): Promise<IFeedback> {
    const { type, comment, screenshot } = requestData;

    if (!type) throw new Error("Type is required");

    if (!comment) throw new Error("Comment is required");

    const screenshotFormatIsValid = screenshot?.startsWith(
      "data:image/png;base64"
    );

    if (screenshot && !screenshotFormatIsValid)
      throw new Error("Invalid screenshot format");

    const feedbackData = { type, comment, screenshot };
    const feedback = await this.feedbacksRepository.create(feedbackData);

    const mailContent = [
      `<div style="font-family: sans-serif; font-size: 16pz; color: #111">`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      screenshot ? `<img src="${screenshot}" />` : "",
      `</div>`,
    ].join("\n");
    await this.mailAdapter.sendMail({
      to: "Rômulo Iorio <romuloiorio@hotmail.com>",
      subject: "Novo feedback",
      body: mailContent,
    });

    return feedback;
  }
}
