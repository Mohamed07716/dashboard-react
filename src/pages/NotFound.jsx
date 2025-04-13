import { Box, Typography, useTheme } from "@mui/material";

import { DrawerHeader } from "components/Sidebar";


export default function NotFound({open}) {
    const theme = useTheme();
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3  ,ml: open ? 40 :10 }}>
        <DrawerHeader />
        <Typography sx={{ marginBottom: 2 }}>

        <Typography
            sx={{
            fontSize: "40px",
            m: " 0 0 30px 20px",
            fontWeight: "bold",
            textAlign:"center",
            color:
                theme.palette.mode === "dark"
                ? theme.palette.error.dark
                : theme.palette.error.light
            }}
        >
            Page Not Found
        </Typography>

        
        </Typography>
        </Box>
    )
}
