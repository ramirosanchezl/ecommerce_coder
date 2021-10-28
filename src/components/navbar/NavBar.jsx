import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


    export default function NavBar() {
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
            <ShoppingCartIcon></ShoppingCartIcon>  
              </Toolbar>
            </AppBar>
          </Box>
        );
      }