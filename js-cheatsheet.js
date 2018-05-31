// cheatsheet-internals

const logText = (style, text) => {
	const logHeaderStyle1 = "color: #FFFF00";
	const logHeaderStyle2 = "color: #baff55";

	const styles = {
		h1: "color: #FFFF00",
		h2: "color: #BAFF55",
		say: "color: #909090",
		mumble: "color: #DA0000"
	};

	let output = "";
	if (style === "h1") {
		output = ` - ${text} -`;
	} else if (style === "h2") {
		output = ` >> ${text}:`;
	} else {
		output = text;
	}

	style === "h1" ? console.log("") : null;
	console.log(`%c${output}`, styles[style]);
};

// /cheatsheet-internals

// ----------------------------- //
// THE TWO PILLARS OF JAVASCRIPT //
// ----------------------------- //

// SOURCE: https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3

logText("h1", "THE TWO PILLARS OF JAVASCRIPT");

logText("say", "are (say it with me):");

logText(
	"mumble",
	'1. Prototypal "Inheritance" (objects without classes, and prototype delegation, aka OLOO — Objects Linking to Other Objects)'
);

logText(
	"mumble",
	"2. Functional Programming (enabled by lambdas with closure)"
);

// -------- //
// FIZZBUZZ //
// -------- //

logText("h1", "FIZZBUZZ");

logText("h2", "fizzbuzz 1");
// FIZZBUZZ1

let fizzBuzzArray = [];
for (let i = 1; i <= 100; i++) {
	let re = "";
	i % 3 === 0 ? (re += "fizz") : null;
	i % 5 === 0 ? (re += "buzz") : null;
	re === "" ? (re = i) : (re = re.substr(0, 1).toUpperCase() + re.substr(1));
	fizzBuzzArray.push(re);
}

console.log(fizzBuzzArray);

logText("h2", "fizzbuzz 2");
// FIZZBUZZ2

let fizzBuzzArray2 = [];
for (let i = 1; i <= 100; i++)
	fizzBuzzArray2.push(
		{ 0: i, [i % 3]: "Fizz", [i % 5]: "Buzz", [i % 15]: "Fizzbuzz" }[0]
	);

console.log(fizzBuzzArray2);

// ------- //
// FACTORY //
// ------- //

logText("h1", "FACTORY");

