import { Accordion, AccordionDetails, AccordionSummary, Box, Stack, Typography, useTheme } from '@mui/material';
import { DrawerHeader } from 'components/Sidebar';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {useState} from 'react';

export default function Faq({open}) {
    const [expanded, setExpanded] = useState(false);
    const theme = useTheme();  


    const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    };
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
            --FAQ 
        </Typography>
        
        </Typography>


        <Stack direction="column" gap="10px">
        <Accordion 
        defaultExpanded
        onChange={handleChange('panel1')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            >
            <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
                General settings
            </Typography>
            <Typography component="span" sx={{ color: 'text.secondary' }}>
                I am an accordion
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                Aliquam eget maximus est, id dignissim quam.
            </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion expanded={
    // @ts-ignore
        expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            >
            <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
                Users
            </Typography>
            <Typography component="span" sx={{ color: 'text.secondary' }}>
                You are currently not an owner
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                laoreet.
            </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion expanded={
    // @ts-ignore
        expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            >
            <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
                Advanced settings
            </Typography>
            <Typography component="span" sx={{ color: 'text.secondary' }}>
                Filtering has been entirely disabled for whole web server
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion expanded={
    // @ts-ignore
        expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            >
            <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
                Personal data
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
            </AccordionDetails>
        </Accordion>


        <Accordion expanded={
    // @ts-ignore
        expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            >
            <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
                General settings
            </Typography>
            <Typography component="span" sx={{ color: 'text.secondary' }}>
                I am an accordion
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                Aliquam eget maximus est, id dignissim quam.
            </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion expanded={
    // @ts-ignore
        expanded === 'panel6'} onChange={handleChange('panel6')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            >
            <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
                Users
            </Typography>
            <Typography component="span" sx={{ color: 'text.secondary' }}>
                You are currently not an owner
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                laoreet.
            </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion expanded={
    // @ts-ignore
        expanded === 'panel7'} onChange={handleChange('panel7')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            >
            <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
                Advanced settings
            </Typography>
            <Typography component="span" sx={{ color: 'text.secondary' }}>
                Filtering has been entirely disabled for whole web server
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
            </AccordionDetails>
        </Accordion>



    </Stack>
        </Box>
    )
}
