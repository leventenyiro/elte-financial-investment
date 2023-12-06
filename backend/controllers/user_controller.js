import bcrypt from "bcryptjs";
import UserService from "../services/user_service.js";
import { User, Survey, Transaction, Token } from "../models/index.js";
import "dotenv/config";
import jwt from "jsonwebtoken";

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
      return res.status(200).json({ msg: "Successfully!" });
    } catch (e) {
      return res.status(500).json({
        msg: e.message,
      });
    }
  }

  async login(req, res) {
    const { email, password } = req.body;
    const user = await User.findAll({
      where: {
        email: email,
      },
    });
    if (user.length > 0) {
      const checkPassword = bcrypt.compareSync(password, user[0].password);
      if (checkPassword) {
        const gentoken = jwt.sign(
          { userId: user[0].id },
          process.env.TOKEN_SECRET
        );
        const token = await Token.create({
          token: gentoken,
          userId: user[0].id,
        });
        return res.status(200).json({
          token: token.token,
        });
      } else {
        return res.status(401).json({
          message: "Bad password!",
        });
      }
    } else {
      return res.status(401).json({
        msg: "User not found!",
      });
    }
  }

  async getMe(req, res) {
    const user = await User.findAll({
      where: {
        id: req.userId,
      },
      attributes: ["firstName", "lastName", "email", "risk"],
    });
    if (user.length > 0) {
      return res.status(200).json(user[0]);
    } else {
      return res.status(401).json({
        msg: "User not found!",
      });
    }
  }
  async updateMe(req, res) {
    const user = await User.findAll({
      where: {
        id: req.userId,
      },
    });
    if (user.length > 0) {
      try {
        await user[0].update({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          risk: req.body.risk,
          email: req.body.email,
        });
        return res.status(200).json({ msg: "Successfully!" });
      } catch (e) {
        return res.status(500).json({
          msg: e.message,
        });
      }
    } else {
      return res.status(401).json({
        msg: "User not found!",
      });
    }
  }
  async logout(req, res) {
    try {
      await Token.destroy({
        where: {
          userId: req.userId,
        },
        force: true,
      });
      return res.status(200).json({ msg: "Successfully!" });
    } catch (e) {
      return res.status(500).json({
        msg: e.message,
      });
    }
  }
}

export default UserController;
