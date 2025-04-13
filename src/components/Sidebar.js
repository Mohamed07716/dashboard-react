import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Topbar from "./Topbar";
import Home from "@mui/icons-material/HomeOutlined";
import People from "@mui/icons-material/PeopleAltOutlined";
import Receipt from "@mui/icons-material/ReceiptOutlined";
import Contacts from "@mui/icons-material/ContactsOutlined";
import Person from "@mui/icons-material/Person2Outlined";
import Calendar from "@mui/icons-material/CalendarTodayOutlined";
import Help from "@mui/icons-material/HelpOutlineOutlined";
import Bar from "@mui/icons-material/BarChartOutlined";
import Pie from "@mui/icons-material/PieChartOutlineOutlined";
import Timeline from "@mui/icons-material/TimelineOutlined";
import Map from "@mui/icons-material/MapOutlined";
import { Avatar, Stack, Tooltip } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = theme => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});

const closedMixin = theme => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== "open"
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme)
      }
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme)
      }
    }
  ]
}));

const arr1 = [
  { text: "Dashboard", icon: <Home />, path: "/" },
  { text: "Manage Team", icon: <People />, path: "/team" },
  { text: "Contacts Information", icon: <Contacts />, path: "/contacts" },
  { text: "Invioces Balances", icon: <Receipt />, path: "/invoices" }
];
const arr2 = [
  { text: "Profile Form", icon: <Person />, path: "/form" },
  { text: "Calendar", icon: <Calendar />, path: "/calendar" },
  { text: "FAQ Page", icon: <Help />, path: "/faq" }
];

const arr3 = [
  { text: "Bar Chart", icon: <Bar />, path: "/bar" },
  { text: "Pie Chart", icon: <Pie />, path: "/pie" },
  { text: "Line Chart", icon: <Timeline />, path: "/line" },
  { text: "Geography Chart", icon: <Map />, path: "/geography" }
];

export default function MiniDrawerr({ setMode, open, setOpen }) {
  const navigate = useNavigate();
  const theme = useTheme();
  const location = useLocation();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Topbar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        setMode={setMode}
      />

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl"
              ? <ChevronRightIcon />
              : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Stack sx={{ mb: "40px", mt: "20px" }}>
          <Avatar
            sx={{
              mx: "auto",
              border: "2px solid grey",
              my: 1,
              width: open ? "88px" : "44px",
              height: open ? "88px" : "44px",
              transition: "0.3s"
            }}
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Typography
            align="center"
            sx={{ fontSize: open ? 17 : 0, transition: "0.3s" }}
          >
            Mohamed Ahmed
          </Typography>
          <Typography
            align="center"
            sx={{
              fontSize: open ? 15 : 0,
              transition: "0.3s",
              color: theme.palette.info.main
            }}
          >
            Admin
          </Typography>
        </Stack>

        <Divider />
        <List>
          {arr1.map(item =>
            <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
              <Tooltip placement="left" title={open === false ? item.text : null}>

              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor:
                      item.path === location.pathname
                        ? theme.palette.mode === "dark"
                          ? theme.palette.grey[800]
                          : theme.palette.grey[300]
                        : null
                  },
                  open
                    ? {
                        justifyContent: "initial"
                      }
                    : {
                        justifyContent: "center"
                      }
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center"
                    },
                    open
                      ? {
                          mr: 3
                        }
                      : {
                          mr: "auto"
                        }
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1
                        }
                      : {
                          opacity: 0
                        }
                  ]}
                />
              </ListItemButton>

              </Tooltip>
            </ListItem>
          )}
        </List>

        <Divider />
        <List>
          {arr2.map(item =>
            <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
              <Tooltip placement="left" title={open === false ? item.text : null}>

              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor:
                      item.path === location.pathname
                        ? theme.palette.mode === "dark"
                          ? theme.palette.grey[800]
                          : theme.palette.grey[300]
                        : null
                  },
                  open
                    ? {
                        justifyContent: "initial"
                      }
                    : {
                        justifyContent: "center"
                      }
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center"
                    },
                    open
                      ? {
                          mr: 3
                        }
                      : {
                          mr: "auto"
                        }
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1
                        }
                      : {
                          opacity: 0
                        }
                  ]}
                />
              </ListItemButton>

              </Tooltip>
            </ListItem>
          )}
        </List>

        <Divider />
        <List>
          {arr3.map(item =>
            <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
              <Tooltip placement="left" title={open === false ? item.text : null}>

              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor:
                      item.path === location.pathname
                        ? theme.palette.mode === "dark"
                          ? theme.palette.grey[800]
                          : theme.palette.grey[300]
                        : null
                  },
                  open
                    ? {
                        justifyContent: "initial"
                      }
                    : {
                        justifyContent: "center"
                      }
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center"
                    },
                    open
                      ? {
                          mr: 3
                        }
                      : {
                          mr: "auto"
                        }
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1
                        }
                      : {
                          opacity: 0
                        }
                  ]}
                />
              </ListItemButton>
              </Tooltip>

            </ListItem>
          )}
        </List>
      </Drawer>
    </Box>
  );
}
