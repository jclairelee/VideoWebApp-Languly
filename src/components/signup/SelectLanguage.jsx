import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/inputLabel";
export default function SelectLanguage({
  language,
  targetLanguage,
  setTargetLanguage,
  nativeLanguage,
  setNativeLanguage,
}) {
  const handleTarget = (event) => {
    setTargetLanguage(event.target.value);
  };
  const handleNative = (event) => {
    setNativeLanguage(event.target.value);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            width: 300,
            marginBottom: 1,
          }}
        >
          <FormControl sx={{ width: 300, height: "4rem" }}>
            <InputLabel id="tagetLanguage">Learn</InputLabel>

            <Select
              sx={{ height: "3rem" }}
              labelId="tagetLanguage"
              id="tagetLanguage"
              value={targetLanguage}
              label="Target"
              onChange={handleTarget}
            >
              <MenuItem value={language[0]}>{language[0]}</MenuItem>
              <MenuItem value={language[1]}>{language[1]}</MenuItem>
              <MenuItem value={language[2]}>{language[2]}</MenuItem>
              <MenuItem value={language[3]}>{language[3]}</MenuItem>
              <MenuItem value={language[4]}>{language[4]}</MenuItem>
              <MenuItem value={language[5]}>{language[5]}</MenuItem>
              <MenuItem value={language[6]}>{language[6]}</MenuItem>
              <MenuItem value={language[7]}>{language[7]}</MenuItem>
              <MenuItem value={language[8]}>{language[8]}</MenuItem>
              <MenuItem value={language[9]}>{language[9]}</MenuItem>
              <MenuItem value={language[10]}>{language[10]}</MenuItem>
              <MenuItem value={language[11]}>{language[11]}</MenuItem>
              <MenuItem value={language[12]}>{language[12]}</MenuItem>
              <MenuItem value={language[13]}>{language[13]}</MenuItem>
              <MenuItem value={language[14]}>{language[14]}</MenuItem>
              <MenuItem value={language[15]}>{language[15]}</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: 300 }}>
          <FormControl sx={{ width: 300 }}>
            <InputLabel id="native">Native</InputLabel>

            <Select
              sx={{ height: "3rem" }}
              labelId="native"
              id="native-label"
              value={nativeLanguage}
              label="native"
              onChange={handleNative}
            >
              <MenuItem value={language[0]}>{language[0]}</MenuItem>
              <MenuItem value={language[1]}>{language[1]}</MenuItem>
              <MenuItem value={language[2]}>{language[2]}</MenuItem>
              <MenuItem value={language[3]}>{language[3]}</MenuItem>
              <MenuItem value={language[4]}>{language[4]}</MenuItem>
              <MenuItem value={language[5]}>{language[5]}</MenuItem>
              <MenuItem value={language[6]}>{language[6]}</MenuItem>
              <MenuItem value={language[7]}>{language[7]}</MenuItem>
              <MenuItem value={language[8]}>{language[8]}</MenuItem>
              <MenuItem value={language[9]}>{language[9]}</MenuItem>
              <MenuItem value={language[10]}>{language[10]}</MenuItem>
              <MenuItem value={language[11]}>{language[11]}</MenuItem>
              <MenuItem value={language[12]}>{language[12]}</MenuItem>
              <MenuItem value={language[13]}>{language[13]}</MenuItem>
              <MenuItem value={language[14]}>{language[14]}</MenuItem>
              <MenuItem value={language[15]}>{language[15]}</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    </>
  );
}
