export const CardContact = ({ img, alt, label, title, link }) => {
  return (
    <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="contact-card"
    >
        <div className="contact-item">
            <img src={img} alt={alt} className="social-icon" />
            <div className="contact-text">
            <h3 className="contact-label">{label}</h3>
            <a href={link} className="contact-link">{title}</a>
            </div>
        </div>
    </a>
  );
};
