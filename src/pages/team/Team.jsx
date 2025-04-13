import { Box, Typography, useTheme } from "@mui/material";
import { DrawerHeader } from "components/Sidebar";
import { DataGrid} from '@mui/x-data-grid';
import { rows } from "./data";
import { blue, red, purple } from "@mui/material/colors";
import {AdminPanelSettingsOutlined 
    , LockOpenOutlined 
    , SecurityOutlined 
} from "@mui/icons-material";

export default function Team({open}) {
    const theme = useTheme();

    const columns = [
    {
    field: "id",
    headerName: "ID",
    width: 33,
    align: "center",
    headerAlign: "center"
    },
    { field: "name", headerName: "NAME", align: "center", headerAlign: "center" },
    {
    field: "email",
    headerName: "EMAIL",
    flex: 1,
    align: "center",
    headerAlign: "center"
    },
    { field: "age", headerName: "AGE", align: "center", headerAlign: "center" },
    {
    field: "phone",
    headerName: "PHONE",
    flex: 1,
    align: "center",
    headerAlign: "center"
    },
    {
    field: "access",
    headerName: "ACCESS ",
    flex: 1,
    align: "center",
    headerAlign: "center",
    renderCell:({row: {access}}) => {
        return(
        <Box sx={{
            padding:"5px",
            width:"100px",
            display:"block",
            m:"10px  auto",
            borderRadius:"8px",
            color:"#fff",
            bgcolor:access === "Admin" ?
            blue[500]
            :access === "Manager" ?purple[500] :red[600],
        
        
        }}>
            <Typography  sx={{display:"flex" , fontSize:"13px", 
                justifyContent:"space-evenly"}}>
                {access === "Admin" ?
                <AdminPanelSettingsOutlined fontSize="small"/>
                : access === "Manager" ? 
                <SecurityOutlined fontSize="small"/>
                : <LockOpenOutlined fontSize="small"/>
            } 
                {access}
            </Typography>
        </Box>
        )
    }
    }
];
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3  ,ml: open ? 30 :10 }}>
        <DrawerHeader />
        <Typography sx={{ marginBottom: 2 }}>
            <Typography sx={{
                fontSize:"40px",
                m:" 0 0 30px 20px",
                color:theme.palette.mode === "dark" ?
                theme.palette.primary.dark
                :theme.palette.primary.light
                }} >Team</Typography>

        <div style={{ height: 600, width: '100%' }}>
            <DataGrid rows={rows} 
// @ts-ignore
            columns={columns} />
        </div>


        </Typography>
        </Box>
    )
}
