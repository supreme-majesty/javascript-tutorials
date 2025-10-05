// Loops
// For Loop, While Loop, Do-While Loop, For-In Loop

let myArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// 2D Array
let my2DArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < my2DArray.length; i++) {
  for (let j = 0; j < my2DArray[i].length; j++) {
    console.log(my2DArray[i][j]);
  }
}

// Asigmnment for 3D Array
let my3DArray = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
  [
    [9, 10],
    [11, 12],
  ],
];
