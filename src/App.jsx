import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import { fetchImages } from "./apiService/images";
import {
  SearchBar,
  ImageGallery,
  LoadMoreBtn,
  Loader,
  ErrorMessage,
  ImageModal,
} from "./components";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalItem, setModalItem] = useState(null);

  const notify = (message) => toast.error(message);
  const noLoadMore = (message) => toast(message);

  const getQuery = (value) => {
    if (!value) {
      notify("Enter at least smth, please!");
      return;
    }
    setQuery(value);
    setImages([]);
    setError(false);
    setPage(1);
  };

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);
    const getFetchedImages = async () => {
      try {
        const data = await fetchImages(query, page);
        setImages((prevImages) => {
          return [...prevImages, ...data.results];
        });
        setTotalPages(data.total_pages);
        if (data.results.length > 0 && page >= data.total_pages) {
          noLoadMore("Reached the end of the collection");
        }
      } catch {
        setError(true);
        notify("Server down, please try later");
      } finally {
        setIsLoading(false);
      }
    };
    getFetchedImages();
  }, [page, query]);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalIsOpen]);

  const handleClickLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = (src, alt) => {
    setModalIsOpen(true);
    setModalItem({ src, alt });
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <SearchBar onSubmit={getQuery} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {page < totalPages && !isLoading && (
        <LoadMoreBtn onClick={handleClickLoadMore} />
      )}
      {isLoading && <Loader isLoading={isLoading} />}
      {images.length === 0 && query && !isLoading && !error && (
        <h2>No results</h2>
      )}
      {error && <ErrorMessage />}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        modalItem={modalItem}
      />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
