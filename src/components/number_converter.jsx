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
import numbers from '../redux/action'

const NumberComverter = ({ names }) => {
  const [type, setType] = useState("romano");
  const [number, set_number] = useState('');
  const [result, setResult] = useState('');

  const db_items = useSelector(e=>e);
  const dispatch = useDispatch();

  const converter = (e)=>{
    set_number(e.target.value.toUpperCase())
  }

  useEffect(()=>{
    function convert() {
      dispatch(numbers(number));
      setResult(db_items.numbers_reducer);
    }
    
    if (type === 'romano') {
      convert();
    } else {
      setResult('Convertidor no disponible');
    }

  }, [number, db_items.numbers_reducer, dispatch, type])
  

  const handle_type = () => {
    setResult('');
    set_number('');
    if (type === "romano") {
      setType("decimal");
    } else {
      setType("romano");
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
            <Typography sx={{ mt: "2rem" }} fontSize="1.3rem">Ingresa el numero { type }</Typography>
            <FormControl>
              <TextField
                sx={{ width: "100%", mt: "1rem" }}
                id="standard-basic"
                label={"Numero " + type}
                variant="standard"
                onChange={converter}
                disabled={type === 'decimal' ? true : false}
                value={number}
              ></TextField>
            </FormControl>
            <Typography sx={{ mt: "3rem" }} fontSize="1.3rem">El resultado es:</Typography>
            <div className="container">
              <div className="result-oper">
                  { result }
              </div>
            </div>
            <Alert sx={{mt:2}}>Calculadora de numeros romanos</Alert>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};
export default NumberComverter;
