export type ProgramCategory = "prep" | "church" | "reception";

export interface ProgramItem {
  time: string;
  activity: string;
  details: string;
  category: ProgramCategory;
}

// Saturday, 22 August — Wedding Day Program
export const program: ProgramItem[] = [
  { time: "3:30 AM", activity: "Groom's family arrival at designated residence", details: "Groom's home; photographer to cover groom's home", category: "prep" },
  { time: "6:30 AM", activity: "Breakfast / Morning Preparations", details: "Groom's team; catering", category: "prep" },
  { time: "7:15 AM", activity: "Arrival at Bride's Home", details: "Bride / Bridal team", category: "prep" },
  { time: "8:30 AM", activity: "Departure from Bride's Home", details: "Bride / Bridal team → Church", category: "prep" },
  { time: "9:00 AM", activity: "Arrival at Church", details: "Bride / Bridal team at St Joseph Catholic Church, Kahawa Sukari", category: "church" },
  { time: "10:00 AM – 12:00 PM", activity: "Wedding Mass", details: "St Joseph Catholic Church, Kahawa Sukari — Bride & Groom; Priest; Bridal Team; Congregation", category: "church" },
  { time: "12:00 – 12:30 PM", activity: "Photography at Church", details: "Bride & Groom and selected groups", category: "church" },
  { time: "12:05 PM", activity: "Reception MC Takes Over / Coordinates Transition", details: "MC to guide transition from church to photo session and reception", category: "church" },
  { time: "After Mass", activity: "Church Photography", details: "Proposed shots: B&G + Priest; Best Couple; Priest; Bridal Team; Bride's Parents; Groom's Parents; B&G + Catechist/colleagues; B&G + Choir; B&G + Family; B&G + Jumuiya", category: "church" },
  { time: "12:45 PM", activity: "Departure for Reception from Church", details: "Bridal team / Bride & Groom", category: "church" },
  { time: "1:15 – 2:15 PM", activity: "Photo Session", details: "Bridal team / Bride & Groom; photography team", category: "reception" },
  { time: "1:30 PM", activity: "Arrival at Reception", details: "Urafiki Carovana School — Guests to be seated; reception programme begins", category: "reception" },
  { time: "1:30 – 2:30 PM", activity: "Lunch for Guests", details: "Urafiki Carovana School — Catering", category: "reception" },
  { time: "2:45 PM", activity: "Bridal Entertainment", details: "MC / Bridal team", category: "reception" },
  { time: "4:00 – 5:30 PM", activity: "Speeches & Gifts", details: "Bride's side, Groom's side; other speakers — MC / Guests / Gift team", category: "reception" },
  { time: "5:30 – 6:15 PM", activity: "Cake Cutting", details: "Bride & Groom / MC", category: "reception" },
  { time: "6:15 PM", activity: "Vote of Thanks & Prayer", details: "Closing of reception programme", category: "reception" },
];

export default program;
