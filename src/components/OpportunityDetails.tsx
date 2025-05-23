import React from "react";
import { Opportunity } from "../types";

interface OpportunityDetailsProps {
  opportunity: Opportunity;
  onClose: () => void;
}

const OpportunityDetails: React.FC<OpportunityDetailsProps> = ({
  opportunity,
  onClose,
}) => {
  return (
    <div className="opportunity-details-overlay">
      <div className="opportunity-details">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{opportunity.title}</h2>
        <p>
          <strong>Organization:</strong> {opportunity.organization}
        </p>
        <p>
          <strong>Location:</strong> {opportunity.location}
        </p>
        <p>
          <strong>Date Posted:</strong> {opportunity.datePosted}
        </p>
        <p>
          <strong>Description:</strong> {opportunity.description}
        </p>
        <p>
          <strong>Duration:</strong> {opportunity.duration}
        </p>
        <p>
          <strong>Skills Required:</strong> {opportunity.skillsRequired}
        </p>
        <p>
          <strong>Contact Email:</strong> {opportunity.contactEmail}
        </p>
      </div>
    </div>
  );
};

export default OpportunityDetails;
