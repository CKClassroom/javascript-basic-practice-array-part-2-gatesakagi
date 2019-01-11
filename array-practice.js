/* 
   條件: 題目 2 ~ 7 的操作都不能修改到 題目 1 建立的陣列
*/

// 1. 建立一個長度 50，數值介於 40~100 的陣列 (亂數產生) (Array)
var arr = [];
for (var i = 40; i < 101; i++) {
    arr.push(i)
}
console.log(arr);
arr.sort(arr => Math.random() - 0.5);
arr.length = 3;
console.log("1 - ", arr);
// 2. 篩選出大於 60 的結果
console.log("2 - ", arr.filter(item => item > 60));
// 3. 找出最大值
console.log("3 - ", Math.max(...arr));
// 4. 計算全部數值的合計數
console.log("4 - ", arr.reduce((item1, item2) => item1 + item2, 0));
// 5. 找出最小值
console.log("5 - ", Math.min(...arr));
// 6. 全部開根號並乘上 10
console.log("6 - ", arr.map(item => Math.sqrt(item) * 10));
// 7. 請依數值大小排序，由大而小
console.log("7 - ", arr.sort((a, b) => b > a));