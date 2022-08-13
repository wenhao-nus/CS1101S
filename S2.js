// S2

// Q1
// Upsizes a regular combo to a biggie-sized version
function biggie_size(combo_num) {
    return combo_num + 4;
}

// Q2
// Turns a biggie-sized combo to a non-biggie-sized version
function unbiggie_size(combo_num) {
    return combo_num - 4;
}

// Q3
// Checks if a combo has been biggie-sized
function is_biggie_size(combo_num) {
    return combo_num > 4 ? true : false;
}

// Q4
// Takes a combo and returns the price of the combmo
function combo_price(combo_num) {
    return is_biggie_size(combo_num)
    ? 1.17 * unbiggie_size(combo_num) + 0.50
    : 1.17 * combo_num;
}

// Q5
// Returns an empty order
function empty_order() {
    return 0;
}

// Q6
// Takes an order and a combo and returns the new order
function add_to_order(order, combo) {
    return order * 10 + combo;
}

// Q7
// Takes an order and returns the last combo
function last_combo(order) {
    return order - 10 * math_floor(order / 10);
}

// Q8
// Takes an order and returns a new order without the last combo
function other_combo(order) {
    return (order - last_combo(order)) / 10;
}


