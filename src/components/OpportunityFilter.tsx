import React from "react";

interface OpportunityFilterProps {
  searchQuery: string;
  category: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
}

const OpportunityFilter: React.FC<OpportunityFilterProps> = ({
  searchQuery,
  category,
  onSearchChange,
  onCategoryChange,
}) => {
  return (
    <div className="opportunity-filter">
      <input
        type="text"
        placeholder="Search by title or organization"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Education">Education</option>
        <option value="Health">Health</option>
        <option value="Environment">Environment</option>
      </select>
    </div>
  );
};

export default OpportunityFilter;
