// Content.js
import React from 'react';
import './Content.scss';
import EditChangePassword from './ChangePassword/index';
import EditProfile from './EditAccount';
import HelpCenter from './Help';


const Content = ({ tab }) => {
  
  const renderTabContent = (tabIndex) => {
    switch (tabIndex) {
      case 0:
        return <Component1 />;
      case 1:
        return <Component2 />;
      case 2:
        return <Component3 />;
      
      default:
        return null;
    }
  };

  return (
    <div className="content">
      {renderTabContent(tab)}
    </div>
  );
};

const Component1 = () => {
  return <EditProfile/>;
};

const Component2 = () => {
  return <EditChangePassword/>;
};

const Component3 = () => {
  return <HelpCenter/>;
};


export default Content;
