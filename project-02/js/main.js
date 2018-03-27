var randomTitle = Math.floor((Math.random() * 10)); 

//document.querySelector(".random-number").innerHTML = randomTitle;

// I used this above^ to test the random number generator so that I can use and create two more variables to select a random array element from each the title, prefix and suffix arrays.

var randomPrefix = Math.floor((Math.random() * 10)); 
var randomSuffix = Math.floor((Math.random() * 10)); 

// Here I create a function for each button to generate a random title, prefix, and suffix from arrays of 10 items each.
function femaleName() {
	var female = {
		title: ["Princess", "Lady", "Queen", "Goddess", "Priestess", "Countess", "Good Witch", "Bad Witch", "Sorceress", "Enchantress"],
		prefix: ["Astr", "Ether", "Vall", "Stell", "Syndr", "Gilli", "Evel", "Frey", "Cord", "Li"],
		suffix: ["ana", "a", "e", "al", "eya", "anor", "ona", "anara", "enn", "ie"]

	}
// Pushing to the document the random chosen slot in the array concatenated together into a full name.
document.querySelector(".female-name").innerHTML = female.title[randomTitle] + " " + female.prefix[randomPrefix] + female.suffix[randomSuffix];
}


function neutralName() {
	var neutral = {
		title: ["Warrior", "Hunter", "Harbinger", "Doombringer", "Archmage", "Consul", "Chancellor", "Exarch", "Majestrix", "Noble"],
		prefix: ["Glad", "Vel", "Bel", "Nastr", "Nor", "Lex", "Ish", "Just", "Lu", "Ro"],
		suffix: ["enn", "ial", "ton", "riel", "ax", "u", "ien", "oa", "tix", "stral"]	
}

document.querySelector(".neutral-name").innerHTML = neutral.title[randomTitle] + " " + neutral.prefix[randomPrefix] + neutral.suffix[randomSuffix];
}


function maleName() {
	var male = {
		title: ["Warlock", "Prince", "King", "Sorcerer", "Shaman", "Priest", "Lord", "Sir", "Count", "Prophet"],
		prefix: ["Ast", "Luc", "Kass", "Geng", "Var", "Mann", "Fin", "Kala", "Dram", "Tar"],
		suffix: ["er", "ian", "en", "ar", "ien", "in", "io", "ron", "riel", "tel"]	
}	

document.querySelector(".male-name").innerHTML = male.title[randomTitle] + " " + male.prefix[randomPrefix] + male.suffix[randomSuffix];
}