function makeAdder(x) {
	return function(y) {
		return x + y;
	};
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log("add5(2):", add5(2));
console.log("add10(2)", add10(2));

// ----------- //
// COMPOSITION //
// ----------- //

logText("h1", "COMPOSITION");

// better than classical inheritance, remember the banana-gorilla example:

// "I think the lack of reusability comes in object-oriented languages,
// not functional languages. Because the problem with object-oriented languages
// is they’ve got all this implicit environment that they carry around with them.
// You wanted a banana but what you got was a gorilla holding the banana and the entire jungle.

// If you have referentially transparent code, if you have pure functions - all the data
// comes in its input arguments and everything goes out and leave no state behind
// - it’s incredibly reusable."

// -- Joe Armstrong, creator of Erlang, on software reusability

logText("h2", "Barky doggo");

const barker = state => ({
	bark: () => {
		console.log(`Woof, I am ${state.name}`);
	}
});

const namedThing = state => ({
	getName: () => {
		console.log(state.name);
	},
	setName: newName => (state.name = newName)
});

const dog = name => {
	let state = {
		name,
		speed: 100,
		position: 0
	};
	return Object.assign(state, barker(state), namedThing(state));
	// return Object.assign({}, barker(state));
};

const sniffles = dog("Sniffles");
console.log(sniffles);

sniffles.bark();
sniffles.getName();
sniffles.setName("Cuddles");
sniffles.getName();
sniffles.bark();

// RPG example from https://medium.com/code-monkey/object-composition-in-javascript-2f9b9077b5e6 : //

logText("h2", "RPG character classes");

const canCast = state => ({
	cast: spell => {
		console.log(`${state.name} casts ${spell}!`);
		state.mana--;
	}
});

const canFight = state => ({
	fight: () => {
		console.log(`${state.name} slashes at the foe!`);
		state.stamina--;
	}
});

const fighter = name => {
	let state = {
		name,
		health: 100,
		stamina: 100
	};

	return Object.assign(state, canFight(state));
};

const mage = name => {
	let state = {
		name,
		health: 100,
		mana: 100
	};

	return Object.assign(state, canCast(state));
};

const paladin = name => {
	let state = {
		name,
		health: 100,
		mana: 100,
		stamina: 100
	};

	return Object.assign(state, canCast(state), canFight(state));
};

scorcher = mage("Scorcher");
scorcher.cast("fireball");
console.log(scorcher.mana);

slasher = fighter("Slasher");
slasher.fight();
console.log(slasher.stamina);

roland = paladin("Roland");
roland.fight();
roland.cast("Holy Light");
console.log(roland.mana);
console.log(roland.stamina);

// -------------------------------------------------------- //
// PROTOTYPE DELEGATION (PD) VS. CLASSICAL INHERITANCE (CI) //
// -------------------------------------------------------- //

logText("h1", "PROTOTYPE DELEGATION (PD) VS. CLASSICAL INHERITANCE (CI)");

// In PD, an object only runs a given function declared higher up in it's prototype chain
// ONLY IF that object doesn't itself have its own implementation of that function.
// So The arrows linking objects (not copies but live-links) point in a right-to-left,
// bottom-to-top fashion in JS, the very opposite of CI - they are orthogonal systems.

// -------- //
// PROMISES //
// -------- //

// These get logged towards the end in the console because they're happening asynchronously.

const testPromise = new Promise((resolve, reject) => {
	const re = Math.round(Math.random() * 100);
	if (re <= 95) {
		resolve(re);
	} else {
		reject(new Error("failed"));
	}
});

testPromise.then(
	resolvedValue => {
		logText("h1", "PROMISES");
		console.log(resolvedValue);
	},
	error => {
		logText("h2", "PROMISES");
		console.log(error);
	}
);

// ------ //
// QUOKKA //
// ------ //

logText("h1", "QUOKKA");

// See this working right in your editor by installing the Quokka extension!
// VSCODE command (Ctrl+Shift+P): Quokka.js: Start on Current File

const testArray = ["lorem", ["ipsum"], "denem"];
for (const taval of testArray) {
	// console.log(typeof taval);
	if (typeof taval !== "string") {
		const inner = taval[0];
		inner;
	}
}

console.log(testArray);

// ---------- //
// GENERATORS //
// ---------- //

logText("h1", "GENERATORS");

function* fibonacci() {
	let [prev, curr] = [0, 1];
	while (true) {
		[prev, curr] = [curr, prev + curr];
		yield curr;
	}
}

let mem = [];

for (let n of fibonacci()) {
	mem.push(n);
	// truncate the sequence at limit
	const limit = 60;
	if (n >= limit) {
		break; // closes iterator
	}
}

console.log("fibonacci:", mem);

// ------ //
// REGEXP //
// ------ //

logText("h1", "REGULAR EXPRESSIONS");

logText(
	2,
	"Regexp constructor (used to a generate regular expression at runtime)"
);
// REGEXP CONSTRUCTOR (USED TO GENERATE A REGULAR EXPRESSION AT RUNTIME):
const reProper = "^hel" + "lo$";
const reConstructor = new RegExp(reProper, "i"); // second param is for flags
const str1 = "hello";
console.log(reConstructor.test(str1));

logText("h2", "Start of string (without constructor)");
// START OF STRING:
const reg3 = /^hello/i; // without constructor
const str3 = "hello ";
console.log(reg3.test(str3));

logText("h2", "End of string");
// END OF STRING:
const reg4 = /hello$/i;
const str4 = " hello";
console.log(reg4.test(str4));

logText("h2", "Match anything (including newline)");
// MATCH ANYTHING (INCLUDING NEWLINE):
const reg5 = /^[\s\S]*hello$/i; // *: match 0 or more, +: match 1 or more, []: character set
const str5 = `asdasd
 hello`;
console.log(reg5.test(str5));

logText("h2", "Capture groups");
// CAPTURE GROUPS
const reg6 = /\b(he|hu){1,3}(llo){1,3}/gi;
// (): capture group, {1,3}: at least once at most 3 times,
// \b: word boundary
const str6 = `*/asdwerwerw!£"$!$$
hello	hullo hillo hello hehuhellollollo`;
const resArray = str6.match(reg6);
console.log(typeof resArray, resArray);

logText("h2", "Lookahead");
// LOOKAHEAD
const reg7 = /h[uielo]{0,5}(?=.*bye)/gi; // *: match 0 or more, +: match 1 or more, []: character set
const str7 = `h hi hulo hullo hello lorem lorem bye hellobye`;
console.log(str7.match(reg7));

// ----- //
// FETCH //
// ----- //

// node doesnt have fetch, this is the polyfill for it, so quokka can use the command:
// I wasnt able to require conditionally and get quokka working, so this file will no longer
// function in a browser
// !!! the pro version of quokka has an "Install Missing Package only for Quokka File" option

// const fetch = require("node-fetch");

const rootURL = "https://api.github.com/orgs/";

// PLAIN PROMISE

function promiseFetch(orgName) {
	return fetch(rootURL + orgName)
		.then(response => response.json())
		.then(reobj => reobj)
		.catch(error => console.error(error));
}

promiseFetch("facebook")
	.then(data => {
		logText("h1", "FETCH");
		logText("h2", "FETCH with plain promise");
		console.log(data);
	})
	.catch(error => {
		logText("h1", "FETCH");
		logText("h2", "FETCH with plain promise");
		console.error(error);
	});

// ASYNC-AWAIT

async function asyncFetch(orgName) {
	const response = await fetch(rootURL + orgName);
	const reobj = await response.json();
	return reobj;
}

asyncFetch("facebook").then(asyncResult => {
	logText("h1", "FETCH");
	logText("h2", "FETCH with async-await");
	console.log(asyncResult);
});

// !!! The problem with async-await is that it can only resolve promises one-by-one
// !!! because you do not have access to Promise.all()

// PROMISE WITH Promise.all()

// function promiseAllFetch(orgs) {
// 	return new Promise((resolve, reject) => {
// 		let re = [];
// 		var promises = orgs.map(orgName =>
// 			fetch(rootURL + orgName).then(reobj => reobj.json())
// 		);
// 		Promise.all(promises).then(results => {
// 			for (const res of results) {
// 				re.push(res);
// 			}
// 			console.log(results[0].login);
// 		});
// 		resolve(re);
// 	});
// }

// const orgs = ["facebook", "nodejs", "google"];

// //let data = promiseAllFetch(orgs);
// promiseAllFetch(orgs).then(data => {
// 	console.log("promiseAllFetch:");
// 	// console.log(data);
// 	console.log(data[0].login);
// });

// MEET THE FOOTGUNS: THIS, NEW, BIND AND SUPER //
logText("h1", "MEET THE FOOTGUNS: THIS, NEW, BIND AND SUPER");

// https://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/
