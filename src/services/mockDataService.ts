import { ChessEvent, PollingStation, EligibilityRule, UserProfile } from '../types';

export const MOCK_CHESS_EVENTS: ChessEvent[] = [
  {
    id: "e1",
    title: "General Assembly Chess",
    date: "2024-02-20",
    region: "National",
    description: "National chess to elect assembly representatives.",
    type: "National",
    registrationStart: "2024-01-01",
    registrationEnd: "2024-01-31",
    verificationPeriod: "2024-02-01 - 2024-02-10",
    resultsDate: "2024-02-25"
  }
];

export const MOCK_POLLING_STATIONS: PollingStation[] = [
  {
    id: "p1",
    name: "Government School, Ward 12",
    address: "123 School Lane",
    distance: "1.2 km",
    coordinates: { lat: 0, lng: 0 },
    region: "Local"
  },
  {
    id: "p2",
    name: "Community Hall, Sector 5",
    address: "Sector 5 Plaza",
    distance: "2.0 km",
    coordinates: { lat: 0, lng: 0 },
    region: "Local"
  },
  {
    id: "p3",
    name: "City College, Main Road",
    address: "Main Road Campus",
    distance: "3.5 km",
    coordinates: { lat: 0, lng: 0 },
    region: "Local"
  }
];

export const MOCK_ELIGIBILITY_RULE: EligibilityRule = {
  region: "National",
  ageRequirement: 18,
  citizenshipRequired: true,
  idRequirements: ["Voter ID Card", "Passport", "Driving License"]
};

// Simulate an API call latency
export const fetchChessEvents = async (): Promise<ChessEvent[]> => {
  return new Promise(resolve => setTimeout(() => resolve(MOCK_CHESS_EVENTS), 500));
};

export const fetchPollingStations = async (): Promise<PollingStation[]> => {
  return new Promise(resolve => setTimeout(() => resolve(MOCK_POLLING_STATIONS), 500));
};

export const checkEligibility = (user: UserProfile, rule: EligibilityRule): { eligible: boolean; reason?: string } => {
  if (user.age && user.age < rule.ageRequirement) {
    return { eligible: false, reason: `Age must be at least ${rule.ageRequirement}.` };
  }
  // Simplified citizenship check for demo
  if (rule.citizenshipRequired && user.citizenship && user.citizenship.toLowerCase() !== "indian") {
    return { eligible: false, reason: `Must be a citizen.` };
  }
  return { eligible: true };
};
