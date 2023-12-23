//import { Tabs } from "@mui/material";
import { NavLink } from "react-router-dom";
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const navLinks = [
    { title: "Inicio", path: "/", icon: <HomeIcon />, },
    { title: "Contacto", path: "/contacto", icon: <AddIcCallIcon /> },
    { title: "Nosotros", path: "/nosotros", icon: <InfoIcon /> },
    { title: "Carrito", path: "/cart", icon: <AddShoppingCartIcon /> },
]

export default function NavBar(data) {
    const [open, setOpen] = useState(false);
    const { user } = data;

    useEffect(() => {
        console.log(user);
    }, [user])

    return (
        <>
            <AppBar position="static">

                <Toolbar>
                    <IconButton
                        color="inherit"
                        size="large"
                        onClick={() => setOpen(true)}
                        sx={{ display: { xs: "flex", sm: "none" } }}
                        edge="start"
                    >
                        <MenuIcon />

                    </IconButton>
                    <Box variant="h6" sx={{ flexGrow: 1 }}>
                        <img src="/image/logo.jpg" className="h-20" />
                        <Typography>JARDIN VERDE</Typography>
                    </Box>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {
                            navLinks.map(item => { return (<Button key={item.title} component={NavLink} to={item.path}> {item.title} </Button>) }
                            )
                        }
                        {user ? <Button component={NavLink} to={"/acount"}> {user.firstname} </Button> : <Button component={NavLink} to={"/register"}> Registrarse </Button>
                        }
                    </Box>
                </Toolbar>
            </AppBar >

            <Drawer open={open} anchor="left" onClose={() => setOpen(false)} sx={{ display: { xs: "flex", sm: "none" } }}>
                <NavListDrawer navArrayLinks={navLinks} setOpen={setOpen} user={user} />
            </Drawer>
        </>
    );
}
