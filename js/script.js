/**
 * Created by caipf on 2017/7/11.
 */
class Button extends React.Component {
    handleClick = () => {
        this.props.onClickFunc(this.props.incrementValue);
    }

    render() {
        return (
            < button
        onClick = {this.handleClick
    }>
        {
            this.props.incrementValue
        }
    </
        button >
    )
        ;
    }
}
class Result extends React.Component {
    render() {
        return ( < div > {this.props.counter
    }</
        div >
    )
    }
}
class App extends React.Component {
    constructor() {
        super();
        this.state = {counter: 0};
    }

    incrementCounter = (incrementValue) => {
        this.setState((prevState) => ({
            counter: prevState.counter + incrementValue
        }));
    }

    render() {
        return (
            < div >
            < Button
        incrementValue = {5}
        onClickFunc = {this.incrementCounter
    }/>
    <
        Button
        incrementValue = {10}
        onClickFunc = {this.incrementCounter
    }/>
    <
        Button
        incrementValue = {15}
        onClickFunc = {this.incrementCounter
    }/>
    <
        Button
        incrementValue = {20}
        onClickFunc = {this.incrementCounter
    }/>
    <
        Result
        counter = {this.state.counter
    }/>
    </
        div >
    )
    }
}
}