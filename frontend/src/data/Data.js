import { getCookie } from "../utils/getCookie";
class Data { 

    static url = "http://localhost:4000"

    static authCookieValue = document.cookie.includes('authCookie=') ? document.cookie.split(';').find(cookie => cookie.trim().startsWith('authCookie=')).split('=')[1] : undefined;

    static async fetchTest() {
        const response = await fetch("http://test.com/");
        return response;
    }

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

        console.log(JSON.stringify(requestData, null, 2))

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
            console.log("Login successful! Response: " + JSON.stringify(responseData, null, 2));

            return responseData?.token;

        } catch (error) {
            console.error("Error during user login:", error.message);
        }

        };

    static async userRegistration(firstName, lastName, email, password, surveyAnswers) {
        const url = `${Data.url}/user/registration`;

        const requestData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            survey: surveyAnswers,
        };

        console.log(JSON.stringify(requestData, null, 2))

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
            console.log("Registration successful! Response: " + JSON.stringify(responseData, null, 2));
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
                    "Authorization": `Bearer ${token}` // set token
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

    static async userUpdate(firstName, lastName, email, risk, fund, stock, crypto) {
        const url = `${Data.url}/user/me`;
        const token = getCookie('authCookie');

        try {

            const requestData = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                risk: risk,
                fund: fund,
                stock: stock,
                crypto: crypto
            };

            const response = await fetch(url, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}` // set token
                },
                body: JSON.stringify(requestData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseData = await response.json();
            console.log("User data updated: " + JSON.stringify(responseData, null, 2));
            return responseData;
        } catch (error) {
            console.error("Error during user update:", error.message);
        }
    }

    static fetchNews() {
        // TODO: fetch here

        return [
            {
                id: '55367262-7306-4f57-9163-1e97c9acb2ab',
                title: 'Tech Stocks Propel NASDAQ to Record Highs',
                description:
                    'In a surprising turn of events, major tech stocks experienced a sudden surge, driving the NASDAQ to a record high. Analysts attribute this unexpected boost to positive quarterly earnings reports and growing investor confidence in the sector.',
                imageUrl:
                    'https://img.freepik.com/free-vector/gradient-stock-market-concept_23-2149166910.jpg',
            },
        ];
    }

    static async fetchUser() {
        const response = await fetch(`${Data.url}/user/me`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.authCookieValue}`,
            },
        });

        const res = await response.json();
        return res;
    }

    static async fetchMaterialsByUser(user) {
        const topics = ['basics', 'crypto', 'fund', 'stock'];
    
        const materialsByTopic = {};
    
        const fetchTopicMaterials = async (topic) => {
            if (user[topic] || topic === 'basics') {
                const response = await fetch(`${Data.url}/material/topic/${topic}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${this.authCookieValue}`,
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
