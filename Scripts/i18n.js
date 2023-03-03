let currentLanguage = "fr"


const switchLanguage = (language = null) => {
    if (language) {
        currentLanguage = language
    } else if (currentLanguage === "fr") {
        currentLanguage = "en"
    } else {
        currentLanguage = "fr"
    }
    document.getElementById("switchLanguageButton").value = i18n[currentLanguage].ui.currentLanguage
    document.getElementById("scavengerPerkLabel").textContent = i18n[currentLanguage].ui.scavenger
    document.getElementById("ammo").value = i18n[currentLanguage].ui.ammo
    document.getElementById("armor").value = i18n[currentLanguage].ui.armor
    document.getElementById("beverage").value = i18n[currentLanguage].ui.beverage
    document.getElementById("chem").value = i18n[currentLanguage].ui.chem
    document.getElementById("clothing").value = i18n[currentLanguage].ui.clothing
    document.getElementById("food").value = i18n[currentLanguage].ui.food
    document.getElementById("foraging").value = i18n[currentLanguage].ui.foraging
    document.getElementById("magazine").value = i18n[currentLanguage].ui.magazine
    document.getElementById("material").value = i18n[currentLanguage].ui.material
    document.getElementById("meleeWepon").value = i18n[currentLanguage].ui.meleeWeapon
    document.getElementById("nukacola").value = i18n[currentLanguage].ui.nukacola
    document.getElementById("oddAndValue").value = i18n[currentLanguage].ui.oddAndValue
    document.getElementById("rangedWeapon").value = i18n[currentLanguage].ui.rangedWeapon
    document.getElementById("thrownExplosiveWeapon").value = i18n[currentLanguage].ui.thrownExplosiveWeapon
}

