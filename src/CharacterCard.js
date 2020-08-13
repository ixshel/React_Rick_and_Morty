import React from 'react';

const CharacterCard = props => {
    const { character } = props;
    return (
        <div className="CharacterCard" style={{ backgroundImage: `url(${character.image})` }}>
            <div className="CharacterCard__name-container text-truncate">
                {character.name}
            </div>
        </div>
    );
};

export default CharacterCard;

// If you want to add a click event
// import React, { Component } from 'react';

// class CharacterCard extends Component {

//     handleClick = (e) => {
//         e.preventDefault();
//         alert(`clicked: ${this.character.name}`);
//     }

//     render() {
//         this.character = this.props.character;
//         return (
//             <div onClick={this.handleClick} className="CharacterCard" style={{ backgroundImage: `url(${this.character.image})` }}>
//                 <div className="CharacterCard__name-container text-truncate">
//                     {this.character.name}
//                 </div>
//             </div>
//         );
//     }
// }
// export default CharacterCard;

