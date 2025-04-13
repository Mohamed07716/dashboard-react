import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { DrawerHeader } from "components/Sidebar";
import { rows  , columns} from "./data";

export default function Invoices({open}) {
    const theme = useTheme();

    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3, ml: open ? 40 :10 }}>
        <DrawerHeader />
        <Typography sx={{ marginBottom: 2 }}>

            <Typography sx={{
                fontSize:"40px",
                m:" 0 0 30px 20px",
                color:theme.palette.mode === "dark" ?
                theme.palette.primary.dark
                :theme.palette.primary.light
                }} >
                    Invoices 
                
                </Typography>

        <div style={{ height: 600, width: '100%' }}>
            <DataGrid 
            checkboxSelection
            slots={{ toolbar: GridToolbar }}
            rows={rows} 
            // @ts-ignore
            columns={columns} />
        </div>
            
            
            </Typography>
        </Box>
    );
}
