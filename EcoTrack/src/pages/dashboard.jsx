import React, { useMemo } from "react";
import { logs } from "../data/logs";
import { Container, Typography, Card, CardContent } from "@mui/material";

const Dashboard = React.memo(() => {
  const totalCarbon = useMemo(() =>
    logs.reduce((sum, log) => sum + log.carbon, 0), []
  );

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h6">
            Total Carbon Emissions: {totalCarbon} kg
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
});

Dashboard.displayName = "Dashboard";

export default Dashboard;
