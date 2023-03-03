class Item {
	weight = 0
	value = 0
	id = "item"
	category = "none"
	rarity = 0
	getName = (plural = false) => (i18n[currentLanguage].item[this.category][this.id][plural ? "pluralName" : "name"])
	getDesc = () => (i18n[currentLanguage].item[this.category][this.id].desc)
	rollExtraQuantity = () => (0)
}

// todo replace by typescript type
class LootTableObject {

	/**
	 * @type {Item}
	 */
	item;

	/**
	 * @type {String}
	 */
	quantityToRoll;
}

class Loots {
	item;
	quantity;
	getTotalWeight = () => (this.item.weight * this.quantity)

	constructor(item, quantity) {
		this.item = item
		this.quantity = quantity
	}
}

let listOdd = [
	"Regeneration Field",
	"Regeneration Field",
	"Caps worth of Pre-War Money ~~5d20+0",
	"Caps worth of Pre-War Money ~~5d20+0",
	"Caps ~~5d20+0",
	"Caps ~~5d20+0",
	"Caps ~~5d20+0",
	"Stealth Field",
	"Recon Sensors",
	"Diagnosis Mod",
	"Geiger Counter",
	"Doctor’s Bag",
	"Magazine $$$",
	"Caps worth of Pre-War Money ~~4d20+0",
	"Caps ~~4d20+0",
	"Container",
	"Hazard Detection Mod",
	"Radio",
	"Lockpick Set",
	"Holotape Player",
	"Large Backpack",
	"Caps worth of Pre-War Money ~~3d20+0",
	"Caps ~~3d20+0",
	"Integral Boiler Mod",
	"Signal Flares ~~1d3+1",
	"Caps worth of Pre-War Money ~~2d20+0",
	"Caps ~~2d20+0",
	"Bobby Pins ~~1d3+1",
	"Caps ~~1d20+0",
	"Caps worth of Pre-War Money ~~1d20+0",
	"Bobby Pins ~~2d3+2)",
	"Small Backpack",
	"Torch",
	"Note or Holotape",
	"Bobby Pins ~~3d3+3",
	"Robot Repair Kit",
	"First Aid Kit",
	"Lantern",
	"Multi-Tool",
	"Hacking Module",
	"Lockpick Module",
	"Container, Locked",
	"Bobby Pins ~~4d3+4",
	"Stealth Boy",
	"Deluxe Toolkit",
	"Flashlight",
	"Behavioral Analysis Mod",
	"Radiation Coils",
	"Sensor Array",
	"Key",
	"Abraxo Cleaner",
	"Asbestos",
	"Bobby Pins ~~5d3+5",
	"Bobby Pins ~~5d3+5",
	"Bobby Pins ~~5d3+5",
	"Stimpak Diffuser",
	"Stimpak Diffuser",
	"Tesla Coils",
];

let listThrown = [
	"Nuka Grenade",
	"Pulse Mine",
	"Pulse Mine",
	"Plasma Mine",
	"Plasma Mine",
	"Bottlecap Mine",
	"Bottlecap Mine",
	"Bottlecap Mine",
	"Frag Grenages ~~1d3+1",
	"Frag Grenages ~~1d3+1",
	"Frag Grenages ~~1d3+1",
	"Molotov Cocktails ~~1d3+1",
	"Molotov Cocktails ~~1d3+1",
	"Javelins ~~1d3+2",
	"Javelins ~~1d3+2",
	"Javelins ~~1d3+2",
	"Javelins ~~1d3+2",
	"Javelins ~~1d3+2",
	"Throwing Knives ~~2d3+2",
	"Throwing Knives ~~2d3+2",
	"Throwing Knives ~~2d3+2",
	"Baseball Grenades ~~1d3+1",
	"Baseball Grenades ~~1d3+1",
	"Baseball Grenades ~~1d3+1",
	"Baseball Grenades ~~1d3+1",
	"Baseball Grenades ~~1d3+1",
	"Molotov Cocktails ~~1d3+1",
	"Molotov Cocktails ~~1d3+1",
	"Tomahawks ~~1d3+1",
	"Tomahawks ~~1d3+1",
	"Tomahawks ~~1d3+1",
	"Frag Mine",
	"Frag Mine",
	"Frag Mine",
	"Plasma Grenade",
	"Plasma Grenade",
	"Pulse Grenade",
	"Pulse Grenade",
	"Nuke Mine",
];

