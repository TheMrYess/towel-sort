
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix==undefined) return [];
  res=[];
  var i,
  j=0;
  for (i=0;i<matrix.length;i++ )
  {
 
    if (j<=0) 
    {for(j=0;j<matrix[i].length;j++) { res.push(matrix[i][j]); }}
    else
    {for(j=matrix[i].length-1;j>=0;j--){ res.push(matrix[i][j]); } }
  }
  return res;
}
