var a_v, b_v, A_v, B_v, a_en_v, b_en_v, c_en_v;
function res(){
    var a = document.getElementById("a_value");
    var b = document.getElementById("b_value");
    var c = document.getElementById("c_value");
    a_v = Number(a.value);
    b_v = Number(b.value);
    var res_v = a_v + b_v;
    c.value = res_v;
}
function make_AB(){
    var A = document.getElementById("A_value");
    var B = document.getElementById("B_value");
    A_v = Math.floor(Math.random() * 9) + 1;
    B_v = Math.floor(Math.random() * 9) + 1;
    A.value = A_v;
    B.value = B_v;
}
function encrypt(){
    var a_en = document.getElementById("a_en_value");
    var b_en = document.getElementById("b_en_value");
    var c_en = document.getElementById("c_en_value");
    a_en_v = a_v + (12345 * A_v);
    b_en_v = b_v + (12345 * B_v);
    a_en.value = a_en_v;
    b_en.value = b_en_v;
    c_en_v = a_en_v + b_en_v;
    c_en.value = c_en_v;
}
function decode(){
    var res_en = document.getElementById("res_en_value");
    var res_en_v = c_en_v - (12345 * (A_v + B_v));
    res_en.value = res_en_v;
}