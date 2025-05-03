import { ScaleLoader } from "react-spinners";
export const Loader = ({ isLoading }) => {
  return (
    <ScaleLoader
      color={"cyan"}
      loading={isLoading}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};
