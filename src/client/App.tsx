import * as React from 'react';
import { Question } from './components/Question';
import { Summary } from './components/Summary';
import { TAppState, TQuestion } from './types';

const emptyQuestion = {
    category: '',
    type: '',
    difficulty: '',
    question: '',
    correct_answer: '',
    incorrect_answers: [''],
}

class App extends React.Component<{}, TAppState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            correct: 0,
            wrong: 0,
            questions: [emptyQuestion],
            currentQuestion: emptyQuestion,
            completedQuestions: [],
        };
        this.handleQuestionChange = this.handleQuestionChange.bind(this);
        this.handleQuestionSubmit = this.handleQuestionSubmit.bind(this);
        this.handleQuizRestart = this.handleQuizRestart.bind(this);
    }

    componentDidMount() {
        const context = this;
        fetch('http://localhost:4000/api/questions')
            .then(res => res.json())
            .then (({results}) => {
                const randomQuestionIndex = Math.floor(Math.random() * results.length);
                const currentQuestion: TQuestion = results.splice(randomQuestionIndex, 1)[0];
                context.setState({
                    questions: results,
                    currentQuestion,
                });
            });
    }

    handleQuestionChange() {
        const {
            questions,
            currentQuestion,
            completedQuestions,
        } = this.state;
        if (questions.length) {
            const randomQuestionIndex = Math.floor(Math.random() * questions.length);
            const newQuestion: TQuestion = questions.splice(randomQuestionIndex, 1)[0];
            this.setState({
                questions,
                currentQuestion: newQuestion,
                completedQuestions: completedQuestions.concat(currentQuestion),
            });
        } else {
            this.setState({
                currentQuestion: emptyQuestion,
                completedQuestions: completedQuestions.concat(currentQuestion),
            });
        }
    }

    handleQuestionSubmit(answer: string, correctAnswer: string) {
        const { correct, wrong } = this.state;
        if (answer === correctAnswer) {
            this.setState({ correct: correct + 1 });
        } else {
            this.setState({ wrong: wrong + 1 });
        }
        this.handleQuestionChange();
    }

    handleQuizRestart() {
        const {
            completedQuestions,
        } = this.state;
        const randomQuestionIndex = Math.floor(Math.random() * completedQuestions.length);
        const currentQuestion: TQuestion = completedQuestions.splice(randomQuestionIndex, 1)[0] as TQuestion;
        this.setState({
            questions: completedQuestions as TQuestion[],
            currentQuestion: currentQuestion,
            correct: 0,
            wrong: 0,
        });
    }

    render() {
        const { correct, questions, wrong, currentQuestion } = this.state;
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'helvetica, sans-serif' }}>
                <h1>Lucid Quiz</h1>
                <h2>Try your best to answer these questions.</h2>
                {
                    currentQuestion.question ?
                    (
                        <Question
                            handleNext={this.handleQuestionSubmit}
                            content={currentQuestion}
                        />
                    ) : (
                        <Summary
                            correct={correct}
                            wrong={wrong}
                        />
                    )
                }
            </div>
        );
    }
}

export { App };
