import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCube } from 'swiper';

import Image from 'components/Element/Image';
import classes from './index.module.scss';

const Carousel: React.FC = () => {
  return (
    <div className={classes.carousel}>
      <Swiper
        modules={[Pagination, EffectCube]}
        effect="cube"
        speed={400}
        pagination={{
          clickable: true,
          bulletClass: `swiper-pagination-bullet ${classes.bullet}`,
          bulletActiveClass: `swiper-pagination-bullet-active ${classes.bulletActive}`,
        }}
        loop
        grabCursor
      >
        <SwiperSlide>
          <div className={classes.image} />
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.image} />
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.image} />
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.image} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
