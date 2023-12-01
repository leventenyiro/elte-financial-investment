import User from "./user.js";
import Survey from "./survey.js";
import Transaction from "./transaction.js";
import Token from "./token.js";

User.hasOne(Survey, { foreignKey: "userId" });
Survey.belongsTo(User, { foreignKey: "userId" });

User.hasMany(Transaction, { foreignKey: "userId" });
Transaction.belongsTo(User, { foreignKey: "userId" });

User.hasMany(Token, { foreignKey: "userId" });
Token.belongsTo(User, { foreignKey: "userId" });

export { User, Survey, Transaction, Token };
