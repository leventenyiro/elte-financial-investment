class Data { 
    static url = 'http://localhost:4000';

    static async fetchTest() {
        const response = await fetch("http://test.com/");
        return response;
    }

    static async userRegistration(firstname, lastname, email, password, surveyAnswers) {
        const url = `${url}/registration`;

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
}

export default Data;
