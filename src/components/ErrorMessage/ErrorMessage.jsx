import s from "./ErrorMessage.module.css";

export const ErrorMessage = () => {
  return (
    <div className={s.errorMessage}>An error occured. Try again later</div>
  );
};
