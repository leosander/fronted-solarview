import {useState} from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import logoImg from '../../assets/logo-solarview.png';
import { useAuth } from '../../hooks/useAuth';

import styles from './styles';

export function SignIn() {
  const style = styles();
  const { handleLogin } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Preencha seu e-mail e senha para entrar')
      return;
    }
    
    try {
      await handleLogin(email, password)
    } catch (err) {
      toast.error('Falha no login!')
    }
    
  }

  return (
    <Container className='main' component="main" maxWidth="xs">
      <div className={style.paper}>
        <Avatar className={style.avatar}>
          <img className={style.logo} src={logoImg} alt="Logo" />
        </Avatar>
        <Typography className={style.title} component="h5" variant="h5">
          Faça seu login
        </Typography>
        <form className={style.form} onSubmit={handleSignIn} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Digite seu e-mail"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Digite sua senha"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            className={style.submit}
          >
            Entrar
          </Button>
          <Grid container justifyContent="center">
          <Grid item>
              <Link className={style.signUp} to="/create-account" variant="body2">
                {"Não tem uma conta? Cadastre-se."}
              </Link>
            </Grid>
          </Grid>
          <Toaster />
        </form>
      </div>
    </Container>
  );
}