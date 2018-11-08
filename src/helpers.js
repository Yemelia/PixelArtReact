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


export function paintMatrix(figure, matrix) {
  let drawedMatrix = matrix;
  if (figure.type === 'line') {
    drawedMatrix = drawLine(drawedMatrix, figure);
  }
  if (figure.type === 'rectangle') {
    const lines = generateLinesForRectangle(figure);
    lines.forEach(line => {
      drawedMatrix = drawLine(drawedMatrix, line);
    });
  }
  if (figure.type === 'bucketFill') {
    drawedMatrix = drawBucketFill(drawedMatrix, { x: figure.x, y: figure.y });
  }
  return drawedMatrix;
}

function drawLine(drawedMatrix, line) {
  let matrix = drawedMatrix;
  for (let i = line.x1; i <= line.x2; i++) {
    for (let k = line.y1; k <= line.y2; k++) {
      matrix[k][i] = 1;
    }
  }

  return matrix;
}

function drawBucketFill(drawedMatrix, currentPoint) {
  let matrix = drawedMatrix;
  
  if(checkAvaliablePixel(matrix, currentPoint)){
    matrix[currentPoint.y][currentPoint.x] = 2;
    matrix = drawBucketFill(matrix, { x: currentPoint.x + 1, y: currentPoint.y });
    matrix = drawBucketFill(matrix, { x: currentPoint.x - 1, y: currentPoint.y });
    matrix = drawBucketFill(matrix, { x: currentPoint.x , y: currentPoint.y + 1 });
    matrix = drawBucketFill(matrix, { x: currentPoint.x, y: currentPoint.y - 1 });
  }

  return matrix;
}

function checkAvaliablePixel (drawedMatrix, currentPoint) {
  return (currentPoint.x > 0 && currentPoint.x < drawedMatrix[0].length) &&
          (currentPoint.y > 0 && currentPoint.y < drawedMatrix.length) &&
          (!drawedMatrix[currentPoint.y][currentPoint.x]);
}