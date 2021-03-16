import React from 'react';
import hero3 from '../../../assets/images/hero-bg/hero-3.jpg';
import { NavLink as RouterLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useHistory } from 'react-router-dom';
import { LoginService } from '../../../services/loginService';

import {
  Grid,
  Container,
  Input,
  InputLabel,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Card,
  CardContent,
  Button,
  FormControl,
} from '@material-ui/core';

import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';

/*const handleSubmit = e => {
  e.preventDefault();
  console.log('cliquei no botao');
  if (hasErrors(email, password)) return;

  LoginService.login(email, password)
    .then(res => {
      console.log(res.data);
      alert('logou');
    })
    .catch(err => {
      console.log(err);
    });
};*/

/*const hasErrors = (email, password) => {
  let formErrors = false;

  if (!isEmail(email)) {
    formErrors = true;
    toast.error('E-mail inválido.');
  }

  if (password.length < 3 || password.length > 50) {
    formErrors = true;
    toast.error('Senha inválida.');
  }

  return formErrors;
};*/

const LivePreviewExample = () => {
  const history = useHistory();
  const [checked1, setChecked1] = React.useState(true);

  const handleChange1 = event => {
    setChecked1(event.target.checked);
  };

  const [email, setEmail] = React.useState('');

  const [password, setPassword] = React.useState('');

  const hasErrors = () => {
    let formErrors = false;

    if (!isEmail) {
      formErrors = true;
      toast.error('Coloque um E-mail Válido!');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Sua Senha deve ter entre 5 e 50 caracteres!');
    }
    return formErrors;
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (hasErrors(email)) {
      toast.error('Coloque um E-mail Válido!');
      return false;
    }

    LoginService.login(email, password)
      .then(() => {
        history.push('/DashboardDefault');
      })
      .catch(() => {
        toast.error('Não existe um usuário com este email cadastrado');
      });
  };
  return (
    <>
      <div className="app-wrapper min-vh-100">
        <div className="app-main flex-column">
          <div className="app-content p-0">
            <div className="app-content--inner d-flex align-items-center">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div
                  className="bg-composed-wrapper--image"
                  style={{ backgroundImage: 'url(' + hero3 + ')' }}
                />
                <div className="bg-composed-wrapper--content py-5">
                  <Container maxWidth="lg">
                    <Grid container spacing={5}>
                      <Grid
                        item
                        xs={12}
                        lg={5}
                        className="d-none d-xl-flex align-items-center"
                      />
                      <Grid
                        item
                        xs={12}
                        lg={7}
                        className="d-flex flex-column align-items-center">
                        <span className="w-100 text-left text-md-center pb-4">
                          <h1 className="display-3 text-xl-left text-center mb-3 font-weight-bold">
                            Logue com a sua Conta!
                          </h1>
                        </span>
                        <Card className="m-0 w-100 p-0 border-0">
                          <div className="card-header d-block p-3 mx-2 mb-0 mt-2 rounded border-0" />
                          <CardContent className="p-3">
                            <div className="text-center text-black-50 mb-3">
                              <span>Entre com as suas Credenciais!</span>
                            </div>
                            <form className="px-5">
                              <div className="mb-3">
                                <FormControl className="w-100">
                                  <InputLabel htmlFor="input-with-icon-adornment">
                                    Endereço de Email
                                  </InputLabel>
                                  <Input
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    fullWidth
                                    id="input-with-icon-adornment"
                                    startAdornment={
                                      <InputAdornment position="start">
                                        <MailOutlineTwoToneIcon />
                                      </InputAdornment>
                                    }
                                  />
                                </FormControl>
                              </div>
                              <div className="mb-3">
                                <FormControl className="w-100">
                                  <InputLabel htmlFor="standard-adornment-password">
                                    Password
                                  </InputLabel>
                                  <Input
                                    type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    id="standard-adornment-password"
                                    fullWidth
                                    startAdornment={
                                      <InputAdornment position="start">
                                        <LockTwoToneIcon />
                                      </InputAdornment>
                                    }
                                  />
                                </FormControl>
                              </div>
                              <div className="w-100">
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={checked1}
                                      onChange={handleChange1}
                                      value="checked1"
                                      color="primary"
                                    />
                                  }
                                  label="Remember me"
                                />
                              </div>
                              <div className="text-center">
                                <Button
                                  type="submit"
                                  onClick={handleSubmit}
                                  color="primary"
                                  variant="contained"
                                  size="large"
                                  className="my-2">
                                  Fazer Login
                                </Button>
                              </div>
                              <div>
                                <Button
                                  component={RouterLink}
                                  to="/forgot-password"
                                  className="my-2">
                                  Esqueci minha senha
                                </Button>
                              </div>
                            </form>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LivePreviewExample;
