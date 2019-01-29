import React from 'react';
import Aux from '../../hoc/Auxiliary'; //this is a higher order component to just wrap everything 
import classes from './Layout.css';
const layout = (props) => {
    return (
        <Aux>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    );
}

export default layout;