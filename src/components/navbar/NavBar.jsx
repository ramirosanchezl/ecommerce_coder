import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CartWidget from '../cartWidget/CartWidget';
import Badge from '@mui/material/Badge';
import LeftMenu from '../leftMenu/LeftMenu';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


    const NavBar = () => {

      const [openLeftMenu, changeOpenLeftMenu] = React.useState(false);

      const handleSidebarOpen = () => {
        changeOpenLeftMenu(true);
      };

      const handleSidebarClose = () => {
        changeOpenLeftMenu(false);
      };

        return (
          <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ background: '#2E3B55' }} position="static">
              
              <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={handleSidebarOpen}
                  >
                  <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" component="div">
                    ELECTRONIC SHOP
                  </Typography>
                  <Box sx={{ flexGrow: 1 }} />
                      <Badge badgeContent={4} color="error">
                        <CartWidget/> 
                      </Badge>
              </Toolbar>
            </AppBar>
            <LeftMenu 
              open={openLeftMenu}
              onOpen={handleSidebarOpen}
              onClose={handleSidebarClose} 
            />
          </Box>
        );
}
export default NavBar