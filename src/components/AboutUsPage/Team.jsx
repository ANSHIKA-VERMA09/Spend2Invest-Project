// import React from 'react';
import TeamMember from './TeamMember';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: "Anshika Verma",
      role: "Lead Developer",
      bio: "Web development and Deployment",
      image: "/src/assets/anshika4.jpg" 
    },
    {
      name: "Shreya Singh",
      role: "Data Analyst",
      bio: "Tabular and Data Visualization Expert",
      image: "/src/assets/Shreya.jpg" // Replace with actual image URL
    },
    {
      name: "Pankaj Bora",
      role: "AI/Ml Model Developer",
      bio: "Model Training and Deployment Specialist",
      image: "/src/assets/Pankaj.jpg" // Replace with actual image URL
    },
    {
      name: "Pratyush Kushwaha",
      role: "Data Analyst/PowerBI Specialist",
      bio: "Graphic designer and Documentations",
      image: "/src/assets/Pratyush.jpg" // Replace with actual image URL
    }
  ];

  return (
    <div className="team-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">The passionate minds behind Spend2Invest</p>
          <div className="title-underline"></div>
        </div>
        
        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
              <TeamMember 
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
              />
            </div>
          ))}
        </div>
        
        <div className="team-quote mt-5">
          <div className="quote-content">
            <p>"We believe everyone deserves the tools to build wealth and secure their financial future. That's why we created Spend2Invest - to make sophisticated financial management accessible to all."</p>
            <div className="quote-signature">— The Spend2Invest Team</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;