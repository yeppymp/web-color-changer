// ------------------------------------
// Created by Yeppy Mangun Puspitajudin
// on 5/12/2019
// ------------------------------------

// get input color for background and text color
var bgColor = document.getElementById('bg-color');
var txtColor = document.getElementById('text-color');

// add change listener to input background color 
// so when color picked or changed by user, set body background color to picked color
bgColor.addEventListener("change", (event) => {
    document.body.style.backgroundColor = bgColor.value;
});

// add change listener to input text color 
// so when color picked or changed by user, set body text color to picked color
txtColor.addEventListener("change", (event) => {
    document.body.style.color = txtColor.value;
});