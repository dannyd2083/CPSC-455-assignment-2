import React from 'react';
import Trait from "./Trait";

const Traits = (props) => {
    return (
        <div className='traits'>
            <strong style={{fontSize: "1.6rem",fontFamily:"Verdana"}}>Traits:</strong>
                {props.traits.map((trait)=>
                    (<Trait trait = {trait}/>))}
        </div>
    );
};

export default Traits;
