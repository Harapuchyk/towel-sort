module.exports = function towelSort (matrix) {

    let resultArr = []; 
    if (matrix === undefined) {
        return resultArr;
    }    
    else {
    for (i = 0; i < matrix.length; i++) {       
        for (j = 0; j < matrix[i].length; j++) {
            let numColum = i % 2 === 0
            ? j
            : (matrix[i].length - j - 1);
            resultArr.push(matrix[i][numColum]);
        }
    }
    return resultArr;
}
};
