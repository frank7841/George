export type ProgramCategory = "prep" | "church" | "reception";

export interface ProgramItem {
  time: string;
  activity: string;
  details: string;
  category: ProgramCategory;
}

// Saturday, 22 August — Wedding Day Program
export const program: ProgramItem[] = [
  { time: "6:00 AM", activity: "Décoration ", details: "Venue setup", category: "prep" },
  { time: "6:30 AM", activity: "Bride is Picked", details: "Bridal team ready", category: "prep" },
  { time: "8:30 AM", activity: "Departure from Bride's Home", details: "Bridal team departs", category: "prep" },
  { time: "9:00 AM", activity: "Arrival at Church", details: "St Joseph Catholic Church", category: "church" },
  { time: "10:00 AM – 12:00 PM", activity: "Wedding Mass", details: "St Joseph Catholic Church, Kahawa Sukari", category: "church" },
  { time: "12:00 – 12:30 PM", activity: "Church Photography", details: "Photos at the church", category: "church" },
  { time: "12:45 PM", activity: "Departure for Reception", details: "Heading to Urafiki Carovana School", category: "church" },
  { time: "1:15 – 2:15 PM", activity: "Photo Session", details: "Bridal team & Couple", category: "reception" },
  { time: "1:30 PM", activity: "Arrival at Reception", details: "Urafiki Carovana School", category: "reception" },
  { time: "1:30 – 2:30 PM", activity: "Lunch for Guests", details: "Reception lunch", category: "reception" },
  { time: "2:45 PM", activity: "Bridal Entertainment", details: "Celebrations begin", category: "reception" },
  { time: "4:00 – 5:30 PM", activity: "Speeches & Gifts", details: "Speeches from family and friends", category: "reception" },
  { time: "5:30 – 6:15 PM", activity: "Cake Cutting", details: "Cutting of the wedding cake", category: "reception" },
  { time: "6:15 PM", activity: "Vote of Thanks & Closing Prayer", details: "Final remarks and prayer", category: "reception" },
];

export default program;
