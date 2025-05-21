import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './GaleriaProductos.module.css';
import { useNavigate } from 'react-router-dom';
import {productosData} from '../../Data/ProductosMock'; // importa tu mock

function GaleriaProductos() {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/producto/${id}`);
    };

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
                {productosData.slice(0, 9).map((product) => (
                    <SwiperSlide key={product.id} className={styles.swiperSlide}>
                        <Card
                            className={styles.card}
                            sx={{
                                maxWidth: '345px',
                                backgroundColor: 'rgba(53, 53, 53, 0.5)',
                                borderRadius: '20px',
                                color: 'currentColor',
                                cursor: 'pointer'
                            }}
                            onClick={() => handleClick(product.id)}
                        >
                            <CardMedia
                                className={styles.cardMedia}
                                component="img"
                                image={product.imagen}
                                alt={product.nombre}
                                style={{ width: '100%', objectFit: 'cover' }}
                            />
                            <CardContent>
                                <Typography variant="h6">{product.nombre}</Typography>
                                <Typography variant="body2">{product.precio}</Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}

export default GaleriaProductos;