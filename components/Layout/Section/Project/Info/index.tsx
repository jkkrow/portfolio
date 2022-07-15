import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiMongodb } from 'react-icons/si';

import Button from 'components/Element/Button';
import classes from './index.module.scss';

const Info: React.FC = () => {
  return (
    <div className={classes.info}>
      <h1>WatchTrees</h1>
      <h3>A Video Streaming App with Tree Data Structure.</h3>
      <div>
        <Swiper
          modules={[Pagination]}
          speed={400}
          spaceBetween={60}
          pagination={{
            clickable: true,
            horizontalClass: `swiper-pagination-horizontal ${classes.horizontal}`,
            bulletClass: `swiper-pagination-bullet ${classes.bullet}`,
            bulletActiveClass: `swiper-pagination-bullet-active ${classes.bulletActive}`,
          }}
          loop
          grabCursor
        >
          <SwiperSlide className={classes.slide}>
            <div className={classes.description}>
              <p>Provides on-demand videos (VOD) in adaptive media formats</p>
              <p>
                Tree structured videos allow viewers to select next video among
                child nodes.
              </p>
              <div className={classes.stacks}>
                <SiTypescript />
                <FaReact />
                <SiRedux />
                <FaNodeJs />
                <SiMongodb />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.slide}>
            <ul className={classes.description}>
              <h4>Main Features:</h4>
              <li>Adaptive Bitrate Streaming</li>
              <li>Watch Actively with &quot;Select-and-Continue&quot;</li>
              <li>User Authentication</li>
              <li>Token Based Authorization</li>
            </ul>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className={classes.buttons}>
        <a
          href={process.env.NEXT_PUBLIC_WATCHTREES_DOMAIN}
          target="_blank"
          rel="noreferrer"
        >
          <Button>Live Website</Button>
        </a>
        <a
          href={`${process.env.NEXT_PUBLIC_GITHUB_ADDRESS}/watchtrees-frontend`}
          target="_blank"
          rel="noreferrer"
        >
          <Button>Source Code</Button>
        </a>
      </div>
    </div>
  );
};

export default Info;
