import { getCookie } from "../utils/getCookie";
class Data {
  static url = "https://elte-financial-investment-rest.azurewebsites.net";
  // static url = "http://localhost:4000";

  static authCookieValue = document.cookie.includes("authCookie=")
    ? document.cookie
        .split(";")
        .find((cookie) => cookie.trim().startsWith("authCookie="))
        .split("=")[1]
    : undefined;

  /*

    await Data.userRegistration(
    firstStepData.firstName, 
    firstStepData.lastName,  
    firstStepData.email, 
    firstStepData.password, 
    firstStepData.phoneNumber, 
    surveyAnswers   
    ); // trigger registration function

            */

  static async userLogin(email, password) {
    const url = `${Data.url}/user/login`;

    const requestData = {
      email: email,
      password: password,
    };

    console.log(JSON.stringify(requestData, null, 2));

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log(
        "Login successful! Response: " + JSON.stringify(responseData, null, 2)
      );

      return responseData?.token;
    } catch (error) {
      console.error("Error during user login:", error.message);
    }
  }

  static async userRegistration(
    firstName,
    lastName,
    email,
    password,
    surveyAnswers
  ) {
    const url = `${Data.url}/user/registration`;

    const requestData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      survey: surveyAnswers,
    };

    console.log(JSON.stringify(requestData, null, 2));

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log(
        "Registration successful! Response: " +
          JSON.stringify(responseData, null, 2)
      );
    } catch (error) {
      console.error("Error during user registration:", error.message);
    }
  }

  static async userData(token) {
    const url = `${Data.url}/user/me`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // set token
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("User data: " + JSON.stringify(responseData, null, 2));
      return responseData;
    } catch (error) {
      console.error("Error during user registration:", error.message);
    }
  }

  static async userUpdate(
    firstName,
    lastName,
    email,
    risk,
    fund,
    stock,
    crypto
  ) {
    const url = `${Data.url}/user/me`;
    const token = getCookie("authCookie");

    try {
      const requestData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        risk: risk,
        fund: fund,
        stock: stock,
        crypto: crypto,
      };

      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // set token
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log(
        "User data updated: " + JSON.stringify(responseData, null, 2)
      );
      return responseData;
    } catch (error) {
      console.error("Error during user update:", error.message);
    }
  }

  static async fetchUser() {
    const response = await fetch(`${Data.url}/user/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.authCookieValue}`,
      },
    });

    if (response.status === 500) {
      return undefined;
    }

    const res = await response.json();
    return res;
  }

  static async fetchMaterialsByUser(user) {
    const topics = ["basics", "crypto", "fund", "stock"];

    const materialsByTopic = {};

    const fetchTopicMaterials = async (topic) => {
      if (user[topic] || topic === "basics") {
        const response = await fetch(`${Data.url}/material/topic/${topic}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.authCookieValue}`,
          },
        });

        if (response.status !== 404) {
          const res = await response.json();

          // Group materials by topic
          materialsByTopic[topic] = res;

          return res;
        }
      }
      return [];
    };

    const promises = topics.map(fetchTopicMaterials);
    await Promise.all(promises);

    return materialsByTopic;
  }

  static async fetchMaterialById(id) {
    try {
      const response = await fetch(`${Data.url}/material/id/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.authCookieValue}`,
        },
      });

      const res = await response.json();
      return res;
    } catch (e) {
      return undefined;
    }
  }

  static async fetchInvestmentById(id) {
    try {
      const response = await fetch(`${Data.url}/investment/id/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.authCookieValue}`,
        },
      });

      const res = await response.json();
      return res;
    } catch (e) {
      return undefined;
    }
  }

  static async fetchNews() {
    const response = await fetch(`${Data.url}/news`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.authCookieValue}`,
      },
    });

    const res = await response.json();
    return res;
  }

  static async fetchNotification() {
    const response = await fetch(`${Data.url}/notification`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.authCookieValue}`,
      },
    });

    const res = await response.json();
    return res;
  }

  static async fetchQuiz(id) {
    try {
      const response = await fetch(`${Data.url}/material/id/${id}/quiz`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.authCookieValue}`,
        },
      });

      const res = await response.json();
      return res;
    } catch (e) {
      return undefined;
    }
  }

  static async fetchUser() {
    const response = await fetch(`${Data.url}/user/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.authCookieValue}`,
      },
    });

    const res = await response.json();
    return res;
  }

  static async fetchInvestmentsByUser(user) {
    const topics = ["crypto", "fund", "stock"];

    const investmentsByTopic = {};

    const fetchTopicInvestments = async (topic) => {
      if (user[topic] || topic === "basics") {
        const response = await fetch(`${Data.url}/investment/topic/${topic}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.authCookieValue}`,
          },
        });

        if (response.status !== 404) {
          const res = await response.json();

          // Group investments by topic
          investmentsByTopic[topic] = res;
          // const filterByRisk = res.filter((results) => results.risk === user.risk)
          return investmentsByTopic;
        }
      }
      return [];
    };

    const promises = topics.map(fetchTopicInvestments);
    await Promise.all(promises);

    return investmentsByTopic;
  }

  static async fetchMaterialsByUser(user) {
    const topics = ["basics", "crypto", "fund", "stock"];

    const materialsByTopic = {};

    const fetchTopicMaterials = async (topic) => {
      if (user[topic] || topic === "basics") {
        const response = await fetch(`${Data.url}/material/topic/${topic}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.authCookieValue}`,
          },
        });

        if (response.status !== 404) {
          const res = await response.json();

          // Group materials by topic
          materialsByTopic[topic] = res;

          return res;
        }
      }
      return [];
    };

    const promises = topics.map(fetchTopicMaterials);
    await Promise.all(promises);

    return materialsByTopic;
  }
}

export default Data;
