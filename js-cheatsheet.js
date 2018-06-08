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

// ----------------- //
// PALINDROME FINDER //
// ----------------- //

logText("h1", "PALINDROME FINDER");

function checkPalindrome(inputStr) {
	//const sanitizedInputStr = inputStr.replace(/[\W_]/g, "").toLowerCase();
	const sanitizedInputStr = inputStr.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
	console.log(sanitizedInputStr);
	const revStr = sanitizedInputStr
		.split("")
		.reverse()
		.join("");
	return sanitizedInputStr === revStr;
}

console.log('checkPalindrome("nope"):', checkPalindrome("nope"));
console.log('checkPalindrome("level"):', checkPalindrome("level"));
console.log('checkPalindrome("lűvűl"):', checkPalindrome("lűvűl"));
console.log(
	'checkPalindrome("Never odd or even."):',
	checkPalindrome("Never odd or even.")
);
console.log(
	'checkPalindrome("0_0 (: /- :) 0–0"):',
	checkPalindrome("0_0 (: /- :) 0–0")
);

// ----------------- //
// COUNT OCCURRENCES //
// ----------------- //

logText("h1", "COUNT OCCURRENCES");

logText("h2", "with foreach");

function countOccurrences1(countChar, inputStr) {
	let counter = 0;
	inputStr.split("").forEach(char => {
		if (char === countChar) counter++;
	});
	return counter;
}

console.log(
	"countOccurrences1('s', 'Several sith somnambulants'):",
	countOccurrences1("s", "Several sith somnambulants")
);

logText("h2", "with regexp match");

function countOccurrences2(countChar, inputStr) {
	const regExp = new RegExp(`${countChar}`, "gi");
	const result = inputStr.match(regExp);
	return result.length;
}

console.log(
	"countOccurrences2('s', 'Several sith somnambulants'):",
	countOccurrences2("s", "Several sith somnambulants")
);

// --------------- //
// FIND DUPLICATES //
// --------------- //

logText("h1", "FIND DUPLICATES");

function countDuplicates(inputArray) {
	let counterObj = {};
	inputArray.forEach(item => {
		if (!counterObj[item]) {
			counterObj[item] = 1;
		} else {
			counterObj[item]++;
		}
	});
	let reObj = {};
	Object.entries(counterObj).forEach(([key, count]) => {
		if (count > 1) reObj[key] = count;
	});
	return reObj;
}

console.log(
	"countDuplicates([1,2,4,2,5,4,5,4,2]):",
	countDuplicates([1, 2, 4, 2, 5, 4, 5, 4, 2])
);

// -------------------- //
// CHAR CODE TRANSLATOR //
// -------------------- //

// a solution to this exercise: https://youtu.be/057Rs6CgJnY?t=38m32s

logText("h1", "CHAR CODE TRANSLATOR");

function allTranslations(inNum) {
	const charDictionary = {
		1: "a",
		2: "b",
		3: "c",
		4: "d",
		5: "e",
		6: "f",
		7: "g",
		8: "h",
		9: "i",
		10: "j",
		11: "k",
		12: "l",
		13: "m",
		14: "n",
		15: "o",
		16: "p",
		17: "q",
		18: "r",
		19: "s",
		20: "t",
		21: "u",
		22: "v",
		23: "w",
		24: "x",
		25: "y",
		26: "z"
	};

	// charDictionary is a "hash table" also known as a dictionary, associative array, hashmap or map

	const charDictionaryLength = Object.keys(charDictionary).length;
	console.log(charDictionaryLength);

	let result = new Set();

	const inArray = String(inNum).split("");
	const inArrayLength = inArray.length;

	function getValidCombinations(ofArray) {
		let re = [];
		ofArray.forEach(item => re.push(item)); // single digit
		ofArray.forEach((item, ix, ary) => {
			if (ary[ix + 1]) {
				const comb = ary[ix] + ary[ix + 1];
				if (Number(comb) <= charDictionaryLength) re.push(comb);
			}
		});
		return re;
	}
	const validCombinations = getValidCombinations(inArray);
	console.log(validCombinations);

	const lastDigit = String(inNum).substr(-1);
	const lastTwoDigits = String(inNum).substr(-2);
	lastTwoDigits;

	const permutator = inputArr => {
		// no of possible permutations: (inputArr.length)! (factorial)
		let result = [];
		const permute = (arr, mem = []) => {
			if (arr.length === 0) {
				// recursions end when 'arr' is empty, e.g. 'mem' is full
				const cut = mem.slice(0, inArrayLength);
				const cutStr = cut.join("").substr(0, inArrayLength);
				if (Number(cutStr) === inNum) {
					let endIndex = -1;
					endIndex = cut.indexOf(lastDigit);
					if (endIndex === -1) cut.indexOf(lastTwoDigits);
					if (endIndex !== -1) result.push(cut.slice(0, endIndex + 1));
				}
			} else {
				for (let i = 0; i < arr.length; i++) {
					let current = arr.slice(); // arr.slice() returns a shallow copy of the 'arr' array
					let next = current.splice(i, 1); // remove one item from current at index 'i', next = removed item
					permute(current.slice(), mem.concat(next));
				}
			}
		};

		permute(inputArr);

		return result;
	};

	const allPermutations = permutator(validCombinations);
	console.log(allPermutations.length);

	allPermutations.forEach(item => {
		const outStr = item.map(charCode => charDictionary[charCode]).join("");
		result.add(outStr);
	});

	return result;
}

