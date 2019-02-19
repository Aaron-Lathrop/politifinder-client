import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// library.add(faCoffee)

class SearchLocation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: null
        }
        this.textInput = React.createRef();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({
            location: this.textInput.value
        })
        this.props.handleSearch(this.state);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="search" ref={input => this.textInput = input} />
                <input type="submit" />
            </form>   
        );
    }
}

export default connect()(SearchLocation);