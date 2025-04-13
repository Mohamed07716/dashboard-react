import { Stack, useTheme } from "@mui/material";
import Card from "./card";
import Email from "@mui/icons-material/Email";
import Point from "@mui/icons-material/PointOfSale";
import PersonalAdd from "@mui/icons-material/PersonAddAlt1";
import Traffic from "@mui/icons-material/Traffic";
import { data1, data2, data3, data4 } from "./data";

export default function Row1() {
    const theme = useTheme();
    return (
    <Stack sx={{marginTop:2}} direction="row" flexWrap="wrap" 
    gap={1} justifyContent={{xs:"center", sm:"space-between"}}>
    
    <Card 
    icon={<Email sx={{fontSize:"23px" , color:theme.palette.secondary.main}} />} 
    title={"12.361"} 
    subTitle={"Emails Sent"} 
    data={data1}
    scheme={"nivo"}
    increase={"+14%"}/>



    <Card 
    icon={<Point sx={{fontSize:"23px" , color:theme.palette.secondary.main}}  />} 
    title={"431,225"} 
    subTitle={"Sales obtained"} 
    data={data2}
    scheme={"category10"}
    increase={"+21%"}/>

    <Card 
    icon={<PersonalAdd sx={{fontSize:"23px" , color:theme.palette.secondary.main}} />} 
    title={"32,441"} 
    subTitle={"New Clients"} 
    data={data3}
    scheme={"accent"}
    increase={"+5%"}/>

    <Card 
    icon={<Traffic sx={{fontSize:"23px" , color:theme.palette.secondary.main}} />} 
    title={"1,325,134"} 
    subTitle={"Traffic Recieved"} 
    data={data4}
    scheme={"dark2"}
    increase={"+43%"}/>



    </Stack>
    )
}
