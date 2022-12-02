import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    background: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid green',
    borderRadius: '20px',
    padding: '20px',
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    top: '9vh'
  },
  title: {
    color: '#1a3e14',
    font: '500 16px Roboto, sans-serif'
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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0.9, 3),
      background: 'linear-gradient(45deg, #377c2a 10%, #4f9541 90%)',
      borderRadius: 8,
      position: 'relative',
      width: '96%',
      color: 'white',
      height: 48,
      boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.3)',
  },
}));

  export default styles