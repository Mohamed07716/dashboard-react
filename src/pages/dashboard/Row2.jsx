import { Box, IconButton, Paper, Stack, Typography, useTheme } from "@mui/material";
import Line from "../../pages/lineChart/Line";
import Download from "@mui/icons-material/DownloadOutlined";
import { Transactions } from "./data";
function Row2() {
    const theme = useTheme();
    return (
    <Stack direction="row" flexWrap={"wrap"} gap={1} marginTop={3}>

        <Paper sx={{maxWidth:900 ,flexGrow:1 , minWidth:"400px"}}>
        <Stack flexWrap={"wrap"} direction="row" justifyContent="space-between" alignItems="center">
            <Box>
        <Typography
        color={theme.palette.secondary.main}
        mb={1}
        mt={2}
        ml={4}
        variant="h6"
        
        >Revenue Genetated</Typography>

        <Typography variant="body2" ml={4}>%59,342.32</Typography>

            </Box>


            <Box>
            <IconButton sx={{mr:3}}>
                <Download />
            </IconButton>

            </Box>


        </Stack>
        <Line isDashboard={true}/>

        </Paper>




        <Box sx={{maxHeight:380 , overflow:"auto", flexGrow:1}}>
        <Paper>
            <Typography 
            color={theme.palette.secondary.main}
            fontWeight="bold"
            p={1.2}
            variant="h6"
            >
                Recent Transactions
            </Typography>
        </Paper>

        {Transactions.map((item) => {
            return (
            <Paper
                sx={{
                mt: 0.4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                }}
            >
                <Box p={1.2}>
                <Typography variant="body1">{item.txId}</Typography>
                <Typography variant="body2">{item.user} </Typography>
                </Box>
                <Typography variant="body1">{item.date} </Typography>

                <Typography
                borderRadius={1.4}
                p={1}
                bgcolor={theme.palette.error.main}
                color={theme.palette.getContrastText(theme.palette.error.main)}
                variant="body2"
                >
                ${item.cost}
                </Typography>
            </Paper>
            );
        })}
        </Box>

    </Stack>
    )
}
export default Row2;