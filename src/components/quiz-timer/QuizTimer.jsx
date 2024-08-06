import { useEffect, useState } from "react"

const QuizTimer = ({ timeout, onTimeout }) => {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout);
        return () => {
            clearTimeout(timer);
        }
    }, [onTimeout, timeout]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((remtime) => (remtime - 100));
        }, 100);
        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <progress id="question-time" max={timeout} value={remainingTime} />
    )
}

export default QuizTimer
