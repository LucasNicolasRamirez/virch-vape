import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import prod1 from '../../assets/imagenes/prod1.jpg';
import prod2 from '../../assets/imagenes/prod2.jpg';
import prod3 from '../../assets/imagenes/prod3.png';
import styles from './GaleriaProductos.module.css';

const featuredProducts = [
    { id: 1, name: 'VaporMax Pro', image: prod1, price: '$79.99' },
    { id: 2, name: 'CloudNine Elite', image: prod2, price: '$99.99' },
    { id: 3, name: 'NebulaPen', image: prod3, price: '$59.99' },
    { id: 4, name: 'VaporMax Pro', image: prod1, price: '$79.99' },
    { id: 5, name: 'CloudNine Elite', image: prod2, price: '$99.99' },
    { id: 6, name: 'NebulaPen', image: prod3, price: '$59.99' },
    { id: 7, name: 'VaporMax Pro', image: prod1, price: '$79.99' },
    { id: 8, name: 'CloudNine Elite', image: prod2, price: '$99.99' },
    { id: 9, name: 'NebulaPen', image: prod3, price: '$59.99' },
];

function GaleriaProductos() {
    return (
        <Box className={styles.container}>
            <Typography variant="h5" className={styles.heading}>
                Productos Destacados
            </Typography>
            <Swiper
                className={styles.swiper}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={2}
                navigation
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                    dynamicMainBullets: 3
                }}

                autoplay={{ delay: 5000 }}
                breakpoints={{
                    1920: { slidesPerView: 4 },
                    1280: { slidesPerView: 3 },
                    820: { slidesPerView: 2 },
                    480: { slidesPerView: 2 },
                }}
            >
                {featuredProducts.map((product) => (
                    <SwiperSlide key={product.id} className={styles.swiperSlide}>
                        <Card className={styles.card} sx={{ maxWidth: '345px', backgroundColor: 'rgba(53, 53, 53, 0.5)', borderRadius: '20px', color: 'currentColor' }}>
                            <CardMedia
                                className={styles.cardMedia}
                                component="img"
                                image={product.image}
                                alt={product.name}
                                style={{ width: '100%', objectFit: 'cover' }}
                            />
                            <CardContent>
                                <Typography variant="h6">{product.name}</Typography>
                                <Typography variant="body2">{product.price}</Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}

export default GaleriaProductos;
