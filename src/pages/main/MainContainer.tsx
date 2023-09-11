import React, { FC } from "react";
import styles from "@scss/pages/main/MainContainer.module.scss";
import UiHalfWrap from "@/components/atoms/UiHalfWrap";
import MainFullSlide from "./mainFullSlide/MainFullSlide";

interface MainContainerProps {}

const MainContainer: FC<MainContainerProps> = ({}) => {
  return <UiHalfWrap firstChild={<MainFullSlide />} />;
};

export default MainContainer;
