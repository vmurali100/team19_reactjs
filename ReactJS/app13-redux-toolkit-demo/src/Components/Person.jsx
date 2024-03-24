import { Box, Container, Grid, Stack, TextField } from "@mui/material";
import React from "react";

const Person = () => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Stack
              component="form"
              sx={{
                width: "25ch",
              }}
              spacing={2}
              noValidate
              autoComplete="off"
            >
              <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                defaultValue="Small"
                variant="filled"
                size="small"
              />
              <TextField
                hiddenLabel
                id="filled-hidden-label-normal"
                defaultValue="Normal"
                variant="filled"
              />
            </Stack>
          </Grid>
          <Grid item xs={8}>
            
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Person;
