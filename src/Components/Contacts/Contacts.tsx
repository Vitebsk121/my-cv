import './Contacts.scss';

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import TelegramIcon from '@mui/icons-material/Telegram';
import React from 'react';

import useTypedSelector from '../../hooks/useTypedSelector';

type ContactsProps = {};

const Contacts: React.FC<ContactsProps> = () => {
  const { theme } = useTypedSelector((state) => state.appState);
  return (
    <>
      <h3 className="title">Контакты</h3>
      <h4 className="title">
        <a className="subtitle link" href="tel:+79778480811">
          <PhoneIphoneIcon fontSize="small" color={theme === 'lightTheme' ? 'primary' : 'action'} />
          <p className="link-title">+7 (977) 848-08-11</p>
        </a>
      </h4>
      <h4 className="title">
        <a className="subtitle link" href="mailto:Alexandr.Demchenko@list.ru">
          <AlternateEmailIcon fontSize="small" color={theme === 'lightTheme' ? 'primary' : 'action'} />
          <p className="link-title">Alexandr.Demchenko@list.ru</p>
        </a>
      </h4>
      <h4 className="title">
        <a className="subtitle link" rel="noreferrer" target="_blank" href="https://t.me/Alexandr_Demchenko">
          <TelegramIcon fontSize="small" color={theme === 'lightTheme' ? 'primary' : 'action'} />
          <p className="link-title">Alexandr Demchenko</p>
        </a>
      </h4>
      <h4 className="title">
        <div className="subtitle link">
          <HomeWorkIcon fontSize="small" color={theme === 'lightTheme' ? 'primary' : 'action'} />
          <p className="link-title">Москва</p>
        </div>
      </h4>
    </>
  );
};

export default Contacts;
