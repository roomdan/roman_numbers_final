import {
  Alert,
  Box,
  Card,
  CardContent,
  FormControl,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./number_converter.css";
import {
  convert_to_decimal_action,
  convert_to_roman_action,
} from "../redux/action";

const NumberComverter = () => {
  const [type, setType] = useState("romano");
  const [number, set_number] = useState("");
  const [result, setResult] = useState("Insert a value");

  const db_items = useSelector((e) => e);
  const dispatch = useDispatch();

  const converter = (e) => {
    set_number(e.target.value.toUpperCase());
  };

  useEffect(() => {
    function convert_to_decimal() {
      dispatch(convert_to_decimal_action(number));
      setResult(db_items.numbers_reducer);
    }
    
    function convert_to_roman() {
      dispatch(convert_to_roman_action(number));
      setResult(db_items.numbers_reducer);
    }

    if (type === "romano") {
      convert_to_decimal();
    } else if (type === "decimal") {
      convert_to_roman();
    }
  }, [number, db_items.numbers_reducer, dispatch, type]);

  const handle_type = () => {
    setResult("");
    set_number("");
    if (type === "romano") {
      setType("decimal");
      setResult("Insert a decimal number.")
    } else {
      setType("romano");
      setResult("Insert a roman number.")
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: 600,
          height: "fint-content",
          backgroundColor: "white",
        }}
      >
        <Card>
          <CardContent sx={{ display: "flex", flexDirection: "column" }}>
            <FormControl>
              <ToggleButtonGroup
                color="secondary"
                value={type}
                exclusive
                onChange={handle_type}
              >
                <ToggleButton value="romano">Numero Romano</ToggleButton>
                <ToggleButton value="decimal">Numero Decimal</ToggleButton>
              </ToggleButtonGroup>
            </FormControl>
            <Typography sx={{ mt: "2rem" }} fontSize="1.3rem">
              Ingresa el numero {type}
            </Typography>
            <FormControl>
              <TextField
                sx={{ width: "100%", mt: "1rem" }}
                id="standard-basic"
                label={"Numero " + type}
                variant="standard"
                onChange={converter}
                value={number}
              ></TextField>
            </FormControl>
            <Typography sx={{ mt: "3rem" }} fontSize="1.3rem">
              El resultado es:
            </Typography>
            <div className="container">
              <div className="result-oper">{ result && result !== 0 ? result : "Insert a value"}</div>
            </div>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};
export default NumberComverter;
