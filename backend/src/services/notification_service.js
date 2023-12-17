import { User, Notification } from "../models/index.js";

export class NotificationService {
  async addNotification(contentType, topic, title) {
    try {
      let users;
      if (topic == "fund") {
        users = await User.findAll({
          where: {
            fund: true,
          },
          attributes: ["id"],
        });
      } else if (topic == "stock") {
        users = await User.findAll({
          where: {
            stock: true,
          },
          attributes: ["id"],
        });
      } else {
        users = await User.findAll({
          where: {
            crypto: true,
          },
          attributes: ["id"],
        });
      }
      if (users.length > 0) {
        for (let i = 0; i < users.length; ++i) {
          await Notification.create({
            topic: topic,
            contentType: contentType,
            text: "New " + contentType + ": " + title,
            seenByUser: false,
            userId: users[i].id,
          });
        }
      }
    } catch (e) {
      console.log(e);
    }
  }
}
