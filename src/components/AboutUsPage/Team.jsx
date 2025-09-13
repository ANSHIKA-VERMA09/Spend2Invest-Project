// import React from 'react';
import TeamMember from './TeamMember';

const Team = () => {
  const teamMembers = [
    {
      name: "Anshika Verma",
      role: "Lead Developer",
      bio: "Financial strategist with 10+ years of experience in investment banking and fintech innovation.",
      image: "https://z-cdn-media.chatglm.cn/files/team-anshika.jpg" // Replace with actual image URL
    },
    {
      name: "Shreya Singh",
      role: "Data Analyst",
      bio: "Tech visionary specializing in AI-driven financial solutions and secure platform architecture.",
      image: "https://z-cdn-media.chatglm.cn/files/team-shreya.jpg" // Replace with actual image URL
    },
    {
      name: "Pankaj Bora",
      role: "AI/Ml Model Developer",
      bio: "Investment expert with a passion for democratizing wealth management through technology.",
      image: "https://z-cdn-media.chatglm.cn/files/team-pankaj.jpg" // Replace with actual image URL
    },
    {
      name: "Pratyush Kushwaha",
      role: "Data Analyst/PowerBI Specialist",
      bio: "Marketing guru focused on financial literacy and user-centered product development.",
      image: "https://z-cdn-media.chatglm.cn/files/team-pratyush.jpg" // Replace with actual image URL
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