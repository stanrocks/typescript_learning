// export-import only works in node environment, not in browser, at least by default
export function add(x, y) {
    return x + y;
}
export function sample(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}
