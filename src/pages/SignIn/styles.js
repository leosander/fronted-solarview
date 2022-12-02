import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      background: '#fff',
      alignItems: 'center',
      border: '1px solid green',
      borderRadius: '20px',
      padding: '20px',
      boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.1)',
      position: 'relative',
      top: '12vh'
    },
    title: {
      color: '#1a3e14',
      font: '500 20px Roboto, sans-serif'
    },
    avatar: {
      margin: theme.spacing(4),
      width: '35%',
      height: 'auto'
    },
    logo: {
      maxWidth: '130px',
      maxHeight: '120px',
      width: 'auto',
      height: 'auto',
    },
    form: {
      width: '100%', 
    },
    submit: {
      margin: theme.spacing(2, 0, 3),
      background: 'linear-gradient(45deg, #377c2a 10%, #4f9541 90%)',
      borderRadius: 8,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.3)',
    },
    signUp: {
      fontSize: '14px',
    }
    
  }));

  export default styles