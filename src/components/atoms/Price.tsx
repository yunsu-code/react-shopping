import React, { FC } from "react";
import styles from "@scss/components/atoms/Price.module.scss";

interface PriceProps {
  num: number;
}

const Price: FC<PriceProps> = ({ num }) => {
  return (
    <span className={styles.price}>
      ₩{num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
    </span>
  );
};

export default Price;
