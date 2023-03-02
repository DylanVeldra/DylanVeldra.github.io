class NPC { }

var npc = new NPC();
var tagCount = 3;
var specialCount = 7;
var skillCount = 9;
var perkCount = 1;
var maxSTR = 10;
var maxPER = 10;
var maxEND = 10;
var maxCHA = 10;
var maxINT = 10;
var maxAGI = 10;
var maxLCK = 10;
var maxSkill = 6;


function getNewNPC(levelP, originP) {	
	npc = new NPC();
	npc.Level = 1;
	npc.GoalLevel = levelP;
	npc.Origin = "",
	npc.CarryWeight = 150;
	npc.HP = levelP - 1;
	npc.PhysicalDR = 0;
	npc.EnergyDR = 0;
	npc.RadiationDR = 0;
	npc.PoisonDR = 0;
	npc.Defense = 1;
	npc.Initiative = 0;
	npc.MeleeBonus = 0;
	npc.STR = 5;
	npc.PER = 5;
	npc.END = 5;
	npc.CHA = 5;
	npc.INT = 5;
	npc.AGI = 5;
	npc.LCK = 5;
	npc.AthleticsRank = 0;
	npc.BarterRank = 0;
	npc.BigGunsRank = 0;
	npc.EnergyWeaponsRank = 0;
	npc.ExplosivesRank = 0;
	npc.LockpickRank = 0;
	npc.MedicineRank = 0;
	npc.MeleeWeaponsRank = 0;
	npc.PilotRank = 0;
	npc.RepairRank = 0;
	npc.ScienceRank = 0;
	npc.SmallGunsRank = 0;
	npc.SneakRank = 0;
	npc.SpeechRank = 0;
	npc.SurvivalRank = 0;
	npc.ThrowingRank = 0;
	npc.UnarmedRank = 0;
	npc.AthleticsTagged = false;
	npc.BarterTagged = false;
	npc.BigGunsTagged = false;
	npc.EnergyWeaponsTagged = false;
	npc.ExplosivesTagged = false;
	npc.LockpickTagged = false;
	npc.MedicineTagged = false;
	npc.MeleeWeaponsTagged = false;
	npc.PilotTagged = false;
	npc.RepairTagged = false;
	npc.ScienceTagged = false;
	npc.SmallGunsTagged = false;
	npc.SneakTagged = false;
	npc.SpeechTagged = false;
	npc.SurvivalTagged = false;
	npc.ThrowingTagged = false;
	npc.UnarmedTagged = false;
	npc.Perks = [];
	npc.Gear = [];
	
	tagCount = 3;
	specialCount = 7;
	skillCount = 8 + levelP;
	perkCount = levelP;
	maxSTR = 10;
	maxPER = 10;
	maxEND = 10;
	maxCHA = 10;
	maxINT = 10;
	maxAGI = 10;
	maxLCK = 10;
	maxSkill = 6;
	
	console.log("Getting Name");
	getName();
	console.log("Getting Origin");
	getOrigin(originP);
	console.log("Getting Special");
	getSpecial();
	console.log("Getting Tags");
	getTaggedSkills();
	console.log("Getting Skills");
	getSkills();
	console.log("Getting Perks");
	getPerks();
	
	npc.HP += npc.END + npc.LCK;
	npc.Defense += (npc.AGI > 8 ? 1 : 0);
	npc.Initiative += npc.PER + npc.AGI;
	npc.MeleeBonus += Math.ceil((npc.STR - 6) / 2);
	npc.CarryWeight += npc.STR * 10;
	
	return npc;
}

function getName() {
	let roll = rollDie(listNPCName.length - 1) - 1;
	npc.Name = listNPCName[roll];
}

function getOrigin(originP) {
	let roll = originP;
	if (originP == 0) {
		roll = rollDie(6);
	}
	
	if (roll == 1) { 
		 npc.Origin = "Brotherhood of Steel";
		 let skill = rollDie(3);
		 if (skill == 1) { npc.EnergyWeaponsRank = 2; npc.EnergyWeaponsTagged = true; }
		 else if (skill == 2) { npc.ScienceRank = 2; npc.ScienceTagged = true; }
		 else if (skill == 3) { npc.RepairRank = 2; npc.RepairTagged = true; }
	}
	else if (roll == 2) { 
		npc.Origin = "Ghoul"; 
		npc.SurvivalTagged = true;
		npc.SurvivalRank = 2;
		npc.RadiationDR = "Immune";
	}
	else if (roll == 3) { 
		npc.Origin = "Super Mutant"; 
		npc.STR += 2;
		npc.END += 2;
		maxSTR = 12;
		maxEND = 12;
		maxINT = 6;
		maxCHA = 6;
		maxSkill = 4;
		npc.RadiationDR = "Immune";
		npc.PoisonDR = "Immune";
	}
	else if (roll == 4) { 
		npc.Origin = "Mister Handy"; 
		npc.RadiationDR = "Immune";
		npc.PoisonDR = "Immune";
		for (let i = 3; i > 0; i--) {
			var lastChar = npc.Origin[npc.Origin.length -1];
			if (lastChar == ")") { npc.Origin = npc.Origin.replace(")", ", "); }
			else { npc.Origin += " ("; }
			
			let arm = rollDie(5)
				 if (arm == 1) { npc.Origin += "10mm Auto)"; }
			else if (arm == 2) { npc.Origin += "Buzz-Saw)"; }
			else if (arm == 3) { npc.Origin += "Flamer)"; }
			else if (arm == 4) { npc.Origin += "Laser)"; }
			else if (arm == 5) { npc.Origin += "Pincer)"; }
		}
	}
	else if (roll == 5) { 
		npc.Origin = "Survivor"; 
		let trait = rollDie(5);
		if (trait == 1) { 
			 npc.Origin += " (Educated)"; 
			 tagCount++;
		}
		else if (trait == 2) { npc.Origin += " (Fast Shot)"; }
		else if (trait == 3) { 
			npc.Origin += " (Gifted)"; 
			specialCount += 2;
		}
		else if (trait == 4) { npc.Origin += " (Heavy Handed)"; }
		else if (trait == 5) { npc.Origin += " (Small Frame)"; }
		
	}
	else if (roll == 6) { 
		npc.Origin = "Vault Dweller";  
		tagCount++;
	}
}

