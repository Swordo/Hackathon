//algo
var arr = [
    ["A", 9],
    ["B", 7],
    ["C", 1],
    ["AB", 10, 11],
    ["AC", 9, 9999],
    ["BA", 5, 6, 7],
    ["BC", 6, 6],
    ["CA", 5, 6, 7],
    ["CB", 2, 1],
    ["ABC", 10, 11],
    ["ACB", 9, 9, 9],
    ["BAC", 4, 4, 5, 5],
    ["BCA", 5, 5, 5, 6],
    ["CAB", 1, 2, 1, 2],
    ["CBA", 2]
]
var userArray = "BAC";
var newArray = [];



for (var i = 0; i < arr.length; i++) {
    if (arr[i][0] == userArray) {
        for (var j = 0; j < arr[i].length - 1; j++) {
            newArray[j] = arr[i][j + 1];
        }
        for (var m = 0; m < newArray.length; m++) {
        }
    }
}
function uniqe(arg) {

    return
}