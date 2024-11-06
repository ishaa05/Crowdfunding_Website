import React, { useState } from 'react';
import RaiseFunds from './RaiseFunds';
import Campaigns from './Campaigns';

const Parent = () => {
  const [campaigns, setCampaigns] = useState([]);

  const addCampaign = (newCampaign) => {
    setCampaigns([...campaigns, newCampaign]);
  };

  return (
    <div>
      <RaiseFunds addCampaign={addCampaign} />
      <Campaigns campaigns={campaigns} />
    </div>
  );
};

export default Parent;
