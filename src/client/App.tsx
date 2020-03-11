import * as React from 'react';
import { Question } from './components/Question';

export type TQuestion = {
    category: String;
    type: String;
    difficulty: String;
    question: String;
    correct_answer: String;
    incorrect_answers:[String];
}

type AppState = {
    correct: Number;
    wrong: Number;
    questions: TQuestion[];
}

class App extends React.Component<{}, AppState> {
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

    render() {
        const { questions } = this.state;
        const currentQuestion: TQuestion = questions[0];
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1>Lucid Quiz</h1>
                <h2>Try your best to answer these questions.</h2>
                <Question content={currentQuestion} />
            </div>
        )
    }
}

export { App };
