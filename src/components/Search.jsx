// import { useState } from 'react';
import { Autocomplete, Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
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
            <FormControl variant="standard" fullWidth size="small">
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value="10" label="Age" onChange="">
                <MenuItem value={10}>Round Trip</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" fullWidth size="small">
              <Select labelId="demo-simple-select-label1" id="demo-simple-select" value="20" label="Age" onChange="">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>1</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" fullWidth size="small">
              <Select labelId="demo-simple-select-label2" id="demo-simple-select" value="30" label="Age" onChange="">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Economy</MenuItem>
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
