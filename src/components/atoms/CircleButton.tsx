import React, { FC } from "react";
import cx from "classnames";
import styles from "@scss/components/atoms/CircleButton.module.scss";

interface CircleButtonProps {
  color?: string;
  hover?: boolean;
  num: number;
  className?: string;
  onClick?: Function | any;
}

const CircleButton: FC<CircleButtonProps> = ({
  color = "white",
  hover = false,
  num = 1,
  className,
  onClick,
}) => {
  return (
    <span
      className={cx(
        `${styles.circleBtn}`,
        hover ? styles.hover : "",
        `${styles[color]}`,
        className
      )}
      onClick={onClick}
    >
      <span>{num}</span>
    </span>
  );
};

export default CircleButton;
