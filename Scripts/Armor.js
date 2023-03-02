class Armor { }
	
function getArmorMods(armorP) {
	if(armorP.modMaterial) { armorP.material = getModFromList(armorP.modMaterial); }
	if(armorP.modMisc) { armorP.misc = getModFromList(armorP.modMisc); }
	
	return armorP;
}

function printArmor(armorP) {
	var printOut = "1 " + armorP.name;

	if (armorP.material) {
		printOut = checkForArmorEnd(printOut);
		printOut += armorP.material + ")";
	}
	if (armorP.misc) {
		printOut = checkForArmorEnd(printOut);
		printOut += armorP.misc + ")";
	}
	
	return printOut;
}

function checkForArmorEnd(stringP) {
	var lastChar = stringP[stringP.length -1];
	if (lastChar == ")") { stringP = stringP.replace(")", ", "); }
	else { stringP += " ("; }
	return stringP;
}

var casualClothing = new Armor();
casualClothing.name = "Casual Clothing";
casualClothing.modMaterial = ["Ballistic Weave", "Ballistic Weave Mk II", "Ballistic Weave Mk III", "Ballistic Weave Mk IV", "Ballistic Weave Mk V"];

var casualHat = new Armor();
casualHat.name = "Casual Hat";
casualHat.modMaterial = ["Ballistic Weave", "Ballistic Weave Mk II", "Ballistic Weave Mk III", "Ballistic Weave Mk IV", "Ballistic Weave Mk V"];

var formalClothing = new Armor();
formalClothing.name = "Formal Clothing";
formalClothing.modMaterial = ["Ballistic Weave", "Ballistic Weave Mk II", "Ballistic Weave Mk III", "Ballistic Weave Mk IV", "Ballistic Weave Mk V"];

var heavyCoat = new Armor();
heavyCoat.name = "Heavy Coat";
heavyCoat.modMaterial = ["Ballistic Weave", "Ballistic Weave Mk II", "Ballistic Weave Mk III", "Ballistic Weave Mk IV", "Ballistic Weave Mk V"];

var labCoat = new Armor();
labCoat.name = "Lab Coat";
labCoat.modMaterial = ["Ballistic Weave", "Ballistic Weave Mk II", "Ballistic Weave Mk III", "Ballistic Weave Mk IV", "Ballistic Weave Mk V"];

var militaryFatigues = new Armor();
militaryFatigues.name = "Military Fatigues";
militaryFatigues.modMaterial = ["Ballistic Weave", "Ballistic Weave Mk II", "Ballistic Weave Mk III", "Ballistic Weave Mk IV", "Ballistic Weave Mk V"];

var vaultJumpsuit = new Armor();
vaultJumpsuit.name = "Vault Jumpsuit";
vaultJumpsuit.modMaterial = ["Insulated Lining", "Treated Lining", "Resistant Lining", "Protective Lining", "Shielded Lining"];

var raiderArmorChest = new Armor();
raiderArmorChest.name = "Raider Chest Piece";
raiderArmorChest.modMaterial = ["Welded", "Tempered", "Hardened", "Buttressed"];
raiderArmorChest.modMisc = ["Padded", "Asbestos Lining", "Dense", "BioCommMesh", "Pneumatic"];

var raiderArmorArm = new Armor();
raiderArmorArm.name = "Raider Arm";
raiderArmorArm.modMaterial = ["Welded", "Tempered", "Hardened", "Buttressed"];
raiderArmorArm.modMisc = ["Brawling", "Braced", "Stabilized", "Aerodynamic", "Weighted"];

var raiderArmorLeg = new Armor();
raiderArmorLeg.name = "Raider Leg";
raiderArmorLeg.modMaterial = ["Welded", "Tempered", "Hardened", "Buttressed"];
raiderArmorLeg.modMisc = ["Cushioned", "Muffled"];

var raiderArmorChestSturdy = new Armor();
raiderArmorChestSturdy.name = "Sturdy Raider Chest Piece";
raiderArmorChestSturdy.modMaterial = ["Welded", "Tempered", "Hardened", "Buttressed"];
raiderArmorChestSturdy.modMisc = ["Padded", "Asbestos Lining", "Dense", "BioCommMesh", "Pneumatic"];

