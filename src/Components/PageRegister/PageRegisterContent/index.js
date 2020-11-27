import React, { Fragment } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  Container,
  IconButton,
  Box,
  Typography,
  Tabs,
  Tab,
  Button,
  Tooltip,
  TextField,
} from '@material-ui/core';

import hero9 from '../../../assets/images/hero-bg/hero-9.jpg';

import { withStyles } from '@material-ui/core/styles';

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: '6px',
    '& > div': {
      maxWidth: 40,
      height: '4px',
      borderRadius: '25px',
      width: '100%',
      backgroundColor: '#000',
    },
  },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    color: theme.palette.primary[900],
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))(props => <Tab disableRipple {...props} />);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}>
      {value === index && <Box p={0}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const LivePreviewExample = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // eslint-disable-next-line
  let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('Nome deve ter entre 3 e 255 caracteres!');
    }

    if (!isEmail) {
      formErrors = true;
      toast.error('Coloque um E-mail Válido!');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Sua Senha deve ter entre 5 e 50 caracteres!');
    }
  }

  return (
    <Fragment>
      <div className="app-wrapper min-vh-100 bg-white">
        <div className="app-main min-vh-100">
          <div className="app-content p-0">
            <div className="app-inner-content-layout--main">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div className="bg-composed-wrapper--content">
                  <Grid container spacing={0} className="min-vh-100">
                    <Grid
                      item
                      xs={12}
                      md={4}
                      lg={5}
                      className="d-flex align-items-center">
                      <div className="hero-wrapper w-100 bg-composed-wrapper bg-plum-plate min-vh-100">
                        <div className="flex-grow-1 w-100 d-flex align-items-center">
                          <div
                            className="bg-composed-wrapper--image"
                            style={{ backgroundImage: 'url(' + hero9 + ')' }}
                          />
                          <div className="bg-composed-wrapper--bg bg-premium-dark opacity-5" />
                          <div className="bg-composed-wrapper--content p-5">
                            <div className="d-flex align-items-center">
                              <span className="px-4 h-auto py-1 badge badge-second badge-pill">
                                Register page
                              </span>
                              <Tooltip
                                arrow
                                title="Create your own register or login pages using the included elements."
                                placement="right">
                                <span className="text-white-50 pl-3">
                                  <FontAwesomeIcon
                                    icon={['far', 'question-circle']}
                                  />
                                </span>
                              </Tooltip>
                            </div>
                            <div className="text-white mt-3">
                              <h1 className="display-4 my-3 font-weight-bold">
                                Por que você deve criar uma conta?
                              </h1>
                              <p className="font-size-md mb-0 text-white-50">
                                Uma hora livre, quando nosso poder de escolha é
                                ilimitado e nada impede.
                              </p>
                              <div className="divider border-2 my-5 border-light opacity-2 rounded w-25" />
                            </div>
                          </div>
                        </div>
                        <div className="hero-footer pb-4">
                          <Tooltip arrow title="Facebook">
                            <IconButton
                              color="inherit"
                              size="medium"
                              variant="outlined"
                              className="text-white-50">
                              <FontAwesomeIcon
                                icon={['fab', 'facebook']}
                                className="font-size-md"
                              />
                            </IconButton>
                          </Tooltip>
                          <Tooltip arrow title="Twitter">
                            <IconButton
                              color="inherit"
                              size="medium"
                              variant="outlined"
                              className="text-white-50">
                              <FontAwesomeIcon
                                icon={['fab', 'twitter']}
                                className="font-size-md"
                              />
                            </IconButton>
                          </Tooltip>
                          <Tooltip arrow title="Google">
                            <IconButton
                              color="inherit"
                              size="medium"
                              variant="outlined"
                              className="text-white-50">
                              <FontAwesomeIcon
                                icon={['fab', 'google']}
                                className="font-size-md"
                              />
                            </IconButton>
                          </Tooltip>
                          <Tooltip arrow title="Instagram">
                            <IconButton
                              color="inherit"
                              size="medium"
                              variant="outlined"
                              className="text-white-50">
                              <FontAwesomeIcon
                                icon={['fab', 'instagram']}
                                className="font-size-md"
                              />
                            </IconButton>
                          </Tooltip>
                        </div>
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={8}
                      lg={7}
                      className="d-flex align-items-center">
                      <Container maxWidth="sm">
                        <div className="pt-5 pb-4">
                          <StyledTabs
                            value={value}
                            indicatorColor="primary"
                            textColor="primary"
                            onChange={handleChange}
                            onSubmit={handleSubmit}>
                            <StyledTab label="Crie a sua Conta" />
                          </StyledTabs>
                        </div>
                        <TabPanel value={value} index={0}>
                          <h3 className="display-4 mb-2 font-weight-bold">
                            Crie sua Conta
                          </h3>
                          <p className="font-size-lg mb-5 text-black-50">
                            Preencha os campos abaixo.
                          </p>
                          <div className="mb-3">
                            <TextField
                              value={nome}
                              onChange={e => setNome(e.target.value)}
                              variant="outlined"
                              label="Seu nome"
                              fullWidth
                              placeholder="Enter your firstname"
                              type="text"
                            />
                          </div>
                          <div className="mb-3">
                            <TextField
                              value={email}
                              onChange={e => setEmail(e.target.value)}
                              variant="outlined"
                              label="Endereço de Email"
                              fullWidth
                              placeholder="Enter your email address"
                              type="email"
                            />
                          </div>
                          <div className="mb-3">
                            <TextField
                              variant="outlined"
                              value={password}
                              onChange={e => setPassword(e.target.value)}
                              label="Sua Senha"
                              fullWidth
                              placeholder="Enter your password"
                              type="password"
                            />
                          </div>
                          <div className="form-group pt-2 mb-4">
                            Ao clicar no botão <strong>Criar conta</strong>{' '}
                            abaixo, você concorda com nossos termos de serviço e
                            declaração de privacidade.
                          </div>

                          <Button
                            color="primary"
                            type="submit"
                            onClick={handleSubmit}
                            size="large"
                            variant="contained"
                            className="mb-5">
                            Crie sua Conta!
                          </Button>
                          <div>
                            <Button
                              component={RouterLink}
                              to="/PagesRecoverPassword"
                              className="my-1">
                              Esqueci minha senha
                            </Button>
                          </div>
                          <div>
                            <Button
                              component={RouterLink}
                              to="/PagesLogin"
                              className="my-1">
                              Cadastrar uma nova Conta
                            </Button>
                          </div>
                        </TabPanel>
                      </Container>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LivePreviewExample;