function getSpecial() {	
	var statReduce = rollDie(5) - 1;
	
	for (let i = statReduce; i > 0; i--) {
		let roll = rollDie(7);
			 if (roll == 1 && npc.STR > 4 && npc.STR < 6) { npc.STR--; }
		else if (roll == 2 && npc.PER > 4 && npc.PER < 6) { npc.PER--; }
		else if (roll == 3 && npc.END > 4 && npc.END < 6) { npc.END--; }
		else if (roll == 4 && npc.CHA > 4 && npc.CHA < 6) { npc.CHA--; }
		else if (roll == 5 && npc.INT > 4 && npc.INT < 6) { npc.INT--; }
		else if (roll == 6 && npc.AGI > 4 && npc.AGI < 6) { npc.AGI--; }
		else if (roll == 7 && npc.LCK > 4 && npc.LCK < 6) { npc.LCK--; }
		else { i++; }
	}
	for (let i = specialCount + statReduce; i > 0; i--) {
		let roll = rollDie(7);
			 if (roll == 1 && npc.STR < maxSTR && npc.STR > 4) { npc.STR++; }
		else if (roll == 2 && npc.PER < maxSTR && npc.PER > 4) { npc.PER++; }
		else if (roll == 3 && npc.END < maxSTR && npc.END > 4) { npc.END++; }
		else if (roll == 4 && npc.CHA < maxSTR && npc.CHA > 4) { npc.CHA++; }
		else if (roll == 5 && npc.INT < maxSTR && npc.INT > 4) { npc.INT++; }
		else if (roll == 6 && npc.AGI < maxSTR && npc.AGI > 4) { npc.AGI++; }
		else if (roll == 7 && npc.LCK < maxSTR && npc.LCK > 4) { npc.LCK++; }
		else { i++; }
	}
}

function getTaggedSkills() {
	for (let i = tagCount; i > 0; i--) {
		let roll = rollDie(17);
		
		if (roll == 1 && !npc.AthleticsTagged) { 
			npc.AthleticsTagged = true;
			npc.AthleticsRank += 2; 
		} else if (roll == 2 && !npc.BarterTagged) { 
			npc.BarterTagged = true;
			npc.BarterRank += 2; 
		} else if (roll == 3 && !npc.BigGunsTagged) { 
			npc.BigGunsTagged = true;
			npc.BigGunsRank += 2; 
		} else if (roll == 4 && !npc.EnergyWeaponsTagged) { 
			npc.EnergyWeaponsTagged = true;
			npc.EnergyWeaponsRank += 2; 
		} else if (roll == 5 && !npc.ExplosivesTagged) { 
			npc.ExplosivesTagged = true;
			npc.ExplosivesRank += 2; 
		} else if (roll == 6 && !npc.LockpickTagged) { 
			npc.LockpickTagged = true;
			npc.LockpickRank += 2; 
		} else if (roll == 7 && !npc.MedicineTagged) { 
			npc.MedicineTagged = true;
			npc.MedicineRank += 2; 
		} else if (roll == 8 && !npc.MeleeWeaponsTagged) { 
			npc.MeleeWeaponsTagged = true;
			npc.MeleeWeaponsRank += 2; 
		} else if (roll == 9 && !npc.PilotTagged) { 
			npc.PilotTagged = true;
			npc.PilotRank += 2; 
		} else if (roll == 10 && !npc.RepairTagged) { 
			npc.RepairTagged = true;
			npc.RepairRank += 2; 
		} else if (roll == 11 && !npc.ScienceTagged) { 
			npc.ScienceTagged = true;
			npc.ScienceRank += 2; 
		} else if (roll == 12 && !npc.SmallGunsTagged) { 
			npc.SmallGunsTagged = true;
			npc.SmallGunsRank += 2; 
		} else if (roll == 13 && !npc.SneakTagged) { 
			npc.SneakTagged = true;
			npc.SneakRank += 2; 
		} else if (roll == 14 && !npc.SpeechTagged) { 
			npc.SpeechTagged = true;
			npc.SpeechRank += 2; 
		} else if (roll == 15 && !npc.SurvivalTagged) { 
			npc.SurvivalTagged = true;
			npc.SurvivalRank += 2; 
		} else if (roll == 16 && !npc.ThrowingTagged) { 
			npc.ThrowingTagged = true;
			npc.ThrowingRank += 2; 
		} else if (roll == 17 && !npc.UnarmedTagged) { 
			npc.UnarmedTagged = true;
			npc.UnarmedRank += 2; 
		} else { i++; }
	}
}

function areSkillsMaxed() {
	if (npc.AthleticsRank >= maxSkill && npc.BarterRank >= maxSkill && npc.BigGunsRank >= maxSkill && npc.EnergyWeaponsRank >= maxSkill && npc.ExplosivesRank >= maxSkill && npc.LockpickRank >= maxSkill &&
		npc.MedicineRank >= maxSkill && npc.MeleeWeaponsRank >= maxSkill && npc.PilotRank >= maxSkill && npc.RepairRank >= maxSkill && npc.ScienceRank >= maxSkill && npc.SmallGunsRank >= maxSkill && npc.SneakRank >= maxSkill &&
		npc.SpeechRank >= maxSkill && npc.SurvivalRank >= maxSkill && npc.ThrowingRank >= maxSkill && npc.UnarmedRank >= maxSkill) {
			console.log("All Skills Maxed");
			return true;
		}	
	return false;
}

function getSkills() {
	for (let i = npc.INT + skillCount; i > 0; i--) {	
		if (areSkillsMaxed()) {
			console.log("All Skills Maxed");
			break;
		}
		let roll = rollDie(17);
		
		if (roll == 1 && npc.AthleticsRank < maxSkill) {
			npc.AthleticsRank++;
		} else if (roll == 2 && npc.BarterRank < maxSkill) {
			npc.BarterRank++;
		} else if (roll == 3 && npc.BigGunsRank < maxSkill) {
			npc.BigGunsRank++;
		} else if (roll == 4 && npc.EnergyWeaponsRank < maxSkill) {
			npc.EnergyWeaponsRank++;
		} else if (roll == 5 && npc.ExplosivesRank < maxSkill) {
			npc.ExplosivesRank++;
		} else if (roll == 6 && npc.LockpickRank < maxSkill) {
			npc.LockpickRank++; 
		} else if (roll == 7 && npc.MedicineRank < maxSkill) {
			npc.MedicineRank++; 
		} else if (roll == 8 && npc.MeleeWeaponsRank < maxSkill) {
			npc.MeleeWeaponsRank++;
		} else if (roll == 9 && npc.PilotRank < maxSkill) {
			npc.PilotRank++; 
		} else if (roll == 10 && npc.RepairRank < maxSkill) {
			npc.RepairRank++; 
		} else if (roll == 11 && npc.ScienceRank < maxSkill) {
			npc.ScienceRank++; 
		} else if (roll == 12 && npc.SmallGunsRank < maxSkill) {
			npc.SmallGunsRank++;
		} else if (roll == 13 && npc.SneakRank < maxSkill) {
			npc.SneakRank++; 
		} else if (roll == 14 && npc.SpeechRank < maxSkill) {
			npc.SpeechRank++; 
		} else if (roll == 15 && npc.SurvivalRank < maxSkill) {
			npc.SurvivalRank++; 
		} else if (roll == 16 && npc.ThrowingRank < maxSkill) {
			npc.ThrowingRank++; 
		} else if (roll == 17 && npc.UnarmedRank < maxSkill) {
			npc.UnarmedRank++;
		} else { i++; }
	}
}

