import React, { Component } from 'react';

class Chests extends Component {
    render() {
        return (
            <div>
                <h1>Chests</h1>
                {//Splice the first 13 and map this new array, as chests holds 84 chests and most are dupes because of increasing value in each arena.
                    this.props.chests.map( chest => 
                        <button 
                            key={chest.idName}
                            >
                            {chest.name}
                        </button>
                    )

                }
            </div>
        );
    }
}

export default Chests;