var raiderArmorArmSturdy = new Armor();
raiderArmorArmSturdy.name = "Sturdy Raider Arm";
raiderArmorArmSturdy.modMaterial = ["Welded", "Tempered", "Hardened", "Buttressed"];
raiderArmorArmSturdy.modMisc = ["Brawling", "Braced", "Stabilized", "Aerodynamic", "Weighted"];

var raiderArmorLegSturdy = new Armor();
raiderArmorLegSturdy.name = "Sturdy Raider Leg";
raiderArmorLegSturdy.modMaterial = ["Welded", "Tempered", "Hardened", "Buttressed"];
raiderArmorLegSturdy.modMisc = ["Cushioned", "Muffled"];

var raiderArmorChestHeavy = new Armor();
raiderArmorChestHeavy.name = "Heavy Raider Chest Piece";
raiderArmorChestHeavy.modMaterial = ["Welded", "Tempered", "Hardened", "Buttressed"];
raiderArmorChestHeavy.modMisc = ["Padded", "Asbestos Lining", "Dense", "BioCommMesh", "Pneumatic"];

var raiderArmorArmHeavy = new Armor();
raiderArmorArmHeavy.name = "Heavy Raider Arm";
raiderArmorArmHeavy.modMaterial = ["Welded", "Tempered", "Hardened", "Buttressed"];
raiderArmorArmHeavy.modMisc = ["Brawling", "Braced", "Stabilized", "Aerodynamic", "Weighted"];

var raiderArmorLegHeavy = new Armor();
raiderArmorLegHeavy.name = "Heavy Raider Leg";
raiderArmorLegHeavy.modMaterial = ["Welded", "Tempered", "Hardened", "Buttressed"];
raiderArmorLegHeavy.modMisc = ["Cushioned", "Muffled"];

var leatherArmorChest = new Armor();
leatherArmorChest.name = "Leather Chest Piece";
leatherArmorChest.modMaterial = ["Boiled Leather", "Girded Leather", "Treated Leather", "Shadowed Leather", "Studded Leather"];
leatherArmorChest.modMisc = ["Padded", "Asbestos Lining", "Dense", "BioCommMesh", "Pneumatic"];

var leatherArmorArm = new Armor();
leatherArmorArm.name = "Leather Arm";
leatherArmorArm.modMaterial = ["Boiled Leather", "Girded Leather", "Treated Leather", "Shadowed Leather", "Studded Leather"];
leatherArmorArm.modMisc = ["Brawling", "Braced", "Stabilized", "Aerodynamic", "Weighted"];

var leatherArmorLeg = new Armor();
leatherArmorLeg.name = "Leather Leg";
leatherArmorLeg.modMaterial = ["Boiled Leather", "Girded Leather", "Treated Leather", "Shadowed Leather", "Studded Leather"];
leatherArmorLeg.modMisc = ["Cushioned", "Muffled"];

var leatherArmorChestSturdy = new Armor();
leatherArmorChestSturdy.name = "Sturdy Leather Chest Piece";
leatherArmorChestSturdy.modMaterial = ["Boiled Leather", "Girded Leather", "Treated Leather", "Shadowed Leather", "Studded Leather"];
leatherArmorChestSturdy.modMisc = ["Padded", "Asbestos Lining", "Dense", "BioCommMesh", "Pneumatic"];

var leatherArmorArmSturdy = new Armor();
leatherArmorArmSturdy.name = "Sturdy Leather Arm";
leatherArmorArmSturdy.modMaterial = ["Boiled Leather", "Girded Leather", "Treated Leather", "Shadowed Leather", "Studded Leather"];
leatherArmorArmSturdy.modMisc = ["Brawling", "Braced", "Stabilized", "Aerodynamic", "Weighted"];

var leatherArmorLegSturdy = new Armor();
leatherArmorLegSturdy.name = "Sturdy Leather Leg";
leatherArmorLegSturdy.modMaterial = ["Boiled Leather", "Girded Leather", "Treated Leather", "Shadowed Leather", "Studded Leather"];
leatherArmorLegSturdy.modMisc = ["Cushioned", "Muffled"];

var leatherArmorChestHeavy = new Armor();
leatherArmorChestHeavy.name = "Heavy Leather Chest Piece";
leatherArmorChestHeavy.modMaterial = ["Boiled Leather", "Girded Leather", "Treated Leather", "Shadowed Leather", "Studded Leather"];
leatherArmorChestHeavy.modMisc = ["Padded", "Asbestos Lining", "Dense", "BioCommMesh", "Pneumatic"];

