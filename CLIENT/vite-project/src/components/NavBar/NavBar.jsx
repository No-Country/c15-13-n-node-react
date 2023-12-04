//import { Tabs } from "@mui/material";
import { NavLink } from "react-router-dom";
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu"

const navLinks = [
    { title: "Inicio", path: "/" },
    { title: "Contacto", path: "/contacto" },
    { title: "Nosotros", path: "/nosotros" },
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
                    <Box variant="h6" sx={{ flexGrow: 1 }}>
                        <img src="/image/logo.jpg" className="h-20" />
                        <Typography>JARDIN VERDE</Typography>
                    </Box>
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


{/* <div className="Header left-[135px] top-[86px] absolute justify-start items-center gap-52 inline-flex">
    <div className="Frame556 justify-start items-start gap-56 flex">
        <div className="Logo w-28 h-6 justify-end items-center flex">
            <div className="Exclusive text-black text-2xl font-bold font-['Inter'] leading-normal tracking-wide">Aca va Logo</div>
        </div>
        <div className="Frame554 justify-start items-start gap-12 flex">
            <div className="Header w-14 h-6 px-1 justify-center items-center flex">
                <div className="Inicio w-12 h-6 text-center text-black text-base font-normal font-['Poppins'] leading-normal">Inicio</div>
            </div>
            <div className="Header w-20 h-8 justify-center items-center flex">
                <div className="Contacto w-24 h-8 text-center text-black text-base font-normal font-['Poppins'] leading-normal">Contacto</div>
            </div>
            <div className="Header w-14 h-8 justify-center items-center flex">
                <div className="Nosotros w-20 h-8 text-center text-black text-base font-normal font-['Poppins'] leading-normal">Nosotros</div>
            </div>
            <div className="Header w-20 flex-col justify-start items-center inline-flex">
                <div className="Registrarse text-center text-black text-base font-normal font-['Poppins'] leading-normal">Ingresar</div>
                <div className="Underline w-16 h-px relative opacity-50">
                    <div className="Line1 w-16 h-px left-0 top-0 absolute border border-black"></div>
                </div>
            </div>
        </div>
    </div>
    <div className="Frame552 justify-start items-center gap-6 flex">
        <div className="SearchComponentSet pl-5 pr-3 py-1.5 bg-neutral-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="Frame550 justify-center items-center gap-8 inline-flex">
                <div className="QuEstSBuscando opacity-50 text-black text-xs font-normal font-['Poppins'] leading-none">Qué estás buscando?</div>
                <div className="Component2 w-6 h-6 relative" />
            </div>
        </div>
    </div>
</div> */}