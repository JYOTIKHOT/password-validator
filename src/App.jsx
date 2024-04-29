import { Card, Stack } from "@mui/material";
import PasswordValidator from "./components/PasswordValidator";
import Hero from "./assets/hero.jpg";

function App() {
  return (
    <>
      <Stack
        width="100%"
        minHeight="100vh"
        justifyContent="center"
        alignItems="center"
        sx={{ background: `url(${Hero})`, backgroundSize: "cover" }}
      >
        <Card
          sx={{ width: "60%", opacity: 0.88, borderRadius: "12px" }}
          variant="outlined"
        >
          <PasswordValidator />
        </Card>
      </Stack>
    </>
  );
}

export default App;
