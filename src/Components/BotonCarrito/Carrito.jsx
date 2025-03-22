import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom'; 

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -0.75rem;
    right: -0.1rem;
  }
`;

function IconoCarrito() {
    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate("/carrito"); 
        setTimeout(() => {
            window.scrollTo(0, 0); 
        }, 0);
    };

    return (
        <div style={{ paddingRight: '1.2rem'}}>
            <IconButton onClick={handleCartClick} style={{ color: '#cecece' }}> 
                <ShoppingCartIcon fontSize="large" />
                <CartBadge badgeContent={3} color="info" overlap="circular" />
            </IconButton>
        </div>
    );
};
export default IconoCarrito;