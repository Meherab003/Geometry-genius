/**
 *
 * Objective 1: get base, get height,
 * calculate the area by using provided formula
 */

function calculateTriangleArea() {
  //Base

  const triangleBaseCalculate = document.getElementById("triangle-base");
  const triangleBaseValue = triangleBaseCalculate.value;
  const base = parseFloat(triangleBaseValue);
  console.log(typeof base, base);

  //Height

  const triangleHeightCalculate = document.getElementById("triangle-height");
  const triangleHeightValue = triangleHeightCalculate.value;
  const height = parseFloat(triangleHeightValue);
  console.log(typeof height, height);

  //area
  const area = 0.5 * base * height;
  const triangleAreaCalculate = document.getElementById("triangle-area");
  triangleAreaCalculate.innerText = area;
}

//Rectangle

function calculateRectangleArea() {
  //Wide

  const rectangleWideCalculate = document.getElementById("rectangle-wide");
  const rectangleWideValue = rectangleWideCalculate.value;
  const wide = parseFloat(rectangleWideValue);

  //Length

  const rectangleLengthCalculate = document.getElementById("rectangle-length");
  const rectangleLengthValue = rectangleLengthCalculate.value;
  const length = parseFloat(rectangleLengthValue);

  //Area

  const area = wide * length;
  const rectangleAreaCalculate = document.getElementById("rectangle-area");
  rectangleAreaCalculate.innerText = area;
}
