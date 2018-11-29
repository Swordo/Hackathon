var arr = [-1, 4, 4, 3, 4, -1];
var an = 0;
var missing = -1;
var ans = [];
var count = 1;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == missing) {
        if (arr[i - 1] == undefined) {
            ans.push(Math.floor(((0 + arr[i + 1]) / 2)));
            continue;
        }
        else if (arr[i + 1] == undefined) {
            ans.push(Math.floor(((0 + arr[i - 1]) / 2)));
            continue;
        }
        ans.push(Math.floor((arr[i - 1] + arr[i + 1]) / 2));
    }
}
for (let i = 0; i < ans.length; i++) {
    count *= ans[i];
}
console.log(count);
