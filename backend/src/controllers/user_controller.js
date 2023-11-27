import bcrypt from "bcryptjs";
import UserService from "../services/user_service.js";
import { User, Survey, Transaction } from "../models/index.js";

class UserController {
  async create(req, res) {
    try {
      const password = req.body.password;
      const hash = bcrypt.hashSync(password, 10);
      const risk = UserService.calculateRisk(req.body.survey);
      const user = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        role: "user",
        password: hash,
        risk: risk,
      });
      const survey = await Survey.create({
        ...req.body.survey,
        userId: user.id,
      });
      const transaction = await Transaction.create({
        type: "premium",
        duration: 90,
        userId: user.id,
      });
      return res
        .status(200)
        .json({ user, survey, transaction, msg: "Successfully!" });
    } catch (e) {
      return res.status(500).json({
        msg: e,
        msg2: req.body.password,
      });
    }
  }
  async login(req, res) {}
}

export default UserController;
