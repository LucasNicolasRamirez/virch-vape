import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import gallery1 from '../../assets/imagenes/gallery1.jpg';
import gallery2 from '../../assets/imagenes/gallery2.jpg';
import gallery3 from '../../assets/imagenes/gallery3.jpeg';
import gallery4 from '../../assets/imagenes/gallery4.jpg';
import styles from './GaleriaImagenes.module.css';

const galleryImages = [
    {
        id: 1,
        image: gallery1,
    },
    {
        id: 2,
        image: gallery2,
    },
    {
        id: 3,
        image: gallery3,
    },
    {
        id: 4,
        image: gallery4,
    }
];

function GaleriaImagenes() {
    return (
        <Box className={styles.container} >
            <Swiper
                className={styles.swiper}
                modules={[Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 4000 }}
                effect="slide"
                centeredSlides={true}
                allowTouchMove={false} 
            >
                {galleryImages.map((image) => (
                    <SwiperSlide key={image.id}>
                        <Box className={styles.imageBox}>
                            <img
                                className={styles.image}
                                src={image.image}
                                alt={image.title}
                            />
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    )
};
export default GaleriaImagenes;