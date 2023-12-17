import { Yield, Investment, User } from "../models/index.js";
import { endOfWeek, startOfWeek } from "date-fns";
import { hu } from "date-fns/locale/index.js";
import { Op } from "sequelize";
import { NotificationService } from "../services/notification_service.js";
import TrackingService from "../services/tracking_service.js";

class InvestmentsController {
  async getRisk(req, res) {
    try {
      const risk = req.params.risk;
      const investments = await Investment.findAll({
        where: {
          risk: risk,
        },
        attributes: ["id", "title", "topic", "risk"],
      });
      if (investments.length == 0) {
        return res
          .status(404)
          .json({ msg: "Investment not found with given risk!" });
      } else {
        return res.status(200).json(investments);
      }
    } catch (e) {
      return res.status(500).json({
        msg: e.message,
      });
    }
  }

  async getTopic(req, res) {
    try {
      const topic = req.params.topic;
      const investments = await Investment.findAll({
        where: {
          topic: topic,
        },
        attributes: ["id", "title", "topic", "risk"],
      });
      if (investments.length == 0) {
        return res
          .status(404)
          .json({ msg: "Investment not found with given topic!" });
      } else {
        return res.status(200).json(investments);
      }
    } catch (e) {
      return res.status(500).json({
        msg: e.message,
      });
    }
  }

  async getWeekly(req, res) {
    var begin = startOfWeek(new Date(), {
      locale: hu,
    });
    var end = endOfWeek(new Date(), {
      locale: hu,
    });
    try {
      const investments = await Investment.findAll({
        where: {
          createdAt: {
            [Op.between]: [begin, end],
          },
        },
        attributes: ["id", "title", "topic", "risk"],
      });
      if (investments.length == 0) {
        return res
          .status(404)
          .json({ msg: "Investment not found with given date range!" });
      } else {
        return res.status(200).json(investments);
      }
    } catch (e) {
      return res.status(500).json({
        msg: e.message,
      });
    }
  }

  async getById(req, res) {
    try {
      const id = req.params.id;
      const investment = await Investment.findOne({
        where: {
          id: id,
        },
      });
      if (!investment) {
        return res
          .status(404)
          .json({ msg: "Investment not found with given ID!" });
      } else {
        const yields = await Yield.findAll({
          where: {
            investmentId: investment.id,
          },
          attributes: ["id", "year", "interestRate"],
        });
        const output = {
          investment: investment,
          yields: yields,
        };

        TrackingService.add("investment", investment.id, req.userId);
        return res.status(200).json(output);
      }
    } catch (e) {
      return res.status(500).json({
        msg: e.message,
      });
    }
  }

  async seed(req, res) {
    try {
      const user = await User.findOne({
        where: {
          id: req.userId,
        },
        attributes: ["role"],
      });
      if (user.role == "user") {
        return res.status(401).json(user);
      }
      const investment = await Investment.create({
        topic: req.body.topic,
        risk: req.body.risk,
        title: req.body.title,
        content: req.body.content,
      });
      const notificationService = new NotificationService();

      notificationService.addNotification(
        "investment",
        req.body.topic,
        req.body.title
      );

      return res.status(200).json(investment);
    } catch (e) {
      return res.status(500).json({
        msg: e.message,
      });
    }
  }
}

export default InvestmentsController;
