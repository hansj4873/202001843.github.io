var res = new Array();
var era = new Array(101);
era[0] = false;
era[1] = false;
var arr;
var e_v;
for(var i = 2; i < era.length; i++){
    era[i] = true;
}
for(var i = 0; i < era.length; i++){
    if(era[i]){
        for(var j = i; j < era.length; j += i){
            era[j] = false;
        }
        era[i] = true;
    }
}
var temp = new Array();
for(var i = 0; i < era.length; i++){
    if(era[i] && i >= 50){
        temp.push(i);
    }
}
var n = Math.floor(Math.random() * temp.length);
res.push(temp[n]);
do{
    n = Math.floor(Math.random() * temp.length);
    if(res[0] != temp[n]){
        res.push(temp[n]);
        break;
    }
}while(true);
var pq = (res[0] - 1) * (res[1] - 1);
do{
    n = Math.floor(Math.random() * temp.length);
    e_v = temp[n];
    if((!check_coprime(e_v, res[0] - 1) || !check_coprime(e_v, res[1] - 1)) && e_v != res[0] && e_v != res[1]){
        break;
    }
}while(true);
exgcd(e_v, pq);
var d_v = arr[4];
var en;
var N_v = res[0] * res[1];

function exgcd(a, b){
    arr = [0, a, b, 0, 1, 0, 0, 0, 1, 0];
    do{
        if(arr[2] == 0){
            break;
        }
        arr[0] = Math.trunc(arr[1] / arr[2]);
        for(var i = 3; i <= 9; i += 3){
            arr[i] = arr[i - 2] - (arr[0] * arr[i - 1]);
        }
        for(var i = 0; i < 9; i++){
            arr[i] = arr[i + 1];
        }
    }while(true);
    if(arr[4] < 0){
        arr[4] += arr[5];
    }
}
function check_coprime(a, b){
    exgcd(a, b);
    if(arr[0] == 1){
        return true;
    }
    else{
        return false;
    }
}
function make_pq(){
    p = document.getElementById("p_value");
    q = document.getElementById("q_value");
    p.value = res[0];
    q.value = res[1];
}
function make_e(){
    e = document.getElementById("e_value");
    e.value = e_v;
}
function make_d(){
    d = document.getElementById("d_value");
    d.value = d_v;
}
function make_N(){
    N = document.getElementById("N_value");
    N.value = N_v;
}
function modular(a, b, c){
    var res;
    if(b == 0){
        return 1;
    }
    if(b == 1){
        return (a % c);
    }
    res = modular(a, Math.trunc(b / 2), c);
    if(b % 2 == 0){
        return ((res * res) % c);
    }
    else{
        return((((res * res) % c) * (a % c)) % c);
    }
}
function encrypt(){
    en = document.getElementById("target_en").value;
    res_en = document.getElementById("res_en");
    de = document.getElementById("target_de");
    var en_t = Number(en);
    var en_res = modular(en_t, e_v, N_v);
    res_en.value = en_res;
    de.value = en_res;
}
function decode(){
    de = document.getElementById("target_de").value;
    res_de = document.getElementById("res_de");
    var de_t = Number(de);
    res_de.value = modular(de_t, d_v, N_v);
}