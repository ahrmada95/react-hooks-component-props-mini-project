import React from "react";

const MinToRead = ({time}) => {
    let emoji = '';
    if (time < 30) {
        for(let a=0; a<(Math.ceil(time/5)); a++){
            emoji += '☕️';
        }
    } else {
        for (let b=0; b<(Math.ceil(time/10)); b++){
            emoji += '🍱'
        }
    }
    console.log(emoji);
    return (
        emoji
    )
}

export default MinToRead;