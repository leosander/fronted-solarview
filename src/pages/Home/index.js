import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import logoImg from '../../assets/logo-solarview.png';
import Grid from '@material-ui/core/Grid';
import TableComponent from '../../Components/TableComponent';
import Button from '@material-ui/core/Button';
import styles from './styles';
import { useAuth } from '../../hooks/useAuth';


export function Home() {
  const style = styles();
  const { user, handleLogout} = useAuth();

  async function handleLogOut(e)
  {
    e.preventDefault();

    try {
      await handleLogout();
    } catch (err) {
      alert('Falha ao criar conta, tente novamente.');
    }
  }


  return (
    <div className={style.root}>
      <AppBar position="absolute">
        <Toolbar className={style.toolbar}>
          <Avatar className={style.avatar}>
            <img className={style.logo} src={logoImg} alt="Logo" />
          </Avatar>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={style.titleHeader}>
              SolarView
            </Typography>
            <Typography component="h1" variant="h6" noWrap className={style.titleUserHeader}>
              Seja bem-vindo, {user.first_name}!
            </Typography>
            <Button onClick={handleLogOut} variant="outlined">Sair</Button>

        </Toolbar>
      </AppBar>

      <main className={style.content}>
        <Container className={style.container} maxWidth="xl">
          
          <Grid container justifyContent="center">
            <Grid item>
              <Typography component="h1" variant="h4" noWrap className={style.titleTable}>
                Registros de usuários
              </Typography>
            </Grid>
          </Grid>
          
          <Grid xs={12}>
            <TableComponent />
          </Grid>

        </Container>
      </main>
    </div>
  );
}