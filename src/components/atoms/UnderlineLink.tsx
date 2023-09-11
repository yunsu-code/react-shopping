import React, { FC } from "react";
import styles from "@scss/components/atoms/UnderlineLink.module.scss";
import cx from "classnames";

interface UnderlineLinkProps {
  link?: string;
  fontSize?: string;
  color?: any;
  className?: string;
  text: string;
}

const UnderlineLink: FC<UnderlineLinkProps> = ({
  link,
  fontSize,
  color,
  className,
  text,
}) => {
  return (
    <a
      href={link}
      style={{ fontSize: fontSize }}
      className={cx(`${styles.lineLink}`, styles[color], className)}
    >
      {text}
    </a>
  );
};

export default UnderlineLink;
