import React, { useState } from "react";
import { Opportunity } from "../types";

interface OpportunityManagerProps {
  onAddOpportunity: (opportunity: Opportunity) => void;
}

const OpportunityManager: React.FC<OpportunityManagerProps> = ({
  onAddOpportunity,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    organization: "",
    location: "",
    datePosted: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddOpportunity({ ...formData, id: Date.now().toString() });
    setFormData({ title: "", organization: "", location: "", datePosted: "" });
  };

  return (
    <form className="opportunity-manager" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="organization"
        placeholder="Organization"
        value={formData.organization}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="datePosted"
        value={formData.datePosted}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Opportunity</button>
    </form>
  );
};

export default OpportunityManager;
