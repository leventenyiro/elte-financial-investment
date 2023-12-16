import { body } from "express-validator";

class NotificationValidator {
  checkId() {
    return [body("id").notEmpty().isNumeric()];
  }
}
export default NotificationValidator;
