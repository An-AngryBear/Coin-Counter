

function coinCounter (amount) {
	var coinPurse = {};
	if (amount >= .25) {
		coinPurse.quarters = Math.floor(amount / .25);
		amount = Math.fround(amount % .25).toPrecision(2);
	}
	console.log(amount)
	if (amount >= .1) {
		coinPurse.dimes = Math.floor(amount / .1);
		amount = (amount % .1).toPrecision(2);
	}
	console.log(amount)
	if (amount >= .05) {
		coinPurse.nickels = Math.floor(amount / .05);
		amount = (amount % .05).toPrecision(2);
	}
	console.log(amount);
	if (amount >= .01) {
		coinPurse.pennies = Math.floor(amount / .01);
	}

	return coinPurse;
}
var coins = coinCounter(7.41);
console.log(coins);