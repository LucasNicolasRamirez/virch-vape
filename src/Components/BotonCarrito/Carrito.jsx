import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom'; 

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
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
        <div style={{ paddingRight: '20px'}}>
            <IconButton onClick={handleCartClick} style={{ color: 'currentColor' }}> 
                <ShoppingCartIcon fontSize="large" />
                <CartBadge badgeContent={3} color="info" overlap="circular" />
            </IconButton>
        </div>
    );
};
export default IconoCarrito;