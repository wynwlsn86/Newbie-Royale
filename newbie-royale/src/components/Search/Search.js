import React, { Component } from 'react';
//

class Search extends Component {
    prevent= (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.prevent}>
                    <input onChange={this.props.search}type='text' placeholder='Search here...'></input>
                    <button>Clear</button>
                </form>
            </div>
        );
    }
}

export default Search;