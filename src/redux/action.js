import type from "./type";
import Num_converter from "../utils/num_converter";

export const convert_to_decimal_action = (roman_number) => {
  const num = new Num_converter(roman_number).convert_to_decimal();

  return {
    type: type.create_operation,
    payload: num,
  };
};

export const convert_to_roman_action = (decimal_number) => {
  const num = new Num_converter(decimal_number).convert_to_roman();

  return {
    type: type.create_operation,
    payload: num,
  };
};
