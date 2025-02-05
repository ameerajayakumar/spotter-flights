// import { useState } from 'react';
import { Autocomplete, Box, Button, Stack, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';

const Search = () => {
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
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} height="100vh">
      <Stack
        minWidth="50%"
        maxWidth="90%"
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: '#fff',
          px: { xs: 3, sm: 5 },
          py: { xs: 2, sm: 3 },
          borderRadius: '7px',
          flexDirection: 'column',
          gap: 2,
        }}
      >
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
            <DatePicker label="Outbound" />
            <DatePicker label="Inbound" />
          </LocalizationProvider>
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
