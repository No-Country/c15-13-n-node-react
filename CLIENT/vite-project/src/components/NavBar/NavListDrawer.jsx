import { Box, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { List } from "@mui/material"

export default function NavListDrawer() {
    return <Box sx={{ width: 250 }}>
        <nav>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText>
                            inicio
                        </ListItemText>
                    </ListItemButton>
                </ListItem>

            </List>
        </nav>
    </Box>
}