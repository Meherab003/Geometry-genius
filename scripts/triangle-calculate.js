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

//parallelogram

function calculateParallelogramArea() {
  //base
  const paraBaseCalculate = document.getElementById("parallelogram-base");
  const paraBaseValue = paraBaseCalculate.value;
  const base = parseFloat(paraBaseValue);

  //height
  const paraHeightCalculate = document.getElementById("parallelogram-height");
  const paraHeightValue = paraHeightCalculate.value;
  const height = parseFloat(paraHeightValue);

  //Area
  const area = base * height;
  const paraAreaCalculate = document.getElementById("parallelogram-area");
  paraAreaCalculate.innerText = area;
}

//Rhombus

function calculateRhombusArea() {
  //Arm-1
  const rhombusArm1 = document.getElementById("rhombus-arm1");
  const rhombusArm1Value = rhombusArm1.value;
  const arm1 = parseFloat(rhombusArm1Value);

  //Arm-2
  const rhombusArm2 = document.getElementById("rhombus-arm2");
  const rhombusArm2Value = rhombusArm2.value;
  const arm2 = parseFloat(rhombusArm2Value);

  //Area
  const area = 0.5 * arm1 * arm2;
  const rhombusArea = document.getElementById("rhombus-area");
  rhombusArea.innerText = area;
}

//Pentagon

function calculatePentagonArea() {
  //perimeter
  const perimeterCalculate = document.getElementById("perimeter");
  const perimeterValue = perimeterCalculate.value;
  const perimeter = parseFloat(perimeterValue);

  //apothem
  const apothemCalculate = document.getElementById("apothem");
  const apothemValue = apothemCalculate.value;
  const apothem = parseFloat(apothemValue);

  //area
  const area = 0.5 * perimeter * apothem;
  const pentagonAreaCalculate = document.getElementById("pentagon-area");
  pentagonAreaCalculate.innerText = area;
}

//Ellipse

function ellipseAreaCalculate() {
  //A
  const aCalculate = document.getElementById("ellipse-a");
  const aValue = aCalculate.value;
  const a = parseFloat(aValue);

  //B
  const bCalculate = document.getElementById("ellipse-b");
  const bValue = bCalculate.value;
  const b = parseFloat(bValue);

  //Area
  const area = Math.PI * a * b;
  const ellipseArea = document.getElementById("ellipse-area");
  ellipseArea.innerText = area;
}
