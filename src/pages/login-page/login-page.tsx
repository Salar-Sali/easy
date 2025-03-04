import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Paper, Box } from "@mui/material";
import styled from "styled-components";
import { login } from "~/pages/login-page/auth-service";

const LoginWrapper = styled(Box)`
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
`;

const LoginCard = styled(Paper)`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background-color: #fff;
`;

const LoginButton = styled(Button)`
  margin-top: 16px;
  background-color: #f17e01 !important;
  &:hover {
    background-color: #35393a !important;
  }
`;

const ErrorText = styled(Typography)`
  margin-top: 16px;
  color: red;
`;

const LogoImage = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 16px;
`;
const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/");
    } catch {
      setError("Ungültige E-Mail-Adresse oder Passwort");
    }
  };

  return (
    <LoginWrapper>
      <LoginCard elevation={3}>
        <LogoImage src="/logo.png" alt="Company Logo" />
        <Typography variant="h6" gutterBottom>
          Willkommen zurück
        </Typography>
        <form onSubmit={handleLogin} style={{ width: "100%" }}>
          <TextField
            fullWidth
            type="email"
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            type="password"
            label="Passwort"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <LoginButton type="submit" fullWidth variant="contained">
            Login
          </LoginButton>
          {error && <ErrorText>{error}</ErrorText>}
        </form>
      </LoginCard>
    </LoginWrapper>
  );
};

export default LoginPage;
