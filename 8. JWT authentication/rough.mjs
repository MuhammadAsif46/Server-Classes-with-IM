let a = [
    1, 1, 1, 1, 1, 2, 2, 5, 5, 6, 6, 7, 7, 7, 7, 7, 8, 8, 9, 9, 11, 11, 12, 12, 13, 14, 16, 16, 17, 17, 18, 18, 19, 19, 19, 19, 20, 20, 21, 21, 21, 23, 23, 23, 23, 24, 24, 24, 25, 25, 25, 27, 27, 28, 29, 29, 29, 30, 30, 32, 32, 33, 33, 34, 34, 34, 35, 35, 36, 36, 37, 37, 37, 37, 37, 37, 38, 38, 38, 38, 38, 39, 41, 41, 41, 41, 42, 43, 43, 43, 44, 44, 44, 44, 44, 45, 46, 46, 46, 46, 47, 48, 48, 48, 48, 49, 49, 49, 50, 50, 51, 51, 52, 52, 52, 52, 52, 52, 54, 54, 54, 55, 55, 55, 58, 58, 58, 59, 60, 60, 60, 61, 61, 61, 61, 61, 61, 62, 62, 63, 64, 64, 64, 65, 65, 66, 66, 66, 67, 68, 68, 69, 69, 69, 70, 70, 71, 71, 71, 72, 72, 73, 73, 74, 75, 75, 75, 76, 77, 77, 77, 78, 79, 80, 81, 81, 82, 82, 83, 83, 84, 84, 85, 85, 85, 85, 85, 86, 86, 86, 87, 87, 88, 88, 89, 89, 90, 90, 91, 91, 92, 92, 92, 92, 95, 95, 95, 96, 96, 97, 98, 99, 99, 99, 100, 100, 100, 101, 101, 101, 101, 102, 102, 103, 104, 104, 105, 105, 105, 106, 106, 107, 109, 109, 110, 110, 110, 112, 112, 113, 113, 115, 115, 116, 116, 119, 119, 120, 120, 120, 120, 120, 121, 121, 122, 122, 122, 123, 123, 124, 124, 124, 124, 125, 125, 126, 126, 127, 127, 128, 131, 132, 132, 132, 132, 133, 133, 134, 134, 136, 138, 138, 138, 138, 139, 139, 139, 140, 140, 140, 140, 141, 141, 142, 142, 142, 144, 144, 145, 145, 146, 146, 149, 151, 152, 152, 152, 152, 152, 152, 153, 153, 154, 154, 154, 154, 154, 155, 157, 157, 157, 157, 157, 158, 158, 159, 159, 159, 160, 161, 161, 161, 161, 162, 162, 163, 164, 164, 164, 164, 165, 165, 168, 168, 168, 169, 170, 170, 170, 171, 171, 172, 172, 172, 173, 174, 174, 175, 175, 176, 176, 177, 178, 179, 179, 179, 179, 179, 181, 182, 182, 184, 184, 184, 184, 185, 186, 186, 187, 188, 189, 190, 190, 192, 192, 192, 192, 196, 198, 199, 199, 199, 200, 200, 201, 201, 201, 201, 202, 203, 203, 206, 206, 206, 206, 207, 207, 209, 209, 211, 211, 212, 212, 213, 213, 214, 214, 214, 215, 215, 215, 216, 216, 217, 217, 218, 218, 219, 219, 220, 220, 220, 221, 222, 222, 222, 223, 224, 226, 227, 228, 229, 229, 229, 229, 230, 230, 231, 231, 233, 233, 233, 235, 235, 235, 236, 236, 236, 238, 240, 240, 241, 241, 242, 243, 244, 244, 245, 246, 246, 248, 248, 249, 250, 250, 252, 253, 255, 255, 256, 256, 261, 265, 267, 267, 268, 268, 269, 269, 270, 271, 272, 274, 276, 276, 278, 279, 279, 280, 280, 280, 281, 281, 282, 284, 295, 297
]



// // Linear Search - best case 0 - Worst case - Length
// for (let i = 0; i < a.length; i++) {
//     console.log("iteration: ", i + 1);

//     if (a[i] === 177) {
//         console.log("found at index: ", i);
//         break;
//     }
// }

// // Binary search
const givenQuery = 500
let dataCopy = [...a]


let search = (givenQuery, data, index = 0) => {

    console.log("Iteration Number: ", index);
    console.log("data: ", data);


    let mid = parseInt(data.length / 2);

    let left = data.slice(0, mid);
    let right = data.slice(mid + 1, data.length)

    if (givenQuery === data[mid]) {
        console.log("found at index: ", mid)
        return;
    } else if (givenQuery < data[mid]) {
        // search in left direction

        search(givenQuery, left, index + 1)

    } else if (givenQuery > data[mid]) {
        // search in right direction

        search(givenQuery, right, index + 1)
    }
}


search(500, dataCopy)