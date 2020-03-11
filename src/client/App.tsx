import * as React from 'react';

class App extends React.Component<{}> {
    constructor(props: {}) {
        super(props);
        this.state = {
            questions: [],
        };
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
