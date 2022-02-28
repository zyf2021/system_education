import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/MenuOpenOutlined';
import Container from '@mui/material/Container';
import Avatar from '@mui/icons-material/Circle';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Обучение', 'Практика', 'Работа'];
const menu_study = ['Поиск преподавателей', 'Поиск курсов'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export function MainMenu() {

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const openMenu = Boolean(anchorElUser)

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <AppBar position="static" elevation = {0}> 
      <Container maxWidth="xl">
        <Toolbar>
        <Box sx={{flexGrow: 1, display: 'flex', justifyContent:'space-between', width:'100%', aligh:'center'}} component = 'div'>
          <Box sx={{display:'flex'}}>
            <IconButton>
              <MenuIcon sx={{color:'white'}} fontSize='large'/>
            </IconButton>
          </Box>

          <Box sx={{display:'flex'}}>
            <div style={{marginRight:'10px'}}>
            <Typography 
            aria-aria-controls='edu-menu'
            aria-aria-haspopup='true'
            aria-aria-expanded={openMenu ? 'true' : undefined}
            onClick = {handleOpenUserMenu}
            sx = {{cursor:'pointer', color:'inherit'}}>
              ОБУЧЕНИЕ
            </Typography>
            <Menu id = 'edu-menu' anchorEl={anchorElUser} open={openMenu} onClose={handleCloseUserMenu} width='20px'>
              <MenuItem onClick={handleCloseUserMenu}><Typography textAlign="center">Поиск</Typography></MenuItem>
              <MenuItem onClick={handleCloseUserMenu}><Typography textAlign="center">Поиск</Typography></MenuItem>
            </Menu>
            </div>

            <div style={{marginRight:'10px'}}>
            <Typography
            sx = {{marginRight:'10px', cursor:'pointer', color:'inherit'}}>
              ПРАКТИКА
            </Typography>
            </div>
          
            <div style={{marginRight:'10px'}}>
            <Typography
            sx = {{marginRight:'10px', cursor:'pointer', color:'inherit'}}>
              РАБОТА
            </Typography>
            </div>
          </Box> 
           
          <Box sx={{display:'flex'}}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar fontSize='large' sx ={{color:'white'}}/>
                </IconButton>
            </Tooltip>
          </Box>
        </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

