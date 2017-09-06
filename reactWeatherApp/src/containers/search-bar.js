import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index'

// 0775480763713ca5e4cad97e1fd864e6

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a 5 day forecast for your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />
               
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </span>
            </form>
        );
    }
}