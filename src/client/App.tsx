import * as React from 'react';

type Question = {
    category: String;
    type: String;
    difficulty: String;
    question: String;
    correct_answer: String;
    incorrect_answers:[String];
}

type AppState = {
    questions: [Question];
}

class App extends React.Component<{}> {
    constructor(props: {}) {
        super(props);
        this.state = {
            questions: [],
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
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1>Lucid Quiz</h1>
                <h2>Try your best to answer these questions.</h2>
            </div>
        )
    }
}

export { App };
