export const CardMusic = ({ img, alt, title, link }) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="album-link"
    >
      <div className="album-item">
        <img src={img} alt={alt} className="album-cover" />
        <h3 className="album-title">{title}</h3>
      </div>
    </a>
  );
};
