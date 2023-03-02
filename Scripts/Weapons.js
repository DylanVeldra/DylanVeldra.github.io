class Weapon { }
	
function getWeaponMods(weaponP) {
	if(weaponP.modBarrel) { weaponP.barrel = getModFromList(weaponP.modBarrel); }
	if(weaponP.modCapacitor) { weaponP.capacitor = getModFromList(weaponP.modCapacitor); }
	if(weaponP.modDish) { weaponP.dish = getModFromList(weaponP.modDish); }
	if(weaponP.modFuel) { weaponP.fuel = getModFromList(weaponP.modFuel); }
	if(weaponP.modGrip) { weaponP.grip = getModFromList(weaponP.modGrip); }
	if(weaponP.modMagazine) { weaponP.magazine = getModFromList(weaponP.modMagazine); }
	if(weaponP.modMuzzle) { weaponP.muzzle = getModFromList(weaponP.modMuzzle); }
	if(weaponP.modNozzle) { weaponP.nozzle = getModFromList(weaponP.modNozzle); }
	if(weaponP.modReceiver) { weaponP.receiver = getModFromList(weaponP.modReceiver); }
	if(weaponP.modSights) { weaponP.sights = getModFromList(weaponP.modSights); }
	if(weaponP.modStock) { weaponP.stock = getModFromList(weaponP.modStock); }
	if(weaponP.modTank) { weaponP.tank = getModFromList(weaponP.modTank); }
	if(weaponP.modUpgrade) { weaponP.upgrade = getModFromList(weaponP.modUpgrade); }
	
	return weaponP;
}

function getModFromList(modListP) {
	let rand = Math.floor(Math.random() * 2);
	var mod = "";
	if (rand == 0) {
		mod = modListP[Math.floor(Math.random() * modListP.length)];
	}
	return mod;
}

function printWeapon(weaponP) {
	var printOut = "1 " + weaponP.name;

	if (weaponP.barrel) {
		printOut = checkForWeaponEnd(printOut);
		printOut += weaponP.barrel + ")";
	}
	if (weaponP.capacitor) {
		printOut = checkForWeaponEnd(printOut);
		printOut += weaponP.capacitor + ")";
	}
	if (weaponP.dish) {
		printOut = checkForWeaponEnd(printOut);
		printOut += weaponP.dish + ")";
	}
	if (weaponP.fuel) {
		printOut = checkForWeaponEnd(printOut);
		printOut += weaponP.fuel + ")";
	}
	if (weaponP.grip) {
		printOut = checkForWeaponEnd(printOut);
		printOut += weaponP.grip + ")";
	}
	if (weaponP.magazine) {
		printOut = checkForWeaponEnd(printOut);
		printOut += weaponP.magazine + ")";
	}
	if (weaponP.muzzle) {
		printOut = checkForWeaponEnd(printOut);
		printOut += weaponP.muzzle + ")";
	}
	if (weaponP.nozzle) {
		printOut = checkForWeaponEnd(printOut);
		printOut += weaponP.nozzle + ")";
	}
	if (weaponP.reciever) {
		printOut = checkForWeaponEnd(printOut);
		printOut += weaponP.reciever + ")";
	}
	if (weaponP.sights) {
		printOut = checkForWeaponEnd(printOut);
		printOut += weaponP.sights + ")";
	}
	if (weaponP.stock) {
		printOut = checkForWeaponEnd(printOut);
		printOut += weaponP.stock + ")";
	}
	if (weaponP.tank) {
		printOut = checkForWeaponEnd(printOut);
		printOut += weaponP.tank + ")";
	}
	if (weaponP.upgrade) {
		printOut = checkForWeaponEnd(printOut);
		printOut += weaponP.upgrade + ")";
	}
	return printOut;
}

function checkForWeaponEnd(stringP) {
	var lastChar = stringP[stringP.length -1];
	if (lastChar == ")") { stringP = stringP.replace(")", ", "); }
	else { stringP += " ("; }
	return stringP;
}

var pistol44 = new Weapon();
pistol44.name = ".44 Pistol";
pistol44.modReceiver = ["Hardened", "Powerful", "Advanced"];
pistol44.modBarrel = ["Snubnose Barrel", "Bull Barrel"];
pistol44.modGrip = ["Comfort Grip"];
pistol44.modSights = ["Short Scope", "Reflex Sight", "Recon Scope"];

