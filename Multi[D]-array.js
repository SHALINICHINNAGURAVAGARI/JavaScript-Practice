//2-Dimensional Array
// let arr=[
//     [25,30,22],
//     [23,31,24],
//     [26,30,20]
// ];
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         console.log(arr[i][j]);
//     }
// }

//3-Dimensional Array
let arr=[
    [
        [50,70],
        [65,87]
    ],
    [
        [90,45],
        [80,30]
    ]
]
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        for(let k=0;k<arr[i][j].length;k++){
            console.log(arr[i][j][k]);
        }
    }
}