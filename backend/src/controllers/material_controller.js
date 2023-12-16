import { Material, Quiz, Question, Answer } from "../models/index.js";
import TrackingService from "../services/tracking_service.js";

class MaterialController {
  async all(req, res) {
    try {
      const materials = await Material.findAll({
        attributes: ["id", "title", "topic"],
      });
      return res.status(200).json(materials);
    } catch (e) {
      return res.status(500).json({
        msg: e.message,
      });
    }
  }
  async getMaterialById(req, res) {
    const id = req.params.id;
    try {
      const material = await Material.findOne({
        where: {
          id: id,
        },
      });
      if (!material) {
        return res.status(404).json({ message: "Not found." });
      } else {
        TrackingService.add("material", material.id, req.userId);
        res.status(200).json(material);
      }
    } catch (e) {
      return res.status(500).json({
        msg: e.message,
      });
    }
  }
  async getMaterialByTopic(req, res) {
    const topic = req.params.topic;
    try {
      const material = await Material.findAll({
        where: {
          topic: topic,
        },
        attributes: ["id", "title", "topic"],
      });
      if (material.length == 0) {
        return res.status(404).json({ message: "Material not found." });
      } else res.status(200).json(material);
    } catch (e) {
      return res.status(500).json({
        msg: e.message,
      });
    }
  }
  async getQuiz(req, res) {
    const matId = req.params.id;
    try {
      const quiz = await Quiz.findOne({
        where: {
          matId: matId,
        },
        attributes: ["id", "title"],
      });
      if (!quiz) {
        return res.status(404).json({ message: "Quiz not found." });
      }
      const questions = await Question.findAll({
        where: {
          quizId: quiz.id,
        },
        attributes: ["id", "question"],
      });
      let output = new Array();
      for (let i = 0; i < questions.length; ++i) {
        const answer = await Answer.findAll({
          where: {
            questId: questions[i].id,
          },
          attributes: ["id", "answer", "isCorrect"],
        });
        const temp = {
          question: questions[i],
          answers: answer,
        };
        output.push(temp);
      }
      if (output.length > 0) {
        TrackingService.add("quiz", quiz.id, req.userId);
        return res.status(200).json({
          id: quiz.id,
          title: quiz.title,
          questions: output,
        });
      } else return res.status(404).json({ message: "Question not found." });
    } catch (e) {
      return res.status(500).json({
        msg: e.message,
      });
    }
  }
}

export default MaterialController;
