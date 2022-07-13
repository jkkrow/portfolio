import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import Button from 'components/Element/Button';
import classes from './index.module.scss';

const Info: React.FC = () => {
  return (
    <div className={classes.info}>
      <h1>WatchTrees</h1>
      <h3>A Video Streaming Platform with Tree Data Structure.</h3>
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
          <SwiperSlide>
            <p className={classes.description}>
              Sit laborum sunt sit veniam labore est dolore commodo officia
              veniam nisi officia proident. Ipsum laboris anim cillum culpa sunt
              ex nulla quis. Magna mollit cupidatat nostrud aute nostrud aute eu
              duis.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <ul className={classes.description}>
              <li>Commodo duis eu adipisicing non occaecat.</li>
              <li>Eiusmod amet officia Lorem commodo excepteur.</li>
              <li>
                Sint incididunt eiusmod id dolore eu sunt anim reprehenderit.
              </li>
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
