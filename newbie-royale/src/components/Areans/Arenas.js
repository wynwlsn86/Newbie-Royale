import React, { Component } from 'react';

class Arenas extends Component {
    render() {
        return (
            <div className='arena-main'>
                <h1>Arenas</h1>
                {
                this.props.arenas.map( arena => 
                    <div
                    className={arena.idName}
                    key={arena.idName}
                    >
                    <img src={`http://www.clashapi.xyz/images/arenas/${arena.idName}.png`} alt='' />
                    {arena.name}
                </div>
                )

                }
            </div>
        );
    }
}

export default Arenas;