let listMelee = [
	"Deathclaw Gauntlet",
	"Shishkebab",
	"Shishkebab",
	"Sledgehammer",
	"Sledgehammer",
	"Ripper",
	"Ripper",
	"Boxing Glove",
	"Boxing Glove",
	"Baton",
	"Baton",
	"Machete",
	"Machete",
	"Walking Cane",
	"Walking Cane",
	"Pool Cue",
	"Pool Cue",
	"Switchblade",
	"Switchblade",
	"Board",
	"Board",
	"Lead Pipe",
	"Lead Pipe",
	"Rolling Pin",
	"Rolling Pin",
	"Pipe Wrench",
	"Pipe Wrench",
	"Knuckles",
	"Knuckles",
	"Tire Iron",
	"Tire Iron",
	"Sword",
	"Sword",
	"Aluminum Baseball Bat",
	"Aluminum Baseball Bat",
	"Power Fist",
	"Power Fist",
	"Super Sledge",
	"Super Sledge",
];

let listRange = [
	"Fat Man",
	"Fat Man",
	"Missle Launcher",
	"Missle Launcher",
	"Railway Rifle",
	"Junk Jet",
	"Flamer",
	"Plasma Pistol",
	"Institue Laser Rifle (Long Barrel, Standard Stock)",
	"Syringer",
	"Hunting Rifle",
	"Assault Rifle",
	"Assault Rifle",
	"Laser Musket",
	"Submachine Gun",
	"10mm Pistol",
	"10mm Pistol",
	"Pipe Bolt Action",
	"Pipe Rifle (Long Barrel, Standard Stock)",
	"Pipe Gun",
	"Auto Pipe Gun (Automatic Receiver)",
	"Pipe Revolver",
	"Pipe Bolt Action Rifle (Long Barrel, Standard Stock)",
	"10mm Auto Pistol (Automatic Receiver)",
	"Double-Barreled Shotgun",
	".44 Pistol",
	"Combat Rifle",
	"Scoped Hunting Rifle (Long Barrel, Short Scope)",
	"Combat Shotgun",
	"Institute Laser Pistol",
	"Laser Pistol",
	"Minigun",
	"Plasma Rifle (Long Barrel, Standard Stock)",
	"Gatling Laser",
	"Gauss Rifle",
	"Heavy Incinerator",
	"Heavy Incinerator",
	"Gamma Gun",
	"Gamma Gun"
];

let listChem = [
	"Super Stimpak",
	"Calmex",
	"Day Tripper",
	"Addictol",
	"Stimpak",
	"Stimpak",
	"RadAway",
	"RadAway",
	"Psycho",
	"Psycho",
	"Med-X",
	"Med-X",
	"Daddy-O",
	"Daddy-O",
	"Antiseptic",
	"Rad-X (diluted)",
	"Healing Salve",
	"Healing Salve",
	"Dirty Water",
	"Dirty Water",
	"Dirty Water",
	"Stimpak (diluted)",
	"Stimpak (diluted)",
	"RadAway (diluted)",
	"Antiseptic",
	"Buffout",
	"Buffout",
	"Jet",
	"Jet",
	"Mentats",
	"Mentats",
	"Rad-X",
	"Rad-X",
	"Stimpak",
	"Stimpak",
	"Antibiotics",
	"Overdrive",
	"Fury",
	"X-Cell",
];

let listNuka = [
	"Common Materials",
	"Common Materials",
	"Common Materials",
	"Common Materials",
	"Common Materials",
	"Common Materials",
	"Common Materials",
	"Common Materials",
	"Glass Bottles ~~2d3+-1",
	"Glass Bottles ~~2d3+-1",
	"Glass Bottles ~~2d3+-1",
	"Glass Bottles ~~2d3+-1",
	"Nuka-Cola",
	"Nuka-Cola",
	"Nuka-Cola",
	"2 Nuka-Cola",
	"2 Nuka-Cola",
	"Nuka-Cola, Nuka-Cherry",
	"2 Nuka-Cola, Nuka-Cherry",
	"Nuka-Cola Quantum",
];

