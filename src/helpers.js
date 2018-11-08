function generateLinesForRectangle(figure) {
  return [
    {
      x1: figure.x1,
      x2: figure.x2,
      y1: figure.y1,
      y2: figure.y1,
    },
    {
      x1: figure.x1,
      x2: figure.x1,
      y1: figure.y1,
      y2: figure.y2,
    },
    {
      x1: figure.x1,
      x2: figure.x2,
      y1: figure.y2,
      y2: figure.y2,
    },
    {
      x1: figure.x2,
      x2: figure.x2,
      y1: figure.y1,
      y2: figure.y2,
    },
  ];
}


export function drawMatrix(figure, matrix) {
  let drawedMatrix = matrix;
  if (figure.type === 'line') {
    for (let i = figure.x1; i <= figure.x2; i++) {
      for (let k = figure.y1; k <= figure.y2; k++) {
        drawedMatrix[k][i] = 1;
      }
    }
  }
  if (figure.type === 'rectangle') {
    const lines = generateLinesForRectangle(figure);
    lines.forEach(line => {
      for (let i = line.x1; i <= line.x2; i++) {
        for (let k = line.y1; k <= line.y2; k++) {
          drawedMatrix[k][i] = 1;
        }
      }
    });
  }
  if (figure.type === 'bucketFill') {
    let currentPoint = { x: figure.x, y: figure.y };
    drawedMatrix = drawBucketFill(drawedMatrix, currentPoint);
  }
  return drawedMatrix;
}

function drawBucketFill(drawedMatrix, currentPoint, previousPoint = null) {
  let matrix = drawedMatrix;
  
  if(checkPixel(matrix, currentPoint)){
    matrix[currentPoint.y][currentPoint.x] = 1;
    matrix = drawBucketFill(matrix, { x: currentPoint.x + 1, y: currentPoint.y });
    matrix = drawBucketFill(matrix, { x: currentPoint.x - 1, y: currentPoint.y });
    matrix = drawBucketFill(matrix, { x: currentPoint.x , y: currentPoint.y + 1 });
    matrix = drawBucketFill(matrix, { x: currentPoint.x, y: currentPoint.y - 1 });
  }

  return matrix;
}

function checkPixel (drawedMatrix, currentPoint) {
  return (currentPoint.x > 0 && currentPoint.x < drawedMatrix[0].length) &&
          (currentPoint.y > 0 && currentPoint.y < drawedMatrix.length) &&
          (drawedMatrix[currentPoint.y][currentPoint.x] !== 1);
}