function setNewTag() {
	for (let i = 1; i > 0; i--) {	
		if (areSkillsMaxed()) {
			console.log("All Skills Maxed");
			break;
		}
		let roll = rollDie(17);
		
		if (roll == 1 && !npc.AthleticsTagged && npc.AthleticsRank < maxSkill) { 
			npc.AthleticsTagged = true;
			npc.AthleticsRank += 2; 
		} else if (roll == 2 && !npc.BarterTagged && npc.BarterRank < maxSkill) { 
			npc.BarterTagged = true;
			npc.BarterRank += 2; 
		} else if (roll == 3 && !npc.BigGunsTagged && npc.BigGunsRank < maxSkill) { 
			npc.BigGunsTagged = true;
			npc.BigGunsRank += 2; 
		} else if (roll == 4 && !npc.EnergyWeaponsTagged && npc.EnergyWeaponsRank < maxSkill) { 
			npc.EnergyWeaponsTagged = true;
			npc.EnergyWeaponsRank += 2; 
		} else if (roll == 5 && !npc.ExplosivesTagged && npc.ExplosivesRank < maxSkill) { 
			npc.ExplosivesTagged = true;
			npc.ExplosivesRank += 2; 
		} else if (roll == 6 && !npc.LockpickTagged && npc.LockpickRank < maxSkill) { 
			npc.LockpickTagged = true;
			npc.LockpickRank += 2; 
		} else if (roll == 7 && !npc.MedicineTagged && npc.MedicineRank < maxSkill) { 
			npc.MedicineTagged = true;
			npc.MedicineRank += 2; 
		} else if (roll == 8 && !npc.MeleeWeaponsTagged && npc.MeleeWeaponsRank < maxSkill) { 
			npc.MeleeWeaponsTagged = true;
			npc.MeleeWeaponsRank += 2; 
		} else if (roll == 9 && !npc.PilotTagged && npc.PilotRank < maxSkill) { 
			npc.PilotTagged = true;
			npc.PilotRank += 2; 
		} else if (roll == 10 && !npc.RepairTagged && npc.RepairRank < maxSkill) { 
			npc.RepairTagged = true;
			npc.RepairRank += 2; 
		} else if (roll == 11 && !npc.ScienceTagged && npc.ScienceRank < maxSkill) { 
			npc.ScienceTagged = true;
			npc.ScienceRank += 2; 
		} else if (roll == 12 && !npc.SmallGunsTagged && npc.SmallGunsRank < maxSkill) { 
			npc.SmallGunsTagged = true;
			npc.SmallGunsRank += 2; 
		} else if (roll == 13 && !npc.SneakTagged && npc.SneakRank < maxSkill) { 
			npc.SneakTagged = true;
			npc.SneakRank += 2; 
		} else if (roll == 14 && !npc.SpeechTagged && npc.SpeechRank < maxSkill) { 
			npc.SpeechTagged = true;
			npc.SpeechRank += 2; 
		} else if (roll == 15 && !npc.SurvivalTagged && npc.SurvivalRank < maxSkill) { 
			npc.SurvivalTagged = true;
			npc.SurvivalRank += 2; 
		} else if (roll == 16 && !npc.ThrowingTagged && npc.ThrowingRank < maxSkill) { 
			npc.ThrowingTagged = true;
			npc.ThrowingRank += 2; 
		} else if (roll == 17 && !npc.UnarmedTagged && npc.UnarmedRank < maxSkill) { 
			npc.UnarmedTagged = true;
			npc.UnarmedRank += 2; 
		} else { i++; }
	}
}

function increaseSkill(amountP, forP) {
	for (let i = forP; i > 0; i--) {
		if (areSkillsMaxed()) {
			console.log("All Skills Maxed");
			break;
		}
		let roll = rollDie(17);
		
		if (roll == 1 && npc.AthleticsRank + amountP <= maxSkill) {
			npc.AthleticsRank += amountP;
		} else if (roll == 2 && npc.BarterRank + amountP <= maxSkill) {
			npc.BarterRank++;
		} else if (roll == 3 && npc.BigGunsRank + amountP <= maxSkill) {
			npc.BigGunsRank++;
		} else if (roll == 4 && npc.EnergyWeaponsRank + amountP <= maxSkill) {
			npc.EnergyWeaponsRank++;
		} else if (roll == 5 && npc.ExplosivesRank + amountP <= maxSkill) {
			npc.ExplosivesRank++;
		} else if (roll == 6 && npc.LockpickRank + amountP <= maxSkill) {
			npc.LockpickRank++; 
		} else if (roll == 7 && npc.MedicineRank + amountP <= maxSkill) {
			npc.MedicineRank++; 
		} else if (roll == 8 && npc.MeleeWeaponsRank + amountP <= maxSkill) {
			npc.MeleeWeaponsRank++;
		} else if (roll == 9 && npc.PilotRank + amountP <= maxSkill) {
			npc.PilotRank++; 
		} else if (roll == 10 && npc.RepairRank + amountP <= maxSkill) {
			npc.RepairRank++; 
		} else if (roll == 11 && npc.ScienceRank + amountP <= maxSkill) {
			npc.ScienceRank++; 
		} else if (roll == 12 && npc.SmallGunsRank + amountP <= maxSkill) {
			npc.SmallGunsRank++;
		} else if (roll == 13 && npc.SneakRank + amountP <= maxSkill) {
			npc.SneakRank++; 
		} else if (roll == 14 && npc.SpeechRank + amountP <= maxSkill) {
			npc.SpeechRank++; 
		} else if (roll == 15 && npc.SurvivalRank + amountP <= maxSkill) {
			npc.SurvivalRank++; 
		} else if (roll == 16 && npc.ThrowingRank + amountP <= maxSkill) {
			npc.ThrowingRank++; 
		} else if (roll == 17 && npc.UnarmedRank + amountP <= maxSkill) {
			npc.UnarmedRank++;
		} else { i++; }
	}
}

