import * as React from 'react';
import { Question } from './components/Question';
import { TAppState, TQuestion } from './types';

class App extends React.Component<{}, TAppState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            correct: 0,
            wrong: 0,
            questions: [
                {
                    category: '',
                    type: '',
                    difficulty: '',
                    question: '',
                    correct_answer: '',
                    incorrect_answers: [''],
                }
            ],
        };
        this.handleQuestionSubmit = this.handleQuestionSubmit.bind(this);
    }

    componentDidMount() {
        const context = this;
        fetch('http://localhost:4000/api/questions')
            .then(res => res.json())
            .then (({results}) => {
                context.setState({
                    questions: results,
                });
            });
    }

    handleQuestionSubmit(answer: string, correctAnswer: string) {
        const { correct, wrong } = this.state;
        if (answer === correctAnswer) {
            this.setState({ correct: correct + 1 });
        } else {
            this.setState({ wrong: wrong + 1 });
        }
    }

    render() {
        const { correct, questions, wrong } = this.state;
        const currentQuestion: TQuestion = questions[0];
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1>Lucid Quiz</h1>
                <h2>Try your best to answer these questions.</h2>
                <Question
                    handleNext={this.handleQuestionSubmit}
                    content={currentQuestion}
                />
            </div>
        )
    }
}

export { App };
