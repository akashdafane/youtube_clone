import React from 'react';
import { Image } from '../index';
import {
  AccountCircleIcon,
  AppsIcon,
  MenuSharpIcon,
  NotificationsIcon,
  SearchIcon,
  VideoCallIcon,
} from '../../constants/iconConstants';
import '../../styles/header.css';
import { constants } from '../../constants/constants';

const Header = () => {
  const { placeholder } = constants?.header || {};
  const { search } = placeholder;
  return (
    <div className="main_header">
      <div className="header-left">
        <MenuSharpIcon />
        <Image
          className="header_logo"
          src="https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png"
        />
      </div>
      <div className="header_input">
        <input type="text" placeholder={search} />
        <SearchIcon className="header_searchButton" />
      </div>
      <div className="header_icons">
        <VideoCallIcon className="header_icon" />
        <AppsIcon className="header_icon" />
        <NotificationsIcon className="header_icon" />
        <AccountCircleIcon className="header_icon" />
      </div>
    </div>
  );
};

export default Header;
