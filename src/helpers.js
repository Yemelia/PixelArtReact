import { compact } from 'lodash';

function drawLine(figure, indexX, indexY) {
  if (figure.y1 === figure.y2 && figure.y1 === indexY) {
    if (indexX >= figure.x1 && indexX <= figure.x2) {
      return true;
    }
  }

  if (figure.x1 === figure.x2 && figure.x1 === indexX) {
    if (indexY >= figure.y1 && indexY <= figure.y2) {
      return true;
    }
  }

  return false;
}

function drawRectangle(figure, indexX, indexY) {
  if (figure.y1 === indexY) {
    if (indexX >= figure.x1 && indexX <= figure.x2) {
      return true;
    }
  }

  if (indexY > figure.y1 && indexY < figure.y2) {
    if (indexX === figure.x1) {
      return true;
    }
  }

  if (figure.y2 === indexY) {
    if (indexX >= figure.x1 && indexX <= figure.x2) {
      return true;
    }
  }

  if (indexY > figure.y1 && indexY < figure.y2) {
    if (indexX === figure.x2) {
      return true;
    }
  }

  return false;
}

function drawBucketFill(figures, bucketFill, indexX, indexY) {
  const filtredFigures = figures.filter(figure => figure.type !== 'bucketFill');

  return filtredFigures.some(figure => {
    if (indexY === figure.y1) {
      if (figure.x1 !== 1) {
        if (indexX < figure.x1) {
          return true;
        }
      } else if (figure.x1 === 1 && indexX === 1) {
        return false;
      } else {

        const a = filtredFigures.filter(f => {
          if ((f.x1 !== 1 && f.x1 > indexX) || (f.x1 === 1 && indexX > f.x2)) return f;
        });
        if (a.length > 0) return true; 
      }
    }
    return false;
  });
}

export function isDrawPixel(figures, indexX, indexY) {
  let isDraw = false;

  isDraw = figures.some(figure => {
    if (figure.type === 'line') {
      return drawLine(figure, indexX, indexY);
    }
    if (figure.type === 'rectangle') {
      return drawRectangle(figure, indexX, indexY);
    }
    if (figure.type === 'bucketFill') {
      return drawBucketFill(figures, figure, indexX, indexY);
    }

    return false;
  });

  return isDraw;
}