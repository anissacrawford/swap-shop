//imports 
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

//MUI Styling
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(40),
        height: theme.spacing(45),
      },
    },
  }));


function SwapItem ({swap}) {

    const classes = useStyles();
    const dispatch = useDispatch();

    const handleDecline = () => {
        Swal.fire({
          title: "Are you sure you want to decline this offer?",
          text: 'This action is permanent and cannot be undone.',
          icon: 'warning',
          background: 'white',
          color: 'black',
          showCancelButton: true,
          confirmButtonColor: '#36802d',
          cancelButtonColor: '#36802d',
          confirmButtonText: 'Decline'
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch({
              type: 'DELETE_OFFER',
              payload: swap?.OFFER_ID
            })
          }
        })
      }

    const handleAccept = () => {
        //updates user id of item A
        dispatch({
          type: 'PUT_OFFER_A',
          payload: {
            userB: swap?.USER_B_ID,
            itemA: swap?.ITEM_A_ID
          }
        });
        //updates user id of item B 
        dispatch({
          type: 'PUT_OFFER_B',
          payload: {
            userA: swap?.USER_A_ID,
            itemB: swap?.ITEM_B_ID
          }
        });
        dispatch({
            type: 'DELETE_OFFER',
            payload: swap?.OFFER_ID
          });
      }


    return (
        <div>
          {/* Item A */}
        <h2 className="center">For your...</h2>
        <Grid item xs={12} s={6} md={3} lg={4}
          container
          direction="column"
          justifyContent="center"
          alignItems="center">
          <div className={classes.root}>
            <Paper className="padding" elevation={10}>
              <ul className="center">
                <li><img src={swap?.ITEM_A_IMAGE}/></li>
                <li className="bold">{swap?.ITEM_A_NAME}</li>
                <li>{swap?.ITEM_A_DESCRIPTION}</li>
              </ul>
            </Paper>
          </div>
        </Grid>
      
        {/* item B */}
        <h2 className="center">They will trade...</h2>
        <Grid item xs={12} s={6} md={3} lg={4}
          container
          direction="column"
          justifyContent="center"
          alignItems="center">
          <div className={classes.root}>
            <Paper elevation={10}>
              <ul className="center">
                <li className="username">{swap?.USER_B_NAME}</li>
                <li><img src={swap?.ITEM_B_IMAGE}/></li>
                <li className="bold">{swap?.ITEM_B_NAME}</li>
                <li>{swap?.ITEM_B_DESCRIPTION}</li>
              </ul>
            </Paper>
          </div>
        </Grid>

        {/* buttons */}
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center">
          <Button className="spacing" variant="contained" color="primary" onClick={handleDecline}>decline</Button>
          <Button className="spacing" variant="contained" color="primary" onClick={handleAccept}>accept</Button>
        </Grid>
        </div>
    )
}

export default SwapItem;