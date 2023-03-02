let luck = document.getElementById("luck");
let results = document.getElementById("results");
let npcLevel = document.getElementById("npcLevel");
document.getElementById("defaultOpen").click();

/**
 * 
 * @param {LootTableObject[]} lootTable 
 * @param {Number} nD20 
 * @param {Number} nLoots 
 * @param {Number} multiplierFactor 
 * @returns 
 */
function getStuff(lootTable, nD20 = 2, nLoots = 1, multiplierFactor = 1) {
	/**
	 * Something you get nothing
	 */
	if (nLoots <= 0) {
		printToResults((luck.checked ? "[LUCKY] " : "") + "1 Common Materials\n");
		return;
	}
	for (let n = 0; n < nLoots; n++) {
		const result = getSum(rollDices(nD20, 20)) - nD20
		/**
		 * @Todo Improve and give the choice to the player
		 */
		// if (luck.checked == true) {
		// 	printToResults("[LUCKY] ");
		// 	let rollMid = rollP * 10 + Math.floor(rollP / 2);
		// 	if (result <= rollMid) {
		// 		result = Math.max(result - 6, 0);
		// 	} else if (result > rollMid) {
		// 		result = Math.min(result + 6, (rollP * 20) - rollP);
		// 	}
		// }

		let loot = lootTable[result];
		let trueMultiplier = rollDie(multiplierFactor);
		let itemCount = parseDiceString(loot.quantityToRoll) * trueMultiplier;

		/**
		 * @Todo Magazine
		 */
		// } else if (item.includes("$$$")) {
		// 	item = getMagazine();
		// }
		printToResults(`${itemCount} ${(new loot.item()).getName(!!(itemCount - 1))}\n`);
	}
}
/**
 * 
 * @param {Number} dieSize 
 * @returns {Number}
 */
function rollDie(dieSize) {
	return Math.ceil(Math.random() * dieSize);
}
/**
 * 
 * @param {Number} n 
 * @param {Number} dieSize 
 * @returns {Number[]}
 */
function rollDices(n, dieSize) {
	return Array.from({ length: n }, () => rollDie(dieSize))
}

/**
 * 
 * @param {Number[]} dicesArray 
 * @returns {Number}
 */
function getSum(dicesArray) {
	console.log(dicesArray)
	return dicesArray.reduce((acc, cur) => (acc + cur), 0)
}


function rollEffectsDices(n = 1) {
	return Array.from({ length: n }, () => new EffectDieResult())
}
/**
 * 
 * @param {EffectDieResult[]} effectDices 
 * @returns 
 */
function exctractTotalDEValueFromEffectDices(effectDices) {
	console.log(effectDices)
	return effectDices.reduce((acc, cur) => (
		acc += cur.dEValue
	), 0)
}

class EffectDieResult {
	/**
	 * Goes 1 to 6
	 */
	d6Value = 1;
	/**
	 * Goes 0 to 2
	 */
	dEValue = 0;
	/**
	 * True or False
	 */
	isEffect = false;

	constructor() {
		const resultToInterpret = rollDie(6)
		this.d6Value = resultToInterpret
		switch (resultToInterpret) {
			case (1):
				this.dEValue = 1
				this.isEffect = false
				break;
			case (2):
				this.dEValue = 2
				this.isEffect = false
				break;
			case (3):
				this.dEValue = 0
				this.isEffect = false
				break;
			case (4):
				this.dEValue = 0
				this.isEffect = false
				break;
			case (5):
				this.dEValue = 1
				this.isEffect = true
				break;
			case (6):
				this.dEValue = 1
				this.isEffect = true
				break;
		}
	}
}

