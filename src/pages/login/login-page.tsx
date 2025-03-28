import {
  Box,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import {
  mainOperationsEndpoint,
  pagesRoutes,
} from "~/bootstrap/helper/endpoints";
import {
  largeScreenSize,
  mediumScreenSize,
  smallScreenSize,
} from "~/bootstrap/helper/global-helper";
const StyledRegisterPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
`;

const FormContainer = styled.form`
  /* max-width: 500px; */
  width: 100%;

  @media (min-width: ${smallScreenSize}) {
    width: 80%;
  }
  @media (min-width: ${mediumScreenSize}) {
    width: 60%;
  }

  @media (min-width: ${largeScreenSize}) {
    width: 30%;
  }

  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
`;

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(mainOperationsEndpoint.login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log("Login successful:", data);
    } catch (err) {
      setError("An error occurred during login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <StyledRegisterPage>
      <FormContainer onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <Typography variant="h5">Login to Niro</Typography>

          <Typography variant="body2">
            Login for free to access any of our products
          </Typography>

          <TextField
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            fullWidth
            required
          />

          <Box display="flex" gap={2}>
            <TextField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              required
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress size={24} /> : "Login"}
          </Button>

          <Stack spacing={0.5} alignItems="center">
            <Button
              component={Link}
              to={pagesRoutes.register}
              disableElevation
              sx={{ textTransform: "capitalize" }}
            >
              Forgot password?
            </Button>
            <Typography variant="body2">
              New here?{" "}
              <Button
                component={Link}
                to={pagesRoutes.register}
                disableElevation
                sx={{ textTransform: "lowercase", padding: 0 }}
              >
                Create an account
              </Button>
            </Typography>
          </Stack>

          {/* Error Message */}
          {error && (
            <Box color="error.main" sx={{ mt: 1 }}>
              {error}
            </Box>
          )}
        </Stack>
      </FormContainer>
    </StyledRegisterPage>
  );
};

export default LoginPage;
