import { ImageCard } from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

export const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={s.galleryList}>
      {images.map((image) => (
        <li className={s.galleryItem} key={image.id}>
          <ImageCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};
