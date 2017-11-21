import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

class ToolbarLogin extends Component {



  render() {
    return (
      <Toolbar>
        <ToolbarGroup>
          <RaisedButton label="Log In" secondary={true}/>
          <ToolbarSeparator/>
          <RaisedButton label="Log Out" primary={true} />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}




export default ToolbarLogin
