import { Box, Typography, useTheme } from '@mui/material'

import { DrawerHeader } from 'components/Sidebar'
import Line from './Line';




export default function LineChart({open}) {
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
            color:
                theme.palette.mode === "dark"
                ? theme.palette.primary.dark
                : theme.palette.primary.light
            }}
        >
            LINE CHART 
        </Typography>
            

        <Line />
        
        </Typography>
        </Box>
    )
}
