import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Aux from '../../../hoc/Auxillary/Auxillary';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sidedrawer = (props) => {
    let additionalClass = [classes.SideDrawer, classes.Close];
    if(props.open){
        additionalClass = [classes.SideDrawer, classes.Open];
    }
    return(
        <Aux>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={additionalClass.join(' ')}>
            <div className={classes.SideLogo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </Aux>
    )};

export default sidedrawer;