

const SupportType = ({ title, icon, description, buttonText, link }) => {
  return (
    <div className="support-type-card">
      <div className="card-icon">
        <i className={icon}></i>
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <a href={link} className="card-button">{buttonText}</a>
    </div>
  );
};

export default SupportType;