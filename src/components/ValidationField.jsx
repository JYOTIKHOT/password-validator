import { Stack, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React from "react";

const ValidationField = ({ checkPassed, title }) => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      {checkPassed && <CheckCircleIcon color="success" />}
      <Typography color={checkPassed ? "green" : "black"} variant="body1">
        {title}
      </Typography>
    </Stack>
  );
};

export default ValidationField;
