// ------------------------------------
// Created by Yeppy Mangun Puspitajudin
// on 5/12/2019
// ------------------------------------
var bgColor = document.getElementById('bg-color');
var txtColor = document.getElementById('text-color');

bgColor.addEventListener("change", (event) => {
    document.body.style.backgroundColor = bgColor.value;
});

txtColor.addEventListener("change", (event) => {
    document.body.style.color = txtColor.value;
});