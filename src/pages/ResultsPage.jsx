import { useLocation } from 'react-router-dom';
import { Card, CardContent, Typography, Grid, Divider, Button } from '@mui/material';

const Results = () => {
  const location = useLocation();
  const flights = location.state?.flights;

  return (
    <Grid container spacing={2} justifyContent="center">
      {flights.itineraries.map((itinerary) => (
        <Grid item xs={12} sm={6} md={4} key={itinerary.id}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Price: {itinerary.price.formatted}
              </Typography>
              <Divider />

              <Typography variant="subtitle1" gutterBottom>
                <strong>Departure:</strong> {itinerary.legs[0].departure}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {itinerary.legs[0].origin.name} to {itinerary.legs[0].destination.name}
              </Typography>

              <Typography variant="subtitle1" gutterBottom>
                <strong>Arrival:</strong> {itinerary.legs[0].arrival}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {itinerary.legs[0].destination.name}
              </Typography>

              <Divider sx={{ marginY: 2 }} />

              <Typography variant="body2">
                <strong>Airline:</strong> {itinerary.legs[0].carriers.marketing[0].name}
              </Typography>
              <img src={itinerary.legs[0].carriers.marketing[0].logoUrl} alt={itinerary.legs[0].carriers.marketing[0].name} width={30} height={30} />

              <Divider sx={{ marginY: 2 }} />

              <Typography variant="body2">
                <strong>Duration:</strong> {itinerary.legs[0].durationInMinutes} minutes
              </Typography>
              <Typography variant="body2">
                <strong>Stop Count:</strong> {itinerary.legs[0].stopCount} stop(s)
              </Typography>

              <Divider sx={{ marginY: 2 }} />

              <Button
                variant="contained"
                color="primary"
                fullWidth
                href={`https://www.skyscanner.com/transport/flights/${itinerary.legs[0].origin.displayCode}/${
                  itinerary.legs[0].destination.displayCode
                }/${new Date(itinerary.legs[0].departure).getFullYear()}${new Date(itinerary.legs[0].departure).getMonth() + 1}${new Date(
                  itinerary.legs[0].departure
                ).getDate()}`}
                target="_blank"
              >
                Book Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Results;
