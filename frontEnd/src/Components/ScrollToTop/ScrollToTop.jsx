import React from 'react';
import { Fab, Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function ScrollToTop() {
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 200);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
            <div style={{ width: '100%', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
        <Zoom in={visible}>
                <Fab
                    color="primary"
                    size="medium"
                    onClick={handleClick}
                    sx={{
                        position: 'fixed',
                        bottom: 0,
                        zIndex: 1000,
                        width: 56,
                        height: 56,
                        borderRadius: '28px 28px 0 0',
                        minHeight: 0,
                        minWidth: 0,
                        padding: 0,

                    }}
                    aria-label="scroll back to top"
                >
                    <KeyboardArrowUpIcon />
                </Fab>
        </Zoom>
            </div>
    );
}