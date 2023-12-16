import { User, Notification } from "../models/index.js";

class NotificationController {
  async updateStatus(req, res) {
    try {
      const notification = await Notification.findOne({
        where: {
          id: req.body.id,
          userId: req.userId,
          seenByUser: false,
        },
      });
      console.log(notification);
      if (!notification) {
        return res.status(404).json({ msg: "Data not found!" });
      }
      await notification.update({
        seenByUser: true,
      });
      res.status(200).json({ msg: "Successfully!" });
    } catch (e) {
      return res.status(500).json({
        msg: e.message,
      });
    }
  }
  async all(req, res) {
    try {
      const notifications = await Notification.findAll({
        where: {
          seenByUser: false,
          userId: req.userId,
        },
        attributes: ["id", "text", "contentType", "topic", "createdAt"],
      });
      return res.status(200).json(notifications);
    } catch (e) {
      return res.status(500).json({
        msg: e.message,
      });
    }
  }
}
export default NotificationController;
