import React from 'react';
import {useState} from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Avatar from '@material-ui/core/Avatar';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import logoImg from '../../assets/logo-solarview.png';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import styles from './styles';
import api from '../../services/api';

export function SignUp() {
  const style = styles();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();


  async function handleSignUp (e) 
  {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password) {
      toast.error('Você deve preencher todos os campos para criar sua conta!')
      return
    }

    try {
      const response = await api.post(
        'api/users/create', 
        { 
          firstName, 
          lastName,
          email, 
          password,
        }
      );
      toast.success('Conta criada com sucesso!')
      toast.success('Você será redirecionado para a tela de login')

      setTimeout(() => {
        navigate('/');
      }, 2000)
      
    } catch (err) {

      if (err.response.data.errors.email) {
        toast.error('E-mail cadastro cadastrado ou inválido!');
        return
      }
      if (err.response.data.errors.password) {
        toast.error('Sua senha deve ter no minímo 6 caracteres!');
      }
    }
  }


  return (
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={style.paper}>
        <Avatar className={style.avatar}>
        <img className={style.logo} src={logoImg} alt="Logo" />
        </Avatar>
        <Typography className={style.title} component="h5" variant="h5">
          Preencha os campos para fazer seu cadastro.
        </Typography>
        <form className={style.form} onSubmit={handleSignUp} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={6} ms={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nome"
                autoFocus
                onChange={e => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Sobrenome"
                name="lastName"
                autoComplete="lname"
                onChange={e => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                onChange={e => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={e => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            className={style.submit}
            >
            Cadastrar
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link to="/" variant="body2">
                {'Já tem uma conta? Entrar'}
              </Link>
            </Grid>
          </Grid>
          <Toaster />
        </form>
      </div>
    </Container>
  );
}