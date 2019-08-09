import React from 'react';


const Data =(props) => {
    console.log(props)
        
        return (
            <div>
               <p> {props.data.name} </p>
            </div>
        );

};

export default Data;