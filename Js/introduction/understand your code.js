function plusPlus(orig_x) {
    const orig_x_coerced = Number(orig_x)
    x = orig_x_coerced + 1;
    return orig_x_coerced;
}

let x = '5';
plusPlus(x); // 5
console.log(x) // 6