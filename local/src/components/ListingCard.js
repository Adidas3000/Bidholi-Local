import { useState } from "react";
import { CITIES } from "../data";

export default function ListingCard({ listing: l }) {
  const [saved, setSaved] = useState(false); // each card remembers its own "saved" state
  const cityName = CITIES.find((c) => c.id === l.city).name;

  return (
    <article className="listing">
      <div className="tags">
        <span>{l.type}</span>
        <span>{l.vibe}</span>
        {l.furnished && <span>Furnished</span>}
      </div>
      <h3>{l.title}</h3>
      <p className="muted">{l.locality}, {cityName} · For {l.for.toLowerCase()}</p>
      <p>{l.desc}</p>
      <div className="row">
        <strong>₹{l.price.toLocaleString("en-IN")}<small>/mo</small></strong>
        <div>
          <button className="btn ghost" onClick={() => setSaved(!saved)}>{saved ? "Saved" : "Save"}</button>{" "}
          <a className="btn" href={`mailto:hello@local.example?subject=Enquiry: ${l.title}`}>Contact</a>
        </div>
      </div>
    </article>
  );
}