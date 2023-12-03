class UserService {
  calculateRisk(survey) {
    const points =
      survey.answer1 +
      survey.answer2 +
      survey.answer3 +
      survey.answer4 +
      survey.answer5 +
      survey.answer6 +
      survey.answer7 +
      survey.answer8 +
      survey.answer9 +
      survey.answer10 +
      survey.answer11 +
      survey.answer12;

    if (points <= 20) return "low";
    else if (points <= 40) return "medium";
    else return "high";
  }
}

export default new UserService();
