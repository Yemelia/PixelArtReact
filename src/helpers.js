

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


export function isDraw(figures, indexX, indexY) {
  let isDraw = false;

  figures.some(figure => {
    if (figure.type === 'line') {
      isDraw = drawLine(figure, indexX, indexY);
      return isDraw;
    }

    return false;
  });

  return isDraw;
}