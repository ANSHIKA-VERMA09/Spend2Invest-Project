import React from 'react';
import Hero from "./Hero";
import Team from "./Team";
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="about-page">
      <Hero />
      <Team />
    </div>
  );
}