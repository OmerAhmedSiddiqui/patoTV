
import React, { useState } from 'react';
import './Tab.scss';

const Tabs = ({ tabs, onSelect }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (index) => {
    setSelectedTab(index);
    onSelect(index);
  };

  return (
    <div className="tabs">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`tab ${selectedTab === index ? 'active' : ''}`}
          onClick={() => handleTabClick(index)}
        >
          
          <div className='tabicon'>{tab.icon}</div>
          {tab.label}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
