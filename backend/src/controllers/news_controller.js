import { News } from "../models/index.js";

class NewsController {
  async all(req, res) {
    try {
      const news = await News.findAll();
      return res.status(200).json(news);
    } catch (e) {
      return res.status(500).json({
        msg: e.message,
      });
    }
  }
}
export default NewsController;
