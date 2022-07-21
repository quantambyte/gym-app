import { Box, Stack, Typography } from '@mui/material';

const Footer = () => (
  <Box mt='80px' bgcolor='#FFF3F4' style={{ paddingBottom: '70px' }}>
    <Stack
      gap='40px'
      sx={{ alignItems: 'center' }}
      flexWrap='wrap'
      px='40px'
      pt='24px'
    >
      <img
        src='/assets/images/Logo-1.png'
        alt='logo'
        style={{ width: '200px', height: '41px' }}
      />
    </Stack>
    <Typography
      variant='h5'
      sx={{ fontSize: { lg: '28px', xs: '20px' } }}
      mt='41px'
      textAlign='center'
      pb='40px'
    >
      Made with 🖤 by{' '}
      <a href='https://github.com/uzair-asif' target='_blank' rel='noreferrer'>
        Uzair Asif
      </a>
      by the help of{' '}
      <a
        href='https://www.youtube.com/c/JavaScriptMastery'
        target='_blank'
        rel='noreferrer'
      >
        JavaScript Mastery
      </a>
    </Typography>
  </Box>
);

export default Footer;
