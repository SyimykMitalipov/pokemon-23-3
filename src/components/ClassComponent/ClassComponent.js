import { Component } from "react";





class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            tasks: [],
        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        console.log('d');
    };
    componentWillUnmount() {
        console.log('umount');
    };

    handleDelete()  {
        console.log('dekete');
    }
    render() {
        return <div>
            <h2>Class Component</h2>
           <button onClick={this.handleDelete}>Click</button>
        </div>
    }
}

export default ClassComponent;