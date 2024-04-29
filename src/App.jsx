import { Card, Stack } from "@mui/material";
import PasswordValidator from "./components/PasswordValidator";

function App() {
  return (
    <>
      <Stack
        width="100%"
        minHeight="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Card sx={{ width: "60%" }} variant="outlined">
          <PasswordValidator />
        </Card>
      </Stack>
    </>
  );
}

export default App;
