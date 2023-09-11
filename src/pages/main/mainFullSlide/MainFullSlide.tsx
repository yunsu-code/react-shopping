import React, { FC, useRef } from "react";
import UiHalfWrap from "@components/atoms/UiHalfWrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "@scss/pages/main/mainFullSlide/MainFullSlide.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import VideoSection from "./template/VideoSection";
import ProductSelectSection from "./template/ProductSelectSection";

interface MainFullSlideProps {}

const MainFullSlide: FC<MainFullSlideProps> = ({}) => {
  const prevRef = useRef<any>(null);
  const nextRef = useRef<any>(null);
  return (
    <UiHalfWrap
      className={styles.mainSection}
      firstChild={
        <Swiper
          className={styles.swiper}
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.params.navigation.prevEl = prevRef.current;
          }}
        >
          <SwiperSlide>
            <VideoSection />
          </SwiperSlide>
          <SwiperSlide>
            <ProductSelectSection />
          </SwiperSlide>
          <div ref={prevRef} className={styles.prev}></div>
          <div ref={nextRef} className={styles.next}></div>
        </Swiper>
      }
    ></UiHalfWrap>
  );
};

export default MainFullSlide;