let listArmor = [
	"X-01 Power Armor Piece",
	"X-01 Power Armor Piece",
	"X-01 Power Armor Piece",
	"Power Armor Frame",
	"Power Armor Frame",
	"T-60 Power Armor Piece",
	"T-60 Power Armor Piece",
	"Heavy Dog Armor",
	"Heavy Dog Armor",
	"Sturdy Combat Armor",
	"Heavy Metal Armor",
	"Raider Power Armor Piece",
	"Medium Dog Armor",
	"Sturdy Metal Armor",
	"Heavy Raider Armor",
	"Vault-Tec Armor",
	"Sturdy Raider Armor",
	"Leather Armor",
	"Sturdy Raider Armor",
	"Raider Armor",
	"Sturdy Raider Armor",
	"Metal Armor",
	"Light Dog Armor",
	"Sturdy Leather Armor",
	"Combat Armor",
	"T-45 Power Armor Piece",
	"Heavy Leather Armor",
	"Synth Armor",
	"T-51 Power Armor Piece",
	"Heavy Combat Armor",
	"Heavy Combat Armor",
	"Sturdy Synth Armor",
	"Sturdy Synth Armor",
	"Sturdy Raider Armor",
	"Power Armor Frame",
	"Power Armor Frame",
	"Heavy Synth Armor",
	"Heavy Synth Armor",
	"Heavy Synth Armor",
];

let listClothing = [
	"Brotherhood of Steel Fatigues",
	"Welder’s Visor",
	"Brotherhood Scribe’s Hat",
	"Brotherhood of Steel Hood",
	"Brotherhood Scribe’s Armor",
	"Brotherhood of Steel Uniform",
	"Hard Hat",
	"Army Helmet",
	"Lab Coat",
	"Lab Coat",
	"Engineer’s Armor",
	"Engineer’s Armor",
	"Road Leathers",
	"Road Leathers",
	"Casual Clothing",
	"Casual Clothing",
	"Hides",
	"Hides",
	"Harness",
	"Harness",
	"Sack Hood",
	"Sack Hood",
	"Military Fatigues",
	"Military Fatigues",
	"Tough Clothing",
	"Tough Clothing",
	"Heavy Coat",
	"Heavy Coat",
	"Utility Overalls",
	"Utility Overalls",
	"Casual Hat",
	"Hood or Cowl",
	"Vault Jumpsuit",
	"Formal Clothing",
	"Formal Clothing",
	"Formal Hat",
	"Gas Mask",
	"Cage Armor",
	"Hazmat Suit",
];

let listBeverage = [
	"Wine",
	"Wine",
	"Whiskey",
	"Whiskey",
	"Nuka-Cherry",
	"Nuka-Cherry",
	"Nuka-Cola",
	"Nuka-Cola",
	"Bourbon",
	"Bourbon",
	"Irradiated Blood",
	"Irradiated Blood",
	"Beer",
	"Beer",
	"Beer",
	"Blood Pack",
	"Blood Pack",
	"Blood Pack",
	"Dirty Water",
	"Dirty Water",
	"Dirty Water",
	"Dirty Water",
	"Dirty Water",
	"Dirty Water",
	"Purified Water",
	"Purified Water",
	"Purified Water",
	"Glowing Blood Pack",
	"Glowing Blood Pack",
	"Brahmin Milk",
	"Brahmin Milk",
	"Rum",
	"Rum",
	"Moonshine",
	"Moonshine",
	"Vodka",
	"Vodka",
	"Wine",
	"Wine",
];

let listForaging = [
	"Brain Fungus",
	"Bloodleaf",
	"Carrot",
	"Carrot",
	"Corn",
	"Corn",
	"Gourd",
	"Gourd",
	"Melon",
	"Melon",
	"Mutfruit",
	"Mutfruit",
	"Razorgrain",
	"Razorgrain",
	"Silt Bean",
	"Silt Bean",
	"Tato",
	"Tato",
	"Hubflower",
	"Glowing Fungus"
];

let listFood = [
	"Tarberry",
	"Perfectly Preserved Pie",
	"Melon (non-irradiated)",
	"Carrot (non-irradiated)",
	"Institute Food Packet",
	"Sugar Bombs (preserved)",
	"Mutfruit (non-irradiated)",
	"Fancy Lads Snack Cakes (preserved)",
	"Sweet Roll",
	"Razorgrain",
	"Iguana Bits",
	"Cram",
	"Carrot",
	"BlamCo Brand Mac and Cheese",
	"Sugar Bombs",
	"Potted Meat",
	"Pork ‘n’ Beans",
	"InstaMash",
	"Dandy Boy Apples",
	"Canned Dog Food",
	"Fancy Lads Snack Cakes",
	"Gum Drops",
	"Mutfruit",
	"Potato Crisps",
	"Salisbury Steak",
	"Yum-Yum Deviled Eggs",
	"Brain Fungus",
	"Corn",
	"Gourd",
	"Melon",
	"Silt Bean",
	"Tato",
	"InstaMash (preserved)",
	"Salisbury Steak (preserved)",
	"Food Paste",
	"Noodle Cup",
	"Corn (non-irradiated)",
	"BlamCo Brand Mac and Cheese (preserved)",
	"Tarberry"
];

