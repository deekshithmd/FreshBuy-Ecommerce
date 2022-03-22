import "./homepage.css";

import { Category, Banner, Occasional } from "../../components";
export default function HomePage() {
  return (
    <div className="grid-container">
      <Banner />
      <Category />
      <Occasional />
    </div>
  );
}
