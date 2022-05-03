import React, {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


const pages = [
  {value: "HOME", label: "Inicio"},
  {value: "REG", label: "Registrarse"},
  {value: "LINK", label: "Link de Referido"},
  {value: "ADMIN", label: "Administrador"},
]

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState("");
  let navigate = useNavigate();

  const handleCloseNavMenu = (e) => {
    setAnchorElNav(e.target.value);
  };
  useEffect( () => {
    if (anchorElNav === "REG"){
      navigate("/register")
    } else if (anchorElNav === "LINK") {
      navigate("/referral")
    } else if (anchorElNav === "ADMIN") {
      navigate("/admin")
    } else  if (anchorElNav === "HOME"){
      navigate("/")
    }
  }, [anchorElNav,navigate ])

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            paragraph
            variant="h4"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            CurrencyBird
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.value}
                value={page.value}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;