let listModdableWeapons = [
	"gaussRifle",
	"missleLauncher",
	"railwayRifle",
	"superSledge",
	"junkJet",
	"flamer",
	"sledgehammer",
	"sword",
	"laserGun",
	"huntingRifle",
	"assaultRifle",
	"syringer",
	"knuckles",
	"tireIron",
	"pipeWrench",
	"machete",
	"laserMusket",
	"laserMusket",
	"submachineGun",
	"submachineGun",
	"walkingCane",
	"walkingCane",
	"poolCue",
	"poolCue",
	"board",
	"board",
	"pipeBoltAction",
	"pipeBoltAction",
	"pipeGun",
	"pipeGun",
	"pipeRevolver",
	"pipeRevolver",
	"switchblade",
	"switchblade",
	"leadPipe",
	"leadPipe",
	"rollingPin",
	"rollingPin",
	"pistol10",
	"pistol10",
	"doubleBarrelShotgun",
	"doubleBarrelShotgun",
	"combatKnife",
	"baseballBat",
	"baton",
	"boxingGlove",
	"pistol44",
	"combatRifle",
	"combatShotgun",
	"instituteLaser",
	"minigun",
	"ripper",
	"powerFist",
	"plasmaGun",
	"gatlingLaser",
	"shishkebab",
	"deathclawGauntlet",
	"gammaGun"
];

let listModdableArmor = [
	"synthArmorLegHeavy",
	"synthArmorHelmetHeavy",
	"synthArmorChestSturdy",
	"synthArmorArmSturdy",
	"synthArmorLegSturdy",
	"synthArmorHelmetSturdy",
	"leatherArmorChestHeavy",
	"leatherArmorArmHeavy",
	"leatherArmorLegHeavy",
	"metalArmorChestHeavy",
	"metalArmorArmHeavy",
	"metalArmorLegHeavy",
	"metalArmorHelmHeavy",
	"metalArmorChestSturdy",
	"metalArmorArmSturdy",
	"metalArmorLegSturdy",
	"metalArmorHelmSturdy",
	"combatArmorChest",
	"combatArmorArm",
	"combatArmorLeg",
	"combatArmorHelm",
	"raiderArmorArmHeavy",
	"raiderArmorLegHeavy",
	"metalArmorArm",
	"metalArmorArm",
	"metalArmorHelm",
	"metalArmorHelm",
	"leatherArmorChest",
	"leatherArmorChest",
	"leatherArmorArm",
	"leatherArmorArm",
	"leatherArmorLeg",
	"leatherArmorLeg",
	"raiderArmorChest",
	"raiderArmorChest",
	"raiderArmorArm",
	"raiderArmorArm",
	"raiderArmorLeg",
	"raiderArmorLeg",
	"casualClothing",
	"casualClothing",
	"casualHat",
	"casualHat",
	"heavyCoat",
	"heavyCoat",
	"labCoat",
	"labCoat",
	"militaryFatigues",
	"militaryFatigues",
	"metalArmorChest",
	"metalArmorChest",
	"metalArmorLeg",
	"metalArmorLeg",
	"raiderArmorChestSturdy",
	"raiderArmorArmSturdy",
	"raiderArmorLegSturdy",
	"formalClothing",
	"vaultJumpsuit",
	"raiderArmorChestHeavy",
	"leatherArmorChestSturdy",
	"leatherArmorArmSturdy",
	"leatherArmorLegSturdy",
	"combatArmorChestSturdy",
	"combatArmorArmSturdy",
	"combatArmorLegSturdy",
	"combatArmorHelmSturdy",
	"synthArmorChest",
	"synthArmorArm",
	"synthArmorLeg",
	"synthArmorHelmet",
	"combatArmorChestHeavy",
	"combatArmorArmHeavy",
	"combatArmorLegHeavy",
	"combatArmorHelmHeavy",
	"synthArmorChestHeavy",
	"synthArmorArmHeavy"
];

