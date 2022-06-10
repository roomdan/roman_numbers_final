import type from "./type";

const numbers_reducer = function (state="algo", action) {
    switch (action.type) {
        case type.create_operation:
            return action.payload;
        default:
            return state = 100
    }
}

export default numbers_reducer;