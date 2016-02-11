function spiralTraversal( matrix ) {
  var spiral = matrix.shift();
  function rotate(matrix) { //rotates matrix 90 degrees counter-clock
    var result = []
    for (var i = result.length; i < matrix[0].length;) {
      result.push(matrix.map(function(subMatrix) {
        return subMatrix.pop()
      }))
    }
    return result;
  } 
  while (matrix.length > 0) { 
    matrix = rotate(matrix); //rotate
    matrix.shift().forEach(function(number) { //then add nums from top row to result
      spiral.push(number);
    })
  }
  return spiral;
}
