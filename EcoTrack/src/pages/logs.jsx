import React, { useMemo } from "react";
import { Container, Typography, List, ListItem, ListItemText, Card, CardContent } from "@mui/material";

const Logs = React.memo(({ logs }) => {
  const logItems = useMemo(() =>
    logs.map((log) => (
      <ListItem key={log.id}>
        <ListItemText
          primary={log.activity}
          secondary={`${log.carbon} carbon units`}
        />
      </ListItem>
    )), [logs]
  );

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Activity Logs
      </Typography>
      <Card>
        <CardContent>
          <List>
            {logItems}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
});

Logs.displayName = "Logs";

export default Logs;
