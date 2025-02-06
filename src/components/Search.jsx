// import { useState } from 'react';
import { Autocomplete, Box, Button, FormControl, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import { useEffect, useState } from 'react';
import { fetchAirports } from '../api';

const Search = () => {
  const [trip, setTrip] = useState('round-trip');
  const [count, setCount] = useState(1);
  const [seat, setSeat] = useState('economy');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [originOptions, setOriginOptions] = useState([]);
  const [destinationOptions, setDestinationOptions] = useState([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      setOriginOptions(await fetchAirports(origin));
    }, 250);

    return () => clearTimeout(delayDebounceFn);
  }, [origin]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      setDestinationOptions(await fetchAirports(destination));
    }, 250);

    return () => clearTimeout(delayDebounceFn);
  }, [destination]);

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
              flexDirection: { xs: 'column', md: 'row' },
              gap: 2,
            }}
          >
            <Autocomplete
              size="small"
              options={originOptions}
              getOptionLabel={(option) => `${option.skyId} (${option.name})`}
              onInputChange={(event, newValue) => setOrigin(newValue)}
              sx={{ width: { xs: '70%', sm: 300 } }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Where from?"
                  label="Origin"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <FlightTakeoffIcon />
                      </InputAdornment>
                    ),
                    sx: { fontSize: '0.85rem' },
                  }}
                />
              )}
            />
            <Autocomplete
              size="small"
              options={destinationOptions}
              getOptionLabel={(option) => `${option.skyId} (${option.name})`}
              onInputChange={(event, newValue) => setDestination(newValue)}
              sx={{ width: { xs: '70%', sm: 300 } }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Where to?"
                  label="Destination"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <FlightLandIcon />
                      </InputAdornment>
                    ),
                    sx: { fontSize: '0.85rem' },
                  }}
                />
              )}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Outbound"
                slotProps={{
                  textField: {
                    size: 'small',
                    sx: {
                      '& .MuiInputBase-input': { fontSize: '0.85rem' },
                      '& .MuiInputLabel-root': { fontSize: '0.85rem' },
                    },
                  },
                }}
              />
              <DatePicker
                label="Inbound"
                slotProps={{
                  textField: {
                    size: 'small',
                    sx: {
                      '& .MuiInputBase-input': { fontSize: '0.85rem' },
                      '& .MuiInputLabel-root': { fontSize: '0.85rem' },
                    },
                  },
                }}
              />
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
