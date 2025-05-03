import s from "./ImageCard.module.css";

export const ImageCard = ({
  image: {
    urls: { small, regular },
    user: { name },
    alt_description,
    likes,
  },
  openModal,
}) => {
  return (
    <div className={s.galleryImageWrapper}>
      <img
        className={s.galleryImage}
        onClick={() => openModal(regular, alt_description)}
        src={small}
        alt={alt_description}
      />
      <p className={s.galleryImageText}>{name}</p>
      <p className={s.galleryImageText}>Likes: {likes}</p>
    </div>
  );
};
