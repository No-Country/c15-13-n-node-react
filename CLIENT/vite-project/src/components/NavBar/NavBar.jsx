//import { Tabs } from "@mui/material";
import { NavLink } from "react-router-dom";
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu"

const navLinks = [
    { title: "Inicio", path: "/" },
    { title: "Contacto", path: "/contacto" },
    { title: "Nosotros", path: "/Nosotros" },
    { title: "Registrarse", path: "/register" },
    { title: "Carrito", path: "/cart" },
]


export default function NavBar() {
    const [open, setOpen] = useState(false);
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
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>Titulo</Typography>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {
                            navLinks.map(item => { return (<Button key={item.title} component={NavLink} to={item.path}> {item.title} </Button>) }
                            )
                        }
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer open={open} anchor="left" onClose={() => setOpen(false)} sx={{ display: { xs: "flex", sm: "none" } }}>
                <NavListDrawer />
            </Drawer>
        </>
    );
}

