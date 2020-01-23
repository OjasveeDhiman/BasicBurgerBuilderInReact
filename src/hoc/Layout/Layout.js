import React, { Component } from 'react';
import Aux from '../Auxillary/Auxillary';
import Classes from './Layout.css';
import Toolbar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
state = {
    sidedrawerStatus:false
}    
showSideDrawerHandler = () => {
    this.setState({sidedrawerStatus:false});
}

ToggleMenu = () => {
    this.setState((prevState) => { // used function approach because the asynchronous nature of setState leads to unexpected results otherwise
        return {sidedrawerStatus: !prevState.sidedrawerStatus}
    });
}
render(){
return(
    <Aux >
        <Toolbar clcikedMenuToggle = {this.ToggleMenu}/>
        <SideDrawer open={this.state.sidedrawerStatus} closed={this.showSideDrawerHandler} />
        <main className={Classes.Content}>
            {this.props.children}
        </main>
    </Aux>
);
}
}

export default Layout;