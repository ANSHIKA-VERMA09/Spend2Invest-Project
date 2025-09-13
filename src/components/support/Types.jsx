
import SupportType from './SupportType';

const Types = () => {
  const supportTypes = [
    {
      id: 1,
      title: "Help Center",
      icon: "fas fa-book",
      description: "Browse our comprehensive knowledge base with articles, guides, and tutorials.",
      buttonText: "Explore Articles",
      link: "/help-center"
    },
    {
      id: 2,
      title: "Live Chat",
      icon: "fas fa-comments",
      description: "Chat with our support team in real-time for immediate assistance.",
      buttonText: "Start Chat",
      link: "/live-chat"
    },
    {
      id: 3,
      title: "Email Support",
      icon: "fas fa-envelope",
      description: "Send us a detailed message and we'll get back to you within 24 hours.",
      buttonText: "Send Email",
      link: "/email-support"
    },
    {
      id: 4,
      title: "Community Forum",
      icon: "fas fa-users",
      description: "Connect with other users, share experiences, and find solutions together.",
      buttonText: "Join Community",
      link: "/community"
    }
  ];

  return (
    <div className="support-types mb-5">
      <div className="row g-4">
        {supportTypes.map(type => (
          <div className="col-md-6 col-lg-3" key={type.id}>
            <SupportType 
              title={type.title}
              icon={type.icon}
              description={type.description}
              buttonText={type.buttonText}
              link={type.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Types;