function getPerks() {
	for (let i = 0; i < perkCount; i++) {
		if (npc.Level < npc.GoalLevel) { npc.Level += npc.GoalLevel; }
		let perkCount = availablePerks();
		if (perkCount < 1) { break; }
		let perk = "";
		while(!perk) {
			let roll = rollDie(perkList.length) - 1;
			if (perkList[roll] == actionBoy.Name) {
				perk = checkPerk(actionBoy);
			} else if (perkList[roll] == adamantiumSkeleton.Name) {
				perk = checkPerk(adamantiumSkeleton);
			} else if (perkList[roll] == adrenalinRush.Name) {
				perk = checkPerk(adrenalinRush);
			} else if (perkList[roll] == animalFriend.Name) {
				perk = checkPerk(animalFriend);
			} else if (perkList[roll] == aquaBoy.Name) {
				perk = checkPerk(aquaBoy);
			} else if (perkList[roll] == armorer.Name) {
				perk = checkPerk(armorer);
			} else if (perkList[roll] == awareness.Name) {
				perk = checkPerk(awareness);
			} else if (perkList[roll] == barbarian.Name) {
				perk = checkPerk(barbarian);
				if(perk) {
					npc.PhysicalDR += Math.ceil((npc.STR - 6) / 2);
				}
			} else if (perkList[roll] == basher.Name) {
				perk = checkPerk(basher);
			} else if (perkList[roll] == betterCriticals.Name) {
				perk = checkPerk(betterCriticals);
			} else if (perkList[roll] == bigLeagues.Name) {
				perk = checkPerk(bigLeagues);
			} else if (perkList[roll] == blackWidow.Name) {
				perk = checkPerk(blackWidow);
			} else if (perkList[roll] == blacksmith.Name) {
				perk = checkPerk(blacksmith);
			} else if (perkList[roll] == blitz.Name) {
				perk = checkPerk(blitz);
			} else if (perkList[roll] == bloddyMess.Name) {
				perk = checkPerk(bloddyMess);
			} else if (perkList[roll] == canDo.Name) {
				perk = checkPerk(canDo);
			} else if (perkList[roll] == capCollector.Name) {
				perk = checkPerk(capCollector);
			} else if (perkList[roll] == cautiousNature.Name) {
				perk = checkPerk(cautiousNature);
			} else if (perkList[roll] == centerMass.Name) {
				perk = checkPerk(centerMass);
			} else if (perkList[roll] == chemResistant.Name) {
				perk = checkPerk(chemResistant);
			} else if (perkList[roll] == chemist.Name) {
				perk = checkPerk(chemist);
			} else if (perkList[roll] == commando.Name) {
				perk = checkPerk(commando);
			} else if (perkList[roll] == comprehension.Name) {
				perk = checkPerk(comprehension);
			} else if (perkList[roll] == concentratedFire.Name) {
				perk = checkPerk(concentratedFire);
			} else if (perkList[roll] == daringNature.Name) {
				perk = checkPerk(daringNature);
			} else if (perkList[roll] == demolitionExpert.Name) {
				perk = checkPerk(demolitionExpert);
			} else if (perkList[roll] == dodger.Name) {
				perk = checkPerk(dodger);
			} else if (perkList[roll] == dogmeat.Name) {
				perk = checkPerk(dogmeat);
			} else if (perkList[roll] == entomologist.Name) {
				perk = checkPerk(entomologist);
			} else if (perkList[roll] == fastMetabolism.Name) {
				perk = checkPerk(fastMetabolism);
			} else if (perkList[roll] == fasterHealing.Name) {
				perk = checkPerk(fasterHealing);
			} else if (perkList[roll] == finesse.Name) {
				perk = checkPerk(finesse);
			} else if (perkList[roll] == fortuneFinder.Name) {
				perk = checkPerk(fortuneFinder);
			} else if (perkList[roll] == ghost.Name) {
				perk = checkPerk(ghost);
			} else if (perkList[roll] == grimReapersSprint.Name) {
				perk = checkPerk(gunFu);
			} else if (perkList[roll] == gunFu.Name) {
				perk = checkPerk(gunFu);
			} else if (perkList[roll] == gunNut.Name) {
				perk = checkPerk(gunNut);
			} else if (perkList[roll] == gunslinger.Name) {
				perk = checkPerk(gunslinger);
			} else if (perkList[roll] == hacker.Name) {
				perk = checkPerk(hacker);
			} else if (perkList[roll] == healer.Name) {
				perk = checkPerk(healer);
			} else if (perkList[roll] == heaveHo.Name) {
				perk = checkPerk(heaveHo);
			} else if (perkList[roll] == hunter.Name) {
				perk = checkPerk(hunter);
			} else if (perkList[roll] == infiltrator.Name) {
				perk = checkPerk(infiltrator);
			} else if (perkList[roll] == inspirational.Name) {
				perk = checkPerk(inspirational);
			} else if (perkList[roll] == intenseTraining.Name) {
				perk = checkPerk(intenseTraining);
				if (perk) {
					for (let i = 1; i > 0; i--) {
						let roll = rollDie(7);
							 if (roll == 1 && npc.STR < maxSTR && npc.STR > 4) { npc.STR++; }
						else if (roll == 2 && npc.PER < maxSTR && npc.PER > 4) { npc.PER++; }
						else if (roll == 3 && npc.END < maxSTR && npc.END > 4) { npc.END++; }
						else if (roll == 4 && npc.CHA < maxSTR && npc.CHA > 4) { npc.CHA++; }
						else if (roll == 5 && npc.INT < maxSTR && npc.INT > 4) { npc.INT++; }
						else if (roll == 6 && npc.AGI < maxSTR && npc.AGI > 4) { npc.AGI++; }
						else if (roll == 7 && npc.LCK < maxSTR && npc.LCK > 4) { npc.LCK++; }
						else { i++; }
					}
				}
			} else if (perkList[roll] == ironFist.Name) {
				perk = checkPerk(ironFist);
			} else if (perkList[roll] == junktownJerkyVendor.Name) {
				perk = checkPerk(junktownJerkyVendor);
			} else if (perkList[roll] == juryRigging.Name) {
				perk = checkPerk(juryRigging);
			} else if (perkList[roll] == laserCommander.Name) {
				perk = checkPerk(laserCommander);
			} else if (perkList[roll] == leadBelly.Name) {
				perk = checkPerk(leadBelly);
			} else if (perkList[roll] == lifeGiver.Name) {
				perk = checkPerk(lifeGiver);
				if (perk) {
					npc.HP += npc.END;
				}
			} else if (perkList[roll] == lightStep.Name) {
				perk = checkPerk(lightStep);
			} else if (perkList[roll] == masterThief.Name) {
				perk = checkPerk(masterThief);
			} else if (perkList[roll] == medic.Name) {
				perk = checkPerk(medic);
			} else if (perkList[roll] == meltdown.Name) {
				perk = checkPerk(meltdown);
			} else if (perkList[roll] == misterSandman.Name) {
				perk = checkPerk(misterSandman);
			} else if (perkList[roll] == movingTarget.Name) {
				perk = checkPerk(movingTarget);
			} else if (perkList[roll] == mysteriousStranger.Name) {
				perk = checkPerk(mysteriousStranger);
			} else if (perkList[roll] == nerdRage.Name) {
				perk = checkPerk(nerdRage);
			} else if (perkList[roll] == nightPerson.Name) {
				perk = checkPerk(nightPerson);
			} else if (perkList[roll] == ninja.Name) {
				perk = checkPerk(ninja);
			} else if (perkList[roll] == nuclearPhysicist.Name) {
				perk = checkPerk(nuclearPhysicist);
			} else if (perkList[roll] == painTrain.Name) {
				perk = checkPerk(painTrain);
			} else if (perkList[roll] == paralyzingPalm.Name) {
				perk = checkPerk(paralyzingPalm);
			} else if (perkList[roll] == partyBoy.Name) {
				perk = checkPerk(partyBoy);
			} else if (perkList[roll] == pathfinder.Name) {
				perk = checkPerk(pathfinder);
			} else if (perkList[roll] == pharmaFarma.Name) {
				perk = checkPerk(pharmaFarma);
			} else if (perkList[roll] == pickPocket.Name) {
				perk = checkPerk(pickPocket);
			} else if (perkList[roll] == piercingStrike.Name) {
				perk = checkPerk(piercingStrike);
			} else if (perkList[roll] == pyromaniac.Name) {
				perk = checkPerk(pyromaniac);
			} else if (perkList[roll] == quickDraw.Name) {
				perk = checkPerk(quickDraw);
			} else if (perkList[roll] == quickHands.Name) {
				perk = checkPerk(quickHands);
			} else if (perkList[roll] == radResistance.Name) {
				perk = checkPerk(radResistance);
				if (perk) {
					npc.RadiationDR += 1;
				}
			} else if (perkList[roll] == refractor.Name) {
				perk = checkPerk(refractor);
				if (perk) {
					npc.EnergyDR += 1;
				}
			} else if (perkList[roll] == ricochet.Name) {
				perk = checkPerk(ricochet);
			} else if (perkList[roll] == rifleman.Name) {
				perk = checkPerk(rifleman);
			} else if (perkList[roll] == roboticsExpert.Name) {
				perk = checkPerk(roboticsExpert);
			} else if (perkList[roll] == science.Name) {
				perk = checkPerk(science);
			} else if (perkList[roll] == scoundrel.Name) {
				perk = checkPerk(scoundrel);
			} else if (perkList[roll] == scrapper.Name) {
				perk = checkPerk(scrapper);
			} else if (perkList[roll] == scrounger.Name) {
				perk = checkPerk(scrounger);
			} else if (perkList[roll] == shotgunSurgeon.Name) {
				perk = checkPerk(shotgunSurgeon);
			} else if (perkList[roll] == skilled.Name) {
				perk = checkPerk(skilled);
				if (perk) {
					increaseSkill(1, 2);
					increaseSkill(2, 1);
				}
			} else if (perkList[roll] == sizeMatters.Name) {
				perk = checkPerk(sizeMatters);
			} else if (perkList[roll] == slayer.Name) {
				perk = checkPerk(slayer);
			} else if (perkList[roll] == smootherTalker.Name) {
				perk = checkPerk(smootherTalker);
			} else if (perkList[roll] == snakeater.Name) {
				perk = checkPerk(snakeater);
				if (perk) {
					npc.PoisonDR += 2;
				}
			} else if (perkList[roll] == sniper.Name) {
				perk = checkPerk(sniper);
			} else if (perkList[roll] == solarPowered.Name) {
				perk = checkPerk(solarPowered);
			} else if (perkList[roll] == steadyAim.Name) {
				perk = checkPerk(steadyAim);
			} else if (perkList[roll] == strongBack.Name) {
				perk = checkPerk(strongBack);
				if (perk) {
					npc.CarryWeight += 25;
				}
			} else if (perkList[roll] == tag.Name) {
				perk = checkPerk(tag);
				if (perk) {
					setNewTag();
				}
			} else if (perkList[roll] == terrifyingPresence.Name) {
				perk = checkPerk(terrifyingPresence);
			} else if (perkList[roll] == toughness.Name) {
				perk = checkPerk(toughness);
				if (perk) {
					npc.PhysicalDR += 1;
				}
			}
		}
		npc.Perks.push(perk);
	}
}