let listNPCName = [
	"Aaliyah",
	"Aaron",
	"Abigail",
	"Abram",
	"Abrams",
	"Adalyn",
	"Adam",
	"Adams",
	"Addison",
	"Adeline",
	"Adrian",
	"Ahn",
	"Aideen",
	"Aiden",
	"Akira",
	"Al",
	"Alaina",
	"Alan",
	"Alana",
	"Alex",
	"Alexander",
	"Alexandra",
	"Alexis",
	"Alice",
	"Allen",
	"Allison",
	"Altman",
	"Alyssa",
	"Amanda",
	"Amelia",
	"Anderson",
	"Andonov",
	"Andrew",
	"Andy",
	"Angel",
	"Angela",
	"Anna",
	"Annabelle",
	"Anthony",
	"Archer",
	"Aria",
	"Arianna",
	"Asdf",
	"Ash",
	"Asher",
	"Ashford",
	"Ashley",
	"Asimov",
	"Assface",
	"Atkins",
	"Atkinson",
	"Atom",
	"Atomic",
	"Atticus",
	"Aubrey",
	"Audrey",
	"Austin",
	"Autumn",
	"Ava",
	"Avery",
	"Bacon",
	"Badass",
	"Bailey",
	"Baker",
	"Banner",
	"Bannerman",
	"Bannion",
	"Barnes",
	"Barron",
	"Barry",
	"Bash",
	"Bastard",
	"Battosai",
	"Batty",
	"Baudoin",
	"Bell",
	"Bella",
	"Ben",
	"Benjamin",
	"Bennell",
	"Bennett",
	"Bentley",
	"Bery",
	"Bill",
	"Billy",
	"Bilodeau",
	"Black",
	"Blaise",
	"Blake",
	"Blaze",
	"Bob",
	"Bobbi",
	"Bobby",
	"Bogdanove",
	"Bond",
	"Boob",
	"Boobie",
	"Boobies",
	"Boom",
	"Boston",
	"Bowman",
	"Bradley",
	"Braun",
	"Brayden",
	"Brenda",
	"Brenna",
	"Brian",
	"Brianna",
	"Brick",
	"Brigner",
	"Brock",
	"Brody",
	"Brooklyn",
	"Brooks",
	"Browder",
	"Brown",
	"Browne",
	"Bruce",
	"Bruckheimer",
	"Bryan",
	"Bryant",
	"Buffy",
	"Bulger",
	"Bull",
	"Burgess",
	"Burke",
	"Burt",
	"Butch",
	"Butler",
	"Caden",
	"Cal",
	"Caleb",
	"Callie",
	"Camden",
	"Camilla",
	"Campbell",
	"Capable",
	"Carey",
	"Carnow",
	"Carofano",
	"Caroline",
	"Carson",
	"Carter",
	"Carver",
	"Casserly",
	"Castle",
	"Catherine",
	"Cha",
	"Chapin",
	"Chappy",
	"Charles",
	"Charlie",
	"Charlotte",
	"Chase",
	"Cheng",
	"Cherise",
	"Cherry",
	"CherryBomb",
	"Chloe",
	"Chopper",
	"Chris",
	"Christian",
	"Christiane",
	"Christopher",
	"Church",
	"Claire",
	"Clara",
	"Clark",
	"Clarke",
	"Claw",
	"Clemens",
	"Clunk",
	"Cobb",
	"Cobra",
	"Cock",
	"Cockerham",
	"Cole",
	"Colin",
	"Collins",
	"Colton",
	"Conall",
	"Connor",
	"Cook",
	"Cooke",
	"Cooper",
	"Cormac",
	"Corman",
	"Cornelius",
	"Cornett",
	"Corrie",
	"Corrine",
	"Corvo",
	"Corwin",
	"Cory",
	"Cosgrove",
	"Courtenay",
	"Courtney",
	"Cox",
	"Coyle",
	"Craig",
	"Crash",
	"Cruz",
	"Cubbison",
	"Cullen",
	"Cummings",
	"Dag",
	"Damien",
	"Dan",
	"Dane",
	"Danger",
	"Daniel",
	"Daniels",
	"Danny",
	"Darrel",
	"Darren",
	"Darryl",
	"Daryl",
	"Dave",
	"David",
	"Davis",
	"Dawson",
	"Deag",
	"Death",
	"Deb",
	"Debbie",
	"Deborah",
	"Deckard",
	"Declan",
	"Deitrick",
	"Delaney",
	"Dell",
	"Dennis",
	"Denton",
	"Deschain",
	"Deth",
	"Diana",
	"Diane",
	"DiAngelo",
	"Diaz",
	"Dick",
	"DiMaggio",
	"Dinolt",
	"DJ",
	"Django",
	"Dom",
	"Domics",
	"Dominguez",
	"Dominic",
	"Don",
	"Donald",
	"Dong",
	"DongJun",
	"Donnie",
	"Donny",
	"Doug",
	"Douglas",
	"Dragon",
	"Draper",
	"Dulany",
	"Dutch",
	"Duvall",
	"Dylan",
	"Eagle",
	"East",
	"Ed",
	"Eddie",
	"Eddy",
	"Edwards",
	"Elena",
	"Eli",
	"Eliana",
	"Elijah",
	"Elizabeth",
	"Ella",
	"Ellie",
	"Elliot",
	"Elliott",
	"Emil",
	"Emile",
	"Emily",
	"Emma",
	"Erectus",
	"Eric",
	"Erik",
	"Erin",
	"Ernest",
	"Ernie",
	"Ethan",
	"Eugene",
	"Eva",
	"Evan",
	"Evans",
	"Evelyn",
	"Everdeen",
	"Everett",
	"Felipe",
	"Ferret",
	"Fifi",
	"Finn",
	"Finster",
	"Fiona",
	"Fisher",
	"Flag",
	"Flagg",
	"Flash",
	"Flores",
	"Flynn",
	"Foster",
	"Fox",
	"Fragile",
	"Francis",
	"Franke",
	"Freeman",
	"Frost",
	"Fuck",
	"Fucker",
	"Fuckface",
	"Furiosa",
	"Fury",
	"Gabriel",
	"Gabriella",
	"Gardiner",
	"Gary",
	"Gavin",
	"Gene",
	"George",
	"Georgia",
	"Gerry",
	"Gianna",
	"Gil",
	"Glen",
	"Gomez",
	"Gonzalez",
	"Goose",
	"Gordon",
	"Graber",
	"Grace",
	"Grant",
	"Gravato",
	"Gray",
	"Grayson",
	"Greco",
	"Green",
	"Greene",
	"Grey",
	"Griffin",
	"Grognak",
	"Gryphon",
	"Gutierrez",
	"Guy",
	"Hackman",
	"Hailey",
	"Hall",
	"Ham",
	"Hamilton",
	"Hamm",
	"Hammer",
	"Hammett",
	"Hamrick",
	"Han",
	"Hannah",
	"Hans",
	"Harden",
	"Hardi",
	"Harold",
	"Harper",
	"Harris",
	"Harry",
	"Haschart",
	"Hasenbuhler",
	"Hastings",
	"Hawk",
	"Hawke",
	"Hazel",
	"Henning",
	"Henry",
	"Herbert",
	"Hicks",
	"Hill",
	"Hines",
	"Holly",
	"Holmes",
	"Hook",
	"Hopgood",
	"Houle",
	"Howard",
	"Hudson",
	"Hughes",
	"Humongous",
	"Humungus",
	"Hyun",
	"Ian",
	"Ilya",
	"Imperator",
	"Indiana",
	"Indy",
	"Isaac",
	"Isabella",
	"Isabelle",
	"Isaiah",
	"Ist",
	"Istvan",
	"J.P.",
	"Jack",
	"Jackson",
	"Jacob",
	"Jag",
	"Jake",
	"James",
	"Jangjoon",
	"Jasmine",
	"Jason",
	"Jay",
	"Jayce",
	"Jayden",
	"Jeff",
	"Jeffery",
	"Jen",
	"Jenkins",
	"Jennifer",
	"Jeremiah",
	"Jeremy",
	"Jerry",
	"Jerusalem",
	"Jess",
	"Jessica",
	"Jessie",
	"Jet",
	"Jim",
	"Jimmy",
	"Joan",
	"Joe",
	"Joel",
	"Joey",
	"John",
	"Johnson",
	"Jon",
	"Jonathan",
	"Jones",
	"JonPaul",
	"Jordan",
	"Jordyn",
	"Joseph",
	"Josh",
	"Joshua",
	"Josiah",
	"JP",
	"Juan",
	"Julia",
	"Julian",
	"Juliana",
	"Justin",
	"Kaela",
	"Kaelyn",
	"Kaitlyn",
	"Kal",
	"KalEl",
	"Kaneda",
	"Kate",
	"Katharine",
	"Katherine",
	"Katniss",
	"Kauffman",
	"Kayla",
	"Kaylee",
	"Keira",
	"Kelley",
	"Kelly",
	"Kelvin",
	"Ken",
	"Kennedy",
	"Kenshin",
	"Kevin",
	"Kim",
	"King",
	"Kirk",
	"Knight",
	"Krietz",
	"Kuhlmann",
	"Kurt",
	"Kylie",
	"Lafferty",
	"Lamb",
	"Landon",
	"Lane",
	"Langlois",
	"Laura",
	"Lauren",
	"Laurie",
	"Layla",
	"Lea",
	"Leah",
	"Lederer",
	"Lee",
	"Leo",
	"Leon",
	"Les",
	"Leslie",
	"Levi",
	"Lewis",
	"Li",
	"Liam",
	"Liesegang",
	"Lila",
	"Liliana",
	"Lillian",
	"Lily",
	"Lincoln",
	"Linda",
	"Lionheart",
	"Lipari",
	"Liz",
	"Logan",
	"London",
	"Loner",
	"Long",
	"Lopez",
	"Losi",
	"Lucas",
	"Luce",
	"Lucy",
	"Luke",
	"Lundin",
	"Lupe",
	"Lynda",
	"Maam",
	"Mackenzie",
	"Macklin",
	"Madam",
	"Madeleine",
	"Madelyn",
	"Madison",
	"Makayla",
	"Mal",
	"Malcolm",
	"Mamba",
	"Mandy",
	"Mara",
	"Marcus",
	"Marge",
	"Maria",
	"Marie",
	"Marji",
	"Marjorie",
	"Mark",
	"Markiepoo",
	"Marko",
	"Markus",
	"Marlowe",
	"Marsden",
	"Martin",
	"Martinez",
	"Marty",
	"Mary",
	"Mason",
	"Mateo",
	"Matt",
	"Matthew",
	"Matty",
	"Max",
	"Maya",
	"McCoy",
	"McDyer",
	"McFly",
	"McKay",
	"McPherson",
	"Means",
	"Megan",
	"Meister",
	"Mejillones",
	"Mia",
	"Micah",
	"Michael",
	"Michonne",
	"Miguel",
	"Mikami",
	"Mike",
	"Mila",
	"Miles",
	"Miller",
	"Mitchell",
	"Mohammed",
	"Molly",
	"Monster",
	"Montana",
	"Moonves",
	"Moore",
	"Morales",
	"Morgan",
	"Morgue",
	"Morpheus",
	"Morris",
	"Muck",
	"Mudguts",
	"Muhammad",
	"Mulder",
	"Muldoon",
	"Murphy",
	"Myers",
	"Nadia",
	"Nancy",
	"Nanes",
	"Nardone",
	"Nasty",
	"Natalia",
	"Natalie",
	"Natasha",
	"Nate",
	"Nathan",
	"Nathaniel",
	"Nazarov",
	"Neary",
	"Nelson",
	"Neo",
	"Nesmith",
	"Neville",
	"Nguyen",
	"Nicholas",
	"Nico",
	"Nipple",
	"Noah",
	"Nogueira",
	"Nolan",
	"Noonan",
	"Nora",
	"Norm",
	"Norm",
	"Norman",
	"Normand",
	"North",
	"Northup",
	"Nourmohammadi",
	"Nuclear",
	"Nuke",
	"Olds",
	"Oliver",
	"Olivia",
	"Ollie",
	"Olsen",
	"Olson",
	"Optical",
	"Orgasmo",
	"Orin",
	"Ortiz",
	"Owen",
	"Owens",
	"Pagliarulo",
	"Palmer",
	"Paris",
	"Parker",
	"Parson",
	"Pat",
	"Patrick",
	"Patty",
	"Paul",
	"Pely",
	"Pendleton",
	"Penelope",
	"Perez",
	"Perry",
	"Pete",
	"Peter",
	"Peterson",
	"Peyton",
	"Phil",
	"Philip",
	"Phillips",
	"Picard",
	"Plissken",
	"Powell",
	"Preacher",
	"Price",
	"Priest",
	"Prince",
	"Princess",
	"Psycho",
	"Puma",
	"Purkey",
	"Purkeypile",
	"Python",
	"Qin",
	"Quartermain",
	"Quatermass",
	"Queen",
	"Quinn",
	"Rabil",
	"Raf",
	"Rafael",
	"Ramirez",
	"Ramsey",
	"Randal",
	"Randall",
	"Rankin",
	"Rapp",
	"Ray",
	"Raymond",
	"Reagan",
	"Red",
	"Reed",
	"Reese",
	"Rex",
	"Reyes",
	"Reynolds",
	"Ricardo",
	"Richard",
	"Richards",
	"Richardson",
	"Rick",
	"Ricky",
	"Rictus",
	"Riddick",
	"Riley",
	"Ripken",
	"Ripley",
	"River",
	"Rivera",
	"Rob",
	"Robb",
	"Robert",
	"Roberts",
	"Robinson",
	"Rock",
	"Rockatansky",
	"Rocky",
	"Rodriguez",
	"Roger",
	"Rogers",
	"Roland",
	"Rollins",
	"Romanov",
	"Romanova",
	"Romero",
	"Ron",
	"Ronald",
	"Ronnie",
	"Ronny",
	"Rook",
	"Rosa",
	"Rose",
	"Ross",
	"Roy",
	"Ruby",
	"Russell",
	"Ryan",
	"Sadie",
	"Sage",
	"Salvatore",
	"Sam",
	"Samantha",
	"Sammie",
	"Sammy",
	"Samuel",
	"Sanchez",
	"Sanders",
	"Sandra",
	"Sanjuro",
	"Sara",
	"Sarah",
	"Sarse",
	"Savannah",
	"Sawyer",
	"Scarlett",
	"Schaefer",
	"Scharf",
	"Schram",
	"Schreiber",
	"Scott",
	"Scully",
	"Sears",
	"Sebastian",
	"Selena",
	"Seljenes",
	"Serena",
	"Seth",
	"Sex",
	"Sexy",
	"Shane",
	"Shannon",
	"Sheiman",
	"Shen",
	"Shinji",
	"Shrike",
	"Sidney",
	"Simmons",
	"Singer",
	"Sir",
	"Skyler",
	"Slaughter",
	"Slinger",
	"Slit",
	"Sloan",
	"Smirnova",
	"Smith",
	"Snake",
	"Snow",
	"Snyder",
	"Solo",
	"Solomon",
	"Sophia",
	"Sophie",
	"South",
	"Southie",
	"Spade",
	"Spider",
	"Spike",
	"Splendid",
	"Spring",
	"Springsteen",
	"Stark",
	"Stef",
	"Stella",
	"Steph",
	"Stephanie",
	"Stephen",
	"Sterling",
	"Steve",
	"Steven",
	"Steward",
	"Stewart",
	"Stone",
	"Struthers",
	"Stuart",
	"Sullivan",
	"Summer",
	"Sunshine",
	"Sweetpea",
	"Sydney",
	"Tallahassee",
	"Taylor",
	"Teare",
	"Ted",
	"Teddy",
	"Teitel",
	"Tesla",
	"Tetsuo",
	"Texas",
	"Thomas",
	"Thompson",
	"Thorn",
	"Thorne",
	"Tiana",
	"Tim",
	"Timmy",
	"Timothy",
	"Tit",
	"Tittie",
	"Titties",
	"Toadie",
	"Toast",
	"Todd",
	"Toecutter",
	"Tom",
	"Tommy",
	"Tonon",
	"Tony",
	"Torres",
	"Tracey",
	"Tracy",
	"Treadway",
	"Tresnjak",
	"Trinity",
	"Tristan",
	"Trump",
	"Tuck",
	"Turner",
	"Tyler",
	"Unbreakable",
	"Utting",
	"Valenti",
	"Valentina",
	"Valkyrie",
	"Vargas",
	"Vash",
	"Venkman",
	"Vic",
	"Vicens",
	"Victoria",
	"Violet",
	"Vivian",
	"Vlatko",
	"Wagner",
	"Walker",
	"Walton",
	"Wanderer",
	"Ward",
	"Washington",
	"Watson",
	"Watts",
	"Wayne",
	"Webb",
	"Wells",
	"Wes",
	"West",
	"Weyland",
	"Wez",
	"White",
	"Whitey",
	"Wikus",
	"Will",
	"William",
	"Williams",
	"Willy",
	"Wilson",
	"Winter",
	"Wisnewski",
	"Wood",
	"Woodward",
	"Wright",
	"Wyatt",
	"Xavier",
	"Yan",
	"Yojimbo",
	"Yorick",
	"Young",
	"Yutani",
	"Zachary",
	"Zdana",
	"Zed",
	"Zenith",
	"Zetta",
	"Ziggy",
	"Zip",
	"Zoe"
];