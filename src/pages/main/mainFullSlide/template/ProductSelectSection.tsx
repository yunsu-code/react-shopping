import React, { FC, useEffect, useState, useRef } from "react";
import * as ReactDOMServer from "react-dom/server";
import cx from "classnames";
import styles from "@scss/pages/main/mainFullSlide/ProductSelectSection.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CircleButton from "@components/atoms/CircleButton";
import UnderlineLink from "@components/atoms/UnderlineLink";
import Price from "@components/atoms/Price";
import UiContainer from "@components/atoms/UiContainer";

interface ProductSelectSectionProps {}

const ProductSelectSection: FC<ProductSelectSectionProps> = ({}) => {
  const colorBtn = [
    {
      name: "numbtn1",
      active: true,
    },
    {
      name: "numbtn2",
      active: false,
    },
    {
      name: "numbtn3",
      active: false,
    },
  ];
  const products = [
    {
      img: "01_main_slider2_pdt01.png",
      name: "뉴 엠비언스 컬러 마스카라 얼루어드",
      price: 21000,
    },
    {
      img: "01_main_slider2_pdt02.png",
      name: "트루 디멘션 레이어링 치크",
      price: 29000,
    },
    {
      img: "01_main_slider2_pdt03.png",
      name: "무드인핸서 리퀴드 마뜨 해치아웃",
      price: 19000,
    },
  ];
  const sliderRef = useRef<any>();
  const [circleBtrns, setcircleBtrns] = useState(colorBtn);
  const [swiperIndex, setSwiperIndex] = useState(0);
  var pageBtn = document.getElementsByClassName(`${styles.paginationBtn}`);

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return ReactDOMServer.renderToStaticMarkup(
        <button
          type="button"
          className={`${styles.paginationBtn} ${className}`}
        >
          <span>{index + 1}</span>
        </button>
      );
    },
  };

  const clickHandler = (name: string, index: number) => {
    setcircleBtrns((items) =>
      items.map((item) => ({
        ...item,
        active: item.name === name,
      }))
    );
    setSwiperIndex(index);
  };

  useEffect(() => {
    sliderRef.current.swiper.slideTo(swiperIndex);
  }, [swiperIndex]);

  useEffect(() => {
    for (let i = 0; i < pageBtn.length; i++) {
      pageBtn[i].addEventListener("click", (e: any) => {
        var num = parseInt(e.target.innerText) - 1;
        setcircleBtrns((items) =>
          items.map((item, index) => ({
            ...item,
            active: index === num,
          }))
        );
      });
    }
  }, []);
  return (
    <UiContainer
      tablet={styles.tablet}
      pc={styles.pc}
      className={styles.pdSlide}
    >
      <div className={styles.imgSec}>
        <div className={styles.imgWrap}>
          <img src={"/assets/img/home/01_main_slider2_pc_bg.jpg"} alt="" />
          {circleBtrns.map((item, index) => (
            <CircleButton
              className={cx(`${styles.numbtn}`, `${styles[item.name]}`)}
              color={item.active ? "white" : "pink"}
              num={index + 1}
              key={index}
              onClick={() => {
                clickHandler(item.name, index);
              }}
            />
          ))}
        </div>
      </div>
      <div className={styles.productSec}>
        <Swiper
          ref={sliderRef}
          allowTouchMove={false}
          onSlideChange={(e) => setSwiperIndex(e.activeIndex)}
          pagination={pagination}
          modules={[Pagination]}
          className={styles.productSecSwiper}
        >
          {products.map((item, index) => (
            <SwiperSlide className={styles.pd} key={index}>
              <div className={styles.pdInner}>
                <img src={`/assets/img/home/${item.img}`} alt="" />
                <p className={styles.name}>{item.name}</p>
                <p className={styles.price}>
                  <Price num={item.price} />
                </p>
                <UnderlineLink
                  className={styles.linkBtn}
                  text={"shop >"}
                  color={"light"}
                  fontSize={"16px"}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </UiContainer>
  );
};

export default ProductSelectSection;