function availablePerks() {
	var count = 0;
	if (checkPerk(actionBoy)) { count++; }
	if (checkPerk(adamantiumSkeleton)) { count++; }
	if (checkPerk(adrenalinRush)) { count++; }
	if (checkPerk(animalFriend)) { count++; }
	if (checkPerk(aquaBoy)) { count++; }
	if (checkPerk(armorer)) { count++; }
	if (checkPerk(awareness)) { count++; }
	if (checkPerk(barbarian)) { count++; }
	if (checkPerk(basher)) { count++; }
	if (checkPerk(betterCriticals)) { count++; }
	if (checkPerk(bigLeagues)) { count++; }
	if (checkPerk(blackWidow)) { count++; }
	if (checkPerk(blacksmith)) { count++; }
	if (checkPerk(blitz)) { count++; }
	if (checkPerk(bloddyMess)) { count++; }
	if (checkPerk(canDo)) { count++; }
	if (checkPerk(capCollector)) { count++; }
	if (checkPerk(cautiousNature)) { count++; }
	if (checkPerk(centerMass)) { count++; }
	if (checkPerk(chemResistant)) { count++; }
	if (checkPerk(chemist)) { count++; }
	if (checkPerk(commando)) { count++; }
	if (checkPerk(comprehension)) { count++; }
	if (checkPerk(concentratedFire)) { count++; }
	if (checkPerk(daringNature)) { count++; }
	if (checkPerk(demolitionExpert)) { count++; }
	if (checkPerk(dodger)) { count++; }
	if (checkPerk(dogmeat)) { count++; }
	if (checkPerk(entomologist)) { count++; }
	if (checkPerk(fastMetabolism)) { count++; }
	if (checkPerk(fasterHealing)) { count++; }
	if (checkPerk(finesse)) { count++; }
	if (checkPerk(fortuneFinder)) { count++; }
	if (checkPerk(ghost)) { count++; }
	if (checkPerk(gunFu)) { count++; }
	if (checkPerk(gunFu)) { count++; }
	if (checkPerk(gunNut)) { count++; }
	if (checkPerk(gunslinger)) { count++; }
	if (checkPerk(hacker)) { count++; }
	if (checkPerk(healer)) { count++; }
	if (checkPerk(heaveHo)) { count++; }
	if (checkPerk(hunter)) { count++; }
	if (checkPerk(infiltrator)) { count++; }
	if (checkPerk(inspirational)) { count++; }
	if (checkPerk(intenseTraining)) { count++; }
	if (checkPerk(ironFist)) { count++; }
	if (checkPerk(junktownJerkyVendor)) { count++; }
	if (checkPerk(juryRigging)) { count++; }
	if (checkPerk(laserCommander)) { count++; }
	if (checkPerk(leadBelly)) { count++; }
	if (checkPerk(lifeGiver)) { count++; }
	if (checkPerk(lightStep)) { count++; }
	if (checkPerk(masterThief)) { count++; }
	if (checkPerk(medic)) { count++; }
	if (checkPerk(meltdown)) { count++; }
	if (checkPerk(misterSandman)) { count++; }
	if (checkPerk(movingTarget)) { count++; }
	if (checkPerk(mysteriousStranger)) { count++; }
	if (checkPerk(nerdRage)) { count++; }
	if (checkPerk(nightPerson)) { count++; }
	if (checkPerk(ninja)) { count++; }
	if (checkPerk(nuclearPhysicist)) { count++; }
	if (checkPerk(painTrain)) { count++; }
	if (checkPerk(paralyzingPalm)) { count++; }
	if (checkPerk(partyBoy)) { count++; }
	if (checkPerk(pathfinder)) { count++; }
	if (checkPerk(pharmaFarma)) { count++; }
	if (checkPerk(pickPocket)) { count++; }
	if (checkPerk(piercingStrike)) { count++; }
	if (checkPerk(pyromaniac)) { count++; }
	if (checkPerk(quickDraw)) { count++; }
	if (checkPerk(quickHands)) { count++; }
	if (checkPerk(radResistance)) { count++; }
	if (checkPerk(refractor)) { count++; }
	if (checkPerk(ricochet)) { count++; }
	if (checkPerk(rifleman)) { count++; }
	if (checkPerk(roboticsExpert)) { count++; }
	if (checkPerk(science)) { count++; }
	if (checkPerk(scoundrel)) { count++; }
	if (checkPerk(scrapper)) { count++; }
	if (checkPerk(scrounger)) { count++; }
	if (checkPerk(shotgunSurgeon)) { count++; }
	if (checkPerk(skilled)) { count++; }
	if (checkPerk(sizeMatters)) { count++; }
	if (checkPerk(slayer)) { count++; }
	if (checkPerk(smootherTalker)) { count++; }
	if (checkPerk(snakeater)) { count++; }
	if (checkPerk(sniper)) { count++; }
	if (checkPerk(solarPowered)) { count++; }
	if (checkPerk(steadyAim)) { count++; }
	if (checkPerk(strongBack)) { count++; }
	if (checkPerk(tag)) { count++; }
	if (checkPerk(terrifyingPresence)) { count++; }
	if (checkPerk(toughness)) { count++; }
	return count;
}

