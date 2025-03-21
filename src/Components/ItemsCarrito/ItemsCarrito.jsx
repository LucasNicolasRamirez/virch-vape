import React from 'react';
import kodama from '../../assets/imagenes/kodama.jpg'
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './ItemsCarrito.module.css';

const ItemsCarrito = () => {
    return (

        <div className={styles.masterContainer}>
            <div className={`${styles.card} ${styles.cart}`}>
                <label className={styles.title}>Tus Productos</label>
                <div className={styles.products}>

                    <div className={styles.product}>
                        <img src={kodama} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
                        <div>
                            <span>EVAS - Kodama 100ml  </span>
                            <p>Kodama</p>
                            <p>100ml - 3mg</p>
                        </div>
                        <div className={styles.quantity}>
                            <button className={styles.button}>
                                <svg fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#47484b" d="M20 12L4 12" />
                                </svg>
                            </button>
                            <label>1    </label>
                            <button className={styles.button}>
                                <svg fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#47484b" d="M12 4V20M20 12H4" />
                                </svg>
                            </button>
                        </div>
                        <label className={`${styles.price} ${styles.small}`}>$20.000</label>
                        <DeleteIcon className={styles.deleteIcon} />
                    </div>

                    <div className={styles.product}>
                        <img src={kodama} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
                        <div>
                            <span>EVAS - Kodama 100ml  </span>
                            <p>Kodama</p>
                            <p>100ml - 3mg</p>
                        </div>
                        <div className={styles.quantity}>
                            <button className={styles.button}>
                                <svg fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#47484b" d="M20 12L4 12" />
                                </svg>
                            </button>
                            <label>1    </label>
                            <button className={styles.button}>
                                <svg fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#47484b" d="M12 4V20M20 12H4" />
                                </svg>
                            </button>
                        </div>
                        <label className={`${styles.price} ${styles.small}`}>$20.000</label>
                        <DeleteIcon className={styles.deleteIcon} />
                    </div>

                    <div className={styles.product}>
                        <img src={kodama} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
                        <div>
                            <span>EVAS - Kodama 100ml  </span>
                            <p>Kodama</p>
                            <p>100ml - 3mg</p>
                        </div>
                        <div className={styles.quantity}>
                            <button className={styles.button}>
                                <svg fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#47484b" d="M20 12L4 12" />
                                </svg>
                            </button>
                            <label>1    </label>
                            <button className={styles.button}>
                                <svg fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#47484b" d="M12 4V20M20 12H4" />
                                </svg>
                            </button>
                        </div>
                        <label className={`${styles.price} ${styles.small}`}>$20.000</label>
                        <DeleteIcon className={styles.deleteIcon} />
                    </div>
                </div>
            </div>


            <div className={`${styles.card} ${styles.checkout}`}>
                <label className={styles.title}>Suma Total de productos</label>
                <div className={styles.details}>
                    <span>Subtotal:</span>
                    <span>$60.000</span>

                    <span>Envío:</span>
                    <span>$2.500</span>
                </div>
                <div className={styles.checkoutFooter}>
                    <label className={styles.price}><sup>$</sup>62.500</label>
                    <button className={styles.button}>Proceder al pago</button>
                </div>
            </div>
        </div>

    );
}


export default ItemsCarrito;
