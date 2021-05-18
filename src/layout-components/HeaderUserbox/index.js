import React, { Fragment, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Avatar,
  Box,
  Badge,
  Menu,
  Button,
  List,
  ListItem,
  Divider,
} from '@material-ui/core';

import avatar4 from '../../assets/images/avatars/avatar4.jpg';
import { withStyles } from '@material-ui/core/styles';
import AuthContext from 'context/auth';

const StyledBadge = withStyles({
  badge: {
    backgroundColor: 'var(--success)',
    color: 'var(--success)',
    boxShadow: '0 0 0 2px #fff',
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
})(Badge);
export default function HeaderUserbox() {
  const history = useHistory();
  const {
    user: { user },
    logout,
  } = useContext(AuthContext);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const hendleLogout = () => {
    logout();
    history.replace('/login');
  };

  return (
    <Fragment>
      <Button
        color="inherit"
        onClick={handleClick}
        className="text-capitalize px-3 text-left btn-inverse d-flex align-items-center">
        <Box>
          <StyledBadge
            overlap="circle"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            variant="dot">
            <Avatar sizes="44" alt="Dustin Watson" src={avatar4} />
          </StyledBadge>
        </Box>
        <div className="d-none d-xl-block pl-3">
          <div className="font-weight-bold pt-2 line-height-1">{user.name}</div>
          <span className="text-white-50">{user.sub}</span>
        </div>
        <span className="pl-1 pl-xl-3">
          <FontAwesomeIcon icon={['fas', 'angle-down']} className="opacity-5" />
        </span>
      </Button>

      <Menu
        anchorEl={anchorEl}
        keepMounted
        getContentAnchorEl={null}
        open={Boolean(anchorEl)}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        onClose={handleClose}
        className="ml-2">
        <div className="dropdown-menu-right dropdown-menu-lg overflow-hidden p-0">
          <List className="text-left bg-transparent d-flex align-items-center flex-column pt-0">
            <Box>
              <StyledBadge
                overlap="circle"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                variant="dot">
                <Avatar sizes="44" alt="Dustin Watson" src={avatar4} />
              </StyledBadge>
            </Box>
            <div className="pl-3 ">
              <div className="font-weight-bold text-center pt-2 line-height-1">
                {user.name}
              </div>
              <span className="text-black-50 text-center">{user.sub}</span>
            </div>
            <Divider className="w-100 mt-2" />
            <ListItem button>Minha Conta</ListItem>
            <ListItem button onClick={hendleLogout}>
              Logout
            </ListItem>
          </List>
        </div>
      </Menu>
    </Fragment>
  );
}
