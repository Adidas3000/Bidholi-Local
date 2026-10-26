import { CITIES, TYPES, VIBES, FOR } from "../data";

// f = current filter values, setF = function that updates them (both owned by the parent page)
export default function Filters({ f, setF, onSubmit, submitLabel }) {
  const city = CITIES.find((c) => c.id === f.city);

  // Returns a handler that updates one field of the filter object
  const set = (key) => (e) =>
    setF({ ...f, [key]: e.target.type === "checkbox" ? e.target.checked : e.target.value });

  return (
    <form className="filters" onSubmit={(e) => { e.preventDefault(); if (onSubmit) onSubmit(); }}>
      <label>City
        <select value={f.city} onChange={(e) => setF({ ...f, city: e.target.value, locality: "" })}>
          <option value="">Choose a city</option>
          {CITIES.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
      </label>

      <label>Area
        <select value={f.locality} onChange={set("locality")} disabled={!city}>
          <option value="">Any area</option>
          {city && city.localities.map((l) => <option key={l}>{l}</option>)}
        </select>
      </label>

      <label>Home type
        <select value={f.type} onChange={set("type")}>
          <option value="">Any</option>
          {TYPES.map((t) => <option key={t}>{t}</option>)}
        </select>
      </label>

      <label>Locality vibe
        <select value={f.vibe} onChange={set("vibe")}>
          <option value="">Any</option>
          {VIBES.map((v) => <option key={v}>{v}</option>)}
        </select>
      </label>

      <label>I am
        <select value={f.who} onChange={set("who")}>
          <option value="">Any</option>
          {FOR.slice(0, 2).map((w) => <option key={w}>{w}</option>)}
        </select>
      </label>

      <label>Max budget: ₹{Number(f.budget).toLocaleString("en-IN")}/mo
        <input type="range" min="3000" max="40000" step="500" value={f.budget} onChange={set("budget")} />
      </label>

      <label className="check">
        <input type="checkbox" checked={f.furnished} onChange={set("furnished")} /> Furnished only
      </label>

      {submitLabel && <button className="btn">{submitLabel}</button>}
    </form>
  );
}