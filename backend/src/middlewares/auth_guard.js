import "dotenv/config";
import jwt from "jsonwebtoken";
import { Token } from "../models/index.js";

async function authGuard(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({
      msg: "Bearer Token is missing!",
    });
  }
  try {
    const pureToken = token.replace(/^Bearer\s+/, "");
    const verify = jwt.verify(pureToken, process.env.TOKEN_SECRET);
    const check = await checkUser(pureToken, verify.userId);
    if (check) {
      req.userId = verify.userId;
      next();
    } else {
      return res.status(401).json({
        msg: "User not found!",
      });
    }
  } catch (e) {
    return res.status(500).json({
      msg: e,
    });
  }
}

async function checkUser(token, userId) {
  const user = await Token.findAll({
    where: {
      token: token,
      userId: userId,
    },
  });
  if (user.length > 0) {
    return true;
  } else return false;
}

export default authGuard;
