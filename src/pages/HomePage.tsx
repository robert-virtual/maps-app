import { FC } from "react";
import MapsPage from "./MapsPage";

interface Props {}

export const HomePage: FC<Props> = () => {
  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <MapsPage />
    </div>
  );
};
