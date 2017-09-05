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
            <input onChange={event => this.setState({term: event.target.value})} />
            Value of the input is: {this.state.term}
        </div>
        );
    }

   // onInputChange(event){
  //      console.log(event.target.value);
 //   }
}


// const SearchBar = () => {
 //   return <input />
// };

export default SearchBar;