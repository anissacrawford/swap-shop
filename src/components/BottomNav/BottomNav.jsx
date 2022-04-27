//imports 
import React from 'react';

//MUI Styling
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';


const useStyles = makeStyles({
  root: {
    width: 390,
    backgroundColor: "#36802D",
    position: 'fixed',
        bottom: 0
  },
});


function BottomNav () {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <div>
        <BottomNavigation
          className={classes.root}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
        >
          <BottomNavigationAction label="Shop" icon={<HomeIcon/>} />
          <BottomNavigationAction label="Profile" icon={<AccountBoxIcon/>}/>
          <BottomNavigationAction label="My Swaps" icon={<SwapHorizIcon/>}/>
        </BottomNavigation>
        </div>
    )
}

export default BottomNav;