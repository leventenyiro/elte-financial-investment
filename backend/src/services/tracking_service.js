import { Tracking } from "../models/index.js";
import { endOfWeek, startOfWeek } from "date-fns";
import { hu } from "date-fns/locale/index.js";
import { Op } from "sequelize";

class TrackingService {
  async add(name, id, userId) {
    var begin = startOfWeek(new Date(), {
      locale: hu,
    });
    var end = endOfWeek(new Date(), {
      locale: hu,
    });
    const trackingData = await Tracking.findAll({
      where: {
        createdAt: {
          [Op.between]: [begin, end],
        },
        userId: userId,
        content: name,
        contentId: id,
      },
    });
    if (trackingData.length == 0) {
      await Tracking.create({
        userId: userId,
        content: name,
        contentId: id,
      });
    }
  }
}

export default new TrackingService();
