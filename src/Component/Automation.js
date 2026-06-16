import React, { useState } from 'react';
import '../css/automation.css';
import { FaThermometerHalf, FaDoorOpen } from 'react-icons/fa';
import { MdMotionPhotosOff } from 'react-icons/md';
import { BiRun } from 'react-icons/bi';
import Scenerio from './Scenerio';
import { ChevronLeft } from 'lucide-react';


const Automation = () => {
  const [activeTab, setActiveTab] = useState('activeAuto');
  

  const automations = [
  {
    icon: <BiRun size={24} />,
    title: 'Hallawy Motion After 11Pm',
    description: 'If motion in hall after 11PM, turn on hallway lights',
  },
  {
    icon: <FaThermometerHalf size={24} />,
    title: 'High Temp Alert',
    description: 'If temperature > 30 C, Send notification',
  },
  {
    icon: <FaDoorOpen size={24} />,
    title: 'Front Door Open',
    description: 'If door opens, lock after 1min',
  },
  {
    icon: <MdMotionPhotosOff size={24} />,
    title: 'No Motion Lights Off',
    description: 'If no motion 10 min, turn off lights',
  },
];
  return (
    <div className="automation-wrapper">
      <div className="breadcrumb">
        <ChevronLeft size={16} />
        <span>Dashboard</span>
          <span>{'>'}</span>
          <span className="active">Automation</span></div>


      <div className='tabs'>
      <button className={activeTab === 'activeAuto' ? 'active' : ''}
          onClick={() => setActiveTab('activeAuto')}
        >Active Automations</button>
        <button className={activeTab === 'activeScenario' ? 'active' : ''}
          onClick={() => setActiveTab('activeScenario')}
        >Automation Scenarios</button>

      </div>
      {/* <div className="automation-header">
        <h2>Active Automations</h2>
        <h2>Automation Scenarios</h2>
      </div> */}
{activeTab === 'activeAuto' && (
      <div className="automation-list">
        {automations.map((item, index) => (
          <div className="automation-card" key={index}>
            <div className="automation-icon">{item.icon}</div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
)}
{activeTab === 'activeScenario' && <Scenerio />
}


    </div>
  );
};

export default Automation;