function parseDiceString(stringP) {
	const leftPart = stringP.split("+")[0]
	const rightPart = stringP.split("+")[1]


	let diceType = rightPart.split("d")[1];
	let addition = leftPart;
	let diceCount = parseInt(rightPart.split("d")[0]);

	let multiplier = 1;
	if (stringP.includes("x")) {
		multiplier = parseInt(stringP.split("x")[1]);
	}
	let finalResult = 0;

	if (diceType[0] === "E") {
		finalResult += exctractTotalDEValueFromEffectDices(rollEffectsDices(diceCount));
	} else {
		finalResult += getSum(rollDices(diceCount, parseInt(diceType)));
	}
	finalResult += parseInt(addition);
	finalResult *= multiplier;
	return finalResult;
}

function printW(weaponP) {
	let weapon = getWeaponMods(weaponP);
	printToResults(printWeapon(weapon) + "\n");
}

function printA(armorP) {
	let armor = getArmorMods(armorP);
	printToResults(printArmor(armor) + "\n");
}

function clearList() {
	printToResults("", true);
}

function getModdedWeapon(modListP) {
	let roll = rollDie(20) + rollDie(20) + rollDie(20) - 3;
	if (luck.checked == true) {
		printToResults("[LUCKY] ");
		let rollMid = 31;
		if (roll <= rollMid) {
			roll = Math.max(roll - 6, 0);
		} else if (roll > rollMid) {
			roll = Math.min(roll + 6, 57);
		}
	}
	let weapon = modListP[roll];

	if (weapon == "gaussRifle") {
		printW(gaussRifle);
	} else if (weapon == "missleLauncher") {
		printW(missleLauncher);
	} else if (weapon == "railwayRifle") {
		printW(railwayRifle);
	} else if (weapon == "superSledge") {
		printW(superSledge);
	} else if (weapon == "junkJet") {
		printW(junkJet);
	} else if (weapon == "flamer") {
		printW(flamer);
	} else if (weapon == "sledgehammer") {
		printW(sledgehammer);
	} else if (weapon == "sword") {
		printW(sword);
	} else if (weapon == "laserGun") {
		printW(laserGun);
	} else if (weapon == "huntingRifle") {
		printW(huntingRifle);
	} else if (weapon == "assaultRifle") {
		printW(assaultRifle);
	} else if (weapon == "syringer") {
		printW(syringer);
	} else if (weapon == "knuckles") {
		printW(knuckles);
	} else if (weapon == "tireIron") {
		printW(tireIron);
	} else if (weapon == "pipeWrench") {
		printW(pipeWrench);
	} else if (weapon == "machete") {
		printW(machete);
	} else if (weapon == "laserMusket") {
		printW(laserMusket);
	} else if (weapon == "submachineGun") {
		printW(submachineGun);
	} else if (weapon == "walkingCane") {
		printW(walkingCane);
	} else if (weapon == "poolCue") {
		printW(poolCue);
	} else if (weapon == "board") {
		printW(board);
	} else if (weapon == "pipeBoltAction") {
		printW(pipeBoltAction);
	} else if (weapon == "pipeGun") {
		printW(pipeGun);
	} else if (weapon == "pipeRevolver") {
		printW(pipeRevolver);
	} else if (weapon == "switchblade") {
		printW(switchblade);
	} else if (weapon == "leadPipe") {
		printW(leadPipe);
	} else if (weapon == "rollingPin") {
		printW(rollingPin);
	} else if (weapon == "pistol10") {
		printW(pistol10);
	} else if (weapon == "doubleBarrelShotgun") {
		printW(doubleBarrelShotgun);
	} else if (weapon == "combatKnife") {
		printW(combatKnife);
	} else if (weapon == "baseballBat") {
		printW(baseballBat);
	} else if (weapon == "baton") {
		printW(baton);
	} else if (weapon == "boxingGlove") {
		printW(boxingGlove);
	} else if (weapon == "pistol44") {
		printW(pistol44);
	} else if (weapon == "combatRifle") {
		printW(combatRifle);
	} else if (weapon == "combatShotgun") {
		printW(combatShotgun);
	} else if (weapon == "instituteLaser") {
		printW(instituteLaser);
	} else if (weapon == "minigun") {
		printW(minigun);
	} else if (weapon == "ripper") {
		printW(ripper);
	} else if (weapon == "powerFist") {
		printW(powerFist);
	} else if (weapon == "plasmaGun") {
		printW(plasmaGun);
	} else if (weapon == "gatlingLaser") {
		printW(gatlingLaser);
	} else if (weapon == "shishkebab") {
		printW(shishkebab);
	} else if (weapon == "deathclawGauntlet") {
		printW(deathclawGauntlet);
	} else if (weapon == "gammaGun") {
		printW(gammaGun);
	}
}

