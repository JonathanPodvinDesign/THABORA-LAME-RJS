import React from "react";
import styled from "styled-components";
import CouteauDevant from "./CouteauDevant";
import CouteauArriere from "./CouteauArriere";

const Couteau = () => {
  return (
    <>
      <CouteauDevant></CouteauDevant>
      <CouteauArriere></CouteauArriere>
    </>
  );
};

export default Couteau;
