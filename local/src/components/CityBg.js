// Full-cover background layer. If a city is chosen, show its photo with a dark overlay.
export default function CityBg({ city }) {
  const style = city
    ? { backgroundImage: `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.75)), url(${city.image})` }
    : undefined; // no city -> CSS fallback gradient
  return <div className="citybg" style={style} />;
}