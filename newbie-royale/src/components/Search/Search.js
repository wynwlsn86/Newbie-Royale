import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.search}>
                    <input type='text' placeholder='Search here...'></input>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default Search;