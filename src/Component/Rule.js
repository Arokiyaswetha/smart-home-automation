import React, { useState } from 'react';
import '../css/rule.css'; // Assuming your styles are in this file
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CreateRule = () => {
  const navigate = useNavigate();

  const [rule, setRule] = useState({
    trigger: '',
    condition: '',
    action: ''
  });

  const handleChange = (e) => {
    setRule({ ...rule, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!rule.trigger || !rule.condition || !rule.action) {
      alert('Please fill out all fields.');
      return;
    }

    // Normally you'd send this to backend or update context/state
    console.log('Rule saved:', rule);

    alert('Rule saved successfully!');
    navigate('/automation'); // Redirect to automation page or anywhere
  };

  const handleCancel = () => {
    navigate('/automation');
  };

  return (
    <div className="create-rule-container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <ChevronLeft size={16} />
        <span onClick={() => navigate('/')}>Dashboard</span>
        <span>{'>'}</span>
        <span onClick={() => navigate('/automation')}>Automation scenarios</span>
        <span>{'>'}</span>
        <span className="breadcrumb-current">Create rules</span>
      </div>

      <h2>Create Automation Rule</h2>

      <div className="form-section">
        <h3>Trigger</h3>
        <p>Select Trigger</p>
        <textarea
          name="trigger"
          placeholder="Choose: Time, Motion, Voice, Temp, Door"
          value={rule.trigger}
          onChange={handleChange}
        />
      </div>

      <div className="form-section">
        <h3>Condition</h3>
        <p>Add Condition</p>
        <textarea
          name="condition"
          placeholder="e.g. If temperature > 30 C"
          value={rule.condition}
          onChange={handleChange}
        />
      </div>

      <div className="form-section">
        <h3>Action</h3>
        <p>Select Action</p>
        <textarea
          name="action"
          placeholder="e.g. Turn on light, Lock door"
          value={rule.action}
          onChange={handleChange}
        />
      </div>

      <div className="button-row">
        <button className="save-btn" onClick={handleSave}>Save Rule</button>
        <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default CreateRule;
