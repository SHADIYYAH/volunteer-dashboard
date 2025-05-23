import React from "react";
import { Opportunity } from "../types";

interface OpportunityListProps {
  opportunities: Opportunity[];
  onOpportunityClick: (opportunity: Opportunity) => void; // New prop
}

const OpportunityList: React.FC<OpportunityListProps> = ({
  opportunities,
  onOpportunityClick,
}) => {
  return (
    <div className="opportunity-list">
      {opportunities.map((opportunity) => (
        <div
          key={opportunity.id}
          className="opportunity-card"
          onClick={() => onOpportunityClick(opportunity)} // Handle click
        >
          <h3>{opportunity.title}</h3>
          <p>Organization: {opportunity.organization}</p>
          <p>Location: {opportunity.location}</p>
          <p>Date Posted: {opportunity.datePosted}</p>
        </div>
      ))}
    </div>
  );
};

export default OpportunityList;
