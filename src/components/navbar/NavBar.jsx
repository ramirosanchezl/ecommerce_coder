import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CartWidget from '../cartWidget/CartWidget';
import Badge from '@mui/material/Badge';


    const NavBar = () => {
        return (
          <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ background: '#2E3B55' }} position="static">
              
              <Toolbar>
              <Typography align="left" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                ELECTRONIC SHOP
                <Button color="error">Computadoras</Button>
                <Button color="error">Celulares</Button>
                <Button color="error">Tablets</Button>
              </Typography>
              <Badge badgeContent={4} color="error">
                <CartWidget/> 
              </Badge>
              </Toolbar>
            </AppBar>
          </Box>
        );
}
export default NavBar