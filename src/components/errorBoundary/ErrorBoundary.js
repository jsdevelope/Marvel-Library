import { Component } from "react";
import Error from "../erorrMessage/Error"

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    // static getDerivedStateFromError(error) {
    //     return {error: true};
    // }
    
    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <Error/>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;