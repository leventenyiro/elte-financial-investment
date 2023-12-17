import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Data from "../data/Data";

function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const [quiz, setQuiz] = useState({});
  const [quizScore, setQuizScore] = useState(0);
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMaterialById();
    fetchQuizForMaterial();
  }, []);

  const fetchMaterialById = async () => {
    const fetchedUser = await Data.fetchUser();
    if (fetchedUser === undefined) {
      navigate("/login");
    }

    const fetchedMaterial = await Data.fetchMaterialById(id);

    if (fetchedMaterial === undefined) navigate("/course");

    setCourse(fetchedMaterial);
  };

  const fetchQuizForMaterial = async () => {
    const fetchedUser = await Data.fetchUser();
    if (fetchedUser === undefined) {
      navigate("/login");
    }

    const fetchedQuiz = await Data.fetchQuiz(id);
    if (fetchedQuiz === undefined) {
      setQuiz(undefined);
    } else {
      setQuiz(fetchedQuiz);
      console.log(quiz);
    }
  };

  const handleQuizCheck = async (e) => {
    e.preventDefault();

    let score = 0;
    quiz.questions?.forEach((item, index) => {
      const selectedOption = document.querySelector(
        `input[name=question-${item.question.id}]:checked`
      );

      if (selectedOption) {
        const selectedValue = selectedOption.value;
        const selectedOptionData = item.answers.find(
          (answer) => answer.answer === selectedValue
        );
        if (selectedOptionData.isCorrect) {
          score++;
        }
      }
    });
    setQuizScore(score);

    document.getElementById("scoreDiv").style.display = "block";
    document.getElementById("checkBtn").style.display = "none";
  };

  const handleTryAgainBtn = async (e) => {
    e.preventDefault();

    quiz.questions?.forEach((item, index) => {
      return document
        .querySelector(`input[name=question-${item.question.id}]`)
        .setAttribute("checked", false);
    });

    document.getElementById("checkBtn").style.display = "block";
    document.getElementById("scoreDiv").style.display = "none";
  };

  return (
    <div className="CourseDetail container">
      <cite className="text-secondary">
        {course.createdAt && format(new Date(course.createdAt), "yyyy-MM-dd")}
      </cite>

      {course.abstract === "nope" && (
        <p>
          <i>{course.abstract}</i>
        </p>
      )}
      <p className="mt-2" dangerouslySetInnerHTML={{ __html: course.content }} />

      {quiz !== undefined && (
        <div>
          <h2>Quiz</h2>
          {quiz.questions?.map((item) => (
            <div key={item.question.id}>
              <h3>{item.question.question}</h3>
              {item.answers?.map((answer) => (
                <div key={answer.id}>
                  <input
                    className={`form-check-input}`}
                    type="radio"
                    name={`question-${item.question.id}`}
                    id={`${item.question.id}-${answer.id}`}
                    value={answer.answer}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`${item.question.id}-${answer.id}`}
                  >
                    {answer.answer}
                  </label>
                </div>
              ))}
            </div>
          ))}
          <button
            id="checkBtn"
            onClick={handleQuizCheck}
            className="btn btn-outline-dark mt-2" /* disabled */
          >
            Check
          </button>
          <div id="scoreDiv" style={{ display: "none" }}>
            <button
              onClick={handleTryAgainBtn}
              className="btn btn-outline-dark mt-2"
            >
              Try Again
            </button>
            <p className="mt-2">
              Your score: {quizScore}/{quiz.questions?.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseDetail;
