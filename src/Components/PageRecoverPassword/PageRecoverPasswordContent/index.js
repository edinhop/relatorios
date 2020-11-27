import React from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';

import {
  Grid,
  InputAdornment,
  Card,
  Button,
  TextField,
} from '@material-ui/core';

import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';

import hero3 from '../../../assets/images/hero-bg/hero-3.jpg';

export default function LivePreviewExample() {
  const [email, setEmail] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // eslint-disable-next-line
  let formErrors = false;

    if (!isEmail) {
      formErrors = true;
      toast.error('Coloque um E-mail Válido!');
    }
  }
  return (
    <>
      <div className="app-wrapper bg-white">
        <div className="app-main">
          <div className="app-content p-0">
            <div className="app-inner-content-layout--main">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div className="bg-composed-wrapper--content">
                  <div className="hero-wrapper bg-composed-wrapper bg-arielle-smile min-vh-100">
                    <div className="flex-grow-1 w-100 d-flex align-items-center">
                      <div
                        className="bg-composed-wrapper--image"
                        style={{ backgroundImage: `url(${hero3})` }}
                      />
                      <div className="bg-composed-wrapper--bg bg-night-sky opacity-5" />
                      <div className="bg-composed-wrapper--content text-center py-5">
                        <Grid
                          item
                          xl={5}
                          lg={6}
                          md={10}
                          sm={12}
                          className="mx-auto text-center text-white">
                          <h1 className="display-2 mb-3 px-4 font-weight-bold">
                            Recuperar Senha
                          </h1>
                          <h3 className="font-size-lg line-height-sm font-weight-light d-block px-3 mb-5 text-white-50">
                            Digite seu nome de usuário ou endereço de e-mail e
                            enviaremos um link para redefinir sua senha.
                          </h3>
                          <Card className="p-5 mx-5 text-center">
                            <TextField
                              fullWidth
                              className="mt-0"
                              value={email}
                              onChange={e => setEmail(e.target.value)}
                              type="email"
                              margin="dense"
                              variant="outlined"
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <MailOutlineTwoToneIcon />
                                  </InputAdornment>
                                ),
                              }}
                            />
                            <Button
                              variant="contained"
                              className="mt-4"
                              type="submit"
                              onSubmit={handleSubmit}
                              size="large"
                              color="primary">
                              <span className="btn-wrapper--label">
                                Redefinir Senha
                              </span>
                            </Button>
                          </Card>
                        </Grid>
                      </div>
                    </div>
                    <div className="hero-footer pb-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