const i18n = {
    fr: {
        item: {
            ammo: {
                twoMMEC: {
                    name: "2mm EC",
                    pluralName: "2mm EC",
                    desc: "La cartouche électromagnétique 2 mm est un magasin autonome contenant des projectiles ferromagnétiques à haute vélocité et le bloc-batterie nécessaire pour ali- menter l’arme de Gauss qui les tire."
                },
                plasmaCartridge: {
                    name: "Cartouche au Plasma",
                    pluralName: "Cartouches au Plasma",
                    desc: "Les armes à plasma tirent leur énergie et leur carburant d’une cartouche au plasma, la combinaison d’une cellule à fusion pour alimenter l’arme et d’une capsule conte- nant une version stable du composé chimique devant le plasma que l’arme tire."
                },
                missile: {
                    name: "Missile",
                    pluralName: "Missiles",
                    desc: "De puissantes fusées explosives compactes conçues pour être tirées par un lance-missiles. Les missiles peuvent être dirigés sur une cible par un système de guidage si le lance-missiles en possède un, donc impossible de les remplacer par des fusées artisanales."
                },
                fusionCore: {
                    name: "Réacteur à fusion",
                    pluralName: "Réacteurs à fusion",
                    desc: "Les réacteurs à fusion d’avant- guerre sont des batteries nucléaires haut de gamme faites pour fonctionner sur le long terme.Un seul réacteur peut alimenter un petit bâtiment pendant très longtemps ou fournir beaucoup d’énergie à quelque chose très rapidement.La plupart des armures assistées fonctionnent avec un réacteur à fusion comme source d’énergie, et cela leur fournit plusieurs heures d’activité.Les réacteurs à fusion peuvent aussi servir de munitions à un laser Gatling.\n\rQuand un personnage découvre un réacteur à fusion, le réacteur contient un nombre de charges égal à 10 + la compétence Sciences de l’utilisateur(les gens possé- dant davantage de connaissances scientifiques peuvent exploiter l’énergie plus efficacement ; l’aptitude Physicien nucléaire ajoute également des charges supplémentaires, voir page 68).La manière dont ces charges sont utilisées ou consommées dépend de l’appareil sur lequel le réac- teur est branché(voir Amure assistée page 123).\n\rQuand le réacteur est utilisé comme munitions pour un laser Gatling, chaque charge qu’il contient donne 50 tirs au laser.Comme le laser Gatling est une arme possédant la qualité Gatling, il consomme des munitions 10 fois plus vite que la plupart des armes(voir Gatling page 90)."
                },
                fiveMM: {
                    name: "Cartouche 5mm",
                    pluralName: "Cartouches 5mm",
                    desc: "Des cartouches de fusil de petit calibre, normalement utilisées par les militaires dans les miniguns. Les réserves de ces cartouches sont rares, mais une cache contient généralement une grande quantité de cartouches. Le problème est que les armes qui s’en servent consomment des munitions à un rythme prodigieusement élevé et une boîte pleine de cartouches 5 mm ne dure souvent pas longtemps."
                },
                point50: {
                    name: "Calibre .50",
                    pluralName: "Calibres .50",
                    desc: "De grosses cartouches très destructrices utilisées uniquement dans les fusils les plus puissants. Elles servaient normalement pour les mitrailleuses lourdes et les fusils antimatériel avant la Guerre, donc elles ont tendance à être rares, sauf si une base militaire se trouve à proxi- mité.Un tir de calibre .50 réduit tout ce qu’il touche en charpie, mais chaque tir doit être exploité au maximum."
                },
                syringe: {
                    name: "Seringue",
                    pluralName: "Seringues",
                    desc: "TODO, plusieurs de seringue. Aucun des Effets indiqués ci-dessous ne peut s’appliquer plus d’une fois en même temps à une seule cible."
                },
                gammaCartridge: {
                    name: "Cartouche Gamma",
                    pluralName: "Cartouches Gamma",
                    desc: "Une grosse batterie avec un revêtement de plastique pouvant contenir la charge nécessaire pour alimenter un pistolet Gamma."
                },
                flamerFuel: {
                    name: "Carburant de lance-flammes",
                    pluralName: "Carburants de lance-flammes",
                    desc: "Un mélange chimique hautement inflammable conçu pour être utilisé dans un lance-flammes. La qualité du carburant de lance-flammes est variable, mais c’est géné- ralement une substance visqueuse qui continue de brûler à température élevée ou pendant une longue durée pour donner une arme efficace."
                },
                point45: {
                    name: "Cartouche .45",
                    pluralName: "Cartouches .45",
                    desc: "Une bonne cartouche qui combine un pouvoir d’arrêt raisonnable, un recul gérable et une précision correcte. Elle est utilisée par plusieurs armes différentes assez répandues dans les Terres désolées et n’est pas trop dif- ficile à trouver."
                },
                tenMM: {
                    name: "Cartouche 10mm",
                    pluralName: "Cartouches 10mm",
                    desc: "L’un des types de cartouches de pistolet les plus courants dans les Terres désolées, fabriqué en grandes quanti- tés avant la Grande Guerre pour accompagner le grand nombre de pistolets 10 mm produits comme armes de poing pour les soldats et comme armes de défense per- sonnelle pour les civils."
                },
                point38: {
                    name: "Cartouche .38",
                    pluralName: "Cartouches .38",
                    desc: "Des munitions de pistolet de petit calibre conçues pour les revolvers à double action avant la Grande Guerre. Suffisamment répandues pour être choisies comme munitions pour la plupart des armes à feu artisanales. Plusieurs armes plus puissantes peuvent être modifiées pour fonctionner avec des cartouches .38, échangeant leur pouvoir d’arrêt contre des munitions plus faciles à trouver."
                },
                flare: {
                    name: "Fusée éclérante",
                    pluralName: "Fusées éclérantes",
                    desc: "Un petit tube ressemblant à une cartouche de fusil de combat, laquelle contient un produit chimique produi- sant une forte lumière quand il s’enflamme. La fusée éclairante doit être tirée avec un pistolet lance-fusées qui allume une mèche au lancement : la fusée monte dans le ciel, illuminant la zone autour d’elle, puis redescend doucement en laissant une traînée de fumée blanche derrière elle. Elle est très utile pour envoyer un signal de détresse, mais ne sert pas à grand-chose d’autre."
                },
                point308: {
                    name: "Cartouche .308",
                    pluralName: "Cartouches .308",
                    desc: "Une cartouche de balles de fusil à fort impact, normale- ment utilisée dans les fusils de chasse et dans certains fusils à verrou de fortune. Elles sont suffisamment répan- dues dans les Terres désolées pour qu’une arme utilisant des cartouches .308 ait peu de chances de tomber à court de munitions très souvent."
                },
                point12: {
                    name: "Calibre 12",
                    pluralName: "Calibres 12",
                    desc: "La chevrotine standard présente dans les Terres Désolées est une cartouche de calibre 12 pour fusil à chambre de 70 mm remplie de plombs no 0. Comme elle est relati- vement facile à trouver, les habitants des Terres désolées gardent souvent un fusil de combat utilisant ces munitions à portée de main pour pouvoir tirer sur les menaces au corps à corps."
                },
                fusionCell: {
                    name: "Cellule à fusion",
                    pluralName: "Cellules à fusions",
                    desc: "Une cellule à microfusion, ou cellule à fusion, est un réacteur à fusion miniature utilisé dans les armes à énergie légères. La cellule fonctionne avec des isotopes d’hydrogène instables qui subissent une fusion lorsqu’ils sont soumis à une chaleur et à une pression extrêmes et elle peut exploser si elle est exposée à une grosse source de chaleur externe. Difficiles à recharger sans une ins- tallation appropriée, ces cellules sont souvent tout simplement jetées une fois déchargées."
                },
                railwaySpike: {
                    name: "Clou de rail",
                    pluralName: "Clous de rail",
                    desc: "Des pics de fer conçus pour fixer les voies ferrées. Même si ce sont des objets relativement ordinaires, ils ne sont pas si aisés à trouver."
                },
                point44: {
                    name: "Cartouche .44",
                    pluralName: "Cartouches .44",
                    desc: "À l’origine, la puissante cartouche .44 a été développée pour les revolvers. Son pouvoir d’arrêt considérable la rend idéale pour tous les habitants des Terres désolées qui ont besoin de munitions capables d’arrêter des monstres, humains ou non. Son potentiel est principalement limité par le fait qu’elle est difficile à trouver."
                },
                fivePoint56: {
                    name: "Cartouche 5.56",
                    pluralName: "Cartouches 5.56",
                    desc: "Une cartouche de fusil léger Précis, normalement utilisée dans les fusils d’assaut. Développées voilà des siècles pour le fusil standard de l’armée des États-Unis à cette époque, les cartouches 5,56 mm continuèrent d’être produites et utilisées jusqu’à la fin de la Grande Guerre et si vous savez où chercher, elles sont relativement faciles à dénicher."
                },
                miniNuke: {
                    name: "Mini-Nuke",
                    pluralName: "Mini-Nukes",
                    desc: "Une petite ogive nucléaire tactique de la taille d’un bal- lon de football américain conçue pour être propulsée à une distance suffisante du tireur par un lance-obus. Les mini-bombes nucléaires sont extrêmement rares et présentes en petite quantité seulement."
                }
            }
        },
        ui: {
            currentLanguage: "Français",
            scavenger: "Farfouilleur",
            ammo: "Munitions",
            armor: "Armure",
            beverage: "Boisson",
            chem: "Drogue",
            clothing: "Vêtement",
            food: "Nourriture",
            foraging: "Ceuillette",
            magazine: "Magazine",
            meleeWeapon: "Arme de corps à corps",
            nukacola: "Nuka-Cola",
            oddAndValue: "Curiosités & objets de valeurs",
            rangedWeapon: "Arme à distance",
            thrownExplosiveWeapon: "Arme (Projectile/Explosif)"
        }
    },
    en: {
        ui: {
            currentLanguage: "English",
            scavenger: "Scavenger",
            ammo: "Ammo",
            armor: "Armor",
            beverage: "Beverage",
            chem: "Chems",
            clothing: "Clothing",
            food: "Food",
            foraging: "Foraging",
            magazine: "Magazine",
            meleeWeapon: "Melee weapon",
            nukacola: "Nuka-Cola",
            oddAndValue: "Oddities and Valuables",
            rangedWeapon: "Ranged Weapons",
            thrownExplosiveWeapon: "Thrown/Explosive Weapons"
        }
    }
}