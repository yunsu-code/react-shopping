import React, { FC } from "react";
import video from "@assets/video/main_vd.mp4";
import UnderlineLink from "@components/atoms/UnderlineLink";
import styles from "@scss/pages/main/mainFullSlide/VideoSection.module.scss";

interface VideoSectionProps {}

const VideoSection: FC<VideoSectionProps> = ({}) => {
  return (
    <div className={styles.vdSlide}>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4"></source>
      </video>
      <div className={styles.desc}>
        <span>8th New Collection</span>
        <h2>BREEZE OF NEW CHANGE</h2>
        <p>
          Face the breeze of change
          <br />
          and step out of your comfort zone
        </p>
        <UnderlineLink color="white" text={"Go Shop >"} />
      </div>
    </div>
  );
};

export default VideoSection;
