import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CITIES, LISTINGS, EMPTY_FILTERS } from "../data";
import CityBg from "../components/CityBg";
import Filters from "../components/Filters";
import ListingCard from "../components/ListingCard";

export default function Listings() {
  const [params] = useSearchParams();

  // Start with the filters that came in through the URL (from Home or the footer)
  const [f, setF] = useState({
    ...EMPTY_FILTERS,
    ...Object.fromEntries(params),
    budget: params.get("budget") || EMPTY_FILTERS.budget,
    furnished: params.get("furnished") === "true",
  });

  const city = CITIES.find((c) => c.id === f.city);

  // Keep only the homes that pass every active filter
  const results = LISTINGS.filter(
    (l) =>
      (!f.city || l.city === f.city) &&
      (!f.locality || l.locality === f.locality) &&
      (!f.type || l.type === f.type) &&
      (!f.vibe || l.vibe === f.vibe) &&
      (!f.who || l.for === f.who || l.for === "Anyone") &&
      l.price <= f.budget &&
      (!f.furnished || l.furnished)
  );

  return (
    <>
      <section className="banner">
        <CityBg city={city} />
        <div className="wrap">
          <h1>{city ? `Homes in ${city.name}` : "All homes"}</h1>
          <p>{city ? city.tagline : "Pick a city to see its feel."}</p>
        </div>
      </section>

      <div className="wrap layout">
        <aside className="card side">
          <Filters f={f} setF={setF} />
        </aside>
        <div>
          <p className="muted">{results.length} home{results.length !== 1 && "s"} found</p>
          {results.length > 0 ? (
            results.map((l) => <ListingCard key={l.id} listing={l} />)
          ) : (
            <p className="empty">No homes match. Try a higher budget or remove a filter.</p>
          )}
        </div>
      </div>
    </>
  );
}