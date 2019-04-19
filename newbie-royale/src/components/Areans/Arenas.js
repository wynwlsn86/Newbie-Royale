import React, { Component } from 'react';

class Arenas extends Component {
    render() {
        return (
            <div className='arena-main'>
                <h1>Arenas</h1>
                {
                    this.props.arenas.map( arena => 
                        <button 
                            key={arena.idName}
                            >
                            {arena.name}
                        </button>
                    )

                }
            </div>
        );
    }
}

export default Arenas;