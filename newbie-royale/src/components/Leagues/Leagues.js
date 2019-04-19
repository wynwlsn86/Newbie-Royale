import React, { Component } from 'react';

class Leagues extends Component {
    render() {
        return (
            <div className='league-main'>
                <h1>Leagues</h1>
                {//Gonna need to splice out the first element.
                    this.props.leagues.map( leagues => 
                        <button 
                            key={leagues.idName}
                            >
                            {leagues.name}
                        </button>
                    )

                }
            </div>
        );
    }
}

export default Leagues;