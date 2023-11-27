class UserService {
  calculateRisk(survey) {
    let points = 0;
    switch (survey.answer1) {
      case "Rövid távú célok":
        points = points + 1;
      case "Középtávú célok:":
        points = points + 3;
      case "Hosszú távú célok":
        points = points + 5;
    }
    switch (survey.answer2) {
      case "Utazások":
        points = points + 1;
      case "Lakásvásárlás":
        points = points + 2;
      case "Nyugdíj":
        points = points + 3;
      case "Tartalék képzés":
        points = points + 4;
    }
    switch (survey.answer3) {
      case "Alacsony kockázat":
        points = points + 1;
      case "Közepes kockázat":
        points = points + 3;
      case "Magas kockázat":
        points = points + 5;
    }
    switch (survey.answer4) {
      case "Nem fontos":
        points = points + 1;
      case "Kevésbé fontos":
        points = points + 2;
      case "Fontos":
        points = points + 3;
      case "Nagyon fontos":
        points = points + 5;
    }
    switch (survey.answer5) {
      case "Változó":
        points = points + 2;
      case "Stabil":
        points = points + 3;
      case "Növekvő":
        points = points + 4;
    }
    switch (survey.answer6) {
      case "Munkabér":
        points = points + 3;
      case "Befektetések hozama":
        points = points + 4;
      case "Passzív jövedelemforrások":
        points = points + 5;
    }
    switch (survey.answer7) {
      case "Diák":
        points = points + 1;
      case "Friss diplomás":
        points = points + 2;
      case "Középkorú":
        points = points + 3;
      case "Pályaelhagyás előtt álló":
        points = points + 4;
    }
    switch (survey.answer8) {
      case "Karrierépítés":
        points = points + 2;
      case "Váltás a munkaerőpiacon":
        points = points + 3;
      case "Családalapítás":
        points = points + 4;
    }
    switch (survey.answer9) {
      case "Kezdő":
        points = points + 1;
      case "Tapasztalt":
        points = points + 3;
    }
    switch (survey.answer10) {
      case "Konzervatív, alacsony hozam:":
        points = points + 2;
      case "Kiegyensúlyozott, közepes hozam":
        points = points + 3;
      case "Kockázatos, magas hozam":
        points = points + 5;
    }
    switch (survey.answer11) {
      case "Nem vagyok tisztában":
        points = points + 1;
      case "Részben tisztában vagyok":
        points = points + 3;
      case "Jól tájékozott vagyok":
        points = points + 4;
      case "Nagyon jól tájékozott vagyok":
        points = points + 5;
    }
    switch (survey.answer12) {
      case "Pénzügyi trendek":
        points = points + 2;
      case "Befektetési lehetőségek":
        points = points + 3;
      case "Gazdasági stabilitás":
        points = points + 4;
      case "Infláció és kamat":
        points = points + 5;
    }

    if (points <= 20) return "low";
    else if (points <= 40) return "medium";
    else return "high";
  }
}

export default new UserService();
