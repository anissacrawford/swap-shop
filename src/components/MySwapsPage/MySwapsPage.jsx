//imports 
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import SwapItem from '../SwapItem/SwapItem';

//MUI Styling
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

function MySwapsPage() {

  const dispatch = useDispatch();
  const incomingSwap = useSelector(store => store.incomingSwap);

  useEffect(() => {
    dispatch({type:'GET_INCOMING_SWAP'})
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#36802d'
      }
    }
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <h1 className="center">My Swaps</h1>

      {incomingSwap?.map((swap) => {
        return (
          <SwapItem swap={swap} key={swap.id}/>
      )
      })}
      </ThemeProvider>
      
    </>
  )
}

export default MySwapsPage;