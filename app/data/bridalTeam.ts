export interface BridalMember {
  id: number;
  name: string;
  role: string;
  photo: string | null;
}

// FILLER DATA (17 members) — replace `name` and `photo` for each.
// `photo: null` falls back to an initials placeholder in <BridalTeam />.
export const bridalTeam: BridalMember[] = [
  { id: 0, name: "George Ndun'gu Kimani", role: "Groom", photo: null },
  { id: 1, name: "Margaret Wanjiku", role: "Bride", photo: null },
  { id: 2, name: "Winnie Wanjiru", role: "Matron", photo: null },
  { id: 3, name: "James King'ori", role: "Best Man", photo: null },
  { id: 4, name: "Nancy Mwaniki Wachira", role: "Best Lady", photo: null },
  { id: 5, name: "Lydia Ndunge", role: "Bridesmaid", photo: null },
  { id: 6, name: "Elizabeth Nyambura", role: "Bridesmaid", photo: null },
  { id: 7, name: "Millicent Wanjiku", role: "Bridesmaid", photo: null },
  { id: 8, name: "Esther Riungu", role: "Bridesmaid", photo: null },
  { id: 9, name: "Esther Oduor", role: "Bridesmaid", photo: null },
  { id: 10, name: "Mercy Magak", role: "Bridesmaid", photo: null },
  { id: 11, name: "Jane Kihara", role: "Bridesmaid", photo: null },
  { id: 12, name: "Ann Muchiri ", role: "Bridesmaid", photo: null },
  { id: 13, name: "Esther Kirigo", role: "Bridesmaid", photo: null },
  { id: 15, name: "Sally Buuri", role: "Bridesmaid", photo:null},
  { id: 16, name: "Felister Wanjiru", role: "Bridesmaid", photo: null},
  { id: 17, name: "Kelvin Mugendi", role: "Groomsman", photo:null},
  { id: 18, name: "David Muchai", role: "Groomsman", photo:null },
  { id: 19, name: "Frankline Simiyu", role:"Groomsman",photo:null},
  { id: 20, name: "Peter Ngugi", role:"Groomsman", photo:null},
  { id: 21, name: "Jeff Ndegwa", role: "Groomsman", photo:null},
  { id: 22, name: "james Madambo", role:"Groomsman", photo:null},
  { id: 23, name: "Ashney Mumbi", role: "Flower Girl", photo: null },
  { id: 24, name: "Maryanne Njeri", role: "Flower Girl", photo: null },
  { id: 25, name: "Bianca Wairimu", role: "Flower Girl", photo: null },
  { id: 26, name: "Emelda Muthni", role: "Flower Girl", photo: null },
  { id: 27, name: "Arianna Mbithe", role: "Flower Girl", photo: null },
  { id: 28, name: "Victoria", role: "Flower Girl", photo: null },
  { id: 29, name: "Gabriela Njeri", role: "Flower Girl", photo: null },
  { id: 30, name: "Mary Grace ", role: "Flower Girl", photo: null },
  { id: 31, name: "Diana Wairimu", role: "Flower Girl", photo: null },
  { id: 32, name: "Emmanuella Muthoni", role: "Flower Girl", photo: null },
  { id: 33, name: "Ryan", role: "Page Boy", photo: null },
  { id: 34, name: "Grein", role: "Page Boy", photo:null},
  { id: 35, name: "John Paul", role: "Page Boy", photo:null },
  { id: 37, name: "Maogan", role: "Page Boy", photo:null},
  { id: 38, name: "Leo", role :"Page Boy ", photo:"null"}, 
  { id: 39, name: "Master of Ceremonies", role: "MC", photo: null },
];

export default bridalTeam;
