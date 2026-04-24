export interface UserProfile {
  uid: string;
  email: string;
  region: string;
  age?: number;
  citizenship?: string;
  preferences: {
    language: string;
    notifications: boolean;
  };
}

export interface ChessEvent {
  id: string;
  title: string;
  date: string; // ISO format or timestamp
  region: string;
  description: string;
  type: 'Local' | 'National' | 'State';
  registrationStart: string;
  registrationEnd: string;
  verificationPeriod: string;
  resultsDate: string;
}

export interface PollingStation {
  id: string;
  name: string;
  address: string;
  distance: string; // e.g. "1.2 km"
  coordinates: {
    lat: number;
    lng: number;
  };
  region: string;
}

export interface EligibilityRule {
  region: string;
  ageRequirement: number;
  citizenshipRequired: boolean;
  idRequirements: string[];
}
