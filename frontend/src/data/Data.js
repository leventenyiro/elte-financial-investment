class Data { 

    static url = "http://localhost:4000"

    static async fetchTest() {
        const response = await fetch("http://test.com/");
        return response;
    }

    static async userRegistration(firstname, lastname, email, password, surveyAnswers) {
        const url = `${Data.url}/registration`;

        const requestData = {
            firstname,
            lastname,
            email,
            password,
            survey: surveyAnswers,
        };

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
}

export default Data;
