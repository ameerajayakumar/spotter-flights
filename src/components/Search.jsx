import { useState } from 'react';
import { Autocomplete, Box, Stack, TextField } from '@mui/material';

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
        maxWidth="sm"
        width="90%"
        sx={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          bgcolor: '#fff',
          px: { xs: 3, sm: 5 },
          py: { xs: 2, sm: 3 },
          borderRadius: '7px',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2,
        }}
      >
        <Autocomplete
          disablePortal
          options={top100Films}
          sx={{ width: { xs: '70%', sm: 300 } }}
          renderInput={(params) => <TextField {...params} label="Origin" />}
        />
        <Autocomplete
          disablePortal
          options={top100Films}
          sx={{ width: { xs: '70%', sm: 300 } }}
          renderInput={(params) => <TextField {...params} label="Destination" />}
        />
      </Stack>
    </Box>
  );
};

export default Search;
