import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { RiDashboardFill as DashboardIcon } from 'react-icons/ri';
import { GiPencilBrush as BrushIcon } from 'react-icons/gi';
import { FiSettings as SettingsIcon } from 'react-icons/fi';
import { FaUser as UserIcons } from 'react-icons/fa';
import { AuthContext } from 'provider/auth';
import { NavbarContainer, PrimaryIconContainer, IconWrapper, AvatarWrapper } from './navbar.styles';

function Navbar(): JSX.Element {
  const { user, signOut } = useContext(AuthContext);

  console.log(user?.photoURL);

  return (
    <NavbarContainer>
      <PrimaryIconContainer>
        <NavLink to="/dashboard" activeClassName="active">
          <IconWrapper>
            <DashboardIcon />
          </IconWrapper>
        </NavLink>
        <NavLink to="/drawing-board" activeClassName="active">
          <IconWrapper>
            <BrushIcon />
          </IconWrapper>
        </NavLink>
        <NavLink to="/settings" activeClassName="active">
          <IconWrapper>
            <SettingsIcon />
          </IconWrapper>
        </NavLink>
      </PrimaryIconContainer>
      <div>
        <AvatarWrapper photoUrl={user?.photoURL} onClick={signOut}>
          <UserIcons />
        </AvatarWrapper>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