var pistol10 = new Weapon();
pistol10.name = "10mm Pistol";
pistol10.modReceiver = ["Calibrated", "Hardened", "Automatic", "Hair Trigger", "Powerful", "Advanced"];
pistol10.modBarrel = ["Long Barrel", "Ported Barrel"];
pistol10.modGrip = ["Comfort Grip", "Sharpshooter's Grip"];
pistol10.modMagazine = ["Large Magazine", "Quick-Eject Magazine", "Large Quick-Eject Magazine"];
pistol10.modSights = ["Reflex Sight", "Recon Scope"];
pistol10.modMuzzle = ["Compensator", "Suppressor"];

var assaultRifle = new Weapon();
assaultRifle.name = "Assault Rifle";
assaultRifle.modReceiver = ["Calibrated", "Hardened", "Automatic", "Hair Trigger", "Powerful", "Advanced"];
assaultRifle.modBarrel = ["Long Barrel", "Ported Barrel", "Vented Barrel"];
assaultRifle.modStock = ["Full Stock", "Marksman's Stock", "Recoil-Compensating Stock"];
assaultRifle.modMagazine = ["Large Magazine", "Quick-Eject Magazine", "Large Quick-Eject Magazine"];
assaultRifle.modSights = ["Reflex Sight", "Short Scope", "Long Scope", "Short Night Vision Scope", "Long Night Vision Scope", "Recon Scope"];
assaultRifle.modMuzzle = ["Compensator", "Suppressor"];

var combatRifle = new Weapon();
combatRifle.name = "Combat Rifle";
combatRifle.modReceiver = ["Calibrated", "Hardened", "Automatic", "Hair Trigger", "Powerful", "Advanced", ".38 Receiver", ".308 Receiver"];
combatRifle.modBarrel = ["Long Barrel", "Ported Barrel", "Vented Barrel"];
combatRifle.modStock = ["Full Stock", "Marksman's Stock", "Recoil-Compensating Stock"];
combatRifle.modMagazine = ["Large Magazine", "Quick-Eject Magazine", "Large Quick-Eject Magazine"];
combatRifle.modSights = ["Reflex Sight", "Short Scope", "Long Scope", "Short Night Vision Scope", "Long Night Vision Scope", "Recon Scope"];
combatRifle.modMuzzle = ["Bayonet", "Compensator", "Suppressor"];

var gaussRifle = new Weapon();
gaussRifle.name = "Gauss Rifle";
gaussRifle.modBarrel = ["Shielded Barrel"];
gaussRifle.modStock = ["Recoil-Compensating Stock"];
gaussRifle.modCapacitors = ["Full Capacitors", "Capacitor Boosting Coil"];
gaussRifle.modSights = ["Reflex Sight", "Short Scope", "Long Scope", "Short Night Vision Scope", "Long Night Vision Scope", "Recon Scope"];
gaussRifle.modMuzzle = ["Suppressor"];

var huntingRifle = new Weapon();
huntingRifle.name = "Hunting Rifle";
huntingRifle.modReceiver = ["Tuned", "Calibrated", "Hardened", "Powerful", ".38 Receiver", ".50 Receiver"];
huntingRifle.modBarrel = ["Long Barrel", "Ported Barrel", "Vented Barrel"];
huntingRifle.modStock = ["Full Stock", "Marksman's Stock"];
huntingRifle.modMagazine = ["Large Magazine", "Quick-Eject Magazine", "Large Quick-Eject Magazine"];
huntingRifle.modSights = ["Reflex Sight", "Short Scope", "Long Scope", "Short Night Vision Scope", "Long Night Vision Scope", "Recon Scope"];
huntingRifle.modMuzzle = ["Bayonet", "Suppressor"];

var submachineGun = new Weapon();
submachineGun.name = "Submachine Gun";
submachineGun.modReceiver = ["Armor Piercing", "Hardened", "Rapid", "Powerful"];
submachineGun.modBarrel = ["Short"];
submachineGun.modStock = ["Full Stock", "Recoil-Compensating Stock"];
submachineGun.modMagazine = ["Large Magazine", "Quick-Eject Magazine", "Large Quick-Eject Magazine"];
submachineGun.modSights = ["Reflex Sight"];
submachineGun.modMuzzle = ["Compensator", "Muzzle Brake", "Suppressor"];

