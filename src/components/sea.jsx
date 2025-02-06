// import { useState } from 'react';
import { Autocomplete, Box, Button, FormControl, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import { useState } from 'react';

const Search = () => {
  const [trip, setTrip] = useState('round-trip');
  const [count, setCount] = useState(1);
  const [seat, setSeat] = useState('economy');

  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
  ];
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} height="85vh">
      <Typography variant="h3" color="#739fff" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: { xs: 4, md: 10 } }}>
        GoFlights
      </Typography>
      <Stack
        minWidth="50%"
        maxWidth="90%"
        sx={{
          justifyContent: { xs: 'flex-start', md: 'center' },
          alignItems: { xs: 'center', md: 'center' },
          bgcolor: '#fff',
          px: { xs: 3, sm: 5 },
          py: { xs: 2, sm: 3 },
          borderRadius: '7px',
          flexDirection: { xs: 'column' },
          gap: 2,
        }}
      >
        <Stack
          //   minWidth="50%"
          //   maxWidth="90%"
          sx={{
            justifyContent: { xs: 'flex-start', md: 'flex-start' },
            alignItems: { xs: 'flex-start', md: 'flex-start' },
            bgcolor: '#fff',
            flexDirection: { xs: 'column' },
            mb: { xs: 1, md: 2 },
            gap: 2,
          }}
        >
          <Stack
            // maxWidth="90%"
            sx={{
              justifyContent: 'flex-start',
              alignItems: { xs: 'flex-start', md: 'flex-start' },
              flexDirection: { xs: 'row', md: 'row' },
              mb: { xs: 2, md: 3 },
              gap: 2,
              minWidth: { xs: '100%', md: '50%' },
            }}
          >
            <FormControl variant="standard" sx={{ width: { xs: '50%', md: '20%' } }} size="small">
              <Select
                id="trip"
                value={trip}
                onChange={(e) => {
                  setTrip(e.target.value);
                }}
                sx={{
                  color: '#757575',
                  fontSize: '0.75rem',
                }}
              >
                <MenuItem value="round-trip">Round trip</MenuItem>
                <MenuItem value="one-way">One way</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ width: { xs: '50%', md: '10%' } }} size="small">
              <Select
                id="count"
                value={count}
                onChange={(e) => {
                  setCount(e.target.value);
                }}
                sx={{
                  color: '#757575',
                  fontSize: '0.75rem',
                }}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ width: { xs: '50%', md: '20%' } }} size="small">
              <Select
                id="class"
                value={seat}
                onChange={(e) => {
                  setSeat(e.target.value);
                }}
                sx={{
                  color: '#757575',
                  fontSize: '0.75rem',
                }}
              >
                <MenuItem value="economy">Economy</MenuItem>
                <MenuItem value="premium">Premium Economy</MenuItem>
                <MenuItem value="business">Business</MenuItem>
                <MenuItem value="first">First</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Stack
            minWidth="50%"
            maxWidth="90%"
            sx={{
              justifyContent: 'flex-start',
              alignItems: { xs: 'flex-start', md: 'center' },
              // bgcolor: '#fff',
              // px: { xs: 3, sm: 5 },
              // py: { xs: 2, sm: 3 },
              // borderRadius: '7px',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 2,
            }}
          >
            <Autocomplete
              size="small"
              disablePortal
              options={top100Films}
              sx={{ width: { xs: '70%', sm: 300 } }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Where from?"
                  label="Origin"
                  slotProps={{
                    input: {
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          <FlightTakeoffIcon />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              )}
            />
            <Autocomplete
              size="small"
              disablePortal
              options={top100Films}
              sx={{ width: { xs: '70%', sm: 300 } }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Where to?"
                  label="Destination"
                  slotProps={{
                    input: {
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          <FlightLandIcon />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              )}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Outbound" slotProps={{ textField: { size: 'small' } }} />
              <DatePicker label="Inbound" slotProps={{ textField: { size: 'small' } }} />
            </LocalizationProvider>
          </Stack>
        </Stack>
        <Button
          variant="outlined"
          startIcon={<SearchIcon />}
          sx={{ color: '#70AAD4', borderColor: '#70AAD4', '&:hover': { borderColor: '#70AAD4', backgroundColor: '#E2F5FC' } }}
        >
          Search
        </Button>
      </Stack>
    </Box>
  );
};

export default Search;
