import React from 'react';
import { FaInstagram, FaWhatsapp, FaFacebook, FaGoogle } from 'react-icons/fa';
import logo from '../../assets/imagenes/logo.png';
import styles from './RedesSociales.module.css';

const RedesSociales = () => {
    return (
        
            <div className={styles.socialIconsContainer}>
                {/* INSTAGRAM */}
                <div className={styles.tooltipContainer}>
                    <div className={styles.tooltip}>
                        <div className={styles.profile}>
                            <div className={styles.user}>
                                <div className={styles.img}><img src={logo} className={styles.imagenLogo} alt="Logo VirchVape"/></div>
                                <div className={styles.details}>
                                    <div className={styles.name}>VirchVape</div>
                                    <div className={styles.username}>@virchvape.tw</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className={styles.text}>
                        <a className={styles.icon} href="#" target="_blank" rel="noopener noreferrer">
                            <div className={styles.layer}>
                                <span />
                                <span />
                                <span />
                                <span />
                                <span className={styles.instagram}>
                                    <FaInstagram size={50} />
                                </span>
                            </div>
                            <div className={styles.text}>Instagram</div>
                        </a>
                    </div>
                </div>
                {/* WHATSAPP */}
                <div className={styles.tooltipContainer}>
                    <div className={styles.tooltip}>
                        <div className={styles.profile}>
                            <div className={styles.user}>
                                <div className={styles.img}><img src={logo} className={styles.imagenLogo} alt="Logo VirchVape"/></div>
                                <div className={styles.details}>
                                    <div className={styles.name}>VirchVape Trelew</div>
                                    <div className={styles.username}>(280)-12345678 </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.text}>
                        <a className={styles.icon} href="#">
                            <div className={styles.layer}>
                                <span />
                                <span />
                                <span />
                                <span />
                                <span className={styles.whatsapp}>
                                    <FaWhatsapp size={50}  />
                                </span>
                            </div>
                            <div className={styles.text}>Whatsapp</div>
                        </a>
                    </div>
                </div>
                {/* FACEBOOK */}
                <div className={styles.tooltipContainer}>
                    <div className={styles.tooltip}>
                        <div className={styles.profile}>
                            <div className={styles.user}>
                                <div className={styles.img}><img src={logo} className={styles.imagenLogo} alt="Logo VirchVape"/></div>
                                <div className={styles.details}>
                                    <div className={styles.name}>VirchVape</div>
                                    <div className={styles.username}>@virchvape.tw</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.text}>
                        <a className={styles.icon} href="#">
                            <div className={styles.layer}>
                                <span />
                                <span />
                                <span />
                                <span />
                                <span className={styles.facebook}>
                                    <FaFacebook size={40}  />
                                </span>
                            </div>
                            <div className={styles.text}>Facebook</div>
                        </a>
                    </div>
                </div>
                {/* GMAIL */}
                <div className={styles.tooltipContainer}>
                    <div className={styles.tooltip}>
                        <div className={styles.profile}>
                            <div className={styles.user}>
                                <div className={styles.img}><img src={logo} className={styles.imagenLogo} alt="Logo VirchVape"/></div>
                                <div className={styles.details}>
                                    <div className={styles.name}>VirchVape</div>
                                    <div className={styles.username}>info@virchvape.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.text}>
                        <a className={styles.icon} href="#">
                            <div className={styles.layer}>
                                <span />
                                <span />
                                <span />
                                <span />
                                <span className={styles.gmail}>
                                    <FaGoogle size={40} />
                                </span>
                            </div>
                            <div className={styles.text}>Gmail</div>
                        </a>
                    </div>
                </div>
            </div>
      
    );
}
export default RedesSociales;
