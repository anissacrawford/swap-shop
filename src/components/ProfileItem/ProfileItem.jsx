//imports
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//MUI styling 
import Button from '@material-ui/core/Button';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
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
            height: theme.spacing(45)
        },
    },
}));


function ProfileItem({ anItem }) {

    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();

    const theme = createTheme({
        palette: {
            primary: {
                main: '#36802d'
            }
        }
    })


    const handleEdit = () => {
        dispatch({
            type: 'SET_EDIT_ITEM',
            payload: anItem
        })
        history.push(`/edit/${anItem.id}`);
    }

    const handleDelete = () => {
        dispatch({
            type: 'DELETE_ITEM',
            payload: { id: anItem.id }
        })
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid item xs={12} s={6} md={3} lg={4}
                container
                direction="column"
                justifyContent="center"
                alignItems="center">
                <div className={classes.root}>
                    <Paper className="padding" elevation={10}>
                        <ul className="center" key={anItem.id}>
                            <li><img src={anItem.item_image} /></li>
                            <li className="bold">{anItem.item_name}</li>
                            <li>{anItem.item_description}</li>

                            <Button variant="contained" color="primary" onClick={handleEdit}>edit</Button>
                            <Button variant="contained" color="primary" onClick={handleDelete}>delete</Button>
                        </ul>
                    </Paper>
                </div>
            </Grid>
        </ThemeProvider>
    )
}

export default ProfileItem;