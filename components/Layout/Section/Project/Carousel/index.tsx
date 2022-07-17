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
          <div className={classes.image}>
            <Image
              src="/images/projects/wt-example-1 1.gif"
              alt="wt-example-1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.image}>
            <Image src="/images/projects/wt-example-2.gif" alt="wt-example-2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.image}>
            <Image src="/images/projects/wt-example-3.gif" alt="wt-example-3" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.image}>
            <Image src="/images/projects/wt-example-4.gif" alt="wt-example-4" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
