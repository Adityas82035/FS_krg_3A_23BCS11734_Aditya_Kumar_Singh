import React from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';

const DashboardSummary = React.memo(() => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard Summary
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="body1">
            Summary of carbon footprint tracking activities.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
});

DashboardSummary.displayName = "DashboardSummary";

export default DashboardSummary;
