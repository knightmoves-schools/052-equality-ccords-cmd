function priceCheck(price) {
  if (price == 1.5) {
  return document.getElementById('result').innerHTML = 'match';
  } else {
    document.getElementById('result').innerHTML = 'not a match';
  };
};
function strictPriceCheck(price) {
  if (price === 1.5) {
  return document.getElementById('result').innerHTML = 'match';
  } else {
    document.getElementById('result').innerHTML = 'not a match';
  };
};
