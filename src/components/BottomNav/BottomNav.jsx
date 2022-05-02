//imports 
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

//MUI Styling
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';


const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: '#36802D',
    position: 'fixed',
    bottom: 0
  },
});

function BottomNav() {

  const user = useSelector((store) => store.user);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (

    <div>
      {user.id && (
        <BottomNavigation
          className={classes.root}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
        >
          <BottomNavigationAction component={Link} to='/shop' label="Shop" icon={<HomeIcon />} />
          <BottomNavigationAction component={Link} to='/profile' label="Profile" icon={<AccountBoxIcon />} />
          <BottomNavigationAction component={Link} to='/mySwaps' label="My Swaps" icon={<SwapHorizIcon />} />
        </BottomNavigation>
      )}
    </div>

  )
}

export default BottomNav;