var combatShotgun = new Weapon();
combatShotgun.name = "Combat Shotgun";
combatShotgun.modReceiver = ["Calibrated", "Hardened", "Automatic", "Hair Trigger", "Powerful", "Advanced"];
combatShotgun.modBarrel = ["Long Barrel", "Ported Barrel"];
combatShotgun.modStock = ["Full Stock", "Marksman's Stock", "Recoil-Compensating Stock"];
combatShotgun.modMagazine = ["Large Magazine", "Quick-Eject Magazine", "Large Quick-Eject Magazine"];
combatShotgun.modSights = ["Reflex Sight", "Short Scope", "Long Scope", "Short Night Vision Scope", "Long Night Vision Scope", "Recon Scope"];
combatShotgun.modMuzzle = ["Bayonet", "Compensator", "Muzzle Brake", "Suppressor"];

var doubleBarrelShotgun = new Weapon();
doubleBarrelShotgun.name = "Double-Barrel Shotgun";
doubleBarrelShotgun.modReceiver = ["Hardened", "Hair Trigger", "Powerful", "Advanced"];
doubleBarrelShotgun.modBarrel = ["Long Barrel", "Sawed-off Barrel"];
doubleBarrelShotgun.modStock = ["Full Stock"];
doubleBarrelShotgun.modSights = ["Reflex Sight"];
doubleBarrelShotgun.modMuzzle = ["Muzzle Brake"];

var pipeBoltAction = new Weapon();
pipeBoltAction.name = "Pipe Bolt-Action";
pipeBoltAction.modReceiver = ["Calibrated", "Hardened", "Powerful", ".38 Receiver", ".50 Receiver"];
pipeBoltAction.modBarrel = ["Stub Barrel", "Long Barrel", "Ported Barrel", "Finned Barrel"];
pipeBoltAction.modGrip = ["Sharpshooter's Grip"];
pipeBoltAction.modStock = ["Standard Stock", "Marksman's Stock", "Recoil- Compensating Stock"];
pipeBoltAction.modSights = ["Reflex Sight", "Short Scope", "Long Scope", "Short Night Vision Scope", "Long Night Vision Scope", "Recon Scope"];
pipeBoltAction.modMuzzle = ["Bayonet", "Compensator", "Muzzle Brake", "Suppressor"];

var pipeGun = new Weapon();
pipeGun.name = "Pipe Gun";
pipeGun.modReceiver = ["Calibrated", "Hardened", "Automatic", "Hair Trigger", "Powerful", ".45 Receiver"];
pipeGun.modBarrel = ["Long Barrel", "Ported Barrel", "Finned Barrel"];
pipeGun.modGrip = ["Sharpshooter's Grip"];
pipeGun.modStock = ["Standard Stock", "Marksman's Stock", "Recoil- Compensating Stock"];
pipeGun.modMagazine = ["Large Magazine", "Quick-Eject Magazine", "Large Quick-Eject Magazine"];
pipeGun.modSights = ["Reflex Sight", "Short Scope", "Long Scope", "Short Night Vision Scope", "Long Night Vision Scope", "Recon Scope"];
pipeGun.modMuzzle = ["Bayonet", "Compensator", "Muzzle Brake", "Suppressor"];

var pipeRevolver = new Weapon();
pipeRevolver.name = "Pipe Revolver";
pipeRevolver.modReceiver = ["Calibrated", "Hardened", "Powerful", ".38 Receiver", ".308 Receiver"];
pipeRevolver.modBarrel = ["Long Barrel", "Ported Barrel", "Finned Barrel"];
pipeRevolver.modGrip = ["Sharpshooter's Grip"];
pipeRevolver.modStock = ["Standard Stock", "Marksman's Stock", "Recoil-Compensating Stock"];
pipeRevolver.modSights = ["Reflex Sight", "Short Scope", "Long Scope", "Short Night Vision Scope", "Long Night Vision Scope", "Recon Scope"];
pipeRevolver.modMuzzle = ["Bayonet", "Compensator", "Muzzle Brake", "Suppressor"];

var railwayRifle = new Weapon();
railwayRifle.name = "Railway Rifle";
railwayRifle.modReceiver = ["Automatic Piston"];
railwayRifle.modBarrel = ["Long Barrel"];
railwayRifle.modStock = ["Recoil-Compensating Stock"];
railwayRifle.modSights = ["Reflex Sight", "Short Scope", "Long Scope", "Short Night Vision Scope", "Long Night Vision Scope", "Recon Scope"];
railwayRifle.modMuzzle = ["Bayonet"];