function getModdedArmor(modListP) {
	let roll = rollDie(20) + rollDie(20) + rollDie(20) + rollDie(20) - 4;
	if (luck.checked == true) {
		printToResults("[LUCKY] ");
		let rollMid = 42;
		if (roll <= rollMid) {
			roll = Math.max(roll - 6, 0);
		} else if (roll > rollMid) {
			roll = Math.min(roll + 6, 76);
		}
	}
	let armor = modListP[roll];

	if (armor == "synthArmorLegHeavy") {
		printA(synthArmorLegHeavy);
	} else if (armor == "synthArmorHelmetHeavy") {
		printA(synthArmorHelmetHeavy);
	} else if (armor == "synthArmorChestSturdy") {
		printA(synthArmorChestSturdy);
	} else if (armor == "synthArmorArmSturdy") {
		printA(synthArmorArmSturdy);
	} else if (armor == "synthArmorLegSturdy") {
		printA(synthArmorLegSturdy);
	} else if (armor == "synthArmorHelmetSturdy") {
		printA(synthArmorHelmetSturdy);
	} else if (armor == "leatherArmorChestHeavy") {
		printA(leatherArmorChestHeavy);
	} else if (armor == "leatherArmorArmHeavy") {
		printA(leatherArmorArmHeavy);
	} else if (armor == "leatherArmorLegHeavy") {
		printA(leatherArmorLegHeavy);
	} else if (armor == "metalArmorChestHeavy") {
		printA(metalArmorChestHeavy);
	} else if (armor == "metalArmorArmHeavy") {
		printA(metalArmorArmHeavy);
	} else if (armor == "metalArmorLegHeavy") {
		printA(metalArmorLegHeavy);
	} else if (armor == "metalArmorHelmHeavy") {
		printA(metalArmorHelmHeavy);
	} else if (armor == "metalArmorChestSturdy") {
		printA(metalArmorChestSturdy);
	} else if (armor == "metalArmorArmSturdy") {
		printA(metalArmorArmSturdy);
	} else if (armor == "metalArmorLegSturdy") {
		printA(metalArmorLegSturdy);
	} else if (armor == "metalArmorHelmSturdy") {
		printA(metalArmorHelmSturdy);
	} else if (armor == "combatArmorChest") {
		printA(combatArmorChest);
	} else if (armor == "combatArmorArm") {
		printA(combatArmorArm);
	} else if (armor == "combatArmorLeg") {
		printA(combatArmorLeg);
	} else if (armor == "combatArmorHelm") {
		printA(combatArmorHelm);
	} else if (armor == "raiderArmorArmHeavy") {
		printA(raiderArmorArmHeavy);
	} else if (armor == "metalArmorArm") {
		printA(metalArmorArm);
	} else if (armor == "metalArmorHelm") {
		printA(metalArmorHelm);
	} else if (armor == "leatherArmorChest") {
		printA(leatherArmorChest);
	} else if (armor == "leatherArmorArm") {
		printA(leatherArmorArm);
	} else if (armor == "leatherArmorLeg") {
		printA(leatherArmorLeg);
	} else if (armor == "raiderArmorChest") {
		printA(raiderArmorChest);
	} else if (armor == "raiderArmorArm") {
		printA(raiderArmorArm);
	} else if (armor == "raiderArmorLeg") {
		printA(raiderArmorLeg);
	} else if (armor == "casualClothing") {
		printA(casualClothing);
	} else if (armor == "casualHat") {
		printA(casualHat);
	} else if (armor == "heavyCoat") {
		printA(heavyCoat);
	} else if (armor == "labCoat") {
		printA(labCoat);
	} else if (armor == "militaryFatigues") {
		printA(militaryFatigues);
	} else if (armor == "metalArmorChest") {
		printA(metalArmorChest);
	} else if (armor == "metalArmorLeg") {
		printA(metalArmorLeg);
	} else if (armor == "raiderArmorChestSturdy") {
		printA(raiderArmorChestSturdy);
	} else if (armor == "raiderArmorArmSturdy") {
		printA(raiderArmorArmSturdy);
	} else if (armor == "raiderArmorLegSturdy") {
		printA(raiderArmorLegSturdy);
	} else if (armor == "formalClothing") {
		printA(formalClothing);
	} else if (armor == "vaultJumpsuit") {
		printA(vaultJumpsuit);
	} else if (armor == "raiderArmorChestHeavy") {
		printA(raiderArmorChestHeavy);
	} else if (armor == "raiderArmorLegHeavy") {
		printA(raiderArmorLegHeavy);
	} else if (armor == "leatherArmorChestSturdy") {
		printA(leatherArmorChestSturdy);
	} else if (armor == "leatherArmorArmSturdy") {
		printA(leatherArmorArmSturdy);
	} else if (armor == "leatherArmorLegSturdy") {
		printA(leatherArmorLegSturdy);
	} else if (armor == "combatArmorChestSturdy") {
		printA(combatArmorChestSturdy);
	} else if (armor == "combatArmorArmSturdy") {
		printA(combatArmorArmSturdy);
	} else if (armor == "combatArmorLegSturdy") {
		printA(combatArmorLegSturdy);
	} else if (armor == "combatArmorHelmSturdy") {
		printA(combatArmorHelmSturdy);
	} else if (armor == "synthArmorChest") {
		printA(synthArmorChest);
	} else if (armor == "synthArmorArm") {
		printA(synthArmorArm);
	} else if (armor == "synthArmorLeg") {
		printA(synthArmorLeg);
	} else if (armor == "synthArmorHelmet") {
		printA(synthArmorHelmet);
	} else if (armor == "combatArmorChestHeavy") {
		printA(combatArmorChestHeavy);
	} else if (armor == "combatArmorArmHeavy") {
		printA(combatArmorArmHeavy);
	} else if (armor == "combatArmorLegHeavy") {
		printA(combatArmorLegHeavy);
	} else if (armor == "combatArmorHelmHeavy") {
		printA(combatArmorHelmHeavy);
	} else if (armor == "synthArmorChestHeavy") {
		printA(synthArmorChestHeavy);
	} else if (armor == "synthArmorArmHeavy") {
		printA(synthArmorArmHeavy);
	}
}

