import { Toolbar, IconButton, Stack, Box, useTheme } from '@mui/material'
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import { styled , alpha } from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Notifications from '@mui/icons-material/NotificationsOutlined';
import Settings from '@mui/icons-material/SettingsOutlined';
import Person from '@mui/icons-material/Person2Outlined';
import DarkMode from '@mui/icons-material/DarkModeOutlined';
import LightMode from '@mui/icons-material/LightModeOutlined';
const drawerWidth = 240;


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      // @ts-ignore
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Topbar({open , handleDrawerOpen , setMode  }) {
  const theme = useTheme();
  return (
    <AppBar
    // @ts-ignore
    position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: "none" },
            ]}
          >
            <MenuIcon />
          </IconButton>
            
          <Search sx={{justifyContent:"space-between"}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box flexGrow={1}></Box>

        <Stack  direction="row" spacing={1} >
          
          {theme.palette.mode === "light" ? 
          (
          <IconButton onClick={()=>{
            localStorage.setItem("theme" , theme.palette.mode === "dark"? "light" : "dark")
            setMode((prevMode)=> prevMode === "light" ? "dark" : "light")
            
          }} aria-label="delete" color="inherit">
            <LightMode />
        </IconButton>
          ):(
            <IconButton onClick={()=>{
              localStorage.setItem("theme" , theme.palette.mode  === "dark"? "light" : "dark")
              setMode((prevMode)=> prevMode === "light" ? "dark" : "light")
            }} aria-label="delete" color="inherit">
          <DarkMode />
        </IconButton>
          )
      }



        <IconButton aria-label="delete" color="inherit">
          <Notifications />
        </IconButton>

        <IconButton aria-label="delete" color="inherit">
          <Settings />
        </IconButton>

        <IconButton aria-label="delete" color="inherit">
          <Person />
        </IconButton>

          </Stack>

        </Toolbar>
      </AppBar>
  )
}
