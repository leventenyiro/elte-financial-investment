import { useEffect } from "react";

function Registration2() {

    useEffect(() => {
        if (localStorage.getItem('reg-form-step-1') === null) {
            window.location = 'registration1';
        }
    });

    const handleRegistration = async (e) => {
        e.preventDefault();

        // remove existing error messages
        document.querySelectorAll('.is-invalid').forEach(element => {
            element.classList.remove('is-invalid');
        });

        // Comment to Abel: I added is-invalid to 1st question, to see an example, how to make it invalid. You have to make it dynamically

        // get value
        document.querySelectorAll('.form-check-input').forEach((e) => {
            if (e.checked) {
                console.log(e.value);
            }
        })
    }

    return (
        <div className="container d-flex justify-content-center">
            <div className="col-12 col-md-8">
                <h1>...and now share some info with us</h1>
                <p>This will help us to provide you with more personalised investment advice and educational materials.</p>
                <form onSubmit={handleRegistration}>
                    <h2 className="mt-5"><span className="question-number">1</span>For how long do you plan to invest or save financially?</h2>
                    <div className="form-check">
                        <input className="form-check-input is-invalid" type="radio" name="q1" id="q1a1" value={1} />
                        <label className="form-check-label" htmlFor="q1a1">
                            Short-term goals
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input is-invalid" type="radio" name="q1" id="q1a2" value={3} />
                        <label className="form-check-label" htmlFor="q1a2">
                            Medium-term goals
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input is-invalid" type="radio" name="q1" id="q1a3" value={5} />
                        <label className="form-check-label" htmlFor="q1a3">
                            Long-term goals
                        </label>
                        <div className="invalid-feedback">You have to select an option</div>
                    </div>

                    <hr className="my-5" />

                    <h2><span className="question-number">2</span>What financial goals do you want to focus on?</h2>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q2" id="q2a1" value={1} />
                        <label className="form-check-label" htmlFor="q2a1">
                            Travel
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q2" id="q2a2" value={2} />
                        <label className="form-check-label" htmlFor="q2a2">
                            Home purchase
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q2" id="q2a3" value={3} />
                        <label className="form-check-label" htmlFor="q2a3">
                            Retirement
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q2" id="q2a4" value={4} />
                        <label className="form-check-label" htmlFor="q2a4">
                            Emergency fund
                        </label>
                        <div className="invalid-feedback">You have to select an option</div>
                    </div>

                    <hr className="my-5" />

                    <h2><span className="question-number">3</span>How willing are you to take risks in your investments?</h2>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q3" id="q3a1" value={1} />
                        <label className="form-check-label" htmlFor="q3a1">
                            Low risk
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q3" id="q3a2" value={3} />
                        <label className="form-check-label" htmlFor="q3a2">
                            Medium risk
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q3" id="q3a3" value={5} />
                        <label className="form-check-label" htmlFor="q3a3">
                            High risk
                        </label>
                        <div className="invalid-feedback">You have to select an option</div>
                    </div>

                    <hr className="my-5" />

                    <h2><span className="question-number">4</span>How important is stability and security in your financial decisions?</h2>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q4" id="q4a1" value={1} />
                        <label className="form-check-label" htmlFor="q4a1">
                            Not important
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q4" id="q4a2" value={2} />
                        <label className="form-check-label" htmlFor="q4a2">
                            Less important
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q4" id="q4a3" value={3} />
                        <label className="form-check-label" htmlFor="q4a3">
                            Important
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q4" id="q4a4" value={5} />
                        <label className="form-check-label" htmlFor="q4a4">
                            Very important
                        </label>
                        <div className="invalid-feedback">You have to select an option</div>
                    </div>

                    <hr className="my-5" />

                    <h2><span className="question-number">5</span>What is your current income situation?</h2>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q5" id="q5a1" value={2} />
                        <label className="form-check-label" htmlFor="q5a1">
                            Variable
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q5" id="q5a2" value={3} />
                        <label className="form-check-label" htmlFor="q5a2">
                            Stable
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q5" id="q5a3" value={4} />
                        <label className="form-check-label" htmlFor="q5a3">
                            Growing
                        </label>
                        <div className="invalid-feedback">You have to select an option</div>
                    </div>

                    <hr className="my-5" />

                    <h2><span className="question-number">6</span>From which sources does your income come?</h2>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q6" id="q6a1" value={3} />
                        <label className="form-check-label" htmlFor="q6a1">
                            Salary
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q6" id="q6a2" value={4} />
                        <label className="form-check-label" htmlFor="q6a2">
                            Investment returns
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q6" id="q6a3" value={5} />
                        <label className="form-check-label" htmlFor="q6a3">
                            Passive income sources
                        </label>
                        <div className="invalid-feedback">You have to select an option</div>
                    </div>

                    <hr className="my-5" />

                    <h2><span className="question-number">7</span>Which life stage are you currently in?</h2>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q7" id="q7a1" value={1} />
                        <label className="form-check-label" htmlFor="q7a1">
                            Student
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q7" id="q7a2" value={2} />
                        <label className="form-check-label" htmlFor="q7a2">
                            Recent graduate
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q7" id="q7a3" value={3} />
                        <label className="form-check-label" htmlFor="q7a3">
                            Middle-aged
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q7" id="q7a4" value={4} />
                        <label className="form-check-label" htmlFor="q7a4">
                            Approaching retirement
                        </label>
                        <div className="invalid-feedback">You have to select an option</div>
                    </div>

                    <hr className="my-5" />

                    <h2><span className="question-number">8</span>What important life events are you preparing for in the near future?</h2>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q8" id="q8a1" value={2} />
                        <label className="form-check-label" htmlFor="q8a1">
                            Career building
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q8" id="q8a2" value={3} />
                        <label className="form-check-label" htmlFor="q8a2">
                            Job market transition
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q8" id="q8a3" value={4} />
                        <label className="form-check-label" htmlFor="q8a3">
                            Starting a family
                        </label>
                        <div className="invalid-feedback">You have to select an option</div>
                    </div>

                    <hr className="my-5" />

                    <h2><span className="question-number">9</span>What experience do you have in the field of investments?</h2>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q9" id="q9a1" value={1} />
                        <label className="form-check-label" htmlFor="q9a1">
                            Beginner
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q9" id="q9a2" value={3} />
                        <label className="form-check-label" htmlFor="q9a2">
                            Experienced
                        </label>
                        <div className="invalid-feedback">You have to select an option</div>
                    </div>

                    <hr className="my-5" />

                    <h2><span className="question-number">10</span>If you have had previous investments, what types were they, and what results did you achieve with them?</h2>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q10" id="q10a1" value={2} />
                        <label className="form-check-label" htmlFor="q10a1">
                            Conservative, low returns
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q10" id="q10a2" value={3} />
                        <label className="form-check-label" htmlFor="q10a2">
                            Balanced, moderate returns
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q10" id="q10a3" value={5} />
                        <label className="form-check-label" htmlFor="q10a3">
                            Riskier, high returns
                        </label>
                        <div className="invalid-feedback">You have to select an option</div>
                    </div>

                    <hr className="my-5" />

                    <h2><span className="question-number">11</span>How aware are you of the current market environment and economic trends?</h2>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q11" id="q11a1" value={1} />
                        <label className="form-check-label" htmlFor="q11a1">
                            Not aware
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q11" id="q11a2" value={3} />
                        <label className="form-check-label" htmlFor="q11a2">
                            Partially aware
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q11" id="q11a3" value={4} />
                        <label className="form-check-label" htmlFor="q11a3">
                            Well-informed
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q11" id="q11a4" value={5} />
                        <label className="form-check-label" htmlFor="q11a4">
                            Very well-informed
                        </label>
                        <div className="invalid-feedback">You have to select an option</div>
                    </div>

                    <hr className="my-5" />

                    <h2><span className="question-number">12</span>What factors influence your financial decisions in the current market situation?</h2>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q12" id="q12a1" value={2} />
                        <label className="form-check-label" htmlFor="q12a1">
                            Financial trends
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q12" id="q12a2" value={3} />
                        <label className="form-check-label" htmlFor="q12a2">
                            Investment opportunities
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q12" id="q12a3" value={4} />
                        <label className="form-check-label" htmlFor="q12a3">
                            Economic stability
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="q12" id="q12a4" value={5} />
                        <label className="form-check-label" htmlFor="q12a4">
                            Inflation and interest rates
                        </label>
                        <div className="invalid-feedback">You have to select an option</div>
                    </div>

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