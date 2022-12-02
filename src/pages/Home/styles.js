import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      background: '#f5f5f5',
    },

    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
      background: '#fdbc40',
      maxHeight: '70px',
    },
    
    avatar: {
      margin: theme.spacing(2, 2, 2),
      maxWidth: '55px',
      width: '5%',
      height: 'auto'
    },
    logo: {
      width: '100%',
    },

    titleHeader: {
      flexGrow: 1,
    },
    titleUserHeader: {
      marginRight: '40px',
      color: 'black',
    },
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    titleTable: {
      color: '#1a3e14',
      font: '500 28px Roboto, sans-serif',
      marginBottom: '15px'
    },

    container: {
      position: 'relative',
      justifyContent: 'center',
      top: '15%',
    },
  
   
  }));

  export default styles