// import React from 'react';
import './Team.css';

const TeamMember = ({ name, role, bio, image }) => {
  return (
    <div className="team-member">
      <div className="member-image">
        <img src={image} alt={name} className="team-img" />
        <div className="social-icons">
          <a href="#!" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
         
        </div>
      </div>
      <div className="member-info">
        <h3 className="member-name">{name}</h3>
        <p className="member-role">{role}</p>
        <p className="member-bio">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMember;
