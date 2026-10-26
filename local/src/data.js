// ---- EDIT ME: cities, filter options and listings ----
// Put a photo for each city in /public/cities/ (e.g. dehradun.jpg) and it will show as the background.
export const CITIES = [
  { id: "dehradun", name: "Dehradun", tagline: "Valley town, mountain air, quiet lanes.", image: "/cities/dehradun.jpg", localities: ["Rajpur Road", "Clement Town", "Ballupur", "Premnagar"] },
  { id: "bengaluru", name: "Bengaluru", tagline: "Tech corridors and tree-lined neighbourhoods.", image: "/cities/bengaluru.jpg", localities: ["Koramangala", "HSR Layout", "Indiranagar", "Whitefield"] },
  { id: "pune", name: "Pune", tagline: "Student city with a startup pulse.", image: "/cities/pune.jpg", localities: ["Kothrud", "Viman Nagar", "Hinjewadi", "Baner"] },
  { id: "delhi", name: "Delhi", tagline: "Fast, layered and always connected by metro.", image: "/cities/delhi.jpg", localities: ["Mukherjee Nagar", "Laxmi Nagar", "Saket", "Dwarka"] },
];

export const TYPES = ["PG", "Flat", "Single room", "Hostel"];
export const VIBES = ["Quiet", "Lively", "Near market", "Near metro/transit", "Green & open"];
export const FOR = ["Student", "Working professional", "Anyone"];

export const LISTINGS = [
  { id: 1, city: "dehradun", title: "Sunlit PG near ISBT", locality: "Premnagar", type: "PG", price: 6500, vibe: "Near market", for: "Students", furnished: true, beds: 1, desc: "Meals included, wifi, 10 min walk to the bus stand." },
  { id: 2, city: "dehradun", title: "1BHK on Rajpur Road", locality: "Rajpur Road", type: "Flat", price: 14000, vibe: "Lively", for: "Working professionals", furnished: true, beds: 1, desc: "Balcony, parking, cafés and offices within walking distance." },
  { id: 3, city: "dehradun", title: "Quiet room in Clement Town", locality: "Clement Town", type: "Single room", price: 5000, vibe: "Quiet", for: "Anyone", furnished: false, beds: 1, desc: "Peaceful lane, great for studying, near the cantonment." },
  { id: 4, city: "dehradun", title: "Hill-view hostel", locality: "Ballupur", type: "Hostel", price: 4000, vibe: "Green & open", for: "Students", furnished: true, beds: 1, desc: "Shared rooms, study hall, mess and 24x7 water." },
  { id: 5, city: "bengaluru", title: "Co-living near Koramangala", locality: "Koramangala", type: "PG", price: 15000, vibe: "Lively", for: "Working professionals", furnished: true, beds: 1, desc: "Housekeeping, gym, high-speed wifi." },
  { id: 6, city: "bengaluru", title: "2BHK in HSR Layout", locality: "HSR Layout", type: "Flat", price: 32000, vibe: "Near market", for: "Anyone", furnished: false, beds: 2, desc: "Good for sharing, close to parks and the main market." },
  { id: 7, city: "bengaluru", title: "Budget room in Whitefield", locality: "Whitefield", type: "Single room", price: 9000, vibe: "Near metro/transit", for: "Working professionals", furnished: true, beds: 1, desc: "Short walk to the metro and tech parks." },
  { id: 8, city: "pune", title: "Student PG in Kothrud", locality: "Kothrud", type: "PG", price: 7500, vibe: "Quiet", for: "Students", furnished: true, beds: 1, desc: "Near colleges, tiffin service available." },
  { id: 9, city: "pune", title: "Studio in Baner", locality: "Baner", type: "Flat", price: 22000, vibe: "Lively", for: "Working professionals", furnished: true, beds: 1, desc: "Modern studio near cafés and the expressway." },
  { id: 10, city: "delhi", title: "Shared room, Mukherjee Nagar", locality: "Mukherjee Nagar", type: "Single room", price: 7000, vibe: "Near market", for: "Students", furnished: false, beds: 1, desc: "Coaching hub, libraries and food stalls nearby." },
  { id: 11, city: "delhi", title: "1BHK in Saket", locality: "Saket", type: "Flat", price: 28000, vibe: "Near metro/transit", for: "Working professionals", furnished: true, beds: 1, desc: "Next to the metro, malls and hospitals." },
  { id: 12, city: "delhi", title: "Girls' hostel, Dwarka", locality: "Dwarka", type: "Hostel", price: 8000, vibe: "Quiet", for: "Anyone", furnished: true, beds: 1, desc: "Secure campus-style hostel with meals and CCTV." },
];

// Starting values for the filter form (used by Home and Listings pages)
export const EMPTY_FILTERS = { city: "", locality: "", type: "", vibe: "", who: "", budget: 20000, furnished: false };