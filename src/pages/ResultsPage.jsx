import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useMediaQuery, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Box } from '@mui/material';
import { format } from 'date-fns';

const Results = () => {
  const location = useLocation();
  const flights = location.state?.flights;
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery('(max-width: 600px)');

  useEffect(() => {
    if (!flights || flights.length === 0) {
      navigate('/');
    }
  }, [flights, navigate]);

  const from = flights?.itineraries?.[0]?.legs[0]?.origin.displayCode || 'Unknown';
  const to = flights?.itineraries?.[0]?.legs[0]?.destination.displayCode || 'Unknown';
  const passengers = location.state?.adults > 1 ? `${location.state.adults} travellers` : '1 Adult';
  const travelClass = location.state?.cabinClass ? location.state.cabinClass.charAt(0).toUpperCase() + location.state.cabinClass.slice(1) : 'Economy';

  const formatTime = (time) => {
    return format(new Date(time), 'h:mm a');
  };

  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}min`;
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          position: 'relative',
          mb: 2,
        }}
      >
        <Button
          variant="contained"
          onClick={() => navigate('/')}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            zIndex: 1,
            backgroundColor: '#739fff',
            padding: isSmallScreen ? '6px 12px' : '9px 12px',
            fontSize: isSmallScreen ? '0.5rem' : '0.7rem',
          }}
        >
          Back
        </Button>
        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
            color: '#739fff',
            fontSize: isSmallScreen ? '1rem' : '1.5rem',
            flexGrow: 1,
            mb: 2,
            mt: isSmallScreen ? 2 : 4,
          }}
        >
          {from} - {to} . {passengers}, {travelClass}
        </Typography>
      </Box>

      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          overflowX: 'auto',
          maxWidth: '100%', // Ensure full width
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              {isSmallScreen ? (
                <>
                  <TableCell>
                    <strong>Airline</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Time</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Price</strong>
                  </TableCell>
                </>
              ) : (
                <>
                  <TableCell>
                    <strong>Airline</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Departure</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Arrival</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Duration</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Stops</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Price</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Book</strong>
                  </TableCell>
                </>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {flights?.itineraries?.map((itinerary) => (
              <TableRow
                key={itinerary.id}
                sx={{ cursor: 'pointer' }}
                onClick={() => {
                  window.open(
                    `https://www.skyscanner.com/transport/flights/${itinerary.legs[0].origin.displayCode}/${
                      itinerary.legs[0].destination.displayCode
                    }/${new Date(itinerary.legs[0].departure).toISOString().slice(2, 10).replace(/-/g, '')}`,
                    '_blank'
                  );
                }}
              >
                <TableCell>
                  <img
                    src={itinerary.legs[0].carriers.marketing[0].logoUrl}
                    alt={itinerary.legs[0].carriers.marketing[0].name}
                    width={30}
                    height={30}
                    style={{ marginRight: 8 }}
                  />
                  {itinerary.legs[0].carriers.marketing[0].name}
                </TableCell>
                {isSmallScreen ? (
                  <>
                    <TableCell>
                      {formatTime(itinerary.legs[0].departure)} - {formatTime(itinerary.legs[0].arrival)}
                      <br />
                      {itinerary.legs[0].origin.displayCode} - {itinerary.legs[0].destination.displayCode}
                      <br />
                      {itinerary.legs[0].stopCount} stop(s)
                      <br />
                      {formatDuration(itinerary.legs[0].durationInMinutes)}
                    </TableCell>
                    <TableCell>
                      <strong>{itinerary.price.formatted}</strong>
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell>
                      {itinerary.legs[0].departure} <br />({itinerary.legs[0].origin.name})
                    </TableCell>
                    <TableCell>
                      {itinerary.legs[0].arrival} <br />({itinerary.legs[0].destination.name})
                    </TableCell>
                    <TableCell>{formatDuration(itinerary.legs[0].durationInMinutes)}</TableCell>
                    <TableCell>{itinerary.legs[0].stopCount} stop(s)</TableCell>
                    <TableCell>
                      <strong>{itinerary.price.formatted}</strong>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        href={`https://www.skyscanner.com/transport/flights/${itinerary.legs[0].origin.displayCode}/${
                          itinerary.legs[0].destination.displayCode
                        }/${new Date(itinerary.legs[0].departure).toISOString().slice(2, 10).replace(/-/g, '')}`}
                        target="_blank"
                      >
                        Book Now
                      </Button>
                    </TableCell>
                  </>
                )}
              </TableRow>
            ))}
            {/* Displaying return flights (legs[1]) if available */}
            {flights?.itineraries?.map(
              (itinerary) =>
                itinerary.legs[1] && (
                  <TableRow
                    key={`return-${itinerary.id}`}
                    sx={{ cursor: 'pointer', backgroundColor: '#f5f5f5' }}
                    onClick={() => {
                      window.open(
                        `https://www.skyscanner.com/transport/flights/${itinerary.legs[1].origin.displayCode}/${
                          itinerary.legs[1].destination.displayCode
                        }/${new Date(itinerary.legs[1].departure).toISOString().slice(2, 10).replace(/-/g, '')}`,
                        '_blank'
                      );
                    }}
                  >
                    <TableCell>
                      <img
                        src={itinerary.legs[1].carriers.marketing[0].logoUrl}
                        alt={itinerary.legs[1].carriers.marketing[0].name}
                        width={30}
                        height={30}
                        style={{ marginRight: 8 }}
                      />
                      {itinerary.legs[1].carriers.marketing[0].name}
                    </TableCell>
                    {isSmallScreen ? (
                      <>
                        <TableCell>
                          {formatTime(itinerary.legs[1].departure)} - {formatTime(itinerary.legs[1].arrival)}
                          <br />
                          {itinerary.legs[1].origin.displayCode} - {itinerary.legs[1].destination.displayCode}
                          <br />
                          {itinerary.legs[1].stopCount} stop(s)
                          <br />
                          {formatDuration(itinerary.legs[1].durationInMinutes)}
                        </TableCell>
                        <TableCell>
                          <strong>{itinerary.price.formatted}</strong>
                        </TableCell>
                      </>
                    ) : (
                      <>
                        <TableCell>
                          {itinerary.legs[1].departure} <br />({itinerary.legs[1].origin.name})
                        </TableCell>
                        <TableCell>
                          {itinerary.legs[1].arrival} <br />({itinerary.legs[1].destination.name})
                        </TableCell>
                        <TableCell>{formatDuration(itinerary.legs[1].durationInMinutes)}</TableCell>
                        <TableCell>{itinerary.legs[1].stopCount} stop(s)</TableCell>
                        <TableCell>
                          <strong>{itinerary.price.formatted}</strong>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="contained"
                            color="primary"
                            href={`https://www.skyscanner.com/transport/flights/${itinerary.legs[1].origin.displayCode}/${
                              itinerary.legs[1].destination.displayCode
                            }/${new Date(itinerary.legs[1].departure).toISOString().slice(2, 10).replace(/-/g, '')}`}
                            target="_blank"
                          >
                            Book Now
                          </Button>
                        </TableCell>
                      </>
                    )}
                  </TableRow>
                )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Results;
