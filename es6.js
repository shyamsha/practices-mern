//es5 defalut parameters
//first arguments is complasary if give defalut value that take undefined because order of parameters either u invoke the first argument is undefined it work
function defalut(string, number) {
	number = typeof number == "undefined" ? 225 : number;
	return [string, number];
}
console.log("test case-1", defalut("saM"));
//or use logic operaters ||
function defalut1(string, number) {
	number = number || 143; //dont use this way some unpredticable result
	return [string, number];
}
console.log("test case-2", defalut1("saM", 1));

function getInfo(name, year, color) {
	year = typeof year !== "undefined" ? year : 2018;
	color = typeof color !== "undefined" ? color : "Blue";
	return {
		name,
		year,
		color
	};
}

getInfo("Chevy", 1957, "Green");
getInfo("Benz", 1965);
getInfo("Honda");

function name(params) {
	var g = "yes";
	let s = "sdklf";
}

//Default Parameters in ES6
