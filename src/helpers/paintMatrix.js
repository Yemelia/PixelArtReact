import { min, max } from 'lodash';

// Not perfect, need to refactor
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

function sortCoordinates(figure) {
  if (figure.type === 'bucketFill') return figure;

  return {
    ...figure,
    x1: min([figure.x1, figure.x2]),
    y1: min([figure.y1, figure.y2]),
    x2: max([figure.x1, figure.x2]),
    y2: max([figure.y1, figure.y2]),
  };
}


export function paintMatrix(shape, matrix) {
  let drawedMatrix = matrix;
  let figure = sortCoordinates(shape);
  if (figure.type === 'line') {
    drawedMatrix = drawLine(drawedMatrix, figure);
  } else if (figure.type === 'rectangle') {
    const lines = generateLinesForRectangle(figure);
    lines.forEach(line => {
      drawedMatrix = drawLine(drawedMatrix, { ...line, color: figure.color });
    });
  } else if (figure.type === 'bucketFill') {
    drawedMatrix = drawBucketFill(drawedMatrix, { x: figure.x, y: figure.y }, figure.color, drawedMatrix[figure.y][figure.x]);
  }
  return drawedMatrix;
}

function drawLine(drawedMatrix, line) {
  let matrix = drawedMatrix;
  for (let i = line.x1; i <= line.x2; i++) {
    for (let k = line.y1; k <= line.y2; k++) {
      matrix[k][i] = line.color;
    }
  }

  return matrix;
}

// Recursive function for check neighboring pixels 
function drawBucketFill(drawedMatrix, currentPoint, color, colorToReplace) {
  let matrix = drawedMatrix;
  
  if(checkAvaliablePixel(matrix, currentPoint, colorToReplace)){
    matrix[currentPoint.y][currentPoint.x] = color;
    matrix = drawBucketFill(matrix, { x: currentPoint.x + 1, y: currentPoint.y }, color, colorToReplace);
    matrix = drawBucketFill(matrix, { x: currentPoint.x - 1, y: currentPoint.y }, color, colorToReplace);
    matrix = drawBucketFill(matrix, { x: currentPoint.x , y: currentPoint.y + 1 }, color, colorToReplace);
    matrix = drawBucketFill(matrix, { x: currentPoint.x, y: currentPoint.y - 1 }, color, colorToReplace);
  }

  return matrix;
}

// Check that pixel in canvas area and not painted
function checkAvaliablePixel (drawedMatrix, currentPoint, colorToReplace) {
  return (currentPoint.x > 0 && currentPoint.x < drawedMatrix[0].length) &&
          (currentPoint.y > 0 && currentPoint.y < drawedMatrix.length) &&
          (drawedMatrix[currentPoint.y][currentPoint.x] === colorToReplace);
}