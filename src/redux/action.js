import type from "./type"
import Num_converter from '../utils/num_converter'

const numbers_action = (roman_number)=>{

    const num = new Num_converter(roman_number).covert_to_decimal();

    return {
        type:type.create_operation,
        payload:num
    }
}

export default numbers_action;