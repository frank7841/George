export type ProgramCategory = "prep" | "church" | "reception";

export interface ProgramItem {
  time: string;
  activity: string;
  details: string;
  category: ProgramCategory;
}

// Saturday, 22 August — Wedding Day Program
export const program: ProgramItem[] = [
  { time: "6:30 AM", activity: "Morning Preparations", details: "Groom's team breakfast & preparations; Bride's team arrival", category: "prep" },
  { time: "8:30 AM", activity: "Departure to Church", details: "Bride / Bridal team → St Joseph Catholic Church, Kahawa Sukari", category: "prep" },
  { time: "10:00 AM – 12:00 PM", activity: "Wedding Mass", details: "St Joseph Catholic Church, Kahawa Sukari — Bride & Groom; Priest; Bridal Team; Congregation", category: "church" },
  { time: "12:00 – 12:30 PM", activity: "Church Photography", details: "B&G + Priest; Best Couple; Bridal Team; Parents; Family; Choir", category: "church" },
  { time: "12:45 PM", activity: "Departure to Reception", details: "Bridal team / Bride & Groom → Urafiki Carovana School", category: "church" },
  { time: "1:30 PM", activity: "Reception Begins", details: "Urafiki Carovana School — Guests seated; lunch served", category: "reception" },
  { time:  "1:30 PM", activity: "Bridal team, B&G photo session", detail:"Bridal team, B&G ", category:"reception" }, 
  { time: "2:45 PM", activity: "Bridal Entertainment", details: "MC / Bridal team performances", category: "reception" },
  { time: "4:00 – 5:30 PM", activity: "Speeches & Gifts", details: "Bride's side, Groom's side; other speakers — MC / Guests", category: "reception" },
  { time: "5:30 – 6:15 PM", activity: "Cake Cutting & Closing", details: "Bride & Groom / MC — Vote of Thanks & Prayer", category: "reception" },
];

export default program;
