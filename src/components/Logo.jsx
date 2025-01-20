import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box } from '@mui/material';
import solitonLogo from '../assets/soliton.png';

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  const logo = (
    <Box
      component="img"
      src={solitonLogo}
      sx={{ width: 120, height: 'auto', mx: 'auto', my: 2, ...sx }}
      alt="Soliton Logo"
    />
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}