function getMagazine(printP = false) {
	let publication = rollDie(20);
	let issue = 0;
	let finalResult = "";
	if (publication == 1) {
		finalResult = "La Fantoma!";
	} else if (publication == 2) {
		finalResult = "Astoundingly Awesome Tales";
		issue = rollDie(20);
		if (issue <= 2) {
			finalResult += " - Attack of the Fishmen! (Issue 1/10)";
		} else if (issue <= 4) {
			finalResult += " - Rise of the Mutants! (Issue 2/10)";
		} else if (issue <= 6) {
			finalResult += " - Attack of the Metal Men! (Issue 3/10)";
		} else if (issue <= 8) {
			finalResult += " - The Mad Russian’s Revenge! (Issue 4/10)";
		} else if (issue <= 10) {
			finalResult += " - The Starlet Sniper! (Issue 5/10)";
		} else if (issue <= 12) {
			finalResult += " - Curse of the Burned! (Issue 6/10)";
		} else if (issue <= 14) {
			finalResult += " - Giant Insects Invade! (Issue 7/10)";
		} else if (issue <= 16) {
			finalResult += " - Deadly Lasers! (Issue 8/10)";
		} else if (issue <= 18) {
			finalResult += " - Science Gone Mad! (Issue 9/10)";
		} else if (issue <= 20) {
			finalResult += " - Surrounded by the Dead! (Issue 10/10)";
		}
	} else if (publication == 3) {
		finalResult = "Backwoodsman";
		issue = rollDie(20);
		if (issue <= 2) {
			finalResult += " - Get Off My Lawn (Issue 1/10)";
		} else if (issue <= 4) {
			finalResult += " - Down Home Cookin’ (Issue 2/10)";
		} else if (issue <= 6) {
			finalResult += " - Homesteading Horror (Issue 3/10)";
		} else if (issue <= 8) {
			finalResult += " - Hardy as a Sasquatch (Issue 4/10)";
		} else if (issue <= 10) {
			finalResult += " - Carnivorous Rabbits of Appalachia (Issue 5/10)";
		} else if (issue <= 12) {
			finalResult += " - The Appalachia Squirrel Massacre (Issue 6/10)";
		} else if (issue <= 14) {
			finalResult += " - Art of the Tomahawk (Issue 7/10)";
		} else if (issue <= 16) {
			finalResult += " - The Gunsmith of Harper’s Ferry (Issue 8/10)";
		} else if (issue <= 18) {
			finalResult += " - The Ohio River Hermit (Issue 9/10)";
		} else if (issue <= 20) {
			finalResult += " - Nightmare in the Garden (Issue 10/10)";
		}
	} else if (publication == 4) {
		finalResult = "Boxing Times";
	} else if (publication == 5) {
		finalResult = "Duck and Cover!";
	} else if (publication == 6) {
		finalResult = "Fixin’ Things";
	} else if (publication == 7) {
		finalResult = "Future Weapons Today";
	} else if (publication == 8) {
		finalResult = "Grognak the Barbarian";
		issue = rollDie(20);
		if (issue <= 2) {
			finalResult += " - Blood on the Harp (Issue 1/10)";
		} else if (issue <= 4) {
			finalResult += " - Cometh the Trickster (Issue 2/10)";
		} else if (issue <= 6) {
			finalResult += " - Jungle of the Bat-Babies (Issue 3/10)";
		} else if (issue <= 8) {
			finalResult += " - In the Bosom of the Corsair Queen (Issue 4/10)";
		} else if (issue <= 10) {
			finalResult += " - Demon Slaves, Demon Sands (Issue 5/10)";
		} else if (issue <= 12) {
			finalResult += " - Enter Maula: War Maiden of Mars (Issue 6/10)";
		} else if (issue <= 14) {
			finalResult += " - Fatherless Cur! (Issue 7/10)";
		} else if (issue <= 16) {
			finalResult += " - Lost in the Snows of Lust (Issue 8/10)";
		} else if (issue <= 18) {
			finalResult += " - The Lair of the Virgin Eaters (Issue 9/10)";
		} else if (issue <= 20) {
			finalResult += " - What Sorcery is This? (Issue 10/10)";
		}
	} else if (publication == 9) {
		finalResult = "Guns and Bullets";
		issue = rollDie(20);
		if (issue <= 2) {
			finalResult += " - The Future of Hunting? (Issue 1/10)";
		} else if (issue <= 4) {
			finalResult += " - Lasers & Hunting: Acceptable Overkill (Issue 2/10)";
		} else if (issue <= 6) {
			finalResult += " - Little Guns for Little Ladies (Issue 3/10)";
		} else if (issue <= 8) {
			finalResult += " - Street Guns of Detroit (Issue 4/10)";
		} else if (issue <= 10) {
			finalResult += " - Avoid Those Pesky Gun Laws! (Issue 5/10)";
		} else if (issue <= 12) {
			finalResult += " - The Moon: A Communist Doomsday Device?! (Issue 6/10)";
		} else if (issue <= 14) {
			finalResult += " - Take Aim, Army Style (Issue 7/10)";
		} else if (issue <= 16) {
			finalResult += " - Bear-Proofing your Campsite (Issue 8/10)";
		} else if (issue <= 18) {
			finalResult += " - Plasma: The Weapon of Tomorrow (Issue 9/10)";
		} else if (issue <= 20) {
			finalResult += " - Guide to Hunting Commies! (Issue 10/10)";
		}
	} else if (publication == 10) {
		finalResult = "Live & Love";
		issue = rollDie(18);
		if (issue <= 2) {
			finalResult += " - Life Long Best Friends! (Issue 1/9)";
		} else if (issue <= 4) {
			finalResult += " - Nuke-the-Man! (Issue 2/9)";
		} else if (issue <= 6) {
			finalResult += " - Trim the Fat! (Issue 3/9)";
		} else if (issue <= 8) {
			finalResult += " - The Secretary Charmer (Issue 4/9)";
		} else if (issue <= 10) {
			finalResult += " - Talk Yourself Sober (Issue 5/9)";
		} else if (issue <= 12) {
			finalResult += " - Advice from Married Men (Issue 6/9)";
		} else if (issue <= 14) {
			finalResult += " - Beware the Man Handler (Issue 7/9)";
		} else if (issue <= 16) {
			finalResult += " - An Experience to Remember (Issue 8/9)";
		} else if (issue <= 18) {
			finalResult += " - I Married a Robot (Issue 9/9)";
		}
	} else if (publication == 11) {
		finalResult = "Massachusetts Surgical Journal";
	} else if (publication == 12) {
		finalResult = "Meeting People";
	} else if (publication == 13) {
		finalResult = "Programmer’s Digest";
	} else if (publication == 14) {
		finalResult = "Tales of a Junktown Jerky Vendor";
	} else if (publication == 15) {
		finalResult = "Tesla Science Magazine";
		issue = rollDie(18);
		if (issue <= 2) {
			finalResult += " - Will Robots Rule the World? (Issue 1/9)";
		} else if (issue <= 4) {
			finalResult += " - What is Plasma, anyway? (Issue 2/9)";
		} else if (issue <= 6) {
			finalResult += " - Rocket Science for Toddlers (Issue 3/9)";
		} else if (issue <= 8) {
			finalResult += " - Tomorrow’s Technology for Today’s Super Soldiers (Issue 4/9)";
		} else if (issue <= 10) {
			finalResult += " - Giant Super Weapons! (Issue 5/9)";
		} else if (issue <= 12) {
			finalResult += " - Geckos and Gamma Radiation (Issue 6/9)";
		} else if (issue <= 14) {
			finalResult += " - U.S. Army Goes to Space (Issue 7/9)";
		} else if (issue <= 16) {
			finalResult += " - 10 Number 1 Hits!!! Rock-o-bot Takes the Nation by Storm!! (Issue 8/9)";
		} else if (issue <= 18) {
			finalResult += " - Future of Warfare? (Issue 9/9)";
		}
	} else if (publication == 16) {
		finalResult = "True Police Stories";
	} else if (publication == 17) {
		finalResult = "Tumblers Today";
		issue = rollDie(20);
		if (issue <= 4) {
			finalResult += " - Mysteries of the Master Key Exposed! (Issue 1/5)";
		} else if (issue <= 8) {
			finalResult += " - Bobby Pins: More Effective Than Lockpicks? (Issue 2/5)";
		} else if (issue <= 12) {
			finalResult += " - Confessions of a Housebreaker (Issue 3/5)";
		} else if (issue <= 16) {
			finalResult += " - Open Any Lock in 5 Seconds Flat (Issue 4/5)";
		} else if (issue <= 20) {
			finalResult += " - Locksmith Certification Special—Pass with Flying Colors (Issue 5/5)";
		}
	} else if (publication == 18) {
		finalResult = "Unstoppables";
		issue = rollDie(20);
		if (issue <= 4) {
			finalResult += " - Dr. Brainwash and His Army of De-Capitalists! (Issue 1/5)";
		} else if (issue <= 8) {
			finalResult += " - Who Can Stop the Unstoppable Grog-Na-Rok?! (Issue 2/5)";
		} else if (issue <= 12) {
			finalResult += " - Commie-Kazi vs. Manta Man (Issue 3/5)";
		} else if (issue <= 16) {
			finalResult += " - Trapped in the Dimension of the Pterror-dactyls! (Issue 4/5)";
		} else if (issue <= 20) {
			finalResult += " - Visit the Ux-Ron Galaxy! (Issue 5/5)";
		}
	} else if (publication == 19) {
		finalResult = "U.S. Covert Operations Manual";
		issue = rollDie(20);
		if (issue <= 2) {
			finalResult += " - FH 5-01 Whistling in the Dark (Issue 1/10)";
		} else if (issue <= 4) {
			finalResult += " - FH 5-02 Urban Camouflage (Issue 2/10)";
		} else if (issue <= 6) {
			finalResult += " - FH 5-03 Facepaint Fundamentals (Issue 3/10)";
		} else if (issue <= 8) {
			finalResult += " - FH 5-04 Not the Soldiers You’re Looking For (Issue 4/10)";
		} else if (issue <= 10) {
			finalResult += " - FH 5-05 Who Goes There? (Issue 5/10)";
		} else if (issue <= 12) {
			finalResult += " - FH 5-06 Squeaky Floorboard, Sudden Death (Issue 6/10)";
		} else if (issue <= 14) {
			finalResult += " - FH 5-07 Getting the Drop on the Communists (Issue 7/10)";
		} else if (issue <= 16) {
			finalResult += " - FH 5-08 Bushes, Boxes, and Beehives: Camouflage Special (Issue 8/10)";
		} else if (issue <= 18) {
			finalResult += " - FH 5-09 Look Better in Black (Issue 9/10)";
		} else if (issue <= 20) {
			finalResult += " - FH 5-10 Tiptoe Through the Tulips (Issue 10/10)";
		}
	} else if (publication == 20) {
		finalResult = "Wasteland Survival Guide";
		issue = rollDie(20);
		if (issue <= 3) {
			finalResult += " - Farming the Wastes (Issue 1/7)";
		} else if (issue <= 6) {
			finalResult += " - Insect Repellent Special (Issue 2/7)";
		} else if (issue <= 9) {
			finalResult += " - The Bright Side of Radiation Poisoning (Issue 3/7)";
		} else if (issue <= 12) {
			finalResult += " - Coupon Spectacular (Issue 4/7)";
		} else if (issue <= 15) {
			finalResult += " - Water Aerobics for Ghouls (Issue 5/7)";
		} else if (issue <= 18) {
			finalResult += " - Self Defense Secrets (Issue 6/7)";
		} else if (issue <= 20) {
			finalResult += " - Hunting in the Wastes (Issue 7/7)";
		}
	}
	if (printP) {
		printToResults(finalResult + "\n");
	}
	return finalResult;
}

function printToResults(stringP, clear = false) {
	if (clear) { converter.innerHTML = stringP; }
	else { converter.innerHTML += stringP; }
	results.value = converter.value;
}

function getNPC(originP) {
	getNewNPC(parseInt(npcLevel.value), originP);
	printToResults(printNPC());
}

function openTab(evt, tabName) {
	let i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}

function levelCheck() {
	if (npcLevel.value < 1) { npcLevel.value = 1; }
	if (npcLevel.value > 21) { npcLevel.value = 21; }
}