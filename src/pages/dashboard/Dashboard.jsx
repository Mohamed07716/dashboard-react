import { Box, Button, Typography, useTheme } from "@mui/material";
import { DrawerHeader } from "../../components/Sidebar";
import Download from "@mui/icons-material/DownloadOutlined";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";

function Dashboard({open}) {
    const theme = useTheme();
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3  ,ml: open ? 40 :10 }}>
        <DrawerHeader />
        <Typography sx={{ marginBottom: 2  }}>

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
            DASHBOARD  
        </Typography>  

        <Box sx={{textAlign:"right"}}>     

        <Button variant="contained" sx={{padding:"6px 8px" , textTransform:"capitalize"}} color="primary">

        <Download />
        Download Reports
        </Button>

        </Box>


        <Row1 />
        <Row2 />
        <Row3 />


        
        </Typography>
        </Box>
    );
}
export default Dashboard;