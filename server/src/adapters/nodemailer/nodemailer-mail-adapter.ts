import { createTransport } from "nodemailer";

import { ISendMailData, IMailAdapter } from "../mail-adapter";

const transport = createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "29dc1eed2b0f22",
    pass: "dfee649fcb1eba",
  },
});

export class NodemailerMailAdapter implements IMailAdapter {
  async sendMail(data: ISendMailData): Promise<void> {
    const { subject, body, to } = data;

    const from = "Equipe Feedget <oi@feedget.com>";
    const sendMailData = { from, html: body, subject, to };
    await transport.sendMail(sendMailData);
  }
}
