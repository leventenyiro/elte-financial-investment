import User from "./user.js";
import Survey from "./survey.js";
import Transaction from "./transaction.js";
import Material from "./material.js";
import Quiz from "./quiz.js";
import Answer from "./answer.js";
import Question from "./question.js";
import Token from "./token.js";
import News from "./news.js";

User.hasOne(Survey, { foreignKey: "userId" });
Survey.belongsTo(User, { foreignKey: "userId" });

User.hasMany(Transaction, { foreignKey: "userId" });
Transaction.belongsTo(User, { foreignKey: "userId" });

User.hasMany(Token, { foreignKey: "userId" });
Token.belongsTo(User, { foreignKey: "userId" });

Material.hasOne(Quiz, { foreignKey: "matId" });
Quiz.belongsTo(Material, { foreignKey: "matId" });

Quiz.hasMany(Question, { foreignKey: "quizId" });
Question.belongsTo(Quiz, { foreignKey: "quizId" });

Question.hasMany(Answer, { foreignKey: "questId" });
Answer.belongsTo(Question, { foreignKey: "questId" });

export {
  User,
  Survey,
  Transaction,
  Token,
  Material,
  Quiz,
  Question,
  Answer,
  News,
};
