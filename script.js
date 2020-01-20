class Circle {
  canvas = document.querySelector('#canvas');

  radius = 5;
  maxPoints = 40;
  spacer = 0.5;

  points = [];

  getPoints = () => {
    for(let x = this.radius; x >= -this.radius; x -= (this.radius*4)/(this.maxPoints)) {
      const y1 = Math.sqrt((this.radius*this.radius) - (x*x));
      const y2 = -y1;
      this.points.push({x, y:y1});
      this.points.push({x, y:y2});
    }

    this.renderGraph();

    this.points.forEach(point => {
      this.renderPoint(point);
    });
  }

  renderPoint = (point) => {
    const span = document.createElement('span');
    span.classList.add('point');
    span.style.left = point.x + "cm";
    span.style.top = point.y + "cm";

    this.canvas.appendChild(span);
    this.renderHelper(point, span);

    return span;
  }

  renderHelper = (point, element) => {
    const span = document.createElement('span');
    span.classList.add('helper');
    span.innerHTML = `<p>X = ${point.x.toFixed(2)}cm</p><p>Y = ${point.y.toFixed(2)}cm</p>`
    element.appendChild(span);
  }

  renderGraph = () => {
    const spanX = document.createElement('span');
    spanX.style.width = this.radius * 2 + 'cm';
    spanX.style.height = '1px';
    spanX.style.position = 'absolute';
    spanX.style.top = '0px';
    spanX.style.left = -this.radius + 'cm';
    spanX.style.background = '#555';
    spanX.style.zIndex = 10;

    for (let x = this.radius; x >= -this.radius; x -= this.spacer) {
      const divisor = document.createElement('span');
      divisor.style.width = '0px';
      divisor.style.height = this.radius * 2 + 'cm';
      divisor.style.position = 'absolute';
      divisor.style.top = -this.radius + 'cm';
      divisor.style.left = x + 'cm';
      divisor.style.borderLeft = '1px dashed #ccc';

      canvas.appendChild(divisor);
    }

    this.canvas.appendChild(spanX);

    const spanY = document.createElement('span');
    spanY.style.width = '1px';
    spanY.style.height = this.radius * 2 + 'cm';
    spanY.style.position = 'absolute';
    spanY.style.top = -this.radius + 'cm';
    spanY.style.left = '0.5px';
    spanY.style.background = '#555';
    spanY.style.zIndex = 10;

    for (let y = this.radius; y >= -this.radius; y -= this.spacer) {
      const divisor = document.createElement('span');
      divisor.style.width = this.radius * 2 + 'cm';
      divisor.style.height = '0px';
      divisor.style.position = 'absolute';
      divisor.style.top = y + 'cm';
      divisor.style.left = -this.radius + 'cm';
      divisor.style.borderBottom = '1px dashed #ccc';

      canvas.appendChild(divisor);
    }

    this.canvas.appendChild(spanY);
  }
}