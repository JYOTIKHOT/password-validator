import { Box, Stack, TextField, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";
import ValidationField from "./ValidationField";

const PasswordValidator = () => {
  const [password, setPassword] = useState("");
  const [range, setRange] = useState([8, 15]);
  return (
    <Box p={2} width="100%" height="100%">
      <Stack
        spacing={2}
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Typography variant="h4" fontWeight="bold">
          Password validator
        </Typography>
        <TextField
          size="small"
          label="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Stack alignItems="flex-start" direction="column" spacing={1}>
          <Stack direction="row" spacing={1} alignItems="center">
            {password.length >= range[0] && password.length <= range[1] && (
              <CheckCircleIcon color="success" />
            )}
            <Typography
              color={
                password.length >= range[0] && password.length <= range[1]
                  ? "green"
                  : "black"
              }
              variant="body1"
            >
              Password Range
            </Typography>
            <Typography variant="body1">Min</Typography>
            <TextField
              size="small"
              width="20px"
              type="number"
              value={range[0]}
              onChange={(e) => setRange([e.target.value, range[1]])}
            />
            <Typography variant="body1">Max</Typography>
            <TextField
              size="small"
              type="number"
              value={range[1]}
              onChange={(e) => setRange([range[0], e.target.value])}
            />
          </Stack>
          <ValidationField
            checkPassed={password !== password.toLowerCase()}
            title="Password contains capital letter"
          />
          <ValidationField
            checkPassed={/\d/.test(password)}
            title="Password contains a number"
          />
          <ValidationField
            checkPassed={password !== password.toUpperCase()}
            title="Password contains small letter"
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default PasswordValidator;
