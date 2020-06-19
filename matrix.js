//created 16.06.2020 17:00 by Naholiuk Dmitriy

let maxrix1 = [
    [1, 2, 3],
    [1, 3, 4],
    [4, 5, 2]
]

let maxrix2 = [
    [3, 8, 1],
    [9, 2, 6],
    [2, 3, 1]
]


class Matrix {
    constructor(data){
        this.matrix = JSON.parse(JSON.stringify(data));
    }

    getMatrix(){
        return this.matrix;
    }

    static add(maxrix1, maxrix2, size){
        let newMatrix = [];

        for(let i = 0; i < size; i++){
            newMatrix.push(maxrix1[i].map((item, index) => item + maxrix2[i][index]))
        }
       
        return newMatrix;
    }

    static dif(maxrix1, maxrix2, size){
        let newMatrix = [];

        for(let i = 0; i < size; i++){
            newMatrix.push(maxrix1[i].map((item, index) => item - maxrix2[i][index]))
        }
       
        return newMatrix;
    }

    static mult(maxrix1, maxrix2, size){
        let newMatrix = [];

        for(let i = 0; i < size; i++){
            newMatrix.push(maxrix1[i].map((item, index) => item * maxrix2[i][index]))
        }
       
        return newMatrix;
    }

    static multOnNumber(matrix, number){
        let newMatrix = [];

        for(let i = 0; i < matrix.length; i++){
            newMatrix.push(matrix[i].map(item => item * number))
        }
       
        return newMatrix;
    }

    static wayMatrix(matrix){
        let result = 0;
        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix.length; j++){
                if(i == j) {
                    result+=matrix[i][j];
                }
            }
        }
        return result;
    }
}

// console.log(maxrix1)
console.log(maxrix2)

// console.log(Matrix.add(maxrix1, maxrix2, 3))
// console.log(Matrix.dif(maxrix1, maxrix2, 3))
// console.log(Matrix.mult(maxrix1, maxrix2, 3))
// console.log(Matrix.multOnNumber(maxrix1, 3))
console.log(Matrix.wayMatrix(maxrix2));

// let Matrix1 = new Matrix(maxrix1)

// console.log(Matrix1.getMatrix())