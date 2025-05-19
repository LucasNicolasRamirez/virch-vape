import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function PerfilUsuario() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '20px' : '40px',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: isMobile ? 'center' : 'flex-start',
        padding: isMobile ? '16px' : '0',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ width: isMobile ? '100%' : 'auto', display: 'flex', justifyContent: 'center' }}>
        <Stack spacing={1}>
          <Skeleton variant="circular" width={isMobile ? 180 : 300} height={isMobile ? 180 : 300} animation="wave" />
          <Skeleton variant="rectangular" width={isMobile ? 180 : 300} height={30} animation="wave" />
          <Skeleton variant="rounded" width={isMobile ? 180 : 300} height={60} animation="wave" />
          <Skeleton variant="text" sx={{ fontSize: isMobile ? '1.2rem' : '2rem' }} animation="wave" />
        </Stack>
      </div>
      <div style={{ width: '100%' }}>
        <Stack spacing={1}>
          <Skeleton variant="text" sx={{ fontSize: isMobile ? '1rem' : '1.5rem' }} animation="wave" />
          <Skeleton variant="rectangular" height={30} animation="wave" />
          <Skeleton variant="rounded" height={isMobile ? 60 : 100} animation="wave" />
        </Stack>

        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '10px' : '20px',
            marginTop: '40px',
          }}
        >
          <Stack spacing={1} sx={{ width: '100%' }}>
            <Skeleton variant="text" sx={{ fontSize: isMobile ? '1.2rem' : '2rem' }} animation="wave" />
            <Skeleton variant="rectangular" height={30} animation="wave" />
            <Skeleton variant="rounded" height={isMobile ? 120 : 300} animation="wave" />
          </Stack>
          <Stack spacing={1} sx={{ width: '100%' }}>
            <Skeleton variant="text" sx={{ fontSize: isMobile ? '1.2rem' : '2rem' }} animation="wave" />
            <Skeleton variant="rectangular" height={30} animation="wave" />
            <Skeleton variant="rounded" height={isMobile ? 120 : 300} animation="wave" />
          </Stack>
        </div>
      </div>
    </div>
  );
}