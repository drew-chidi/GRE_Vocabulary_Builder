import {React, Fragment} from 'react'
import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

const layout = (props) => {
    return (
        <Fragment>
            <MainNavigation />
            <main className={classes.main}>{props.children}</main>
            
        </Fragment>
    )
}

export default layout