var leatherArmorArmHeavy = new Armor();
leatherArmorArmHeavy.name = "Heavy Leather Arm";
leatherArmorArmHeavy.modMaterial = ["Boiled Leather", "Girded Leather", "Treated Leather", "Shadowed Leather", "Studded Leather"];
leatherArmorArmHeavy.modMisc = ["Brawling", "Braced", "Stabilized", "Aerodynamic", "Weighted"];

var leatherArmorLegHeavy = new Armor();
leatherArmorLegHeavy.name = "Heavy Leather Leg";
leatherArmorLegHeavy.modMaterial = ["Boiled Leather", "Girded Leather", "Treated Leather", "Shadowed Leather", "Studded Leather"];
leatherArmorLegHeavy.modMisc = ["Cushioned", "Muffled"];

var metalArmorChest = new Armor();
metalArmorChest.name = "Metal Chest Piece";
metalArmorChest.modMaterial = ["Painted Metal", "Enameled Metal", "Shadowed Metal", "Alloyed Metal", "Polished Metal"];
metalArmorChest.modMisc = ["Padded", "Asbestos Lining", "Dense", "BioCommMesh", "Pneumatic"];

var metalArmorArm = new Armor();
metalArmorArm.name = "Metal Arm";
metalArmorArm.modMaterial = ["Painted Metal", "Enameled Metal", "Shadowed Metal", "Alloyed Metal", "Polished Metal"];
metalArmorArm.modMisc = ["Brawling", "Braced", "Stabilized", "Aerodynamic", "Weighted"];

var metalArmorLeg = new Armor();
metalArmorLeg.name = "Metal Leg";
metalArmorLeg.modMaterial = ["Painted Metal", "Enameled Metal", "Shadowed Metal", "Alloyed Metal", "Polished Metal"];
metalArmorLeg.modMisc = ["Cushioned", "Muffled"];

var metalArmorHelm = new Armor();
metalArmorHelm.name = "Metal Helmet";
metalArmorHelm.modMaterial = ["Painted Metal", "Enameled Metal", "Shadowed Metal", "Alloyed Metal", "Polished Metal"];

var metalArmorChestSturdy = new Armor();
metalArmorChestSturdy.name = "Sturdy Metal Chest Piece";
metalArmorChestSturdy.modMaterial = ["Painted Metal", "Enameled Metal", "Shadowed Metal", "Alloyed Metal", "Polished Metal"];
metalArmorChestSturdy.modMisc = ["Padded", "Asbestos Lining", "Dense", "BioCommMesh", "Pneumatic"];

var metalArmorArmSturdy = new Armor();
metalArmorArmSturdy.name = "Sturdy Metal Arm";
metalArmorArmSturdy.modMaterial = ["Painted Metal", "Enameled Metal", "Shadowed Metal", "Alloyed Metal", "Polished Metal"];
metalArmorArmSturdy.modMisc = ["Brawling", "Braced", "Stabilized", "Aerodynamic", "Weighted"];

var metalArmorLegSturdy = new Armor();
metalArmorLegSturdy.name = "Sturdy Metal Leg";
metalArmorLegSturdy.modMaterial = ["Painted Metal", "Enameled Metal", "Shadowed Metal", "Alloyed Metal", "Polished Metal"];
metalArmorLegSturdy.modMisc = ["Cushioned", "Muffled"];

var metalArmorHelmSturdy = new Armor();
metalArmorHelmSturdy.name = "Sturdy Metal Helmet";
metalArmorHelmSturdy.modMaterial = ["Painted Metal", "Enameled Metal", "Shadowed Metal", "Alloyed Metal", "Polished Metal"];

var metalArmorChestHeavy = new Armor();
metalArmorChestHeavy.name = "Heavy Metal Chest Piece";
metalArmorChestHeavy.modMaterial = ["Painted Metal", "Enameled Metal", "Shadowed Metal", "Alloyed Metal", "Polished Metal"];
metalArmorChestHeavy.modMisc = ["Padded", "Asbestos Lining", "Dense", "BioCommMesh", "Pneumatic"];

