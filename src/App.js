import './App.css';
import {Routes ,Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import { getDesignTokens } from './theme';
import Dashboard from './pages/dashboard/Dashboard';
import Team from './pages/team/Team';
import Contacts from './pages/contacts/Contacts';
import Invoices from './pages/invoices/Invoices';
import Form from './pages/form/Form';
import Calendar from './pages/calendar/Calendar';
import Faq from './pages/faq/Faq';
import BarChart from './pages/barChart/BarChart';
import PieChart from './pages/pieChart/PieChart';
import LineChart from './pages/lineChart/LineChart';
import Geography from './pages/geography/Geography';
import NotFound from './pages/NotFound';



function App() {
  const [mode , setMode] = React.useState(localStorage.getItem("theme") || "light");
  const theme = React.useMemo(()=>createTheme(getDesignTokens(mode)),[mode]);
  const [open, setOpen] = React.useState(false);

  return <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Sidebar setMode={setMode} open={open} setOpen={setOpen} />

        <Routes>
          <Route path="/" element={<Dashboard open={open} />} />
          <Route path="/team" element={<Team open={open} />} />
          <Route path="/contacts" element={<Contacts open={open} />} />
          <Route path="/invoices" element={<Invoices open={open} />} />

          <Route path="/form" element={<Form open={open} />} />
          <Route path="/calendar" element={<Calendar open={open} />} />
          <Route path="/faq" element={<Faq open={open} />} />

          <Route path="/bar" element={<BarChart open={open} />} />
          <Route path="/pie" element={<PieChart open={open} />} />
          <Route path="/line" element={<LineChart open={open} />} />
          <Route path="/geography" element={<Geography open={open} />} />
          <Route path="/*" element={<NotFound open={open} />} />
        </Routes>
      </ThemeProvider>
    </div>;

}

export default App;
