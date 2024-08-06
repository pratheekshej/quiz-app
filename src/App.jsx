import { Fragment } from "react";
import Header from "./components/header/Header";
import Quiz from "./components/quiz/Quiz";

function App() {
    return (
        <Fragment>
            <Header />
            <main>
                <Quiz />
            </main>
        </Fragment>
    );
}

export default App;