var syringer = new Weapon();
syringer.name = "Syringer";
syringer.modBarrel = ["Stub Barrel", "Long Barrel"];
syringer.modStock = ["Marksman’s", "Recoil-Compensating"];
syringer.modSights = ["Reflex Sight", "Short Scope", "Long Scope", "Short Night Vision Scope", "Long Night Vision Scope", "Recon Scope"];

var instituteLaser = new Weapon();
instituteLaser.name = "Institute Laser";
instituteLaser.modCapacitor = ["Photon Exciter", "Beta Wave Tuner", "Boosted Capacitor", "Photon Agitator"];
instituteLaser.modBarrel = ["Long Barrel", "Automatic Barrel", "Improved Barrel"];
instituteLaser.modStock = ["Standard Stock"];
instituteLaser.modSights = ["Reflex Sight", "Short Scope", "Long Scope", "Short Night Vision Scope", "Long Night Vision Scope", "Recon Scope"];
instituteLaser.modMuzzle = ["Beam Splitter", "Beam Focuser", "Gyro-Compensating Lens"];

var laserMusket = new Weapon();
laserMusket.name = "Laser Musket";
laserMusket.modCapacitor = ["Three-Crank Capacitor", "Four-Crank Capacitor", "Five-Crank Capacitor", "Six-Crank Capacitor"];
laserMusket.modBarrel = ["Long Barrel", "Bracketed Barrel", "Bracketed Long Barrel"];
laserMusket.modStock = ["Full Stock"];
laserMusket.modSights = ["Reflex Sight", "Short Scope", "Long Scope", "Short Night Vision Scope", "Long Night Vision Scope", "Recon Scope"];
laserMusket.modMuzzle = ["Beam Splitter", "Beam Focuser", "Gyro-Compensating Lens"];

var laserGun = new Weapon();
laserGun.name = "Laser Gun";
laserGun.modCapacitor = ["Photon Exciter", "Beta Wave Tuner", "Boosted Capacitor", "Photon Agitator"];
laserGun.modBarrel = ["Long Barrel", "Automatic Barrel", "Sniper Barrel", "Improved Barrel"];
laserGun.modGrip = ["Sharpshooter’s Grip"];
laserGun.modStock = ["Standard Stock", "Marksman’s Stock", "Recoil Compensating Stock"];
laserGun.modSights = ["Reflex Sight", "Short Scope", "Long Scope", "Short Night Vision Scope", "Long Night Vision Scope", "Recon Scope"];
laserGun.modMuzzle = ["Beam Splitter", "Beam Focuser", "Gyro-Compensating Lens"];

var plasmaGun = new Weapon();
plasmaGun.name = "Plasma Gun";
plasmaGun.modCapacitor = ["Photon Exciter", "Beta Wave Tuner", "Boosted Capacitor", "Photon Agitator"];
plasmaGun.modBarrel = ["Splitter", "Automatic Barrel", "Sniper Barrel", "Flamer Barrel", "Improved Barrel"];
plasmaGun.modStock = ["Standard Stock", "Marksman’s Stock", "Recoil Compensating Stock"];
plasmaGun.modSights = ["Reflex Sight", "Short Scope", "Long Scope", "Short Night Vision Scope", "Long Night Vision Scope", "Recon Scope"];

var gammaGun = new Weapon();
gammaGun.name = "Gamma Gun";
gammaGun.modDish = ["Deep Dish"];
gammaGun.modMuzzle = ["Electric Signal Carrier Antennae", "Signal Repeater"];

var flamer = new Weapon();
flamer.name = "Flamer";
flamer.modFuel = ["Napalm"];
flamer.modBarrel = ["Long Barrel"];
flamer.modTank = ["Large Tank", "Huge Tank"];
flamer.modNozzle = ["Compression Nozzle", "Vaporization Nozzle"];

var gatlingLaser = new Weapon();
gatlingLaser.name = "Gatling Laser";
gatlingLaser.modCapacitor = ["Photon Exciter", "Beta Wave Tuner", "Boosted Capacitor", "Photon Agitator"];
gatlingLaser.modBarrel = ["Charging Barrels"];
gatlingLaser.modSights = ["Reflex Sight"];
gatlingLaser.modNozzle = ["Beam Focuser"];

