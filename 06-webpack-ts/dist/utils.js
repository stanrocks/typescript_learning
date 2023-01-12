import _ from "lodash";
export function add(x, y) {
    // creating some artificial dependency
    // just to see more activities in network tab in chrome dev tools
    return _.add(x, y);
}
export function multiply(x, y) {
    return x * y;
}
export function divide(x, y) {
    return x / y;
}