function checkPerk(perk) {
	var count = 0;
	for(var i = 0; i < npc.Perks.length; ++i){
		if(npc.Perks[i] == perk.Name) {
			count++;
		}
	}
	
	if (count >= perk.Ranks) { return ""; }
	
	if (perk.Stat1 == "STR") {
		if (perk.Req1 > npc.STR) { return ""; }
	} else if (perk.Stat1 == "PER") {
		if (perk.Req1 > npc.PER) { return ""; }
	} else if (perk.Stat1 == "END") {
		if (perk.Req1 > npc.END) { return ""; }
	} else if (perk.Stat1 == "CHA") {
		if (perk.Req1 > npc.CHA) { return ""; }
	} else if (perk.Stat1 == "INT") {
		if (perk.Req1 > npc.INT) { return ""; }
	} else if (perk.Stat1 == "AGI") {
		if (perk.Req1 > npc.AGI) { return ""; }
	} else if (perk.Stat1 == "LCK") {
		if (perk.Req1 > npc.LCK) { return ""; }
	}
	
	if (perk.Stat2 == "STR") {
		if (perk.Req2 > npc.STR) { return ""; }
	} else if (perk.Stat2 == "PER") {
		if (perk.Req2 > npc.PER) { return ""; }
	} else if (perk.Stat2 == "END") {
		if (perk.Req2 > npc.END) { return ""; }
	} else if (perk.Stat2 == "CHA") {
		if (perk.Req2 > npc.CHA) { return ""; }
	} else if (perk.Stat2 == "INT") {
		if (perk.Req2 > npc.INT) { return ""; }
	} else if (perk.Stat2 == "AGI") {
		if (perk.Req2 > npc.AGI) { return ""; }
	} else if (perk.Stat2 == "LCK") {
		if (perk.Req2 > npc.LCK) { return ""; }
	}
	
	if (perk.MinLevel + (count * perk.Increment) > npc.Level) {
		return "";
	}
	
	if (npc.Origin.includes("Mister Handy") && !perk.CanBeRobot) {
		return "";
	}
	
	if (npc.Origin.includes("Ghoul") && !perk.CanBeMutant) {
		return "";
	}
	
	if (npc.Origin.includes("Super Mutant") && !perk.CanBeMutant) {
		return "";
	}
	
	return perk.Name;
}

let o = "&#9473";
let p = "&#9523";
let b = "&#9531";
let t = "&#9547";

