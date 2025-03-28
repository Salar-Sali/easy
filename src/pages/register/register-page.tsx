import { useState } from "react";
import {
  TextField,
  Button,
  FormControlLabel,
  Radio,
  Box,
  Stack,
  CircularProgress,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import { mainOperationsEndpoint } from "~/bootstrap/helper/endpoints";

const StyledRegisterPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
`;

const FormContainer = styled.form`
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
`;

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    address: "",
    country: "",
    zipCode: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    agree: false,
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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, agree: e.target.checked });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(mainOperationsEndpoint.register, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();
      console.log("Registration successful:", data);
    } catch (err) {
      setError("An error occurred during registration");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <StyledRegisterPage>
      <FormContainer onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <Typography variant="h5">Register Niro</Typography>
          {/* First Name & Last Name */}
          <Box display="flex" gap={2}>
            <TextField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
            />
          </Box>

          {/* Username */}
          <TextField
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            fullWidth
            required
          />

          {/* Email */}
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
          />

          {/* Address */}
          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            fullWidth
          />

          {/* Country & Zip Code */}
          <Box display="flex" gap={2}>
            <TextField
              label="Country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Zip Code"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              fullWidth
            />
          </Box>

          {/* Phone Number */}
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            fullWidth
          />

          {/* Password & Confirm Password */}
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
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              fullWidth
              required
            />
          </Box>

          {/* Agree on Terms */}
          <FormControlLabel
            control={
              <Radio checked={formData.agree} onChange={handleCheckboxChange} />
            }
            label="Agree on terms and conditions"
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress size={24} /> : "Register"}
          </Button>
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

export default RegisterPage;
