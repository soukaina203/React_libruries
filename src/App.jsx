import { Box, Button, Container, Paper, Typography } from "@mui/material";
import "./App.css";

function App() {
  let services = ["service 1", "service 2", "service 3"];
  return (
    <>
      <Container
      
      >
        <Typography variant="h4" sx={{ p: 2 }}>
          Services
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns:{m:'1fr',t:'1fr 1fr',l:'1fr 1fr 1fr'},
            justifyContent: "space-between",
            gap: 4,
            pt: 4,
          }}
        >
          {services.map((e) => {
            return (
              <Paper key={e} elevation={18}>
                <Typography variant="h3" sx={{ ml: 2 }}>
                  {e}
                </Typography>
                <Typography sx={{ ml: 2 }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
                  sequi hic deserunt necessitatibus amet odio temporibus, quo
                  natus repellat sit officia eum atque corporis repudiandae
                  delectus minima beatae! Ad, voluptas.
                </Typography>
                <Button
                  outlined
                  sx={{
                    color: "white",
                    bgcolor: "primary.dark",
                    mt: 2,
                    ml: 2,
                    mb: 2,

                    fontWeight: 600,
                  }}
                >
                  Click Here
                </Button>
              </Paper>
            );
          })}
        </Box>
      </Container>
    </>
  );
}

export default App;
