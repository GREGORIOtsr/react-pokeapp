import React from "react";
import { useSearchParams } from "react-router-dom";
import Info from "./Info";

const PokeDetails = () => {

  const [searchParams] = useSearchParams();

  let params = {};

  for (let e of searchParams.entries()) {
    params[e[0]] = e[1];
  };

  return (
    <>
      <Info pokemon={params} />
    </>
  );
};

export default PokeDetails;