var metalArmorArmHeavy = new Armor();
metalArmorArmHeavy.name = "Heavy Metal Arm";
metalArmorArmHeavy.modMaterial = ["Painted Metal", "Enameled Metal", "Shadowed Metal", "Alloyed Metal", "Polished Metal"];
metalArmorArmHeavy.modMisc = ["Brawling", "Braced", "Stabilized", "Aerodynamic", "Weighted"];

var metalArmorLegHeavy = new Armor();
metalArmorLegHeavy.name = "Heavy Metal Leg";
metalArmorLegHeavy.modMaterial = ["Painted Metal", "Enameled Metal", "Shadowed Metal", "Alloyed Metal", "Polished Metal"];
metalArmorLegHeavy.modMisc = ["Cushioned", "Muffled"];

var metalArmorHelmHeavy = new Armor();
metalArmorHelmHeavy.name = "Heavy Metal Helmet";
metalArmorHelmHeavy.modMaterial = ["Painted Metal", "Enameled Metal", "Shadowed Metal", "Alloyed Metal", "Polished Metal"];

var combatArmorChest = new Armor();
combatArmorChest.name = "Combat Chest Piece";
combatArmorChest.modMaterial = ["Reinfoced", "Shadowed", "Fiberglass", "Polymer"];
combatArmorChest.modMisc = ["Padded", "Asbestos Lining", "Dense", "BioCommMesh", "Pneumatic"];

var combatArmorArm = new Armor();
combatArmorArm.name = "Combat Arm";
combatArmorArm.modMaterial = ["Reinfoced", "Shadowed", "Fiberglass", "Polymer"];
combatArmorArm.modMisc = ["Brawling", "Braced", "Stabilized", "Aerodynamic", "Weighted"];

var combatArmorLeg = new Armor();
combatArmorLeg.name = "Combat Leg";
combatArmorLeg.modMaterial = ["Reinfoced", "Shadowed", "Fiberglass", "Polymer"];
combatArmorLeg.modMisc = ["Cushioned", "Muffled"];

var combatArmorHelm = new Armor();
combatArmorHelm.name = "Combat Helmet";
combatArmorHelm.modMaterial = ["Reinfoced", "Shadowed", "Fiberglass", "Polymer"];

var combatArmorChestSturdy = new Armor();
combatArmorChestSturdy.name = "Sturdy Combat Chest Piece";
combatArmorChestSturdy.modMaterial = ["Reinfoced", "Shadowed", "Fiberglass", "Polymer"];
combatArmorChestSturdy.modMisc = ["Padded", "Asbestos Lining", "Dense", "BioCommMesh", "Pneumatic"];

var combatArmorArmSturdy = new Armor();
combatArmorArmSturdy.name = "Sturdy Combat Arm";
combatArmorArmSturdy.modMaterial = ["Reinfoced", "Shadowed", "Fiberglass", "Polymer"];
combatArmorArmSturdy.modMisc = ["Brawling", "Braced", "Stabilized", "Aerodynamic", "Weighted"];

var combatArmorLegSturdy = new Armor();
combatArmorLegSturdy.name = "Sturdy Combat Leg";
combatArmorLegSturdy.modMaterial = ["Reinfoced", "Shadowed", "Fiberglass", "Polymer"];
combatArmorLegSturdy.modMisc = ["Cushioned", "Muffled"];

var combatArmorHelmSturdy = new Armor();
combatArmorHelmSturdy.name = "Sturdy Combat Helmet";
combatArmorHelmSturdy.modMaterial = ["Reinfoced", "Shadowed", "Fiberglass", "Polymer"];

var combatArmorChestHeavy = new Armor();
combatArmorChestHeavy.name = "Heavy Combat Chest Piece";
combatArmorChestHeavy.modMaterial = ["Reinfoced", "Shadowed", "Fiberglass", "Polymer"];
combatArmorChestHeavy.modMisc = ["Padded", "Asbestos Lining", "Dense", "BioCommMesh", "Pneumatic"];

var combatArmorArmHeavy = new Armor();
combatArmorArmHeavy.name = "Heavy Combat Arm";
combatArmorArmHeavy.modMaterial = ["Reinfoced", "Shadowed", "Fiberglass", "Polymer"];
combatArmorArmHeavy.modMisc = ["Brawling", "Braced", "Stabilized", "Aerodynamic", "Weighted"];

