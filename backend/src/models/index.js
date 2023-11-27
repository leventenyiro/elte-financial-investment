import User from "./user.js";
import Survey from "./survey.js";
import Transaction from "./transaction.js";

User.hasOne(Survey, { foreignKey: "userId" });
Survey.belongsTo(User, { foreignKey: "userId" });

User.hasOne(Transaction, { foreignKey: "userId" });
Transaction.belongsTo(User, { foreignKey: "userId" });

export { User, Survey, Transaction };
