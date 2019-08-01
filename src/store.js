import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    "id": "Aatrox",
    "key": "266",
    "name": "Aatrox",
    "title": "the Darkin Blade",
    "image": {
      "full": "Aatrox.png",
      "sprite": "champion0.png",
      "group": "champion",
      "x": 0,
      "y": 0,
      "w": 48,
      "h": 48
    },
    "skins": [{
      "id": "266000",
      "num": 0,
      "name": "default",
      "chromas": false
    }, {
      "id": "266001",
      "num": 1,
      "name": "Justicar Aatrox",
      "chromas": false
    }, {
      "id": "266002",
      "num": 2,
      "name": "Mecha Aatrox",
      "chromas": false
    }, {
      "id": "266003",
      "num": 3,
      "name": "Sea Hunter Aatrox",
      "chromas": false
    }],
    "lore": "savior in dark times, Aatrox's true legacy may be a world filled with conflict and strife.<br><br>''Some fight for honor, some fight for glory. It matters only that you fight.''<br>-- Aatrox",
    "blurb": "Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's ...",
    "allytips": ["Avoid engaging in a fight with low health unless your Blood Well is full so that you regain enough health to continue fighting.", "Building Life Steal can be very potent on Aatrox to help compensate for his health costs.", "Massacre is great at turning the tide of a battle. Make sure to use it at the right moment to maximize its benefits."],
    "enemytips": ["When Aatrox takes fatal damage he is healed for the amount currently in his resource bar, landing a fatal blow on him while the resource bar is low will result in him reviving with a lower amount of Health.", "When Aatrox casts Dark Flight towards your location, avoid being knocked up by moving away from the center of impact.", "Aatrox is auto attack reliant for most of his damage and survivability, reducing his attack speed by purchasing Randuin's Omen or Frozen Heart can help reduce both of those components greatly."],
    "tags": ["Fighter", "Tank"],
    "partype": "BloodWell",
    "info": {
      "attack": 8,
      "defense": 4,
      "magic": 3,
      "difficulty": 4
    },
    "stats": {
      "hp": 537.8,
      "hpperlevel": 85.0,
      "mp": 105.6,
      "mpperlevel": 45.0,
      "movespeed": 345.0,
      "armor": 24.384,
      "armorperlevel": 3.8,
      "spellblock": 32.1,
      "spellblockperlevel": 1.25,
      "attackrange": 150.0,
      "hpregen": 6.59,
      "hpregenperlevel": 0.5,
      "mpregen": 0.0,
      "mpregenperlevel": 0.0,
      "crit": 0.0,
      "critperlevel": 0.0,
      "attackdamage": 60.376,
      "attackdamageperlevel": 3.2,
      "attackspeedoffset": -0.04,
      "attackspeedperlevel": 3.0
    },
    "spells": [{
      "id": "AatroxQ",
      "name": "Dark Flight",
      "description": "Aatrox takes flight and slams down at a targeted location, dealing damage and knocking up enemies at the center of impact.",
      "tooltip": "Aatrox takes flight and slams down at target location, dealing {{ e1 }}<span class=\"colorF88017\"> (+{{ a1 }})</span> physical damage and knocking up enemies at the center of impact for {{ e5 }} second.",
      "leveltip": {
        "label": ["Damage", "Cooldown"],
        "effect": ["{{ e1 }} -> {{ e1NL }}", "{{ cooldown }} -> {{ cooldownnNL }}"]
      },
      "maxrank": 5,
      "cooldown": [16, 15, 14, 13, 12],
      "cooldownBurn": "16/15/14/13/12",
      "cost": [0, 0, 0, 0, 0],
      "costBurn": "0",
      "effect": [null, [70, 115, 160, 205, 250],
        [22, 20, 18, 16, 14],
        [10, 10, 10, 10, 10],
        [225, 225, 225, 225, 225],
        [1, 1, 1, 1, 1]
      ],
      "effectBurn": [null, "70/115/160/205/250", "22/20/18/16/14", "10", "225", "1"],
      "vars": [{
        "link": "bonusattackdamage",
        "coeff": 0.6,
        "key": "a1"
      }],
      "costType": "pofcurrentHealth",
      "maxammo": "-1",
      "range": [25000, 25000, 25000, 25000, 25000],
      "rangeBurn": "25000",
      "image": {
        "full": "AatroxQ.png",
        "sprite": "spell0.png",
        "group": "spell",
        "x": 192,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "resource": "{{ e3 }}% of current Health "
    }, {
      "id": "AatroxW",
      "name": "Blood Thirst / Blood Price",
      "description": "While toggled on Aatrox deals bonus damage every third subsequent attack at the expense of his own Health. While toggled off Aatrox restores Health every third subsequent attack.",
      "tooltip": "<span class=\"colorFF9900\">Toggle Off:</span><span class=\"colore60000\"> Blood Thirst: </span>Every third attack, Aatrox restores {{ e3 }}<span class=\"colorF88017\"> (+{{ a1 }})</span> Health, increased by {{ e1 }}% ({{ f5 }}) when below half Health.<br><br><span class=\"colorFF9900\">Toggle On:</span><span class=\"color9900ff\"> Blood Price: </span>Every third attack, Aatrox deals {{ e2 }}<span class=\"colorF88017\"> (+{{ a2 }})</span> bonus physical damage and loses <span class=\"colorCC3300\">{{ f4 }}</span> Health.",
      "leveltip": {
        "label": ["Heal", "Bonus Damage"],
        "effect": ["{{ e3 }} -> {{ e3NL }}", "{{ e2 }} -> {{ e2NL }}"]
      },
      "maxrank": 5,
      "cooldown": [0.5, 0.5, 0.5, 0.5, 0.5],
      "cooldownBurn": "0.5",
      "cost": [0, 0, 0, 0, 0],
      "costBurn": "0",
      "effect": [null, [200, 200, 200, 200, 200],
        [60, 95, 130, 165, 200],
        [20, 25, 30, 35, 40],
        [25, 25, 25, 25, 25],
        [50, 50, 50, 50, 50],
        [0.5, 0.5, 0.5, 0.5, 0.5]
      ],
      "effectBurn": [null, "200", "60/95/130/165/200", "20/25/30/35/40", "25", "50", "0.5"],
      "vars": [{
        "link": "bonusattackdamage",
        "coeff": 0.25,
        "key": "a1"
      }, {
        "link": "bonusattackdamage",
        "coeff": 1.0,
        "key": "a2"
      }],
      "costType": "NoCost",
      "maxammo": "-1",
      "range": [1, 1, 1, 1, 1],
      "rangeBurn": "1",
      "image": {
        "full": "AatroxW.png",
        "sprite": "spell0.png",
        "group": "spell",
        "x": 240,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "resource": "No Cost"
    }, {
      "id": "AatroxE",
      "name": "Blades of Torment",
      "description": "Aatrox unleashes the power of his blade, dealing damage to enemies hit and slowing them.",
      "tooltip": "Aatrox unleashes the power of his blade, dealing {{ e1 }} <span class=\"color99FF99\">(+{{ a1 }}) <span class=\"colorF88017\">(+{{ a2 }})</span></span> Magic Damage to enemies hit and slowing them by {{ e2 }}% for {{ e4 }} seconds.",
      "leveltip": {
        "label": ["Damage", "Slow Duration", "Cooldown"],
        "effect": ["{{ e1 }} -> {{ e1NL }}", "{{ e4 }} -> {{ e4NL }}", "{{ cooldown }} -> {{ cooldownnNL }}"]
      },
      "maxrank": 5,
      "cooldown": [12, 11, 10, 9, 8],
      "cooldownBurn": "12/11/10/9/8",
      "cost": [0, 0, 0, 0, 0],
      "costBurn": "0",
      "effect": [null, [75, 110, 145, 180, 215],
        [40, 40, 40, 40, 40],
        [15, 15, 15, 15, 15],
        [1.75, 2, 2.25, 2.5, 2.75],
        [5, 5, 5, 5, 5]
      ],
      "effectBurn": [null, "75/110/145/180/215", "40", "15", "1.75/2/2.25/2.5/2.75", "5"],
      "vars": [{
        "link": "spelldamage",
        "coeff": 0.6,
        "key": "a1"
      }, {
        "link": "bonusattackdamage",
        "coeff": 0.6,
        "key": "a2"
      }],
      "costType": "pofcurrentHealth",
      "maxammo": "-1",
      "range": [1000, 1000, 1000, 1000, 1000],
      "rangeBurn": "1000",
      "image": {
        "full": "AatroxE.png",
        "sprite": "spell0.png",
        "group": "spell",
        "x": 288,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "resource": "{{ e5 }}% of current Health "
    }, {
      "id": "AatroxR",
      "name": "Massacre",
      "description": "Aatrox draws in the blood of his foes, damaging all nearby enemy champions around him and gaining increased Attack Speed and bonus Attack Range for a short duration.",
      "tooltip": "Aatrox draws in the blood of his foes, dealing {{ e2 }} <span class=\"color99FF99\">(+{{ a1 }})</span> magic damage to nearby enemy champions. Massacre fills Aatrox's Blood Well by {{ e7 }}% for each champion hit and grants him {{ e3 }}% attack speed and {{ e5 }} attack range for {{ e8 }} seconds.",
      "leveltip": {
        "label": ["Damage", "Attack Speed", "Cooldown"],
        "effect": ["{{ e2 }} -> {{ e2NL }}", "{{ e3 }}% -> {{ e3NL }}%", "{{ cooldown }} -> {{ cooldownnNL }}"]
      },
      "maxrank": 3,
      "cooldown": [100, 85, 70],
      "cooldownBurn": "100/85/70",
      "cost": [0, 0, 0],
      "costBurn": "0",
      "effect": [null, [12, 12, 12],
        [200, 300, 400],
        [40, 50, 60],
        [10, 10, 10],
        [175, 175, 175],
        [50, 65, 80],
        [20, 20, 20],
        [12, 12, 12]
      ],
      "effectBurn": [null, "12", "200/300/400", "40/50/60", "10", "175", "50/65/80", "20", "12"],
      "vars": [{
        "link": "spelldamage",
        "coeff": 1.0,
        "key": "a1"
      }],
      "costType": "NoCost",
      "maxammo": "-1",
      "range": [550, 550, 550],
      "rangeBurn": "550",
      "image": {
        "full": "AatroxR.png",
        "sprite": "spell0.png",
        "group": "spell",
        "x": 336,
        "y": 48,
        "w": 48,
        "h": 48
      },
      "resource": "No Cost"
    }],
    "passive": {
      "name": "Blood Well",
      "description": "When using an ability that costs Health, Aatrox stores the self-inflicted damage into the Blood Well. Upon taking fatal damage, Aatrox extracts the blood from the well and recovers it as Health over a brief duration. Additionally, Aatrox gains 1% Attack Speed for every 2% blood that is in the well.",
      "image": {
        "full": "Aatrox_Passive.png",
        "sprite": "passive0.png",
        "group": "passive",
        "x": 0,
        "y": 0,
        "w": 48,
        "h": 48
      }
    },
    "recommended": [{
      "champion": "Aatrox",
      "title": "Map12",
      "map": "HA",
      "mode": "ARAM",
      "type": "riot",
      "customTag": "",
      "sortrank": 0,
      "extensionPage": false,
      "customPanel": null,
      "blocks": [{
        "type": "starting",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "2051",
          "count": 1,
          "hideCount": false
        }, {
          "id": "1001",
          "count": 1,
          "hideCount": false
        }, {
          "id": "2031",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "essential",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "3074",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3742",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3047",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "offensive",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "3072",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3812",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3046",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "defensive",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "3143",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3065",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3156",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "consumables",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "2003",
          "count": 1,
          "hideCount": false
        }, {
          "id": "2140",
          "count": 1,
          "hideCount": false
        }]
      }]
    }, {
      "champion": "Aatrox",
      "title": "AatroxCS",
      "map": "CS",
      "mode": "ODIN",
      "type": "riot",
      "customTag": "",
      "sortrank": 0,
      "extensionPage": false,
      "customPanel": null,
      "blocks": [{
        "type": "starting",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "1055",
          "count": 1,
          "hideCount": false
        }, {
          "id": "2003",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3340",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "early",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "1001",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3077",
          "count": 1,
          "hideCount": false
        }, {
          "id": "1053",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "essential",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "3047",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3153",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3812",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "offensive",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "3078",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3074",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3071",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "defensive",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "3143",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3156",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3065",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "consumables",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "2003",
          "count": 1,
          "hideCount": true
        }, {
          "id": "2140",
          "count": 1,
          "hideCount": true
        }]
      }]
    }, {
      "champion": "Aatrox",
      "title": "AatroxFIRSTBLOOD",
      "map": "HA",
      "mode": "FIRSTBLOOD",
      "type": "riot",
      "customTag": "",
      "sortrank": 0,
      "extensionPage": false,
      "customPanel": null,
      "blocks": [{
        "type": "starting",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "SummonerSmite",
        "items": [{
          "id": "1055",
          "count": 1,
          "hideCount": false
        }, {
          "id": "2003",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3340",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "early",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "SummonerSmite",
        "items": [{
          "id": "1001",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3077",
          "count": 1,
          "hideCount": false
        }, {
          "id": "1053",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "essential",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "SummonerSmite",
        "items": [{
          "id": "3047",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3153",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3812",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "offensive",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "SummonerSmite",
        "items": [{
          "id": "3078",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3074",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3071",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "defensive",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "SummonerSmite",
        "items": [{
          "id": "3143",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3156",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3065",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "startingjungle",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "SummonerSmite",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "1041",
          "count": 1,
          "hideCount": false
        }, {
          "id": "2031",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3340",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "earlyjungle",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "SummonerSmite",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "1001",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3706",
          "count": 1,
          "hideCount": false
        }, {
          "id": "1043",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "essentialjungle",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "SummonerSmite",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "3047",
          "count": 1,
          "hideCount": false
        }, {
          "id": "1416",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3153",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "offensive",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "SummonerSmite",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "3074",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3812",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3071",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "defensive",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "SummonerSmite",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "3065",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3156",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3143",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "consumables",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "2003",
          "count": 1,
          "hideCount": true
        }, {
          "id": "2140",
          "count": 1,
          "hideCount": true
        }]
      }]
    }, {
      "champion": "Aatrox",
      "title": "AatroxKINGPORO",
      "map": "HA",
      "mode": "KINGPORO",
      "type": "riot",
      "customTag": "",
      "extensionPage": false,
      "customPanel": null,
      "blocks": [{
        "type": "KingPoroSnax",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "3680",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3681",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3682",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3683",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "starting",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "2051",
          "count": 1,
          "hideCount": false
        }, {
          "id": "1001",
          "count": 1,
          "hideCount": false
        }, {
          "id": "2031",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "essential",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "3074",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3742",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3047",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "offensive",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "3072",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3812",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3046",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "defensive",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "3143",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3065",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3156",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "consumables",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "2003",
          "count": 1,
          "hideCount": false
        }, {
          "id": "2140",
          "count": 1,
          "hideCount": false
        }]
      }]
    }, {
      "champion": "Aatrox",
      "title": "AatroxSIEGE",
      "map": "SR",
      "mode": "SIEGE",
      "type": "riot",
      "customTag": "",
      "extensionPage": false,
      "customPanel": null,
      "blocks": [{
        "type": "siegeOffense",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "3631",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3641",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3647",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3635",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3642",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "siegeDefense",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "3634",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3640",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3643",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3636",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3642",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "essential",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "3047",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3153",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3812",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "offensive",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "3078",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3074",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3071",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "defensive",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "3143",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3156",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3065",
          "count": 1,
          "hideCount": false
        }]
      }]
    }, {
      "champion": "Aatrox",
      "title": "AatroxSR",
      "map": "SR",
      "mode": "CLASSIC",
      "type": "riot",
      "customTag": "",
      "sortrank": 0,
      "extensionPage": false,
      "customPanel": null,
      "blocks": [{
        "type": "starting",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "SummonerSmite",
        "items": [{
          "id": "1055",
          "count": 1,
          "hideCount": false
        }, {
          "id": "2003",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3340",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "startingjungle",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "SummonerSmite",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "1041",
          "count": 1,
          "hideCount": false
        }, {
          "id": "2031",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3340",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "early",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "SummonerSmite",
        "items": [{
          "id": "1001",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3077",
          "count": 1,
          "hideCount": false
        }, {
          "id": "1053",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "earlyjungle",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "SummonerSmite",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "1001",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3706",
          "count": 1,
          "hideCount": false
        }, {
          "id": "1043",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "essential",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "SummonerSmite",
        "items": [{
          "id": "3047",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3153",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3812",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "essentialjungle",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "SummonerSmite",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "3047",
          "count": 1,
          "hideCount": false
        }, {
          "id": "1416",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3153",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "offensive",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "SummonerSmite",
        "items": [{
          "id": "3078",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3074",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3071",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "defensive",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "SummonerSmite",
        "items": [{
          "id": "3143",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3156",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3065",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "offensive",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "SummonerSmite",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "3074",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3812",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3071",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "defensive",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "SummonerSmite",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "3065",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3156",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3143",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "consumables",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "2003",
          "count": 1,
          "hideCount": true
        }, {
          "id": "2055",
          "count": 1,
          "hideCount": true
        }, {
          "id": "2140",
          "count": 1,
          "hideCount": true
        }]
      }]
    }, {
      "champion": "Aatrox",
      "title": "AatroxTT",
      "map": "TT",
      "mode": "CLASSIC",
      "type": "riot",
      "customTag": "",
      "sortrank": 0,
      "extensionPage": false,
      "customPanel": null,
      "blocks": [{
        "type": "starting",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "SummonerSmite",
        "items": [{
          "id": "1001",
          "count": 1,
          "hideCount": false
        }, {
          "id": "1055",
          "count": 1,
          "hideCount": false
        }, {
          "id": "2003",
          "count": 2,
          "hideCount": false
        }]
      }, {
        "type": "startingjungle",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "SummonerSmite",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "1041",
          "count": 1,
          "hideCount": false
        }, {
          "id": "1039",
          "count": 1,
          "hideCount": false
        }, {
          "id": "2003",
          "count": 3,
          "hideCount": false
        }]
      }, {
        "type": "essential",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "3047",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3153",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3071",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "offensive",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "3142",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3074",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3072",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "defensive",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "3065",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3156",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3143",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "consumables",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "2003",
          "count": 1,
          "hideCount": true
        }, {
          "id": "2140",
          "count": 1,
          "hideCount": true
        }]
      }]
    }, {
      "champion": "Aatrox",
      "title": "Beginner",
      "map": "SR",
      "mode": "INTRO",
      "type": "riot",
      "customTag": "",
      "extensionPage": false,
      "customPanel": null,
      "blocks": [{
        "type": "beginner_starter",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": 4,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "1054",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "beginner_starter",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": 5,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "1054",
          "count": 1,
          "hideCount": false
        }, {
          "id": "2003",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "beginner_advanced",
        "recMath": true,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "1036",
          "count": 1,
          "hideCount": false
        }, {
          "id": "1053",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "beginner_movementspeed",
        "recMath": true,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "1001",
          "count": 1,
          "hideCount": false
        }, {
          "id": "1029",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3047",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "beginner_legendaryitem",
        "recMath": true,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "1053",
          "count": 1,
          "hideCount": false
        }, {
          "id": "1038",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3072",
          "count": 1,
          "hideCount": false
        }]
      }, {
        "type": "beginner_morelegendaryitems",
        "recMath": false,
        "recSteps": false,
        "minSummonerLevel": -1,
        "maxSummonerLevel": -1,
        "showIfSummonerSpell": "",
        "hideIfSummonerSpell": "",
        "items": [{
          "id": "3068",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3031",
          "count": 1,
          "hideCount": false
        }, {
          "id": "3046",
          "count": 1,
          "hideCount": false
        }]
      }]
    }]
  }
});
