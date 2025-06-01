export const NewReliz = ({ img, alt, title, title1, link }) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="album-link"
    >
      <div className="release-image">
        <img src={img} alt={alt} className="boss-cover" />
        <h3 className="release-title">{title}</h3>
        <h3 className="release-title">{title1}</h3>
      </div>
    </a>
  );
};
