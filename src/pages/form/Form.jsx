import {
  Box,
  MenuItem,
  Stack,
  TextField,
  Typography,
  useTheme,
  Button,
  Alert,
  Snackbar
} from "@mui/material";
import { DrawerHeader } from "components/Sidebar";
import React from "react";
import { useForm } from "react-hook-form";

const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const data = [
  {
    value: "User",
    label: "User"
  },
  {
    value: "Admin",
    label: "Admin"
  },
  {
    value: "Manager",
    label: "Manager"
  }
];
export default function Form({ open }) {
  const [ openn, setOpen ] = React.useState(false);
  const theme = useTheme();  
  const handleClick = () => {
      setOpen(true);  
    };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleClick();
  };

  return (
    <Box component='main' sx={{ flexGrow: 1, p: 3, ml: open ? 40 : 10 }}>
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
          CREATE USER
        </Typography>
        <Typography
          sx={{
            ml: "25px",
            fontSize: "17px",
            fontWeight: "bold"
          }}
        >
          Create a New User Profile
        </Typography>

        <Box
          component='form'
          onSubmit={handleSubmit(onSubmit)}
          sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 8 }}
          noValidate
          autoComplete='off'
        >
          <Stack direction='row' sx={{ gap: 3 }}>
            <TextField
              sx={{ flex: 1 }}
              error={errors.firstName ? true : false}
              helperText='This Field is required'
              {...register("firstName", { required: true, minLength: 3 })}
              label='First Name'
              variant='outlined'
            />
            <TextField
              sx={{ flex: 1 }}
              error={Boolean(errors.lastName)}
              helperText={
                Boolean(errors.lastName) ? "This Field is required" : null
              }
              {...register("lastName", { required: true, minLength: 3 })}
              label='Last Name'
              variant='outlined'
            />
          </Stack>

          <TextField
            error={Boolean(errors.email)}
            helperText={
              Boolean(errors.email) ? "Please Provide a Valid Email" : null
            }
            {...register("email", { required: true, pattern: regEmail })}
            type='email'
            label='Email'
            variant='outlined'
          />

          <TextField
            error={Boolean(errors.number)}
            helperText={
              Boolean(errors.number) ? "This Field is required" : null
            }
            {...register("number", { required: true, pattern: phoneRegExp })}
            type='number'
            label='Contact Number'
            variant='outlined'
          />

          <TextField label='Address 1' variant='outlined' />
          <TextField label='Address 2' variant='outlined' />

          <TextField
            id='outlined-select-currency'
            select
            label='Role'
            defaultValue='User'
            helperText='Please select your Role'
          >
            {data.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Box sx={{ textAlign: "left" }}>
            <Button type='submit' variant='contained' color='primary'>
              Create New User
            </Button>

            <Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              open={openn}
              autoHideDuration={6000}
              onClose={handleClose}
            >
              <Alert
                onClose={handleClose}
                severity='success'
                variant='filled'
                sx={{ width: "100%" }}
              >
                Account Created Successfully
              </Alert>
            </Snackbar>
          </Box>
        </Box>
      </Typography>
    </Box>
  );
}
