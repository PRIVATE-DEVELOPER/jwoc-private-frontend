// (function ($) {
//     'use strict';

// })(jQuery, window)


let snowmax = 30,
    snowcolor = new Array("rgb(0, 153, 255,0.2)", "rgb(0, 153, 255,0.3)", "rgb(0, 153, 255,0.4)", "rgb(0, 153, 255,0.5)", "rgb(0, 153, 255,0.6)"),
    snowletter = new Array("*", "❆", "❅", "❄"),
    sinkspeed = 0.6,
    snowmaxsize = 20,
    snowminsize = 8,
    snow = new Array,
    marginbottom,
    marginright,
    timer,
    i_snow = 0,
    x_mv = new Array,
    crds = new Array,
    lftrght = new Array;

for (i = 0; i <= snowmax; i++)
    document.write("<span id='s" + i
        + "' class='snowflake' style='pointer-events:none;z-index:9999;position:fixed;top:-"
        + snowmaxsize
        + "'>"
        + snowletter[randommaker(snowletter.length)]
        + "</span>");

window.onload = initsnow;

function randommaker(o) {
    return rand = Math.floor(o * Math.random()), rand
};

function initsnow() {
    marginbottom = window.innerHeight, marginright = window.innerWidth - 15;
    var o = snowmaxsize - snowminsize;
    for (i = 0; i <= snowmax; i++) crds[i] = 0, lftrght[i] = 15 * Math.random(), x_mv[i] = 0.03 + Math.random() / 10, snow[i] = document.getElementById("s" + i), snow[i].size = randommaker(o) + snowminsize, snow[i].style.fontSize = snow[i].size + "px", snow[i].style.color = snowcolor[randommaker(snowcolor.length)], snow[i].sink = sinkspeed * snow[i].size / 5, snow[i].posx = randommaker(marginright - snow[i].size), snow[i].posy = randommaker(2 * marginbottom - marginbottom - 2 * snow[i].size), snow[i].style.left = snow[i].posx + "px", snow[i].style.top = snow[i].posy + "px";
    movesnow()
};

function movesnow() {
    for (i = 0; i <= snowmax; i++) crds[i]
        += x_mv[i], snow[i].posy
        += snow[i].sink, snow[i].style.left = snow[i].posx
        + lftrght[i] * Math.sin(crds[i])
        + "px", snow[i].style.top = snow[i].posy
        + "px", (snow[i].posy >= marginbottom - 2 * snow[i].size || parseInt(snow[i].style.left) > marginright - 3 * lftrght[i]) && (snow[i].posx = randommaker(marginright - snow[i].size), snow[i].posy = 0);

    setTimeout("movesnow()", 50)
};