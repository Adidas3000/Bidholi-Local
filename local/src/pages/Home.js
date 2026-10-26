import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CITIES, EMPTY_FILTERS } from "../data";
import CityBg from "../components/CityBg";
import Filters from "../components/Filters";

export default function Home() {
  const [f, setF] = useState(EMPTY_FILTERS);
  const navigate = useNavigate();
  const city = CITIES.find((c) => c.id === f.city); // undefined until a city is picked

  // Turn the filters into a URL like /listings?city=dehradun&budget=12000 and go there
  const search = () => {
    const entries = Object.entries(f).filter(([, v]) => v !== "" && v !== false);
    navigate(`/listings?${new URLSearchParams(entries)}`);
  };

  return (
    <>
      <section className="hero">
        <CityBg city={city} />
        <div className="wrap hero-in">
          <h1>{city ? `Find your place in ${city.name}.` : "Find your place in a new city."}</h1>
          <p>{city ? city.tagline : "Tell us the city, area, budget and the kind of neighbourhood you want. We'll show homes that fit."}</p>
          <div className="card">
            <Filters f={f} setF={setF} onSubmit={search} submitLabel="Show homes" />
          </div>
        </div>
      </section>

      <section className="wrap steps">
        <h2>How Local works</h2>
        <div className="grid3">
          <div><h3>Tell us what you need</h3><p>Pick the city, area, budget and home type.</p></div>
          <div><h3>Check the locality</h3><p>Each home shows how the neighbourhood feels: quiet, lively, near transit.</p></div>
          <div><h3>Choose and contact</h3><p>Shortlist homes and message the owner directly.</p></div>
        </div>
      </section>
    </>
  );
}