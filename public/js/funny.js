/**
 * Created by diva on 2015/11/19.
 */
'use strict';

// 双反斜杠为转义
var str =
    "%c _______   __  ____    ____  ___      \n" +
    "|       \\ |  | \\   \\  /   / /   \\     \n" +
    "|  .--.  ||  |  \\   \\/   / /  ^  \\    \n" +
    "|  |  |  ||  |   \\      / /  /_\\  \\   \n" +
    "|  '--'  ||  |    \\    / /  _____  \\  \n" +
    "|_______/ |__|     \\__/ /__/     \\__\\ \n ";

var color = 'color:red';

console.log(str, color);
console.log('%c\nHi,there!\n ', color);


var Tool = {
    convertDate: function (ISODate) {
        var temp = new Date(ISODate),
            year = temp.getFullYear(),
            month = this.add0(temp.getMonth() + 1),
            day = this.add0(temp.getDate()),
            hour = this.add0(temp.getHours()),
            minute = this.add0(temp.getMinutes()),
            second = this.add0(temp.getSeconds());
        return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
    },
    add0: function (x) {
        return x < 10 ? '0' + x : x
    }
};

$(function () {

});