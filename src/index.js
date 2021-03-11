
// You should implement your task here.

module.exports = function towelSort (matrix) {
  res=[];
  var i,
  j;
  for (i=0;i<=matrix.length;i++ )
    for(j=0;j<=matrix[i].length;j++)
      res.push(matrix[i][j]);

  return res.sort();
}