function printNPC() {
	var poisonDRBuffer = npc.PoisonDR.length >= 2 ? "" : "&#9;";
	var radDRBuffer = npc.RadiationDR.length >= 2 ? "" : "&#9;";
	var hpBuffer = npc.HP.toString().length >= 2 ? "" : "&#9;";
	var nameBuffer = npc.Name.length >= 8 ? "" : "&#9;";
	var originSize = 8 - Math.floor((npc.Origin.length + 2) / 8);
	var originBuffer = originSize > 0 ? "&#9;".repeat(originSize) : " ";
	var printString = "";
	var athletics = "Athletics:  " + npc.AthleticsRank + "[" + (npc.AthleticsTagged ? "T]" : " ]");
	var barter = "Barter:   " + npc.BarterRank + "[" + (npc.BarterTagged ? "T]" : " ]");
	var bigGuns = "Big Guns: " + npc.BigGunsRank + "[" + (npc.BigGunsTagged ? "T]" : " ]");
	var energy = "Energy Weapons: " + npc.EnergyWeaponsRank + "[" + (npc.EnergyWeaponsTagged ? "T]" : " ]");
	var explosives = "Explosives: " + npc.ExplosivesRank + "[" + (npc.ExplosivesTagged ? "T]" : " ]");
	var lockpick = "Lockpick: " + npc.LockpickRank + "[" + (npc.LockpickTagged ? "T]" : " ]");
	var medicine = "Medicine: " + npc.MedicineRank + "[" + (npc.MedicineTagged ? "T]" : " ]");
	var melee = "Melee Weapons:  " + npc.MeleeWeaponsRank + "[" + (npc.MeleeWeaponsTagged ? "T]" : " ]");
	var pilot = "Pilot:      " + npc.PilotRank + "[" + (npc.PilotTagged ? "T]" : " ]");
	var repair = "Repair:   " + npc.RepairRank + "[" + (npc.RepairTagged ? "T]" : " ]");
	var science = "Science:  " + npc.ScienceRank + "[" + (npc.ScienceTagged ? "T]" : " ]");
	var smallGuns = "Small Guns:     " + npc.SmallGunsRank + "[" + (npc.SmallGunsTagged ? "T]" : " ]");
	var sneak = "Sneak:      " + npc.SneakRank + "[" + (npc.SneakTagged ? "T]" : " ]");
	var speech = "Speech:   " + npc.SpeechRank + "[" + (npc.SpeechTagged ? "T]" : " ]");
	var survival = "Survival: " + npc.SurvivalRank + "[" + (npc.SurvivalTagged ? "T]" : " ]");
	var throwing = "Throwing:       " + npc.ThrowingRank + "[" + (npc.ThrowingTagged ? "T]" : " ]");
	var unarmed = "Unarmed:    " + npc.UnarmedRank + "[" + (npc.UnarmedTagged ? "T]" : " ]");
	printString += "&#9487"+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+p+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+"&#9491\n";
	printString += "&#9475 Name: " + npc.Name + nameBuffer + "&#9;&#9;&#9475 Origin: " + npc.Origin + originBuffer + "&#9475\n";
	printString += "&#9507"+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+t+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+"&#9515\n";
	printString += "&#9475&#9;   -Stats- &#9;&#9;&#9475&#9;    -Damage Resistances-&#9;&#9;&#9;&#9;&#9&#9475\n";
	printString += "&#9475 HP: " + npc.HP + hpBuffer + "&#9;Init: " + npc.Initiative  + "&#9;&#9475  Physical DR: " + npc.PhysicalDR + "&#9;Radiation DR: " + npc.RadiationDR + radDRBuffer + "&#9&#9;&#9;&#9;&#9475\n";
	printString += "&#9475 Def: " + npc.Defense + "&#9;Carry: " + npc.CarryWeight + "&#9;&#9475  Energy DR: " + npc.EnergyDR + "&#9;&#9;Poison DR: " + npc.PoisonDR + poisonDRBuffer + "&#9;&#9;&#9&#9;&#9475\n";
	printString += "&#9507"+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+p+o+o+o+o+o+b+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+"&#9515\n";
	printString += "&#9475     -S.P.E.C.I.A.L-     &#9475&#9;&#9;&#9;&#9; -Skills-&#9;&#9;&#9;&#9&#9;&#9475\n";
	printString += "&#9475 STR: " + npc.STR + "&#9;INT: " + npc.INT + "&#9;  &#9475 " + athletics + "&#9;" + barter + "&#9;" + bigGuns + "&#9;" + energy +    "&#9;&#9475\n"
	printString += "&#9475 PER: " + npc.PER + "&#9;AGI: " + npc.AGI + "&#9;  &#9475 " + explosives + "&#9;" + lockpick + "&#9;" + medicine + "&#9;" + melee + "&#9;&#9475\n"
	printString += "&#9475 END: " + npc.END + "&#9;LCK: " + npc.LCK + "&#9;  &#9475 " + pilot + "&#9;" + repair + "&#9;" + science + "&#9;" + smallGuns +     "&#9;&#9475\n"
	printString += "&#9475 CHA: " + npc.CHA + "&#9;" +                "&#9;  &#9475 " + sneak + "&#9;" + speech + "&#9;" + survival + "&#9;" + throwing +     "&#9;&#9475\n"
	printString += "&#9475" + 								  "&#9;&#9;&#9;  &#9475 " + unarmed + 						 		  "&#9;&#9;&#9;&#9;&#9;&#9;&#9;&#9;&#9475\n"
	printString += "&#9507"+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+b+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+"&#9515\n";
	printString += "&#9475 Perks:" + "&#9;".repeat(12) + "&#9475\n&#9475 - "
	var perkCount = 0;
	var printCount = "";
	var actualLength = 2;
	npc.Perks.sort();
	for (let i = 0; i < npc.Perks.length; i++) {
		printCount = "";
		actualLength += npc.Perks[i].length + 2;
		if (npc.Perks[i] == npc.Perks[i+1]) {
			var sameCount = 2;
			for (let n = i+2; n < npc.Perks.length; n++) {
				if (npc.Perks[n] == npc.Perks[i]) { sameCount++; }
				else { break; }
			}
			printCount = " (" + sameCount + ")";
			i += sameCount - 1;
			actualLength += 4;
		}
		printString += npc.Perks[i] + printCount;
		if (i + 1 == npc.Perks.length) {
			let tabsNeeded2 = 13 - (Math.floor(actualLength / 8) + (perkCount * 4));
			printString += "&#9;".repeat(tabsNeeded2);
			break;
		}
		if (perkCount < 2) {
			let tabsNeeded = 4 - Math.floor(actualLength / 8);
			printString += "&#9;".repeat(tabsNeeded);
			if (i + 1 != npc.Perks.length) {
				printString += "- "
			}
		}
		perkCount += 1
		if (perkCount > 2 && i + 1 != npc.Perks.length) { 
			let lineTabs = 5 - Math.floor(actualLength / 8);
			printString += "&#9;".repeat(lineTabs);
			printString += "&#9475\n&#9475 - ";
			actualLength = 2;
			perkCount = 0;
		} else { actualLength = 0; }
	}
	printString += "&#9475\n&#9495"+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+o+"&#9499\n";
	
	return printString;
}

class Perk {}

var perkList = [];

function newPerk(nameP, ranksP = 1, stat1P = "NONE", req1P = 0, stat2P = "NONE", req2P = 0, minLevelP = 1, levelIncrementP = 0, canBeRobotP = true, canBeMutantP = true) {
	let perk = new Perk();
	perk.Name = nameP;
	perk.Ranks = ranksP;
	perk.Stat1 = stat1P;
	perk.Req1 = req1P;
	perk.Stat2 = stat2P;
	perk.Req2 = req2P;
	perk.MinLevel = minLevelP;
	perk.Increment = levelIncrementP;
	perk.CanBeRobot = canBeRobotP;
	perk.CanBeMutant = canBeMutantP;
	perkList.push(perk.Name);
	return perk;
}

