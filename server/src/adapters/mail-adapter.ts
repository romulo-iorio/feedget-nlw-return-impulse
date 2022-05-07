export interface ISendMailData {
  subject: string;
  body: string;
  to: string | string[];
}

export interface IMailAdapter {
  sendMail(data: ISendMailData): Promise<void>;
}
