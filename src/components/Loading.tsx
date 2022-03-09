import React from "react";

interface Props {}

export const Loading: React.FC<Props> = () => {
  return (
    <div className="grid place-items-center h-screen text-center">
      <div>
        <h2>Espere porfavor</h2>
        <h2>Localizando...</h2>
      </div>
    </div>
  );
};
