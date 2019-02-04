import React from 'react';
import Aux from '../../hoc/Auxiliary'; //this is a higher order component to just wrap everything 
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => {
    return (
        <Aux>
            <Toolbar/>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    );
}

export default layout;