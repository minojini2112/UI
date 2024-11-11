// ViewCampaign.jsx
import React from 'react';
import CampaignOverview from './CampaignOverview';
import KeyMatrics from './Keymatrics';
import AudienceInsights from './AudienceInsights';
import Feedback from './Feedback';
import BudgetAndSpendTracking from './BudgetAndSpendTracking';
import CampaignReport from "./CampaignReport";
import CampaignAction from "./CampaignAction";
import ContentDetails from "./CampaignDetails"
import Performance from "./Performance";
import { Margin } from '@mui/icons-material';

const ViewCampaign = () => {
  return (
    <div >
      <CampaignOverview /> 
      <KeyMatrics/>
      <AudienceInsights />
      <Feedback/>
      <BudgetAndSpendTracking />
      <ContentDetails />
      <Performance/>
      <CampaignReport />
      <CampaignAction />
    </div>
  );
};

export default ViewCampaign;
