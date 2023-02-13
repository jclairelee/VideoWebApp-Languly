import React from "react";
import { styled } from "@mui/system";

const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
});

const Label = styled("p")({
  color: "#767676",
  textTransform: "uppercase",
  fontWeight: "600",
  fontSize: "16px",
  marginBottom: "0.75rem;",
});

const Input = styled("input")({
  flexGrow: 1,
  height: "2.75rem",
  border: "1px solid black",
  borderRadius: "5px",
  color: "#292207",
  background: "white",
  marginBottom: "2rem",
  fontSize: "16px",
  padding: "0 1rem",
});

const InputandLabel = (props) => {
  const { value, setValue, label, type, placeholder } = props;

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        value={value}
        onChange={handleValueChange}
        type={type}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

export default InputandLabel;