console.log(allTranslations(12258));

// ---------- //
// PERMUTATOR //
// ---------- //

// SOURCE: https://stackoverflow.com/questions/9960908/permutations-in-javascript

logText("h1", "PERMUTATOR");

const permutator = inputArr => {
	// no of possible permutations: (inputArr.length)! (factorial)
	let result = [];

	let noOfRecursions = 0;
	let currentI = 0;
	const permute = (arr, mem = []) => {
		if (arr.length === 0) {
			result.push(mem); // recursions end when 'arr' is empty, e.g. 'mem' is full
		} else {
			for (let i = 0; i < arr.length; i++) {
				currentI = i;
				let current = arr.slice(); // arr.slice() returns a shallow copy of the 'arr' array
				let next = current.splice(i, 1); // remove one item from current at index 'i', next = removed item
				noOfRecursions++;
				console.log(noOfRecursions, currentI, arr, mem);
				permute(current.slice(), mem.concat(next));
			}
		}
	};

	permute(inputArr);

	return result;
};

console.log("permutator(['c','a','t']):", permutator(["c", "a", "t"]));

// to do: permutations, linked lists, stacks, queues
// js-s sort in the debugger, binary sort, quick sort, big O notation

// ---- //
// SETS //
// ---- //

logText("h1", "SETS");

logText("h2", "Get the unique values from an array");

let nums = [1, 2, 2, 3, 4];
console.log([...new Set(nums)]);

// -------- //
// WEAKSETS //
// -------- //

logText("h1", "WEAKSETS");

// ---- //
// MAPS //
// ---- //

logText("h1", "MAPS");

// -------- //
// WEAKMAPS //
// -------- //

logText("h1", "WEAKMAPS");

// ------- //
// SYMBOLS //
// ------- //

logText("h1", "SYMBOLS");

// --------------- //
// OBJECT.FREEZE() //
// --------------- //

logText("h1", "OBJECT.FREEZE()");

// ------------- //
// OBJECT.SEAL() //
// ------------- //

logText("h1", "OBJECT.SEAL()");

// ----------------------- //
// OBJECT.DEFINEPROPERTY() //
// ----------------------- //

logText("h1", "OBJECT.DEFINEPROPERTY()");

// ------- //
// FACTORY //
// ------- //

logText("h1", "FACTORY");

function makeAdder(x) {
	return function(y) {
		return x + y;
	};
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log("add5(2):", add5(2));
console.log("add10(2)", add10(2));

// ------- //
// CLOSURE //
// ------- //

logText("h1", "CLOSURE");

// When a function returns another function, the returning function will have access
// to the outer (enclosing) function's variables—scope chain.
// The closure has three scope chains: it has access to its own scope
// (variables defined between its curly brackets),
// it has access to the outer function's variables,
// and it has access to the global variables

// CREATESAMPLEOBJECT

logText("h2", "createSampleObject");

// SOURCE: https://www.youtube.com/watch?v=yo3MJPcVJc8

const createSampleObject = function() {
	let i = 0;

	return {
		setI(k) {
			i = k;
		},
		getI() {
			return i;
		}
	};
};

const x = createSampleObject();
console.log(x.getI());
x.setI(2);
console.log(x.getI());
x.setI(3);
console.log(x.getI());

logText(
	"say",
	'Run this in Chrome, expand "getI"/"setI" > "[[Scopes]]" > "Closure (createSampleObject)" to see the "i" variable:'
);
console.dir(x);

// ADDTHREE, ADDFOUR

logText("h2", "addThree, addFour");

const addTo = function(passed) {
	const add = function(inner) {
		return passed + inner;
	};
	return add;
};

const addThree = addTo(3);
const addFour = addTo(4);

console.log("addThree(1):", addThree(1));
console.dir(addThree);
console.log("addFour(1):", addFour(1));
console.dir(addFour);

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
