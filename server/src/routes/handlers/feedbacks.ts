import { Request, Response } from "express";

import { PrismaFeedbacksRepository } from "../../repositories/prisma/prisma-feedbacks-repository";
import { NodemailerMailAdapter } from "../../adapters/nodemailer/nodemailer-mail-adapter";

import { SubmitFeedbackUseCase } from "../../use-cases/submit-feedback-use-case";

interface IPostFeedbackBody {
  type: string;
  comment: string;
  screenshot?: string;
}

export const createFeedback = async (req: Request, res: Response) => {
  const { type, comment, screenshot } =
    req.body as unknown as IPostFeedbackBody;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodemailerMailAdapter = new NodemailerMailAdapter();

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  );

  try {
    const feedback = await submitFeedbackUseCase.execute({
      screenshot,
      comment,
      type,
    });

    return res.status(201).json({ data: feedback });
  } catch (err) {
    const error = err as Error;
    return res.status(500).json({ error: error.message });
  }
};