var junkJet = new Weapon();
junkJet.name = "Junk Jet";
junkJet.modBarrel = ["Long Barrel"];
junkJet.modStock = ["Recoil Compensating Stock"];
junkJet.modSights = ["Gunner Sight"];
junkJet.modMuzzle = ["Electrification Module", "Ignition Module"];

var minigun = new Weapon();
minigun.name = "Minigun";
minigun.modBarrel = ["Accelerated Barrel", "Tri-Barrel"];
minigun.modSights = ["Gunner Sight"];
minigun.modMuzzle = ["Shredder"];

var missleLauncher = new Weapon();
missleLauncher.name = "Missle Launcher";
missleLauncher.modBarrel = ["Triple Barrel", "Quad Barrel"];
missleLauncher.modSights = ["Scope", "Night Vision Scope", "Targeting Computer"];
missleLauncher.modMuzzle = ["Bayonet", "Stabilizer"];

var sword = new Weapon();
sword.name = "Sword";
sword.modUpgrade = ["Serrated Blade", "Electrified Blade", "Electrified Serrated Blade", "Stun Pack"];

var combatKnife = new Weapon();
combatKnife.name = "Combat Knife";
combatKnife.modUpgrade = ["Serrated Blade", "Stealth Blade"];

var machete = new Weapon();
machete.name = "Machete";
machete.modUpgrade = ["Serrated Blade"];

var ripper = new Weapon();
ripper.name = "Ripper";
ripper.modUpgrade = ["Curveed Blade", "Extended Blade"];

var shishkebab = new Weapon();
shishkebab.name = "Shishkebab";
shishkebab.modUpgrade = ["Extra Flame Jets"];

var switchblade = new Weapon();
switchblade.name = "Switchblade";
switchblade.modUpgrade = ["Serrated Blade"];

var baseballBat = new Weapon();
baseballBat.name = "Baseball Bat";
baseballBat.modUpgrade = ["Barbed", "Spiked", "Sharp", "Chain-Wrapped", "Bladed"];

var board = new Weapon();
board.name = "Board";
board.modUpgrade = ["Spiked", "Puncturing", "Bladed"];

var leadPipe = new Weapon();
leadPipe.name = "Lead Pipe";
leadPipe.modUpgrade = ["Spiked", "Heavy"];

var pipeWrench = new Weapon();
pipeWrench.name = "Pipe Wrench";
pipeWrench.modUpgrade = ["Hooked", "Heavy", "Puncturing", "Extra Heavy"];

var poolCue = new Weapon();
poolCue.name = "Pool Cue";
poolCue.modUpgrade = ["Barbed", "Sharp"];

var rollingPin = new Weapon();
rollingPin.name = "Rolling Pin";
rollingPin.modUpgrade = ["Spiked", "Sharp"];

var baton = new Weapon();
baton.name = "Baton";
baton.modUpgrade = ["Electrified", "Stun Pack"];

var sledgehammer = new Weapon();
sledgehammer.name = "SledgeHammer";
sledgehammer.modUpgrade = ["Puncturing", "Heavy"];

var superSledge = new Weapon();
superSledge.name = "Super Sledge"
superSledge.modUpgrade = ["Heating Coil", "Stun Pack"];

var tireIron = new Weapon();
tireIron.name = "Tire Iron";
tireIron.modUpgrade = ["Bladed"];

var walkingCane = new Weapon();
walkingCane.name = "Walking Cane";
walkingCane.modUpgrade = ["Barbed", "Spiked"];

var boxingGlove = new Weapon();
boxingGlove.name = "Boxing Glove";
boxingGlove.modUpgrade = ["Spiked", "Puncturing", "Lead Lining"];

var deathclawGauntlet = new Weapon();
deathclawGauntlet.name = "Deathclaw Gauntlet";
deathclawGauntlet.modUpgrade = ["Extra Claw"];

var knuckles = new Weapon();
knuckles.name = "knuckles";
knuckles.modUpgrade = ["Sharp", "Spiked", "Puncturing", "Bladed"];

var powerFist = new Weapon();
powerFist.name = "Power Fist";
powerFist.modUpgrade = ["Puncturing", "Heating Coil"];




