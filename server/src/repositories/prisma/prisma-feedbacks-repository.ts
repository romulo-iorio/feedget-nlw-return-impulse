import {
  IFeedbacksRepository,
  IFeedbackCreateData,
} from "../feedbacks-repository";
import { prisma } from "../../prisma";

export class PrismaFeedbacksRepository implements IFeedbacksRepository {
  async create(data: IFeedbackCreateData) {
    const feedback = await prisma.feedback.create({ data });
    return feedback;
  }
}
