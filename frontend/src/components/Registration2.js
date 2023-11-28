import { useEffect, useState } from "react";
import Data from "../data/Data";


function Registration2() {

    // store questions, answers and validaton states
    const [questionData, setQuestionData] = useState([
        {
            id: "q1",
            label: "For how long do you plan to invest or save financially?",
            options: [
                { value: "Short-term goals" },
                { value: "Medium-term goals" },
                { value: "Long-term goals" },
            ],
            validationStatus: false,
        },

        {
            id: "q2",
            label: "What financial goals do you want to focus on?",
            options: [
                { value: "Travel" },
                { value: "Home purchase" },
                { value: "Retirement" },
                { value: "Emergency fund" },
            ],
            validationStatus: false,
        },

        {
            id: "q3",
            label: "How willing are you to take risks in your investments?",
            options: [
                { value: "Low risk" },
                { value: "Medium risk" },
                { value: "High risk" },
            ],
            validationStatus: false,
        },

        {
            id: "q4",
            label: "How important is stability and security in your financial decisions?",
            options: [
                { value: "Not important" },
                { value: "Less important" },
                { value: "Important" },
                { value: "Very important" },
            ],
            validationStatus: false,
        },

        {
            id: "q5",
            label: "What is your current income situation?",
            options: [
                { value: "Variable" },
                { value: "Stable" },
                { value: "Growing" },
            ],
            validationStatus: false,
        },

        {
            id: "q6",
            label: "From which sources does your income come?",
            options: [
                { value: "Salary" },
                { value: "Investment returns" },
                { value: "Passive income sources" },
            ],
            validationStatus: false,
        },

        {
            id: "q7",
            label: "Which life stage are you currently in?",
            options: [
                { value: "Student" },
                { value: "Recent graduate" },
                { value: "Middle-aged" },
                { value: "Approaching retirement" },
            ],
            validationStatus: false,
        },

        {
            id: "q8",
            label: "What important life events are you preparing for in the near future?",
            options: [
                { value: "Career building" },
                { value: "Job market transition" },
                { value: "Starting a family" },
            ],
            validationStatus: false,
        },

        {
            id: "q9",
            label: "What experience do you have in the field of investments?",
            options: [
                { value: "Beginner" },
                { value: "Experienced" },
                { value: "Long-term goals" },
            ],
            validationStatus: false,
        },

        {
            id: "q10",
            label: "If you have had previous investments, what types were they, and what results did you achieve with them?",
            options: [
                { value: "Conservative, low returns" },
                { value: "Balanced, moderate returns" },
                { value: "Riskier, high returns" },
            ],
            validationStatus: false,
        },

        {
            id: "q11",
            label: "How aware are you of the current market environment and economic trends?",
            options: [
                { value: "Not aware" },
                { value: "Partially aware" },
                { value: "Well-informed" },
                { value: "Very well-informed" },
            ],
            validationStatus: false,
        },

        {
            id: "q12",
            label: "What factors influence your financial decisions in the current market situation?",
            options: [
                { value: "Financial trends" },
                { value: "Investment opportunities" },
                { value: "Economic stability" },
                { value: "Inflation and interest rates" },
            ],
            validationStatus: false,
        },
    ]);

    const [surveyAnswers, setSurveyAnswers] = useState({}); // store the selected answers
    
    useEffect(() => {
        if (localStorage.getItem('reg-form-step-1') === null) {
            window.location = 'registration1';
        }
    });

    // handle validation
    const handleValidation = (questionId) => {

        // check the question's checked state
        const selectedOption = document.querySelector(`input[name=${questionId}]:checked`);
        
        if (!selectedOption) {
            setQuestionData((prevData) =>
            prevData.map((question) =>
                question.id === questionId ? { ...question, validationStatus: true } : question
            )
            );
        } else {
            setQuestionData((prevData) =>
            prevData.map((question) =>
                question.id === questionId ? { ...question, validationStatus: false } : question
            )
            );
        }
    };

    const handleRegistration = async (e) => {
        e.preventDefault();

        // create error messages if a radio button section is not filled
        questionData.forEach((question) => {
            handleValidation(question.id); // validate each question on submit
            const selectedOption = document.querySelector(`input[name=${question.id}]:checked`);
        
            if (selectedOption) {
                const label = document.querySelector(`label[for=${selectedOption.id}]`);
                setSurveyAnswers((prevAnswers) => ({ ...prevAnswers, [`answer${question.id}`]: label.textContent }));
            }
        });

        // check if all questions already filled

        console.log(JSON.stringify(questionData, null, 2))

        const invalidQuestions = questionData.find((question) => question.validationStatus === true);
        if(invalidQuestions) return console.error("I found unanswered questions")

        try {
            const firstStepData = JSON.parse(localStorage.getItem('reg-form-step-1'));
            await Data.userRegistration(firstStepData.username, firstStepData.email, firstStepData.password, firstStepData.phoneNumber, surveyAnswers); // trigger registration function

            // handle success
            localStorage.removeItem('reg-form-step-1'); // remove the first registration page data
        } catch (error) {
            console.error("Error during registration:", error.message);
        }
    }

    return (
        <div className="container d-flex justify-content-center">
            <div className="col-12 col-md-8">
                <h1>...and now share some info with us</h1>
                <p>This will help us to provide you with more personalised investment advice and educational materials.</p>
                <form onSubmit={handleRegistration}>

                {questionData.map((question, index) => (
                    <>
                        <hr className="my-5" />
                        <div key={question.id} className="form-group" onChange={() => handleValidation(question.id)}>
                            <h2>
                            <span className="question-number">{index + 1}</span>
                            {question.label}
                            </h2>
                            {question.options.map((option, index) => (
                            <div key={index} className="form-check">
                                <input
                                className={`form-check-input ${question.validationStatus ? "is-invalid" : ""}`}
                                type="radio"
                                name={question.id}
                                id={`${question.id}-${index}`}
                                value={option.value}
                                />
                                <label className="form-check-label" htmlFor={`${question.id}-${index}`}>
                                {option.value}
                                </label>
                            </div>
                            ))}

                            {question.validationStatus && <div>You have to select an option</div>}
                            <hr className="my-5" />
                        </div>
                    </>
                ))}
                    <div className="row d-flex align-items-center my-5">
                        <div className="col-6">
                            <button className="btn btn-outline-primary" onClick={() => window.location = '/registration1'}>Previous</button>
                        </div>
                        <div className="col-6 text-end">
                            <button type="submit" className="btn btn-primary">Finish</button>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    );
}

export default Registration2;