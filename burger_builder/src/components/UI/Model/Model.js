import React from 'react';
import classes from './Model.css';

const model = (props) => {
    return (
        <div className={classes.Modal} 
                        style={{ 
                                transform: props.show ? 'translaateY(0)' : 'translateY(-100vh)'
                                , opacity : props.show ? '1' : '0'
                                }}
                        >
            {props.children}
        </div>
    );
}
 
export default model;