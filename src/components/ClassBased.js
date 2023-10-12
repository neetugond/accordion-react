import React from "react";

class ClassBased extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
        console.log('constructor'); //1st call
    }
    componentDidMount() {
         //3rd call - after render this is call i.e why we make api call here
        console.log('componentDidMount')
    }
    componentDidUpdate() {
        //when we make any changes we can make here ([ dependency array])
        console.log('componentDidUpdate')
    }
    componentWillUnmount() {
          // change from this component to another - to perform clean up
        console.log('componentWillUnmount')
    }
   
    render() {
        console.log('render') // 2nd call
        return (
            <div>
                <h1>Class Based Component</h1>
                <p>{this.props.fname}</p>
                <p>{ this.state.count}</p>
                <button onClick={()=>this.setState({
                    count: this.state.count+1
                })}>+</button>
        </div>
    )
}
}

export default ClassBased