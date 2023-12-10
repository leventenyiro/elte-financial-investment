import "dotenv/config";
import Investment from "../models/investment.js";

class InvestmentsController {
  async getRisk(req, res) {
    const risk = req.params.risk;
    if (!risk) {
      return res.status(400).json({ msg: "Missing risk parameter." });
    }
    const investments = await Investment.findAll({
      where: {
        risk: risk,
      },
      attributes: ["date", "description", "risk", "yield", "type"],
    });
    if (investments.length === 0) {
      return res
        .status(404)
        .json({ msg: "Investment not found with given risk!" });
    } else {
      return res.status(200).json(investments);
    }
  }

  async getTopic(req, res) {
    const topic = req.params.topic;
    if (!topic) {
      return res.status(400).json({ msg: "Missing topic parameter." });
    }
    const investments = await Investment.findAll({
      where: {
        yield: topic,
      },
      attributes: ["date", "description", "risk", "yield", "type"],
    });
    if (investments.length === 0) {
      return res
        .status(404)
        .json({ msg: "Investment not found with given topic!" });
    } else {
      return res.status(200).json(investments);
    }
  }

  async getWeekly(req, res) {
    const startDate = req.body.startDate;
    const parsedStartDate = new Date(startDate);
    const endDate = req.body.endDate;
    const parsedEndDate = new Date(endDate);
    const investments = await Investment.findAll({
      where: {
        date: {
          $between: [parsedStartDate, parsedEndDate],
        },
      },
      attributes: ["date", "description", "risk", "yield", "type"],
    });
    if (investments.length === 0) {
      return res
        .status(404)
        .json({ msg: "Investment not found with given date range!" });
    } else {
      return res.status(200).json(investments);
    }
  }
}

export default InvestmentsController;
