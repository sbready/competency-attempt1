import React from 'react';

function CoolPeeps ( props ) {
    return <div>{props.id} {props.firstName} {props.lastName}</div>   //38C
}

const element = <CoolPeeps id="1" firstName="Steven" lastName="Bready" />  //38D

export default CoolPeeps;