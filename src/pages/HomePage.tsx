import React, { useState } from "react";
import OpportunityList from "../components/OpportunityList";
import OpportunityFilter from "../components/OpportunityFilter";
import OpportunityManager from "../components/OpportunityManager";
import OpportunityDetails from "../components/OpportunityDetails"; // Import the modal
import { Opportunity } from "../types";

const HomePage: React.FC = () => {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [selectedOpportunity, setSelectedOpportunity] =
    useState<Opportunity | null>(null); // State for modal

  const filteredOpportunities = opportunities.filter(
    (opportunity) =>
      (opportunity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opportunity.organization
          .toLowerCase()
          .includes(searchQuery.toLowerCase())) &&
      (category === "" || opportunity.category === category)
  );

  const handleAddOpportunity = (newOpportunity: Opportunity) => {
    setOpportunities([...opportunities, newOpportunity]);
  };

  return (
    <div className="home-page">
      <OpportunityFilter
        searchQuery={searchQuery}
        category={category}
        onSearchChange={setSearchQuery}
        onCategoryChange={setCategory}
      />
      <OpportunityManager onAddOpportunity={handleAddOpportunity} />
      <OpportunityList
        opportunities={filteredOpportunities}
        onOpportunityClick={(opportunity) => {
          console.log("Selected Opportunity:", opportunity); // Debugging
          setSelectedOpportunity(opportunity);
        }}
      />
      {selectedOpportunity && (
        <OpportunityDetails
          opportunity={selectedOpportunity}
          onClose={() => setSelectedOpportunity(null)} // Close modal
        />
      )}
    </div>
  );
};

export default HomePage;
