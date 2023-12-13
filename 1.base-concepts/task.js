"use strict"
function solveEquation(a, b, c) {
  let root = [];
  discriminant = Math.pow(b,2) - 4*a*c;
  if (discriminant > 0) {
    root[0] = (-b + Math.sqrt(d) )/(2*a);
    root[1] = (-b - Math.sqrt(d) )/(2*a);
  } 
  else if (discriminant===0) {
    root[0] = -b/(2*a)
  }
  return root;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = parseFloat(percent);
  contribution = parseFloat(contribution);
  amount = parseFloat(amount);
  countMonths = parseInt(countMonths);

  const monthPercent = percent / 100 / 12;

  const bodyOfCredit = amount - contribution;

  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths) || percent < 0 || countMonths < 0) {
    return false;
  }

  const payment = bodyOfCredit * (monthPercent + (monthPercent/(((Math.pow(1+monthPercent,countMonths) - 1)))));
  const totalLoanAmount = payment * countMonths;
  totalLoanAmount=parseFloat(totalLoanAmount.toFixed(2));

  return totalLoanAmount;
}