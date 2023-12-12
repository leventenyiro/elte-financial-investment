import { News } from "../models/index.js";

class NewsController {
  async all(req, res) {
    try {
      const news = await News.findAll({
        attributes: [
          "id",
          "title",
          "extract",
          "topic",
          "createdAt",
          "updatedAt",
        ],
      });
      return res.status(200).json(news);
    } catch (e) {
      return res.status(500).json({
        msg: e.message,
      });
    }
  }

  async getNewsById(req, res) {
    const id = req.params.id;
    try {
      const news = await News.findOne({
        where: {
          id: id,
        },
        attributes: [
          "id",
          "title",
          "content",
          "topic",
          "createdAt",
          "updatedAt",
        ],
      });
      if (!news) {
        return res.status(404).json({ message: "Not found." });
      } else res.status(200).json(news);
    } catch (e) {
      return res.status(500).json({
        msg: e.message,
      });
    }
  }
}
export default NewsController;