let actionBoy = newPerk("Action Boy/Girl", 1);
let adamantiumSkeleton = newPerk("Adamantium Skeleton", 3, "END", 7, "NONE", 0, 1, 3);
let adrenalinRush = newPerk("Adrenalin Rush", 1, "STR", 7);
let animalFriend = newPerk("Animal Friend", 2, "CHA", 6, "NONE", 0, 1, 5);
let aquaBoy = newPerk("AquaBoy/AquaGirl", 2, "END", 5, "NONE", 0, 1, 3);
let armorer = newPerk("Armorer", 4, "STR", 5, "INT", 6);
let awareness = newPerk("Awareness", 1, "PER", 7);
let barbarian = newPerk("Barbarian", 1, "STR", 7, "NONE", 0, 4, 0, false);
let basher = newPerk("Basher", 1, "STR", 6); 
let betterCriticals = newPerk("Better Criticals", 1, "LCK", 9); 
let bigLeagues = newPerk("Big Leagues", 1, "STR", 8); 
let blackWidow = newPerk("Black Widow/Lady Killer", 1, "CHA", 6);
let blacksmith = newPerk("Blacksmith", 3, "STR", 6, "NONE", 0, 2, 4); 
let blitz = newPerk("Blitz", 2, "AGI", 9, "NONE", 0, 1, 3); 
let bloddyMess = newPerk("Bloody Mess", 1, "LCK", 6); 
let canDo = newPerk("Can Do!", 1, "LCK", 5);
let capCollector = newPerk("Cap Collector", 1, "CHA", 5); 
let cautiousNature = newPerk("Cautious Nature", 1, "PER", 7); 
let centerMass = newPerk("Center Mass", 1, "AGI", 7); 
let chemResistant = newPerk("Chem Resistant", 2, "END", 7, "NONE", 0, 1, 4); 
let chemist = newPerk("Chemist", 1, "INT", 7); 
let commando = newPerk("Commando", 2, "AGI", 8, "NONE", 0, 2, 3); 
let comprehension = newPerk("Comprehension", 1, "INT", 6); 
let concentratedFire = newPerk("Concentrated Fire", 1, "PER", 8, "AGI", 6); 
let daringNature = newPerk("Daring Nature", 1, "LCK", 7); 
let demolitionExpert = newPerk("Demolition Expert", 1, "PER", 6, "LCK", 6); 
let dodger = newPerk("Dodger", 2, "AGI", 6, "", 0, 4, 6); 
let dogmeat = newPerk("Dogmeat", 1, "CHA", 5); 
let entomologist = newPerk("Entomologist", 1, "INT", 7); 
let fastMetabolism = newPerk("Fast Metabolism", 3, "END", 6, "NONE", 0, 1, 3, false); 
let fasterHealing = newPerk("Faster Healing", 1, "END", 6, "NONE", 0, 1, 0, false); 
let finesse = newPerk("Finesse", 1, "AGI", 9); 
let fortuneFinder = newPerk("Fortune Finder", 3, "LCK", 5, "NONE", 0, 2, 4); 
let ghost = newPerk("Ghost", 1, "PER", 5, "AGI", 6); 
let grimReapersSprint = newPerk("Grim Reaper's Sprint", 1, "LCK", 8);
let gunFu = newPerk("Gun Fu", 3, "AGI", 10, "NONE", 0, 1, 5); 
let gunNut = newPerk("Gun Nut", 4, "INT", 6, "NONE", 0, 2, 4); 
let gunslinger = newPerk("Gunslinger", 2, "AGI", 7, "NONE", 0, 2, 4); 
let hacker = newPerk("Hacker", 1, "INT", 8); 
let healer = newPerk("Healer", 3, "INT", 7, "NONE", 0, 1, 5); 
let heaveHo = newPerk("Heave Ho!", 1, "STR", 8);
let hunter = newPerk("Hunter", 1, "END", 6); 
let infiltrator = newPerk("Infiltrator", 1, "PER", 8); 
let inspirational = newPerk("Inspirational", 1, "CHA", 8); 
let intenseTraining = newPerk("Intense Training", 10, "NONE", 0, "NONE", 0, 2, 2);
let ironFist = newPerk("Iron Fist", 2, "STR", 6, "NONE", 0, 1, 5); 
let junktownJerkyVendor = newPerk("Junktown Jerky Vendor", 1, "CHA", 8);
let juryRigging = newPerk("Jury Rigging", 1); 
let laserCommander = newPerk("Laser Commander", 2, "PER", 8, "NONE", 0, 2, 4); 
let leadBelly = newPerk("Lead Belly", 2, "NED", 6, "NONE", 0, 1, 4); 
let lifeGiver = newPerk("Life Giver", 5, "NONE", 0, "NONE", 0, 5, 5);
let lightStep = newPerk("Light Step", 1); 
let masterThief = newPerk("Master Thief", 1, "PER", 8, "AGI", 9); 
let medic = newPerk("Medic", 1, "INT", 8); 
let meltdown = newPerk("Meltdown", 1, "PER", 10); 
let misterSandman = newPerk("Mister Sandman", 1, "AGI", 9); 
let movingTarget = newPerk("Moving Target", 1, "AGI", 6); 
let mysteriousStranger = newPerk("Mysterious Stranger", 1, "LCK", 7); 
let nerdRage = newPerk("Nerd Rage", 3, "INT", 8, "", 0, 2, 5); 
let nightPerson = newPerk("Night Person", 1, "PER", 7); 
let ninja = newPerk("Ninja", 1, "AGI", 8); 
let nuclearPhysicist = newPerk("Nuclear Physicist", 1, "INT", 9); 
let painTrain = newPerk("Pain Train", 2, "STR", 9, "END", 7, 1, 5);
let paralyzingPalm = newPerk("Paralyzing Palm", 1, "STR", 8); 
let partyBoy = newPerk("Party Boy/Girl", 1, "END", 6, "CHA", 7);
let pathfinder = newPerk("Pathfinder", 1, "PER", 6, "END", 6); 
let pharmaFarma = newPerk("Pharma Farma", 1, "LCK", 6); 
let pickPocket = newPerk("Pickpocket", 3, "PER", 8, "AGI", 8, 1, 3);
let piercingStrike = newPerk("Piercing Strike", 1, "STR", 7); 
let pyromaniac = newPerk("Pyromaniac", 3, "END", 6, "NONE", 0, 2, 4); 
let quickDraw = newPerk("Quick Draw", 1, "AGI", 6); 
let quickHands = newPerk("Quick Hands", 1, "AGI", 8); 
let radResistance = newPerk("Rad Resistance", 2, "END", 8, "NONE", 0, 1, 4, false, false); 
let refractor = newPerk("Refractor", 2, "PER", 6, "LCK", 7, 1, 4);
let ricochet = newPerk("Ricochet", 1, "LCK", 10, "NONE", 0, 5); 
let rifleman = newPerk("Rifleman", 2, "AGI", 7, "NONE", 0, 2, 4); 
let roboticsExpert = newPerk("Robotics Expert", 3, "INT", 8, "NONE", 0, 2, 4); 
let science = newPerk("Science!", 3, "INT", 6, "NONE", 0, 2, 4);
let scoundrel = newPerk("Scoundrel", 1, "CHA", 7); 
let scrapper = newPerk("Scrapper", 2, "NONE", 0, "NONE", 0, 3, 5);
let scrounger = newPerk("Scrounger", 3, "LCK", 6, "NONE", 0, 1, 5); 
let shotgunSurgeon = newPerk("Shotgun Surgeon", 1, "STR", 5, "AGI", 7); 
let skilled = newPerk("Skilled", 10, "NONE", 0, "NONE", 0, 3, 3);
let sizeMatters = newPerk("Size Matters", 3, "END", 7, "AGI", 6); 
let slayer = newPerk("Slayer", 1, "STR", 8); 
let smootherTalker = newPerk("Smoother Talker", 1, "CHA", 6); 
let snakeater = newPerk("Snakeater", 1, "END", 7, "NONE", 0, 1, 0, false, false); 
let sniper = newPerk("Sniper", 1, "PER", 8, "AGI", 6); 
let solarPowered = newPerk("Solar Powered", 1, "END", 7); 
let steadyAim = newPerk("Steady Aim", 1, "STR", 8, "AGI", 7); 
let strongBack = newPerk("Strong Back", 3, "STR", 5, "NONE", 0, 1, 2); 
let tag = newPerk("TAG!", 1, "NONE", 0, "NONE", 0, 5, 0);
let terrifyingPresence = newPerk("Terrifying Presence", 2, "STR", 6, "CHA", 8, 3, 5);
let toughness = newPerk("Toughness", 2, "END", 6, "LCK", 6, 1, 4);
















