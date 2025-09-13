import React from 'react';

const TeamMember = ({ name, role, bio, image }) => {
  return (
    <div className="team-member">
      <div className="member-image">
        <img src={image} alt={name} className="img-fluid" />
        <div className="social-icons">
          <a href="#!" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
          <a href="#!" className="social-icon"><i className="fab fa-twitter"></i></a>
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