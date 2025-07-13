import React from "react";
import Onboarding from "./components/Onboarding";
import CommunityFeed from "./components/CommunityFeed";

export default function App() {
  return (
    <div className="max-w-2xl mx-auto">
      <Onboarding />
      <CommunityFeed />
    </div>
  );
}