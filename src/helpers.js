

function drawLine(figure, indexX, indexY, index) {
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

function drawRectangle(figure, indexX, indexY, index) {
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

export function isDraw(figures, indexX, indexY) {
  let isDraw = false;

  isDraw = figures.some(figure => {
    if (figure.type === 'line') {
      return drawLine(figure, indexX, indexY);
    }
    if (figure.type === 'rectangle') {
      return drawRectangle(figure, indexX, indexY);
    }

    return false;
  });

  return isDraw;
}