var combatArmorLegHeavy = new Armor();
combatArmorLegHeavy.name = "Heavy Combat Leg";
combatArmorLegHeavy.modMaterial = ["Reinfoced", "Shadowed", "Fiberglass", "Polymer"];
combatArmorLegHeavy.modMisc = ["Cushioned", "Muffled"];

var combatArmorHelmHeavy = new Armor();
combatArmorHelmHeavy.name = "Heavy Combat Helmet";
combatArmorHelmHeavy.modMaterial = ["Reinfoced", "Shadowed", "Fiberglass", "Polymer"];

var synthArmorChest = new Armor();
synthArmorChest.name = "Synth Chest Piece";
synthArmorChest.modMaterial = ["Laminated", "Resin", "Microcarbon", "Nanofilament"];
synthArmorChest.modMisc = ["Padded", "Asbestos Lining", "Dense", "BioCommMesh", "Pneumatic"];

var synthArmorArm = new Armor();
synthArmorArm.name = "Synth Arm";
synthArmorArm.modMaterial = ["Laminated", "Resin", "Microcarbon", "Nanofilament"];
synthArmorArm.modMisc = ["Brawling", "Braced", "Stabilized", "Aerodynamic", "Weighted"];

var synthArmorLeg = new Armor();
synthArmorLeg.name = "Synth Leg";
synthArmorLeg.modMaterial = ["Laminated", "Resin", "Microcarbon", "Nanofilament"];
synthArmorLeg.modMisc = ["Cushioned", "Muffled"];

var synthArmorHelmet = new Armor();
synthArmorHelmet.name = "Synth Helmet";
synthArmorHelmet.modMaterial = ["Laminated", "Resin", "Microcarbon", "Nanofilament"];

var synthArmorChestSturdy = new Armor();
synthArmorChestSturdy.name = "Sturdy Synth Chest Piece";
synthArmorChestSturdy.modMaterial = ["Laminated", "Resin", "Microcarbon", "Nanofilament"];
synthArmorChestSturdy.modMisc = ["Padded", "Asbestos Lining", "Dense", "BioCommMesh", "Pneumatic"];

var synthArmorArmSturdy = new Armor();
synthArmorArmSturdy.name = "Sturdy Synth Arm";
synthArmorArmSturdy.modMaterial = ["Laminated", "Resin", "Microcarbon", "Nanofilament"];
synthArmorArmSturdy.modMisc = ["Brawling", "Braced", "Stabilized", "Aerodynamic", "Weighted"];

var synthArmorLegSturdy = new Armor();
synthArmorLegSturdy.name = "Sturdy Synth Leg";
synthArmorLegSturdy.modMaterial = ["Laminated", "Resin", "Microcarbon", "Nanofilament"];
synthArmorLegSturdy.modMisc = ["Cushioned", "Muffled"];

var synthArmorHelmetSturdy = new Armor();
synthArmorHelmetSturdy.name = "Sturdy Synth Helmet";
synthArmorHelmetSturdy.modMaterial = ["Laminated", "Resin", "Microcarbon", "Nanofilament"];

var synthArmorChestHeavy = new Armor();
synthArmorChestHeavy.name = "Heavy Synth Chest Piece";
synthArmorChestHeavy.modMaterial = ["Laminated", "Resin", "Microcarbon", "Nanofilament"];
synthArmorChestHeavy.modMisc = ["Padded", "Asbestos Lining", "Dense", "BioCommMesh", "Pneumatic"];

var synthArmorArmHeavy = new Armor();
synthArmorArmHeavy.name = "Heavy Synth Arm";
synthArmorArmHeavy.modMaterial = ["Laminated", "Resin", "Microcarbon", "Nanofilament"];
synthArmorArmHeavy.modMisc = ["Brawling", "Braced", "Stabilized", "Aerodynamic", "Weighted"];

var synthArmorLegHeavy = new Armor();
synthArmorLegHeavy.name = "Heavy Synth Leg";
synthArmorLegHeavy.modMaterial = ["Laminated", "Resin", "Microcarbon", "Nanofilament"];
synthArmorLegHeavy.modMisc = ["Cushioned", "Muffled"];

var synthArmorHelmetHeavy = new Armor();
synthArmorHelmetHeavy.name = "Heavy Synth Helmet";
synthArmorHelmetHeavy.modMaterial = ["Laminated", "Resin", "Microcarbon", "Nanofilament"];


 