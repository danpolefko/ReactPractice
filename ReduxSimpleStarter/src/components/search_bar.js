// AIzaSyDqzNREyArz5KVJeGcooFJBVFle6pQZ204
import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: ''};
    }
    render() {
        return (
        <div>
            <input 
            value={this.state.term}
            onChange={event => this.setState({term: event.target.value})} />            
        </div>
        );
    }   
}

export default SearchBar;

// Value of the input: {this.state.term}