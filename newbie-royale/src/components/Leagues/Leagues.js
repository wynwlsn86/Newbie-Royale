import React, { Component } from 'react';

class Leagues extends Component {
    render() {
        return (
            <div className='league-main'>
                <h1>Leagues</h1>
                {//Gonna need to splice out the first element.
                    this.props.leagues.map( league => 
                        <div
                            className={league.idName}
                            key={league.idName}
                            >
                            <img src={`http://www.clashapi.xyz/images/leagues/${league.idName}.png`} alt='' />
                            {league.name}
                        </div>
                    )

                }
            </div>
        );
    }
}

export default Leagues;