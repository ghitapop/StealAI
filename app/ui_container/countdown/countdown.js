/**
 * Created by popghit on 1/20/2017.
 */
"use strict";

module.exports = function countdown(tick) {
    let count = 10;

    let timer = setInterval(() => {
        tick(count--);
        if(count === -1) {
           clearInterval(timer);
        }
    }, 1000);

}