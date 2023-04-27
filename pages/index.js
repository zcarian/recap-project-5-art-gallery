import SpotlightPreview from "../components/SpotlightPreview";

export default function SpotlightPage({ data }) {
  return (
    <div>
      <h1>Spotlight</h1>
      <SpotlightPreview data={data} />
    </div>
  );
}