import { useCallback, useState } from "react"
import questions from "../../questions";
import quizCompleted from '../../assets/quiz-complete.png';
import QuizTimer from "../quiz-timer/QuizTimer";

const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;

    const shuffledAnswers = questions[activeQuestionIndex] ?
        [...questions[activeQuestionIndex].answers].sort(() => (Math.random() - 0.5)) :
        null;

    const handleSelectAnswer = useCallback((answer) => {
        setUserAnswers(prevAns => ([...prevAns, answer]));
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    return (
        <div id="quiz">
            {shuffledAnswers &&
                <div id="question">
                    <QuizTimer key={activeQuestionIndex} timeout={10000} onTimeout={handleSkipAnswer} />
                    <h2>{questions[activeQuestionIndex].text}</h2>
                    <ul id="answers">
                        {shuffledAnswers.map((ans) => {
                            return (
                                <li key={ans} className="answer">
                                    <button onClick={() => handleSelectAnswer(ans)}>
                                        {ans}
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            }
            {!shuffledAnswers &&
                <div id="summary">
                    <img src={quizCompleted} alt="Quiz Complete" />
                    <h2>
                        You've reached the end of your quiz!!!
                    </h2>
                </div>
            }
        </div>
    )
}

export default Quiz
