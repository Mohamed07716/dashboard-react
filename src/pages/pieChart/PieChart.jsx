import { Box, Typography, useTheme } from '@mui/material'
import { DrawerHeader } from 'components/Sidebar'

import Pie from './Pie';

export const data1 = [
    {
    "id": "React",
    "label": "React",
    "value": 541,
    "color": "hsl(229, 70%, 50%)"
    },
    {
    "id": "css",
    "label": "css",
    "value": 554,
    "color": "hsl(64, 70%, 50%)"
    },
    {
    "id": "Bootstrap",
    "label": "Bootstrap",
    "value": 132,
    "color": "hsl(46, 70%, 50%)"
    },
    {
    "id": "sass",
    "label": "sass",
    "value": 116,
    "color": "hsl(148, 70%, 50%)"
    },
    {
    "id": "Js",
    "label": "Js",
    "value": 253,
    "color": "hsl(337, 70%, 50%)"
    }
]



export default function PieChart({open}) {
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
            PIE CHART 
        </Typography>
        
        <Pie />

        
        </Typography>
        </Box>
    )
}
