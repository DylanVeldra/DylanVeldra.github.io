
class TwoMMEC extends Item {
    weight = 0
    value = 10
    id = "twoMMEC"
    category = "ammo"
    rarity = 5

}

class PlasmaCartridge extends Item {
    weight = 0
    value = 5
    id = "plasmaCartridge"
    category = "ammo"
    rarity = 4
}

class Missile extends Item {
    weight = 3.5
    value = 25
    id = "missile"
    category = "ammo"
    rarity = 3
}


class FusionCore extends Item {
    weight = 2
    value = 200
    id = "fusionCore"
    category = "ammo"
    rarity = 3
}

class FiveMM extends Item {
    weight = 0
    value = 1
    id = "fiveMM"
    category = "ammo"
    rarity = 3
}

class Point50 extends Item {
    weight = 0
    value = 4
    id = "point50"
    category = "ammo"
    rarity = 3
}
class Syringe extends Item {
    weight = 0
    value = 2
    id = "syringe"
    category = "ammo"
    rarity = 2
}
class GammaCartridge extends Item {
    weight = 0
    value = 10
    id = "gammaCartridge"
    category = "ammo"
    rarity = 2
}
class FlamerFuel extends Item {
    weight = 0
    value = 1
    id = "flamerFuel"
    category = "ammo"
    rarity = 2
}
class Point45 extends Item {
    weight = 0
    value = 3
    id = "point45"
    category = "ammo"
    rarity = 2
}
class TenMM extends Item {
    weight = 0
    value = 2
    id = "tenMM"
    category = "ammo"
    rarity = 0
}
class Point38 extends Item {
    weight = 0
    value = 1
    id = "point38"
    category = "ammo"
    rarity = 0
}
class Flare extends Item {
    weight = 0
    value = 1
    id = "flare"
    category = "ammo"
    rarity = 1
}
class Point308 extends Item {
    weight = 0
    value = 3
    id = "point308"
    category = "ammo"
    rarity = 1
}

class Point12 extends Item {
    weight = 0
    value = 3
    id = "point12"
    category = "ammo"
    rarity = 1
}

class FusionCell extends Item {
    weight = 0
    value = 3
    id = "fusionCell"
    category = "ammo"
    rarity = 2
}

class RailwaySpike extends Item {
    weight = 0
    value = 1
    id = "railwaySpike"
    category = "ammo"
    rarity = 2
}

class Point44 extends Item {
    weight = 0
    value = 3
    id = "point44"
    category = "ammo"
    rarity = 3
}

class FivePoint56 extends Item {
    weight = 0
    value = 2
    id = "fivePoint56"
    category = "ammo"
    rarity = 3
}

class MiniNuke extends Item {
    weight = 6
    value = 100
    id = "miniNuke"
    category = "ammo"
    rarity = 6
}



/**
 * @type {LootTableObject[]}
 */
let listAmmo = [
    { item: TwoMMEC, quantityToRoll: "6+3dE" },
    { item: TwoMMEC, quantityToRoll: "6+3dE" },
    { item: TwoMMEC, quantityToRoll: "6+3dE" },
    { item: PlasmaCartridge, quantityToRoll: "10+5dE" },
    { item: Missile, quantityToRoll: "2+1dE" },
    { item: FusionCore, quantityToRoll: "1+0dE" },
    { item: FiveMM, quantityToRoll: "12+6dEx10" },
    { item: FiveMM, quantityToRoll: "12+6dEx10" },
    { item: Point50, quantityToRoll: "4+2dE" },
    { item: Point50, quantityToRoll: "4+2dE" },
    { item: Syringe, quantityToRoll: "4+2dE" },
    { item: Syringe, quantityToRoll: "4+2dE" },
    { item: GammaCartridge, quantityToRoll: "4+2dE" },
    { item: FlamerFuel, quantityToRoll: "12+6dE" },
    { item: FlamerFuel, quantityToRoll: "12+6dE" },
    { item: Point45, quantityToRoll: "9+4dE" },
    { item: Point45, quantityToRoll: "9+4dE" },
    { item: TenMM, quantityToRoll: "8+4dE" },
    { item: TenMM, quantityToRoll: "8+4dE" },
    { item: Point38, quantityToRoll: "10+5dE" },
    { item: Point38, quantityToRoll: "10+5dE" },
    { item: Flare, quantityToRoll: "2+1dE" },
    { item: Point308, quantityToRoll: "6+3dE" },
    { item: Point12, quantityToRoll: "6+3dE" },
    { item: Point12, quantityToRoll: "6+3dE" },
    { item: FusionCell, quantityToRoll: "14+7dE" },
    { item: FusionCell, quantityToRoll: "14+7dE" },
    { item: RailwaySpike, quantityToRoll: "6+3dE" },
    { item: RailwaySpike, quantityToRoll: "6+3dE" },
    { item: Point44, quantityToRoll: "4+2dE" },
    { item: Point44, quantityToRoll: "4+2dE" },
    { item: FivePoint56, quantityToRoll: "8+4dE" },
    { item: FivePoint56, quantityToRoll: "8+4dE" },
    { item: Missile, quantityToRoll: "2+1dE" },
    { item: FusionCore, quantityToRoll: "1+0dE" },
    { item: PlasmaCartridge, quantityToRoll: "10+5dE" },
    { item: MiniNuke, quantityToRoll: "1+1dE" },
    { item: MiniNuke, quantityToRoll: "1+1dE" },
    { item: MiniNuke, quantityToRoll: "1+1dE" },
];
