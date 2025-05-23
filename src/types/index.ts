export interface Opportunity {
  id: string;
  title: string;
  organization: string;
  location: string;
  datePosted: string;
  category?: string;
  description?: string;
  duration?: string;
  skillsRequired?: string;
  contactEmail?: string;
}
