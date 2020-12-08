// Game Constants

/** 操作已经成功纳入计划 */
declare const OK: OK;
declare const ERR_NOT_OWNER: ERR_NOT_OWNER;

/** 无法找到路径。 */
declare const ERR_NO_PATH: ERR_NO_PATH;
declare const ERR_NAME_EXISTS: ERR_NAME_EXISTS;
declare const ERR_BUSY: ERR_BUSY;
declare const ERR_NOT_FOUND: ERR_NOT_FOUND;
declare const ERR_NOT_ENOUGH_RESOURCES: ERR_NOT_ENOUGH_RESOURCES;
declare const ERR_NOT_ENOUGH_ENERGY: ERR_NOT_ENOUGH_ENERGY;
declare const ERR_INVALID_TARGET: ERR_INVALID_TARGET;
declare const ERR_FULL: ERR_FULL;
declare const ERR_NOT_IN_RANGE: ERR_NOT_IN_RANGE;
declare const ERR_INVALID_ARGS: ERR_INVALID_ARGS;
declare const ERR_TIRED: ERR_TIRED;
declare const ERR_NO_BODYPART: ERR_NO_BODYPART;
declare const ERR_NOT_ENOUGH_EXTENSIONS: ERR_NOT_ENOUGH_EXTENSIONS;
declare const ERR_RCL_NOT_ENOUGH: ERR_RCL_NOT_ENOUGH;
declare const ERR_GCL_NOT_ENOUGH: ERR_GCL_NOT_ENOUGH;

/** 位于房间顶部的出口位置。 */
declare const FIND_EXIT_TOP: FIND_EXIT_TOP;

/** 位于房间右侧的出口位置。 */
declare const FIND_EXIT_RIGHT: FIND_EXIT_RIGHT;

/** 位于房间底部的出口位置。 */
declare const FIND_EXIT_BOTTOM: FIND_EXIT_BOTTOM;

/** 位于房间左侧的出口位置。 */
declare const FIND_EXIT_LEFT: FIND_EXIT_LEFT;

/** 所有出口位置。 */
declare const FIND_EXIT: FIND_EXIT;

/** 所有 creep。 */
declare const FIND_CREEPS: FIND_CREEPS;

/** 所有属于您的 creep。 */
declare const FIND_MY_CREEPS: FIND_MY_CREEPS;

/** 所有不属于您的 creep。 */
declare const FIND_HOSTILE_CREEPS: FIND_HOSTILE_CREEPS;

/** 仍有能量的 source。 */
declare const FIND_SOURCES_ACTIVE: FIND_SOURCES_ACTIVE;

/** 所有 source。 */
declare const FIND_SOURCES: FIND_SOURCES;

/** 所有掉落的资源。 */
declare const FIND_DROPPED_RESOURCES: FIND_DROPPED_RESOURCES;

/** 所有建筑。 */
declare const FIND_STRUCTURES: FIND_STRUCTURES;

/** 所有属于您的建筑，不包含中立建筑。 */
declare const FIND_MY_STRUCTURES: FIND_MY_STRUCTURES;

/** 所有其他玩家的建筑，不包含中立建筑。 */
declare const FIND_HOSTILE_STRUCTURES: FIND_HOSTILE_STRUCTURES;

/** 所有旗帜。 */
declare const FIND_FLAGS: FIND_FLAGS;

/** 所有建筑工地。 */
declare const FIND_CONSTRUCTION_SITES: FIND_CONSTRUCTION_SITES;

/** 所有属于您的 spawn。 */
declare const FIND_MY_SPAWNS: FIND_MY_SPAWNS;

/** 所有其他玩家的 spawn。 */
declare const FIND_HOSTILE_SPAWNS: FIND_HOSTILE_SPAWNS;

/** 所有属于您的建筑工地。 */
declare const FIND_MY_CONSTRUCTION_SITES: FIND_MY_CONSTRUCTION_SITES;

/** 所有其他玩家的建筑工地。 */
declare const FIND_HOSTILE_CONSTRUCTION_SITES: FIND_HOSTILE_CONSTRUCTION_SITES;

/** 所有矿床。 */
declare const FIND_MINERALS: FIND_MINERALS;

/** 所有将落地的核弹。 */
declare const FIND_NUKES: FIND_NUKES;

/** 所有墓碑。 */
declare const FIND_TOMBSTONES: FIND_TOMBSTONES;
declare const FIND_POWER_CREEPS: FIND_POWER_CREEPS;
declare const FIND_MY_POWER_CREEPS: FIND_MY_POWER_CREEPS;
declare const FIND_HOSTILE_POWER_CREEPS: FIND_HOSTILE_POWER_CREEPS;
declare const FIND_DEPOSITS: FIND_DEPOSITS;
declare const FIND_RUINS: FIND_RUINS;

declare const TOP: TOP;
declare const TOP_RIGHT: TOP_RIGHT;
declare const RIGHT: RIGHT;
declare const BOTTOM_RIGHT: BOTTOM_RIGHT;
declare const BOTTOM: BOTTOM;
declare const BOTTOM_LEFT: BOTTOM_LEFT;
declare const LEFT: LEFT;
declare const TOP_LEFT: TOP_LEFT;

declare const COLOR_RED: COLOR_RED;
declare const COLOR_PURPLE: COLOR_PURPLE;
declare const COLOR_BLUE: COLOR_BLUE;
declare const COLOR_CYAN: COLOR_CYAN;
declare const COLOR_GREEN: COLOR_GREEN;
declare const COLOR_YELLOW: COLOR_YELLOW;
declare const COLOR_ORANGE: COLOR_ORANGE;
declare const COLOR_BROWN: COLOR_BROWN;
declare const COLOR_GREY: COLOR_GREY;
declare const COLOR_WHITE: COLOR_WHITE;
declare const COLORS_ALL: ColorConstant[];

declare const CREEP_SPAWN_TIME: 3;
declare const CREEP_LIFE_TIME: 1500;
declare const CREEP_CLAIM_LIFE_TIME: 600;
declare const CREEP_CORPSE_RATE: 0.2;

declare const OBSTACLE_OBJECT_TYPES: [
  "spawn",
  "creep",
  "powerCreep",
  "source",
  "mineral",
  "deposit",
  "controller",
  "constructedWall",
  "extension",
  "link",
  "storage",
  "tower",
  "observer",
  "powerSpawn",
  "powerBank",
  "lab",
  "terminal",
  "nuker",
  "factory",
  "invaderCore",
];

declare const ENERGY_REGEN_TIME: 300;
declare const ENERGY_DECAY: 1000;

declare const REPAIR_COST: 0.01;

declare const RAMPART_DECAY_AMOUNT: 300;
declare const RAMPART_DECAY_TIME: 100;
declare const RAMPART_HITS: 1;
declare const RAMPART_HITS_MAX: {
  [rcl: number]: number;
  2: 300000;
  3: 1000000;
  4: 3000000;
  5: 10000000;
  6: 30000000;
  7: 100000000;
  8: 300000000;
};

declare const SPAWN_HITS: 5000;
declare const SPAWN_ENERGY_START: 300;
declare const SPAWN_ENERGY_CAPACITY: 300;

declare const SOURCE_ENERGY_CAPACITY: 3000;
declare const SOURCE_ENERGY_NEUTRAL_CAPACITY: 1500;
declare const SOURCE_ENERGY_KEEPER_CAPACITY: 4000;

declare const WALL_HITS: 1;
declare const WALL_HITS_MAX: 300000000;

declare const EXTENSION_HITS: 1000;
declare const EXTENSION_ENERGY_CAPACITY: {
  [rcl: number]: number;
  0: 50;
  1: 50;
  2: 50;
  3: 50;
  4: 50;
  5: 50;
  6: 50;
  7: 100;
  8: 200;
};

declare const ROAD_HITS: 5000;
declare const ROAD_WEAROUT: 1;
declare const ROAD_WEAROUT_POWER_CREEP: 100;
declare const ROAD_DECAY_AMOUNT: 100;
declare const ROAD_DECAY_TIME: 1000;

declare const LINK_HITS: 1000;
declare const LINK_HITS_MAX: 1000;
declare const LINK_CAPACITY: 800;
declare const LINK_COOLDOWN: 1;
declare const LINK_LOSS_RATIO: 0.03;

declare const STORAGE_CAPACITY: 1000000;
declare const STORAGE_HITS: 10000;

declare const FACTORY_HITS: 1000;
declare const FACTORY_CAPACITY: 50000;

declare const BODYPART_COST: Record<BodyPartConstant, number>;

declare const BODYPARTS_ALL: BodyPartConstant[];

declare const CARRY_CAPACITY: 50;
declare const HARVEST_POWER: 2;
declare const HARVEST_MINERAL_POWER: 1;
declare const HARVEST_DEPOSIT_POWER: 1;
declare const REPAIR_POWER: 100;
declare const DISMANTLE_POWER: 50;
declare const BUILD_POWER: 5;
declare const ATTACK_POWER: 30;
declare const UPGRADE_CONTROLLER_POWER: 1;
declare const RANGED_ATTACK_POWER: 10;
declare const HEAL_POWER: 12;
declare const RANGED_HEAL_POWER: 4;
declare const DISMANTLE_COST: 0.005;

declare const MOVE: MOVE;
declare const WORK: WORK;
declare const CARRY: CARRY;
declare const ATTACK: ATTACK;
declare const RANGED_ATTACK: RANGED_ATTACK;
declare const TOUGH: TOUGH;
declare const HEAL: HEAL;
declare const CLAIM: CLAIM;

declare const CONSTRUCTION_COST: Record<BuildableStructureConstant, number>;

declare const CONSTRUCTION_COST_ROAD_SWAMP_RATIO: 5;
declare const CONSTRUCTION_COST_ROAD_WALL_RATIO: 150;

declare const STRUCTURE_EXTENSION: STRUCTURE_EXTENSION;
declare const STRUCTURE_RAMPART: STRUCTURE_RAMPART;
declare const STRUCTURE_ROAD: STRUCTURE_ROAD;
declare const STRUCTURE_SPAWN: STRUCTURE_SPAWN;
declare const STRUCTURE_LINK: STRUCTURE_LINK;
declare const STRUCTURE_WALL: STRUCTURE_WALL;
declare const STRUCTURE_KEEPER_LAIR: STRUCTURE_KEEPER_LAIR;
declare const STRUCTURE_CONTROLLER: STRUCTURE_CONTROLLER;
declare const STRUCTURE_STORAGE: STRUCTURE_STORAGE;
declare const STRUCTURE_TOWER: STRUCTURE_TOWER;
declare const STRUCTURE_OBSERVER: STRUCTURE_OBSERVER;
declare const STRUCTURE_POWER_BANK: STRUCTURE_POWER_BANK;
declare const STRUCTURE_POWER_SPAWN: STRUCTURE_POWER_SPAWN;
declare const STRUCTURE_EXTRACTOR: STRUCTURE_EXTRACTOR;
declare const STRUCTURE_LAB: STRUCTURE_LAB;
declare const STRUCTURE_TERMINAL: STRUCTURE_TERMINAL;
declare const STRUCTURE_CONTAINER: STRUCTURE_CONTAINER;
declare const STRUCTURE_NUKER: STRUCTURE_NUKER;
declare const STRUCTURE_FACTORY: STRUCTURE_FACTORY;
declare const STRUCTURE_INVADER_CORE: STRUCTURE_INVADER_CORE;
declare const STRUCTURE_PORTAL: STRUCTURE_PORTAL;

declare const RESOURCE_ENERGY: RESOURCE_ENERGY;
declare const RESOURCE_POWER: RESOURCE_POWER;
declare const RESOURCE_OPS: RESOURCE_OPS;
declare const RESOURCE_UTRIUM: RESOURCE_UTRIUM;
declare const RESOURCE_LEMERGIUM: RESOURCE_LEMERGIUM;
declare const RESOURCE_KEANIUM: RESOURCE_KEANIUM;
declare const RESOURCE_GHODIUM: RESOURCE_GHODIUM;
declare const RESOURCE_ZYNTHIUM: RESOURCE_ZYNTHIUM;
declare const RESOURCE_OXYGEN: RESOURCE_OXYGEN;
declare const RESOURCE_HYDROGEN: RESOURCE_HYDROGEN;
declare const RESOURCE_CATALYST: RESOURCE_CATALYST;
declare const RESOURCE_HYDROXIDE: RESOURCE_HYDROXIDE;
declare const RESOURCE_ZYNTHIUM_KEANITE: RESOURCE_ZYNTHIUM_KEANITE;
declare const RESOURCE_UTRIUM_LEMERGITE: RESOURCE_UTRIUM_LEMERGITE;
declare const RESOURCE_UTRIUM_HYDRIDE: RESOURCE_UTRIUM_HYDRIDE;
declare const RESOURCE_UTRIUM_OXIDE: RESOURCE_UTRIUM_OXIDE;
declare const RESOURCE_KEANIUM_HYDRIDE: RESOURCE_KEANIUM_HYDRIDE;
declare const RESOURCE_KEANIUM_OXIDE: RESOURCE_KEANIUM_OXIDE;
declare const RESOURCE_LEMERGIUM_HYDRIDE: RESOURCE_LEMERGIUM_HYDRIDE;
declare const RESOURCE_LEMERGIUM_OXIDE: RESOURCE_LEMERGIUM_OXIDE;
declare const RESOURCE_ZYNTHIUM_HYDRIDE: RESOURCE_ZYNTHIUM_HYDRIDE;
declare const RESOURCE_ZYNTHIUM_OXIDE: RESOURCE_ZYNTHIUM_OXIDE;
declare const RESOURCE_GHODIUM_HYDRIDE: RESOURCE_GHODIUM_HYDRIDE;
declare const RESOURCE_GHODIUM_OXIDE: RESOURCE_GHODIUM_OXIDE;
declare const RESOURCE_UTRIUM_ACID: RESOURCE_UTRIUM_ACID;
declare const RESOURCE_UTRIUM_ALKALIDE: RESOURCE_UTRIUM_ALKALIDE;
declare const RESOURCE_KEANIUM_ACID: RESOURCE_KEANIUM_ACID;
declare const RESOURCE_KEANIUM_ALKALIDE: RESOURCE_KEANIUM_ALKALIDE;
declare const RESOURCE_LEMERGIUM_ACID: RESOURCE_LEMERGIUM_ACID;
declare const RESOURCE_LEMERGIUM_ALKALIDE: RESOURCE_LEMERGIUM_ALKALIDE;
declare const RESOURCE_ZYNTHIUM_ACID: RESOURCE_ZYNTHIUM_ACID;
declare const RESOURCE_ZYNTHIUM_ALKALIDE: RESOURCE_ZYNTHIUM_ALKALIDE;
declare const RESOURCE_GHODIUM_ACID: RESOURCE_GHODIUM_ACID;
declare const RESOURCE_GHODIUM_ALKALIDE: RESOURCE_GHODIUM_ALKALIDE;
declare const RESOURCE_CATALYZED_UTRIUM_ACID: RESOURCE_CATALYZED_UTRIUM_ACID;
declare const RESOURCE_CATALYZED_UTRIUM_ALKALIDE:
  RESOURCE_CATALYZED_UTRIUM_ALKALIDE;
declare const RESOURCE_CATALYZED_KEANIUM_ACID: RESOURCE_CATALYZED_KEANIUM_ACID;
declare const RESOURCE_CATALYZED_KEANIUM_ALKALIDE:
  RESOURCE_CATALYZED_KEANIUM_ALKALIDE;
declare const RESOURCE_CATALYZED_LEMERGIUM_ACID:
  RESOURCE_CATALYZED_LEMERGIUM_ACID;
declare const RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE:
  RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE;
declare const RESOURCE_CATALYZED_ZYNTHIUM_ACID:
  RESOURCE_CATALYZED_ZYNTHIUM_ACID;
declare const RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE:
  RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE;
declare const RESOURCE_CATALYZED_GHODIUM_ACID: RESOURCE_CATALYZED_GHODIUM_ACID;
declare const RESOURCE_CATALYZED_GHODIUM_ALKALIDE:
  RESOURCE_CATALYZED_GHODIUM_ALKALIDE;

declare const RESOURCE_BIOMASS: RESOURCE_BIOMASS;
declare const RESOURCE_METAL: RESOURCE_METAL;
declare const RESOURCE_MIST: RESOURCE_MIST;
declare const RESOURCE_SILICON: RESOURCE_SILICON;

declare const RESOURCE_UTRIUM_BAR: RESOURCE_UTRIUM_BAR;
declare const RESOURCE_LEMERGIUM_BAR: RESOURCE_LEMERGIUM_BAR;
declare const RESOURCE_ZYNTHIUM_BAR: RESOURCE_ZYNTHIUM_BAR;
declare const RESOURCE_KEANIUM_BAR: RESOURCE_KEANIUM_BAR;
declare const RESOURCE_GHODIUM_MELT: RESOURCE_GHODIUM_MELT;
declare const RESOURCE_OXIDANT: RESOURCE_OXIDANT;
declare const RESOURCE_REDUCTANT: RESOURCE_REDUCTANT;
declare const RESOURCE_PURIFIER: RESOURCE_PURIFIER;
declare const RESOURCE_BATTERY: RESOURCE_BATTERY;

declare const RESOURCE_COMPOSITE: RESOURCE_COMPOSITE;
declare const RESOURCE_CRYSTAL: RESOURCE_CRYSTAL;
declare const RESOURCE_LIQUID: RESOURCE_LIQUID;

declare const RESOURCE_WIRE: RESOURCE_WIRE;
declare const RESOURCE_SWITCH: RESOURCE_SWITCH;
declare const RESOURCE_TRANSISTOR: RESOURCE_TRANSISTOR;
declare const RESOURCE_MICROCHIP: RESOURCE_MICROCHIP;
declare const RESOURCE_CIRCUIT: RESOURCE_CIRCUIT;
declare const RESOURCE_DEVICE: RESOURCE_DEVICE;

declare const RESOURCE_CELL: RESOURCE_CELL;
declare const RESOURCE_PHLEGM: RESOURCE_PHLEGM;
declare const RESOURCE_TISSUE: RESOURCE_TISSUE;
declare const RESOURCE_MUSCLE: RESOURCE_MUSCLE;
declare const RESOURCE_ORGANOID: RESOURCE_ORGANOID;
declare const RESOURCE_ORGANISM: RESOURCE_ORGANISM;

declare const RESOURCE_ALLOY: RESOURCE_ALLOY;
declare const RESOURCE_TUBE: RESOURCE_TUBE;
declare const RESOURCE_FIXTURES: RESOURCE_FIXTURES;
declare const RESOURCE_FRAME: RESOURCE_FRAME;
declare const RESOURCE_HYDRAULICS: RESOURCE_HYDRAULICS;
declare const RESOURCE_MACHINE: RESOURCE_MACHINE;

declare const RESOURCE_CONDENSATE: RESOURCE_CONDENSATE;
declare const RESOURCE_CONCENTRATE: RESOURCE_CONCENTRATE;
declare const RESOURCE_EXTRACT: RESOURCE_EXTRACT;
declare const RESOURCE_SPIRIT: RESOURCE_SPIRIT;
declare const RESOURCE_EMANATION: RESOURCE_EMANATION;
declare const RESOURCE_ESSENCE: RESOURCE_ESSENCE;

declare const RESOURCES_ALL: ResourceConstant[];

declare const SUBSCRIPTION_TOKEN: SUBSCRIPTION_TOKEN;
declare const CPU_UNLOCK: CPU_UNLOCK;
declare const PIXEL: PIXEL;
declare const ACCESS_KEY: ACCESS_KEY;

declare const PIXEL_CPU_COST: 5000;

declare const CONTROLLER_LEVELS: { [level: number]: number };
declare const CONTROLLER_STRUCTURES: Record<
  BuildableStructureConstant,
  { [level: number]: number }
>;

declare const CONTROLLER_DOWNGRADE: { [level: number]: number };
declare const CONTROLLER_DOWNGRADE_RESTORE: number;
declare const CONTROLLER_DOWNGRADE_SAFEMODE_THRESHOLD: number;
declare const CONTROLLER_CLAIM_DOWNGRADE: number;
declare const CONTROLLER_RESERVE: number;
declare const CONTROLLER_RESERVE_MAX: number;
declare const CONTROLLER_MAX_UPGRADE_PER_TICK: number;
declare const CONTROLLER_ATTACK_BLOCKED_UPGRADE: number;
declare const CONTROLLER_NUKE_BLOCKED_UPGRADE: number;

declare const SAFE_MODE_DURATION: 20000;
declare const SAFE_MODE_COOLDOWN: 50000;
declare const SAFE_MODE_COST: 1000;

declare const TOWER_HITS: number;
declare const TOWER_CAPACITY: number;
declare const TOWER_ENERGY_COST: number;
declare const TOWER_POWER_ATTACK: number;
declare const TOWER_POWER_HEAL: number;
declare const TOWER_POWER_REPAIR: number;
declare const TOWER_OPTIMAL_RANGE: number;
declare const TOWER_FALLOFF_RANGE: number;
declare const TOWER_FALLOFF: number;

declare const OBSERVER_HITS: number;
declare const OBSERVER_RANGE: number;

declare const POWER_BANK_HITS: number;
declare const POWER_BANK_CAPACITY_MAX: number;
declare const POWER_BANK_CAPACITY_MIN: number;
declare const POWER_BANK_CAPACITY_CRIT: number;
declare const POWER_BANK_DECAY: number;
declare const POWER_BANK_HIT_BACK: number;

declare const POWER_SPAWN_HITS: number;
declare const POWER_SPAWN_ENERGY_CAPACITY: number;
declare const POWER_SPAWN_POWER_CAPACITY: number;
declare const POWER_SPAWN_ENERGY_RATIO: number;

declare const EXTRACTOR_HITS: number;
declare const EXTRACTOR_COOLDOWN: number;

declare const LAB_HITS: number;
declare const LAB_MINERAL_CAPACITY: number;
declare const LAB_ENERGY_CAPACITY: number;
declare const LAB_BOOST_ENERGY: number;
declare const LAB_BOOST_MINERAL: number;
declare const LAB_COOLDOWN: number;
declare const LAB_REACTION_AMOUNT: number;

declare const GCL_POW: number;
declare const GCL_MULTIPLY: number;
declare const GCL_NOVICE: number;

declare const MODE_SIMULATION: string;
declare const MODE_SURVIVAL: string;
declare const MODE_WORLD: string;
declare const MODE_ARENA: string;

declare const TERRAIN_MASK_WALL: TERRAIN_MASK_WALL;
declare const TERRAIN_MASK_SWAMP: TERRAIN_MASK_SWAMP;
declare const TERRAIN_MASK_LAVA: TERRAIN_MASK_LAVA;

declare const MAX_CONSTRUCTION_SITES: number;
declare const MAX_CREEP_SIZE: number;

declare const MINERAL_REGEN_TIME: number;
declare const MINERAL_MIN_AMOUNT: Record<MineralConstant, number>;
declare const MINERAL_RANDOM_FACTOR: number;

declare const MINERAL_DENSITY: {
  [level: number]: number;
  1: number;
  2: number;
  3: number;
  4: number;
};

declare const MINERAL_DENSITY_PROBABILITY: {
  [level: number]: number;
  1: number;
  2: number;
  3: number;
  4: number;
};

declare const MINERAL_DENSITY_CHANGE: number;

declare const DENSITY_LOW: number;
declare const DENSITY_MODERATE: number;
declare const DENSITY_HIGH: number;
declare const DENSITY_ULTRA: number;

declare const DEPOSIT_EXHAUST_MULTIPLY: number;
declare const DEPOSIT_EXHAUST_POW: number;
declare const DEPOSIT_DECAY_TIME: number;

declare const TERMINAL_CAPACITY: number;
declare const TERMINAL_COOLDOWN: number;
declare const TERMINAL_HITS: number;
declare const TERMINAL_SEND_COST: number;
declare const TERMINAL_MIN_SEND: number;

declare const CONTAINER_HITS: number;
declare const CONTAINER_CAPACITY: number;
declare const CONTAINER_DECAY: number;
declare const CONTAINER_DECAY_TIME: number;
declare const CONTAINER_DECAY_TIME_OWNED: number;

declare const NUKER_HITS: number;
declare const NUKER_COOLDOWN: number;
declare const NUKER_ENERGY_CAPACITY: number;
declare const NUKER_GHODIUM_CAPACITY: number;
declare const NUKE_LAND_TIME: number;
declare const NUKE_RANGE: number;
declare const NUKE_DAMAGE: {
  [range: number]: number;
  0: number;
  1: number;
  4: number;
};

declare const REACTIONS: {
  [resource: string]: { [resource: string]: string };
  H: {
    O: "OH";
    L: "LH";
    K: "KH";
    U: "UH";
    Z: "ZH";
    G: "GH";
  };
  O: {
    H: "OH";
    L: "LO";
    K: "KO";
    U: "UO";
    Z: "ZO";
    G: "GO";
  };
  Z: {
    K: "ZK";
    H: "ZH";
    O: "ZO";
  };
  L: {
    U: "UL";
    H: "LH";
    O: "LO";
  };
  K: {
    Z: "ZK";
    H: "KH";
    O: "KO";
  };
  G: {
    H: "GH";
    O: "GO";
  };
  U: {
    L: "UL";
    H: "UH";
    O: "UO";
  };
  OH: {
    UH: "UH2O";
    UO: "UHO2";
    ZH: "ZH2O";
    ZO: "ZHO2";
    KH: "KH2O";
    KO: "KHO2";
    LH: "LH2O";
    LO: "LHO2";
    GH: "GH2O";
    GO: "GHO2";
  };
  X: {
    UH2O: "XUH2O";
    UHO2: "XUHO2";
    LH2O: "XLH2O";
    LHO2: "XLHO2";
    KH2O: "XKH2O";
    KHO2: "XKHO2";
    ZH2O: "XZH2O";
    ZHO2: "XZHO2";
    GH2O: "XGH2O";
    GHO2: "XGHO2";
  };
  ZK: {
    UL: "G";
  };
  UL: {
    ZK: "G";
  };
  LH: {
    OH: "LH2O";
  };
  ZH: {
    OH: "ZH2O";
  };
  GH: {
    OH: "GH2O";
  };
  KH: {
    OH: "KH2O";
  };
  UH: {
    OH: "UH2O";
  };
  LO: {
    OH: "LHO2";
  };
  ZO: {
    OH: "ZHO2";
  };
  KO: {
    OH: "KHO2";
  };
  UO: {
    OH: "UHO2";
  };
  GO: {
    OH: "GHO2";
  };
  LH2O: {
    X: "XLH2O";
  };
  KH2O: {
    X: "XKH2O";
  };
  ZH2O: {
    X: "XZH2O";
  };
  UH2O: {
    X: "XUH2O";
  };
  GH2O: {
    X: "XGH2O";
  };
  LHO2: {
    X: "XLHO2";
  };
  UHO2: {
    X: "XUHO2";
  };
  KHO2: {
    X: "XKHO2";
  };
  ZHO2: {
    X: "XZHO2";
  };
  GHO2: {
    X: "XGHO2";
  };
};

declare const REACTION_TIME: {
  OH: 20;
  ZK: 5;
  UL: 5;
  G: 5;
  UH: 10;
  UH2O: 5;
  XUH2O: 60;
  UO: 10;
  UHO2: 5;
  XUHO2: 60;
  KH: 10;
  KH2O: 5;
  XKH2O: 60;
  KO: 10;
  KHO2: 5;
  XKHO2: 60;
  LH: 15;
  LH2O: 10;
  XLH2O: 65;
  LO: 10;
  LHO2: 5;
  XLHO2: 60;
  ZH: 20;
  ZH2O: 40;
  XZH2O: 160;
  ZO: 10;
  ZHO2: 5;
  XZHO2: 60;
  GH: 10;
  GH2O: 15;
  XGH2O: 80;
  GO: 10;
  GHO2: 30;
  XGHO2: 150;
};

declare const BOOSTS: {
  [part: string]: { [boost: string]: { [action: string]: number } };
  work: {
    UO: {
      harvest: 3;
    };
    UHO2: {
      harvest: 5;
    };
    XUHO2: {
      harvest: 7;
    };
    LH: {
      build: 1.5;
      repair: 1.5;
    };
    LH2O: {
      build: 1.8;
      repair: 1.8;
    };
    XLH2O: {
      build: 2;
      repair: 2;
    };
    ZH: {
      dismantle: 2;
    };
    ZH2O: {
      dismantle: 3;
    };
    XZH2O: {
      dismantle: 4;
    };
    GH: {
      upgradeController: 1.5;
    };
    GH2O: {
      upgradeController: 1.8;
    };
    XGH2O: {
      upgradeController: 2;
    };
  };
  attack: {
    UH: {
      attack: 2;
    };
    UH2O: {
      attack: 3;
    };
    XUH2O: {
      attack: 4;
    };
  };
  ranged_attack: {
    KO: {
      rangedAttack: 2;
      rangedMassAttack: 2;
    };
    KHO2: {
      rangedAttack: 3;
      rangedMassAttack: 3;
    };
    XKHO2: {
      rangedAttack: 4;
      rangedMassAttack: 4;
    };
  };
  heal: {
    LO: {
      heal: 2;
      rangedHeal: 2;
    };
    LHO2: {
      heal: 3;
      rangedHeal: 3;
    };
    XLHO2: {
      heal: 4;
      rangedHeal: 4;
    };
  };
  carry: {
    KH: {
      capacity: 2;
    };
    KH2O: {
      capacity: 3;
    };
    XKH2O: {
      capacity: 4;
    };
  };
  move: {
    ZO: {
      fatigue: 2;
    };
    ZHO2: {
      fatigue: 3;
    };
    XZHO2: {
      fatigue: 4;
    };
  };
  tough: {
    GO: {
      damage: 0.7;
    };
    GHO2: {
      damage: 0.5;
    };
    XGHO2: {
      damage: 0.3;
    };
  };
};

declare const INTERSHARD_RESOURCES: InterShardResourceConstant[];

declare const COMMODITIES: Record<
  CommodityConstant | MineralConstant | RESOURCE_GHODIUM | RESOURCE_ENERGY,
  {
    level?: number;
    amount: number;
    cooldown: number;
    components: Record<
      | DepositConstant
      | CommodityConstant
      | MineralConstant
      | RESOURCE_ENERGY
      | RESOURCE_GHODIUM,
      number
    >;
  }
>;

declare const LOOK_CREEPS: LOOK_CREEPS;
declare const LOOK_ENERGY: LOOK_ENERGY;
declare const LOOK_RESOURCES: LOOK_RESOURCES;
declare const LOOK_SOURCES: LOOK_SOURCES;
declare const LOOK_MINERALS: LOOK_MINERALS;
declare const LOOK_DEPOSITS: LOOK_DEPOSITS;
declare const LOOK_STRUCTURES: LOOK_STRUCTURES;
declare const LOOK_FLAGS: LOOK_FLAGS;
declare const LOOK_CONSTRUCTION_SITES: LOOK_CONSTRUCTION_SITES;
declare const LOOK_NUKES: LOOK_NUKES;
declare const LOOK_TERRAIN: LOOK_TERRAIN;
declare const LOOK_TOMBSTONES: LOOK_TOMBSTONES;
declare const LOOK_POWER_CREEPS: LOOK_POWER_CREEPS;
declare const LOOK_RUINS: LOOK_RUINS;

declare const ORDER_SELL: ORDER_SELL;
declare const ORDER_BUY: ORDER_BUY;

declare const MARKET_MAX_ORDERS: 300;
declare const MARKET_ORDER_LIFE_TIME: 2592000000; // 1000*60*60*24*30

declare const INVADERS_ENERGY_GOAL: number;

declare const SYSTEM_USERNAME: string;

declare const TOMBSTONE_DECAY_PER_PART: 5;
declare const TOMBSTONE_DECAY_POWER_CREEP: 500;

declare const RUIN_DECAY: 500;
declare const RUIN_DECAY_STRUCTURES: {
  powerBank: 10;
};

declare const EVENT_ATTACK: EVENT_ATTACK;
declare const EVENT_OBJECT_DESTROYED: EVENT_OBJECT_DESTROYED;
declare const EVENT_ATTACK_CONTROLLER: EVENT_ATTACK_CONTROLLER;
declare const EVENT_BUILD: EVENT_BUILD;
declare const EVENT_HARVEST: EVENT_HARVEST;
declare const EVENT_HEAL: EVENT_HEAL;
declare const EVENT_REPAIR: EVENT_REPAIR;
declare const EVENT_RESERVE_CONTROLLER: EVENT_RESERVE_CONTROLLER;
declare const EVENT_UPGRADE_CONTROLLER: EVENT_UPGRADE_CONTROLLER;
declare const EVENT_EXIT: EVENT_EXIT;
declare const EVENT_POWER: EVENT_POWER;
declare const EVENT_TRANSFER: EVENT_TRANSFER;

declare const EVENT_ATTACK_TYPE_MELEE: EVENT_ATTACK_TYPE_MELEE;
declare const EVENT_ATTACK_TYPE_RANGED: EVENT_ATTACK_TYPE_RANGED;
declare const EVENT_ATTACK_TYPE_RANGED_MASS: EVENT_ATTACK_TYPE_RANGED_MASS;
declare const EVENT_ATTACK_TYPE_DISMANTLE: EVENT_ATTACK_TYPE_DISMANTLE;
declare const EVENT_ATTACK_TYPE_HIT_BACK: EVENT_ATTACK_TYPE_HIT_BACK;
declare const EVENT_ATTACK_TYPE_NUKE: EVENT_ATTACK_TYPE_NUKE;

declare const EVENT_HEAL_TYPE_MELEE: EVENT_HEAL_TYPE_MELEE;
declare const EVENT_HEAL_TYPE_RANGED: EVENT_HEAL_TYPE_RANGED;

declare const POWER_LEVEL_MULTIPLY: 1000;
declare const POWER_LEVEL_POW: 2;
declare const POWER_CREEP_SPAWN_COOLDOWN: 28800000; // 8 * 3600 * 1000
declare const POWER_CREEP_DELETE_COOLDOWN: 86400000; // 24 * 3600 * 1000
declare const POWER_CREEP_MAX_LEVEL: 25;
declare const POWER_CREEP_LIFE_TIME: 5000;

declare const POWER_CLASS: {
  OPERATOR: "operator";
};

declare const PWR_GENERATE_OPS: PWR_GENERATE_OPS;
declare const PWR_OPERATE_SPAWN: PWR_OPERATE_SPAWN;
declare const PWR_OPERATE_TOWER: PWR_OPERATE_TOWER;
declare const PWR_OPERATE_STORAGE: PWR_OPERATE_STORAGE;
declare const PWR_OPERATE_LAB: PWR_OPERATE_LAB;
declare const PWR_OPERATE_EXTENSION: PWR_OPERATE_EXTENSION;
declare const PWR_OPERATE_OBSERVER: PWR_OPERATE_OBSERVER;
declare const PWR_OPERATE_TERMINAL: PWR_OPERATE_TERMINAL;
declare const PWR_DISRUPT_SPAWN: PWR_DISRUPT_SPAWN;
declare const PWR_DISRUPT_TOWER: PWR_DISRUPT_TOWER;
declare const PWR_DISRUPT_SOURCE: PWR_DISRUPT_SOURCE;
declare const PWR_SHIELD: PWR_SHIELD;
declare const PWR_REGEN_SOURCE: PWR_REGEN_SOURCE;
declare const PWR_REGEN_MINERAL: PWR_REGEN_MINERAL;
declare const PWR_DISRUPT_TERMINAL: PWR_DISRUPT_TERMINAL;
declare const PWR_OPERATE_POWER: PWR_OPERATE_POWER;
declare const PWR_FORTIFY: PWR_FORTIFY;
declare const PWR_OPERATE_CONTROLLER: PWR_OPERATE_CONTROLLER;
declare const PWR_OPERATE_FACTORY: PWR_OPERATE_FACTORY;

declare const EFFECT_INVULNERABILITY: EFFECT_INVULNERABILITY;
declare const EFFECT_COLLAPSE_TIMER: EFFECT_COLLAPSE_TIMER;

declare const INVADER_CORE_HITS: 1000000;
declare const INVADER_CORE_CREEP_SPAWN_TIME: {
  0: 0;
  1: 0;
  2: 6;
  3: 3;
  4: 2;
  5: 1;
};
declare const INVADER_CORE_EXPAND_TIME: 15000;
declare const INVADER_CORE_CONTROLLER_POWER: 100;
declare const INVADER_CORE_CONTROLLER_DOWNGRADE: 5000;
declare const STRONGHOLD_RAMPART_HITS: {
  0: 0;
  1: 50000;
  2: 200000;
  3: 500000;
  4: 1000000;
  5: 2000000;
};
declare const STRONGHOLD_DECAY_TICKS: 150000;

declare const POWER_INFO: {
  [powerID: number]: {
    className: PowerClassConstant;
    level: number[];
    cooldown: number;
    effect?: number[];
    range?: number;
    ops?: number | number[];
    duration?: number | number[];
  };
  [PWR_GENERATE_OPS]: {
    className: POWER_CLASS["OPERATOR"];
    level: [0, 2, 7, 14, 22];
    cooldown: 50;
    effect: [1, 2, 4, 6, 8];
  };
  [PWR_OPERATE_SPAWN]: {
    className: POWER_CLASS["OPERATOR"];
    level: [0, 2, 7, 14, 22];
    cooldown: 300;
    duration: 1000;
    range: 3;
    ops: 100;
    effect: [0.9, 0.7, 0.5, 0.35, 0.2];
  };
  [PWR_OPERATE_TOWER]: {
    className: POWER_CLASS["OPERATOR"];
    level: [0, 2, 7, 14, 22];
    cooldown: 10;
    duration: 100;
    range: 3;
    ops: 10;
    effect: [1.1, 1.2, 1.3, 1.4, 1.5];
  };
  [PWR_OPERATE_STORAGE]: {
    className: POWER_CLASS["OPERATOR"];
    level: [0, 2, 7, 14, 22];
    cooldown: 800;
    duration: 1000;
    range: 3;
    ops: 100;
    effect: [500000, 1000000, 2000000, 4000000, 7000000];
  };
  [PWR_OPERATE_LAB]: {
    className: POWER_CLASS["OPERATOR"];
    level: [0, 2, 7, 14, 22];
    cooldown: 50;
    duration: 1000;
    range: 3;
    ops: 10;
    effect: [2, 4, 6, 8, 10];
  };
  [PWR_OPERATE_EXTENSION]: {
    className: POWER_CLASS["OPERATOR"];
    level: [0, 2, 7, 14, 22];
    cooldown: 50;
    range: 3;
    ops: 2;
    effect: [0.2, 0.4, 0.6, 0.8, 1.0];
  };
  [PWR_OPERATE_OBSERVER]: {
    className: POWER_CLASS["OPERATOR"];
    level: [0, 2, 7, 14, 22];
    cooldown: 400;
    duration: [200, 400, 600, 800, 1000];
    range: 3;
    ops: 10;
  };
  [PWR_OPERATE_TERMINAL]: {
    className: POWER_CLASS["OPERATOR"];
    level: [0, 2, 7, 14, 22];
    cooldown: 500;
    duration: 1000;
    range: 3;
    ops: 100;
    effect: [0.9, 0.8, 0.7, 0.6, 0.5];
  };
  [PWR_DISRUPT_SPAWN]: {
    className: POWER_CLASS["OPERATOR"];
    level: [0, 2, 7, 14, 22];
    cooldown: 5;
    range: 20;
    ops: 10;
    duration: [1, 2, 3, 4, 5];
  };
  [PWR_DISRUPT_TOWER]: {
    className: POWER_CLASS["OPERATOR"];
    level: [0, 2, 7, 14, 22];
    cooldown: 0;
    duration: 5;
    range: 50;
    ops: 10;
    effect: [0.9, 0.8, 0.7, 0.6, 0.5];
  };
  [PWR_DISRUPT_SOURCE]: {
    className: POWER_CLASS["OPERATOR"];
    level: [0, 2, 7, 14, 22];
    cooldown: 100;
    range: 3;
    ops: 100;
    duration: [100, 200, 300, 400, 500];
  };
  [PWR_SHIELD]: {
    className: POWER_CLASS["OPERATOR"];
    level: [0, 2, 7, 14, 22];
    effect: [5000, 10000, 15000, 20000, 25000];
    duration: 50;
    cooldown: 20;
    energy: 100;
  };
  [PWR_REGEN_SOURCE]: {
    className: POWER_CLASS["OPERATOR"];
    level: [10, 11, 12, 14, 22];
    cooldown: 100;
    duration: 300;
    range: 3;
    effect: [50, 100, 150, 200, 250];
    period: 15;
  };
  [PWR_REGEN_MINERAL]: {
    className: POWER_CLASS["OPERATOR"];
    level: [10, 11, 12, 14, 22];
    cooldown: 100;
    duration: 100;
    range: 3;
    effect: [2, 4, 6, 8, 10];
    period: 10;
  };
  [PWR_DISRUPT_TERMINAL]: {
    className: POWER_CLASS["OPERATOR"];
    level: [20, 21, 22, 23, 24];
    cooldown: 8;
    duration: 10;
    range: 50;
    ops: [50, 40, 30, 20, 10];
  };
  [PWR_FORTIFY]: {
    className: POWER_CLASS["OPERATOR"];
    level: [0, 2, 7, 14, 22];
    cooldown: 5;
    range: 3;
    ops: 5;
    duration: [1, 2, 3, 4, 5];
  };
  [PWR_OPERATE_POWER]: {
    className: POWER_CLASS["OPERATOR"];
    level: [10, 11, 12, 14, 22];
    cooldown: 800;
    range: 3;
    duration: 1000;
    ops: 200;
    effect: [1, 2, 3, 4, 5];
  };
  [PWR_OPERATE_CONTROLLER]: {
    className: POWER_CLASS["OPERATOR"];
    level: [20, 21, 22, 23, 24];
    cooldown: 800;
    range: 3;
    duration: 1000;
    ops: 200;
    effect: [10, 20, 30, 40, 50];
  };
  [PWR_OPERATE_FACTORY]: {
    className: POWER_CLASS["OPERATOR"];
    level: [0, 2, 7, 14, 22];
    cooldown: 1000;
    range: 3;
    duration: 1000;
    ops: 100;
  };
};
/**
 * 一个正在建设中的工地。可以使用游戏界面右侧的 'Construct' 按钮创建工地或 [Room.createConstructionSite](https://screeps-cn.github.io/api/#Room.createConstructionSite) 方法。
 *
 * 要在工地建造一个建筑，需要给工人 creep 一些能量并执行 [Creep.build](https://screeps-cn.github.io/api/#Creep.build) 动作。
 *
 * 如果想移除敌人的工地，只需让一个 creep 踩在上面即可。
 */
interface ConstructionSite<
  T extends BuildableStructureConstant = BuildableStructureConstant,
> extends RoomObject {
  readonly prototype: ConstructionSite;
  /**
   * 全局唯一的对象标识。你可以通过调用 [`Game.getObjectById`](https://screeps-cn.github.io/api/#Game.getObjectById) 方法取得对象实例。
   */
  id: Id<this>;
  /**
   * 你是否拥有这个工地。
   */
  my: boolean;
  /**
   * 建筑拥有者信息。
   */
  owner: Owner;
  /**
   * 当前建造进度。
   */
  progress: number;
  /**
   * 完成建造所需的建造总进度。
   */
  progressTotal: number;
  /**
   * `STRUCTURE_*` 常量之一。
   */
  structureType: T;
  /**
   * 删除这个工地。
   * @returns 如下错误码之一：
   *
   * 常量 | 值 | 描述
   * :---- | :--- | :-----
   * `OK` | `0` | 这个操作已经成功纳入计划。
   * `ERR_NOT_OWNER` | `-1` | 你不是这个工地的拥有者，或者这不是你的房间。
   */
  remove(): number;
}

interface ConstructionSiteConstructor
  extends _Constructor<ConstructionSite>, _ConstructorById<ConstructionSite> {}

declare const ConstructionSite: ConstructionSiteConstructor;
/**
 * creep 是你的单位。
 *
 * creep 可以移动、采集能量、建造建筑、攻击其他 creep 以及执行其他动作。
 *
 * 每个 creep 都由最多 50 个身体部件构成，身体部件的类型如下：
 *
 * ![](https://screeps-cn.github.io/api/img/bodyparts.png)
 *
 * 身体部件 | 孵化成本 | 每个部件效果
 * :---- | :--- | :-----
 * `MOVE` | `50` | 每 tick 减少 2 点疲惫值
 * `WORK` | `100` | 每 tick 从能量源采集 2 单位能量。
 * || 每 tick 从矿区采集 1 单位矿物。
 * || 每 tick 增加工地建设进度 5 点，花费 5 单位能量。
 * || 每 tick 增加建筑 100 耐久度，花费 1 单位能量。
 * || 每 tick 拆减建筑 50 点耐久，并返还 0.25 单位能量。
 * || 每 tick 提高控制器升级进度 1 点，花费 1 单位能量。
 * `CARRY` | `50` | 携带最多 50 单位资源。
 * `ATTACK` | `80` | 对相邻的 creep 或建筑造成 30 点伤害。
 * `RANGED_ATTACK` | `150` | 单个目标时，每 tick 对 creep 或建筑造成 10 点伤害，范围为 3 格。
 * || 多个目标时，每 tick 对范围内所有 creep 与建筑造成 1-4-10 点伤害，具体伤害取决于距离，范围为 3 格。
 * `HEAL` | `250` | 治疗对象可为自己或其它 creep。自愈或治疗相邻 creep 时每 tick 恢复 12 点耐久，一定距离内远程治疗每 tick 恢复 4 点耐久。
 * `CLAIM` | `600` | 占领一个中立房间的控制器。
 * || 每部件每 tick 使己方对中立房间控制器的预定时间增加 1 tick，或使其他玩家的预定时间减少 1 tick。
 * || 每部件每 tick 使其他玩家控制器降级计数器加速 300 tick。
 * || 注：拥有该部件的 creep 寿命只有 600 tick，且无法被 renew。
 * `TOUGH` | `10` | 无附加效果，唯一作用是增加 creep 的最大耐久值。可被强化以承受更多伤害。
 */
interface Creep extends RoomObject {
  readonly prototype: Creep;

  /**
   * 一个描述了该 creep 身体部件的数组，每一个数组元素都拥有如下的属性:
   *
   * 参数 | 类型 | 描述
   * :---- | :--- | :-----
   * boost | `string` \| `undefined` | 如果该身体部件被强化(boost)了，则该属性指定了强化所用的化合物类型。化合物为 `RESOURCE_*` 常量之一。
   * type | `string` | 身体部件常量之一。
   * hits | `number` | 该身体部件剩余的生命值。
   */
  body: BodyPartDefinition[];
  /**
   * **已废弃**
   *
   * 一个包含了该建筑中所存储的货物的 [`Store`](https://screeps-cn.github.io/api/#Store) 对象。
   * @deprecated [`Creep.store`](https://screeps-cn.github.io/api/#Creep.store) 的别名。
   */
  carry: StoreDefinition;
  /**
   * **已废弃**
   *
   * 返回指定资源的存储容量, 对于通用型 store，当 reource 参数为 `undefined` 则返回总容量。
   * @deprecated [`Creep.store.getCapacity()`](https://screeps-cn.github.io/api/#Store.getCapacity) 的别名。
   */
  carryCapacity: number;
  /**
   * 每次移动的疲劳值指示器，当该值大于零时 creep 无法移动。
   */
  fatigue: number;
  /**
   * 当前的 creep 生命值。
   */
  hits: number;
  /**
   * 该 creep 的最大生命值。
   */
  hitsMax: number;
  /**
   * 一个唯一的对象标识。你可以使用 [`Game.getObjectById`](https://screeps-cn.github.io/api/#Game.getObjectById) 方法获取对象实例。
   */
  id: Id<this>;
  /**
   * 指向 `Memory.creeps[creep.name]` 的链接。你可以用它来快速访问该 creep 的特定内存对象。[点此了解更多关于 memory 的信息](https://screeps-cn.github.io/global-objects.html#Memory-object)
   */
  memory: CreepMemory;
  /**
   * 该 creep 属于您还是其他人。
   */
  my: boolean;
  /**
   * creep 的名字。您可以在创建一个新的 creep 时给它取名，名称一旦指定无法更改。此名称是 `Game.creeps` 对象中指向该 creep 对象的哈希键。你可以使用它来快速访问到该 creep。
   */
  name: string;
  /**
   * 该 creep 的所有者信息。
   */
  owner: Owner;
  /**
   * Room 对象的链接。如果对象是标志或工地并且放置在你不可见的房间中，则可能为 `undefined`。
   */
  room: Room;
  /**
   * 该 creep 是否仍在孵化中。
   */
  spawning: boolean;
  /**
   * creep 所说的最后一句话。
   */
  saying: string;
  /**
   * 一个包含了该建筑中所存储的货物的 [`Store`](https://screeps-cn.github.io/api/#Store) 对象。
   */
  store: StoreDefinition;
  /**
   * 该 creep 还有多少 tick 死亡。
   *
   * 当 creep 还正在孵化时，值为 `undefined`。
   */
  ticksToLive: number | undefined;
  /**
   * 使用近战攻击其他 creep、超能(power) creep 或建筑。需要 ATTACK 身体部件。如果目标在 rampart 中，则优先攻击 rampart。
   *
   * 目标必须与 creep 相邻，如果目标是一个带有 ATTACK 身体的 creep 并且没有自己没有在 rampart 中，则该目标会自动进行反击。
   *
   * @param target 要攻击的目标
   *
   * @returns 如下错误码之一：
   *
   * 常量 | 值 | 描述
   * :---- | :--- | :-----
   * `OK` | `0` | 这个操作已经成功纳入计划。
   * `ERR_NOT_OWNER` | `-1` | 你不是这个 creep 的拥有者。
   * `ERR_BUSY` | `-4` | 这个 creep 依然在孵化中。
   * `ERR_INVALID_TARGET` | `-7` | 这个目标不是一个有效的攻击目标。
   * `ERR_NOT_IN_RANGE` | `-9` | 目标太远了。
   * `ERR_NO_BODYPART` | `-12` | 这个 creep 身上没有 `ATTACK` 部件。
   */
  attack(target: AnyCreep | Structure): CreepActionReturnCode;
  /**
   * 攻击时，每个 `CLAIM` 身体部件都能使得房间控制器的降级计时器降低 300 tick，或者将预定计时器降低 1 tick。
   *
   * 如果受到攻击的控制器已经有所属者，则接下来的 1000 tick 将无法升级(upgrade)或再次进行攻击。目标必须与 creep 相邻。
   *
   * @param target 目标房间控制器对象。
   *
   * @returns  如下错误码之一：
   *
   * 常量 | 值 | 描述
   * :---- | :--- | :-----
   * `OK` | `0` | 这个操作已经成功纳入计划。
   * `ERR_NOT_OWNER` | `-1` | 你不是这个 creep 的拥有者。
   * `ERR_BUSY` | `-4` | 这个 creep 依然在孵化中。
   * `ERR_INVALID_TARGET` | `-7` | 该目标不存在有效的所属者或者预订者对象。
   * `ERR_NOT_IN_RANGE` | `-9` | 目标太远了。
   * `ERR_TIRED` | `-11` | 您必须等待控制器可以被再次攻击。
   * `ERR_NO_BODYPART` | `-12` | 这个 creep 身上没有 `CLAIM` 部件。
   */
  attackController(target: StructureController): CreepActionReturnCode;
  /**
   * 使用自己携带的能量来在目标工地上建造一个建筑。需要 `WORK` 和 `CARRY` 身体部件。
   *
   * 目标必须位于以 creep 为中心的 7*7 正方形区域内。
   *
   * @param target 待建造的目标工地。
   * @returns 如下错误码之一：
   *
   * 常量 | 值 | 描述
   * :---- | :--- | :-----
   * `OK` | `0` | 这个操作已经成功纳入计划。
   * `ERR_NOT_OWNER` | `-1` | 你不是这个 creep 的拥有者。
   * `ERR_BUSY` | `-4` | 这个 creep 依然在孵化中。
   * `ERR_NOT_ENOUGH_RESOURCES` | `-6` | 这个 creep 没有携带任何能量。
   * `ERR_INVALID_TARGET` | `-7` | 该目标不是一个有效的建筑工地(construction site)或者此处无法建造建筑(有可能是 creep 站在该地块上导致的)。
   * `ERR_NOT_IN_RANGE` | `-9` | 目标太远了。
   * `ERR_NO_BODYPART` | `-12` | 这个 creep 身上没有 `WORK` 部件。
   */
  build(
    target: ConstructionSite,
  ): CreepActionReturnCode | ERR_NOT_ENOUGH_RESOURCES | ERR_RCL_NOT_ENOUGH;
  /**
   * 取消当前 tick 中给出的某个指令。
   * @param methodName 需要被取消的 creep 方法名。
   * @returns 如下错误码之一：
   *
   * 常量 | 值 | 描述
   * :---- | :--- | :-----
   * `OK` | `0` | 这个操作被成功取消了。
   * `ERR_NOT_FOUND` | `-5` | 找不到给出的指令名。
   */
  cancelOrder(methodName: string): OK | ERR_NOT_FOUND;
  /**
   * 占领一个中立的房间。
   *
   * 需要 CLAIM 身体部件。
   *
   * - 目标必须与 creep 相邻。你需要有对应的全局控制等级(Global Control Level)才能占领新的房间。
   * - 如果你没有足够的 GCL。请考虑[预定(reserving)](https://screeps-cn.github.io/api/#reserveController) 该房间。
   *
   * [点击了解更多](https://screeps-cn.github.io/control.html#Global-Control-Level)
   *
   * @param target 目标控制中心对象。
   * @returns 如下错误码之一：
   *
   * 常量 | 值 | 描述
   * :---- | :--- | :-----
   * `OK` | `0` | 这个操作已经成功纳入计划。
   * `ERR_NOT_OWNER` | `-1` | 你不是这个 creep 的拥有者。
   * `ERR_BUSY` | `-4` | 这个 creep 依然在孵化中。
   * `ERR_NOT_ENOUGH_RESOURCES` | `-6` | 这个 creep 没有携带任何能量。
   * `ERR_INVALID_TARGET` | `-7` | 目标不是一个有效的中立控制中心对象。
   * `ERR_FULL` | `-8` | 你不能在新手区占领超过3个房间。
   * `ERR_NOT_IN_RANGE` | `-9` | 目标太远了。
   * `ERR_NO_BODYPART` | `-12` | 这个 creep 身上没有 `CLAIM` 部件。
   * `ERR_GCL_NOT_ENOUGH` | `-15` | 你的全局控制等级不足。
   */
  claimController(
    target: StructureController,
  ): CreepActionReturnCode | ERR_FULL | ERR_GCL_NOT_ENOUGH;
  /**
   * 拆解任意可以建造的建筑（即使是敌人的）并且返回 50% 其修理所花的能量。
   *
   * 需要 `WORK` 身体部件。如果 creep 有空余的 `CARRY` 身体部件，则会直接将能量转移进去；否则能量将掉落在地上。
   *
   * 目标必须与 creep 相邻。
   * @param target 目标建筑。
   */
  dismantle(target: Structure): CreepActionReturnCode;
  /**
   * 将资源丢弃到地上。
   * @param resourceType `RESOURCE_*` 常量之一。
   * @param amount 丢弃资源的数量。如果没有这个参数，丢弃全部资源。
   */
  drop(
    resourceType: ResourceConstant,
    amount?: number,
  ): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NOT_ENOUGH_RESOURCES;
  /**
   * 向房间控制器添加一个新的安全模式激活次数。creep 必须与房间控制器相邻并且带有 1000 ghodium 资源。
   * @param target 目标控制中心。
   * @returns
   * 如下错误码之一：
   *
   * 常量 | 值 | 描述
   * :---- | :--- | :-----
   * `OK` | `0` | 这个操作已经成功纳入计划。
   * `ERR_NOT_OWNER` | `-1` | 你不是这个 creep 的拥有者。
   * `ERR_BUSY` | `-4` | 这个 creep 依然在孵化中。
   * `ERR_NOT_ENOUGH_RESOURCES` | `-6` | 这个 creep 没有足够的 ghodium。
   * `ERR_INVALID_TARGET` | `-7` | 目标不是一个有效的控制中心对象。
   * `ERR_NOT_IN_RANGE` | `-9` | 目标太远了。
   */
  generateSafeMode(target: StructureController): CreepActionReturnCode;
  /**
   * 获取指定类型可用的身体部件数量。完全毁坏的部件不会被计算。
   * @param type 一个身体部件类型，下列身体部件类型常量之一：`MOVE`, `WORK`, `CARRY`, `ATTACK`, `RANGED_ATTACK`, `HEAL`, `TOUGH`, `CLAIM`
   */
  getActiveBodyparts(type: BodyPartConstant): number;
  /**
   * 从 source 中采集能量或者从 mineral 或 deposit 中采集资源。
   *
   * 需要 `WORK` 身体部件。
   *
   * 如果 creep 有空余的 `CARRY` 身体，则会自动将采集到的资源转移进去；否则将会掉落在地上。
   *
   * 目标必须与 creep 相邻。
   * @param target 要采集的对象。
   * @returns
   * 如下错误码之一：
   *
   * 常量 | 值 | 描述
   * :---- | :--- | :-----
   * `OK` | `0` | 这个操作已经成功纳入计划。
   * `ERR_NOT_OWNER` | `-1` | 你不是该 creep 的所有者，或者其他玩家已经占领或者预定了该房间的控制器。
   * `ERR_BUSY` | `-4` | 这个 creep 依然在孵化中。
   * `ERR_NOT_FOUND` | `-5` | 未找到 extractor。你必须建造一个 extractor 来开采矿物。[了解更多](https://screeps-cn.github.io/minerals.html)
   * `ERR_NOT_ENOUGH_RESOURCES` | `-6` | 目标中已经没有可采集的能量或者矿物。
   * `ERR_INVALID_TARGET` | `-7` | 目标不是有效的 source 或者 mineral 对象。
   * `ERR_NOT_IN_RANGE` | `-9` | 目标太远了。
   * `ERR_TIRED` | `-11` | extractor 仍在冷却中。
   * `ERR_NO_BODYPART` | `-12` | 这个 creep 身上没有 `WORK` 部件。
   */
  harvest(
    target: Source | Mineral | Deposit,
  ): CreepActionReturnCode | ERR_NOT_FOUND | ERR_NOT_ENOUGH_RESOURCES;
  /**
   * 治疗自己或者其他 creep。这将恢复目标 creep 受损身体部件的功能，并恢复已损失的生命值(hits)。
   *
   * 需要 `HEAL` 身体部件。
   *
   * 目标必须与 creep 相邻。
   * @param target 目标 creep 对象。
   * @returns
   * 如下错误码之一：
   *
   * 常量 | 值 | 描述
   * :---- | :--- | :-----
   * `OK` | `0` | 这个操作已经成功纳入计划。
   * `ERR_NOT_OWNER` | `-1` | 你不是这个 creep 的拥有者。
   * `ERR_BUSY` | `-4` | 这个 creep 依然在孵化中。
   * `ERR_INVALID_TARGET` | `-7` | 目标不是有效的 creep 对象。
   * `ERR_NOT_IN_RANGE` | `-9` | 目标太远了。
   * `ERR_NO_BODYPART` | `-12` | 这个 creep 身上没有 `HEAL` 部件。
   */
  heal(target: AnyCreep): CreepActionReturnCode;
  /**
   * 使 creep 朝指定方向移动一个地块。
   *
   * 需要 `MOVE` 身体部件，或者其他 creep 在其附近并拉动该 creep。
   *
   * 如果你对着一个相邻 creep 调用了 move 方法，将会使本 creep 跳过 `ERR_TIRED` 和 `ERR_NO_BODYPART` 检查; 否则将跳过 `ERR_NOT_IN_RANGE` 检查。
   * @param direction 一个相邻的 creep 或者下列常量之一：
   * - `TOP`
   * - `TOP_LEFT`
   * - `RIGHT`
   * - `BOTTOM_RIGHT`
   * - `BOTTOM`
   * - `BOTTOM_LEFT`
   * - `LEFT`
   * - `TOP_LEFT`
   * @returns
   * 如下错误码之一：
   *
   * 常量 | 值 | 描述
   * :---- | :--- | :-----
   * `OK` | `0` | 这个操作已经成功纳入计划。
   * `ERR_NOT_OWNER` | `-1` | 你不是这个 creep 的拥有者。
   * `ERR_BUSY` | `-4` | 这个 creep 依然在孵化中。
   * `ERR_NOT_IN_RANGE` | `-9` | 目标 creep 距离过远。
   * `ERR_INVALID_ARGS` | `-10` | 提供的方向不正确。
   * `ERR_TIRED` | `-11` | 该 creep 的疲劳（fatigue）计数器不为零。
   * `ERR_NO_BODYPART` | `-12` | 该 creep 没有 `MOVE` 身体部件。
   */
  move(direction: DirectionConstant): CreepMoveReturnCode;
  move(
    target: Creep,
  ): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NOT_IN_RANGE | ERR_INVALID_ARGS;
  /**
   * 使用预先定义的路径进行移动。需要 `MOVE` 身体部件。
   * @param path 从 [`Room.findPath`](https://screeps-cn.github.io/api/#Room.findPath),
   * [`RoomPosition.findPathTo`](https://screeps-cn.github.io/api/#RoomPosition.findPathTo)
   * 或 [`PathFinder.search`](https://screeps-cn.github.io/api/#PathFinder.search) 方法返回的路径值，数组或序列字符串形式都可接受。
   */
  moveByPath(
    path: PathStep[] | RoomPosition[] | string,
  ): CreepMoveReturnCode | ERR_NOT_FOUND | ERR_INVALID_ARGS;
  /**
   * 在本房间内查询到目标的最佳路径并向目标移动。
   * 该方法是 [`pos.findPathTo()`](https://screeps-cn.github.io/api/#RoomPosition.findPathTo) 与 [`move()`](https://screeps-cn.github.io/api/#Creep.move) 的调用简写。
   * 如果目标在其他房间，则相应的出口将被当做目标(在本房间中)。
   *
   * 需要 `MOVE` 身体部件。
   * @param x 目标在 creep 所在房间中的 x 坐标。
   * @param y 目标在 creep 所在房间中的 y 坐标。
   * @param opts 可选的附加对象信息
   */
  moveTo(
    x: number,
    y: number,
    opts?: MoveToOpts,
  ): CreepMoveReturnCode | ERR_NO_PATH | ERR_INVALID_TARGET;
  /**
   * 在本房间内查询到目标的最佳路径并向目标移动。
   * 该方法是 [`pos.findPathTo()`](https://screeps-cn.github.io/api/#RoomPosition.findPathTo) 与 [`move()`](https://screeps-cn.github.io/api/#Creep.move) 的调用简写。
   * 如果目标在其他房间，则相应的出口将被当做目标(在本房间中)。
   *
   * 需要 `MOVE` 身体部件。
   * @param target 可以是 [`RoomPosition`](https://screeps-cn.github.io/api/#RoomPosition) 对象或者任何包含 `RoomPosition` 属性的对象。该位置不必和 creep 在同一房间。
   * @param opts 可选的附加对象信息
   */
  moveTo(
    target: RoomPosition | { pos: RoomPosition },
    opts?: MoveToOpts,
  ): CreepMoveReturnCode | ERR_NO_PATH | ERR_INVALID_TARGET | ERR_NOT_FOUND;
  /**
   * 当 creep 受到攻击时切换自动通知。通知将发送到您的帐户邮箱。默认情况下启用。
   * @param enabled 是否启用通知。
   */
  notifyWhenAttacked(
    enabled: boolean,
  ): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_INVALID_ARGS;
  /**
   * 捡起一个物品 (如捡起一些能量)。需要 `CARRY` 身体部件。目标必须与 creep 相邻或者和 creep 在相同位置。
   * @param target 要捡起的目标对象。
   */
  pickup(target: Resource): CreepActionReturnCode | ERR_FULL;
  /**
   * 帮助其他 creep 跟随该 creep。目标 creep 移动产生的疲劳值将由该 creep 承担。
   *
   * 需要 `MOVE` 身体部件。目标必须与 creep 相邻。该 creep 必须[移动](https://screeps-cn.github.io/api/#Creep.move)到其他地方，目标 creep 也必须朝该 creep 移动。
   * @param target 目标 creep。
   */
  pull(
    target: Creep,
  ):
    | OK
    | ERR_NOT_OWNER
    | ERR_BUSY
    | ERR_INVALID_TARGET
    | ERR_NOT_IN_RANGE
    | ERR_NO_BODYPART;
  /**
   * 远程攻击其他 creep 或者建筑。
   *
   * 需要 `RANGED_ATTACK` 身体部件。如果目标在 rampart 中，则 rampart 将被优先攻击。
   *
   * 目标必须位于以 creep 为中心的 7*7 正方形区域内。
   * @param target 要攻击的目标。
   */
  rangedAttack(target: AnyCreep | Structure): CreepActionReturnCode;
  /**
   * 远程治疗其他 creep。
   *
   * 这将恢复目标 creep 受损身体部件的功能，并恢复已损失的生命值(hits)。
   *
   * 需要 `HEAL` 身体部件。目标必须位于以 creep 为中心的 7*7 正方形区域内。
   * @param target 目标 creep 对象。
   */
  rangedHeal(target: AnyCreep): CreepActionReturnCode;
  /**
   * 对以该 creep 为中心，3 格范围内的所有敌方 creep 和建筑进行攻击。
   *
   * 需要 `RANGED_ATTACK` 身体部件。
   *
   * 对目标造成的伤害随距离的增加而衰减。友方单位不会受到影响。
   */
  rangedMassAttack(): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NO_BODYPART;
  /**
   * 使用携带的能量修复受损建筑。需要 `WORK` 和 `CARRY` 身体部件。目标必须位于以 creep 为中心的 7*7 正方形区域内。
   * @param target 要修复的目标建筑。
   */
  repair(target: Structure): CreepActionReturnCode | ERR_NOT_ENOUGH_RESOURCES;
  /**
   * 暂时阻止其他玩家占领该房间控制器并且将 source 的能量上限恢复至正常容量。
   *
   * 每 tick 执行该命令都可以让控制器的不可占领时间增加，增加的 tick 等同于 `CLAIM` 身体部件的数量。
   *
   * 最大的预定时间为 5,000 tick。
   *
   * 目标必须与 creep 相邻。
   * @param target 要预定的目标控制器对象。
   */
  reserveController(target: StructureController): CreepActionReturnCode;
  /**
   * 在该 creep 上显示带有指定内容的可视对话气泡。此信息只会显示 1 tick。
   *
   * 你可以通过 saying 属性获取说过的最后一条信息。
   *
   * 允许使用任何有效的 Unicode 字符。包括 emoji。
   * @param message 要显示的信息，最长 10 字符。
   * @param toPublic 设置为 `true` 来让其他玩家也能看到该信息。默认为 `false`。
   */
  say(message: string, toPublic?: boolean): OK | ERR_NOT_OWNER | ERR_BUSY;
  /**
   * 用对所有玩家可见的任意文本对控制器进行签名。该文本将显示在世界地图的房间 UI 中。并可通过 api 进行访问。你可以签名无主甚至敌对玩家的控制器。目标必须与 creep 相邻。传递一个空字符串来移除签名。
   * @param target 要签名的目标控制器对象。
   * @param text 签名文本，最多 100 字符，之后的内容将被截断。
   */
  signController(
    target: StructureController,
    text: string,
  ): OK | ERR_BUSY | ERR_INVALID_TARGET | ERR_NOT_IN_RANGE;
  /**
   * 立刻杀死该 creep。
   */
  suicide(): OK | ERR_NOT_OWNER | ERR_BUSY;
  /**
   * 将资源从该 creep 转移至其他对象。目标必须与 creep 相邻。
   * @param target 目标对象。
   * @param resourceType `RESOURCE_*` 常量之一。
   * @param amount 要转移的资源数量。如果省略，将转移携带的全部指定资源。
   */
  transfer(
    target: AnyCreep | Structure,
    resourceType: ResourceConstant,
    amount?: number,
  ): ScreepsReturnCode;
  /**
   * 使用携带的能量将您的控制器升级到新的等级。升级控制器将同时提高你的全局控制等级(Global Control Level)。
   *
   * 需要 `WORK` 和 `CARRY` 身体部件。目标必须位于以 creep 为中心的 7*7 正方形区域内。
   *
   * 一个完全升级的 8 级控制器每 tick 最多接受 15 能量的升级，无论 creep 的能力有没有超过。
   * 该值限制了当前 tick 所有 creep 执行 `upgradeController` 积累的总能量值。
   * 可以使用 [ghodium 化合物强化](https://screeps-cn.github.io/resources.html) 来提高此上限。
   *
   * 升级控制器会把它的 `ticksToDowngrade` 计时器提高 100 tick。该计时器必须填满才能提升控制器等级。
   * @param target 要进行升级的目标控制器。
   */
  upgradeController(target: StructureController): ScreepsReturnCode;
  /**
   * 从建筑(structure)或是墓碑(tombstone)中拿取资源。
   *
   * 目标必须与 creep 相邻。
   *
   * 多个 creep 可以在同一 tick 里从相同对象中拿取资源。
   *
   * 你的 creep 同样也可以从敌对建筑/墓碑中拿取资源，如果它上面没有敌对的 rampart 的话。
   *
   * 此方法不应该被用来在 creep 之间转移资源。想要在 creep 之间转移，请对携带资源的 creep 执行 [`transfer`](https://screeps-cn.github.io/api/#Creep.transfer) 方法。
   * @param target 目标对象。
   * @param resourceType `RESOURCE_*` 常量之一。
   * @param amount 被传递资源的数量。如果没有这个参数，传递全部可用数量的资源。
   */
  withdraw(
    target: Structure | Tombstone | Ruin,
    resourceType: ResourceConstant,
    amount?: number,
  ): ScreepsReturnCode;
}

interface CreepConstructor
  extends _Constructor<Creep>, _ConstructorById<Creep> {}

declare const Creep: CreepConstructor;
/**
 * 生产商品所需的稀有资源储备。可以通过带有 `WORK` 身体部位的 creep 来收获。
 * 每次采集操作都会触发冷却时间，冷却时间会随着时间的流逝而越来越长。
 *
 * 点击 [本文](https://screeps-cn.github.io/resources.html) 了解更多关于 deposits 的信息。
 */
interface Deposit extends RoomObject {
  /**
   * 唯一的对象标识符。
   *
   * 您可以使用 [`Game.getObjectById`](https://screeps-cn.github.io/api/#Game.getObjectById) 方法通过其 id 检索对象实例。
   */
  id: Id<this>;
  /**
   * deposit 类型, 以下常量之一: `RESOURCE_MIST`, `RESOURCE_BIOMASS`, `RESOURCE_METAL`, `RESOURCE_SILICON`
   */
  depositType: DepositConstant;
  /**
   * 下一次采集前还要冷却多少 tick。
   */
  cooldown: number;
  /**
   * 该结构上次采集的冷却时间。
   */
  lastCooldown: number;
  /**
   * 该结构还有多少 tick 就要因老化而消失。
   */
  ticksToDecay: number;
}

interface DepositConstructor
  extends _Constructor<Deposit>, _ConstructorById<Deposit> {}

declare const Deposit: DepositConstructor;
/**
 * 一个旗帜，旗帜可以用来标记房间中的一个特定的地点。旗帜只对其所有者可见。你最多只能拥有 10,000 个旗帜。
 */
interface Flag extends RoomObject {
  readonly prototype: Flag;

  /**
   * 旗帜的主要颜色。`COLOR_*` 常量之一。
   */
  color: ColorConstant;
  /**
   * 指向 `Memory.flags[flag.name]` 的链接。你可以使用它来快速访问到该旗帜的内存数据对象。
   */
  memory: FlagMemory;
  /**
   * 旗帜的名称。
   *
   * 你可以在创建新的旗帜时为其指定名字，名字一旦确定无法修改。
   *
   * 此名称是 `Game.flags` 对象中指向该旗帜对象的哈希键。你可以使用它来快速访问到该旗帜。名称最长不能超过 `60` 字符。
   */
  name: string;
  /**
   * 旗帜的次要颜色。`COLOR_*` 常量之一。
   */
  secondaryColor: ColorConstant;
  /**
   * 移除该旗帜。
   * @returns 永远返回 `OK`。
   */
  remove(): OK;
  /**
   * 给旗帜设置一个新颜色
   * @param color 旗帜的主要颜色。`COLOR_*` 常量之一。
   * @parma secondaryColor 旗帜的次要颜色。`COLOR_*` 常量之一。
   * @returns `OK`, `ERR_INVALID_ARGS`
   */
  setColor(
    color: ColorConstant,
    secondaryColor?: ColorConstant,
  ): OK | ERR_INVALID_ARGS;
  /**
   * 给旗帜设置一个新的位置。
   * @param x 相同房间内的 x 坐标。
   * @param y 相同房间内的 y 坐标。
   * @returns `OK`, `ERR_INVALID_TARGET`
   */
  setPosition(x: number, y: number): OK | ERR_INVALID_ARGS;
  /**
   * 给旗帜设置一个新的位置。
   * @param 可以是 `RoomPosition` 对象或者任何包含 `RoomPosition` 属性的对象。
   * @returns `OK`, `ERR_INVALID_TARGET`
   */
  setPosition(pos: RoomPosition | { pos: RoomPosition }): OK | ERR_INVALID_ARGS;
}

interface FlagConstructor extends _Constructor<Flag> {
  new (
    name: string,
    color: ColorConstant,
    secondaryColor: ColorConstant,
    roomName: string,
    x: number,
    y: number,
  ): Flag;
  (
    name: string,
    color: ColorConstant,
    secondaryColor: ColorConstant,
    roomName: string,
    x: number,
    y: number,
  ): Flag;
}

declare const Flag: FlagConstructor;
/**
 * 包含所有游戏信息的主要全局游戏对象。
 */
interface Game {
  /**
   * 包含有关 CPU 使用率信息的对象：
   */
  cpu: CPU;
  /**
   * 包含你所有 creep 的 hash，并以 creep 名作为关键字。
   */
  creeps: { [creepName: string]: Creep };
  /**
   * 包含你所有 flag 的 hash，以 flag 名作为关键字。
   */
  flags: { [flagName: string]: Flag };
  /**
   * 你的[全局控制等级（Global Control Level）](https://screeps-cn.github.io/control.html#Global-Control-Level)的对象，具有以下属性：
   *
   * 参数 | 类型 | 描述
   * :---- | :--- | :-----
   * level | `number` | 当前的等级。
   * progress | `number` | 到下一个等级当前的进展。
   * progressTotal | `number` | 到下一个等级所需的进展。
   */
  gcl: GlobalControlLevel;
  /**
   * 你的全局能量等级（Global Power Level）的对象，具有以下属性：
   *
   * 参数 | 类型 | 描述
   * :---- | :--- | :-----
   * level | `number` | 当前的等级。
   * progress | `number` | 到下一个等级当前的进展。
   * progressTotal | `number` | 到下一个等级所需的进展。
   */
  gpl: GlobalPowerLevel;
  /**
   * 表示世界地图的全局对象。请参照此[文档](https://screeps-cn.github.io/api/#Game-map)。
   */
  map: GameMap;
  /**
   * 表示游戏内市场的全局对象。请参照此[文档](https://screeps-cn.github.io/api/#Game-market)。
   */
  market: Market;
  /**
   * 包含你所有超能 creep 的 hash，以 creep 名称为键。从这里也可以访问到未孵化的超能 creep。
   */
  powerCreeps: { [creepName: string]: PowerCreep };
  /**
   * 表示你账户中全局资源的对象，例如 pixel 或 cpu unlock。每个对象的关键字都是一个资源常量，值是资源量。
   */
  resources: { [key: string]: any };
  /**
   * 包含所有对你可用的房间的 hash，以房间名作为关键字。一个房间在你有一个 creep 或者自有建筑在其中时可见。
   */
  rooms: { [roomName: string]: Room };
  /**
   * 包含你所有 spawn 的 hash，以 spawn 名作为关键字。
   */
  spawns: { [spawnName: string]: StructureSpawn };
  /**
   * 包含你所有 structures 的 hash，以 structures 名作为关键字。
   */
  structures: { [structureId: string]: Structure };

  /**
   * 包含你所有施工工地的 hash，并以 id 作为关键字。
   */
  constructionSites: { [constructionSiteId: string]: ConstructionSite };

  /**
   * 表示当前正在执行脚本的 shard 的对象。
   */
  shard: Shard;

  /**
   * 系统游戏 tick 计数。他在每个 tick 自动递增。点此[了解更多](https://screeps-cn.github.io/game-loop.html)。
   */
  time: number;

  /**
   * 获取具有唯一指定 ID 的对象。 它可以是任何类型的游戏对象。 只能访问您可见的房间内的物体。
   * @param id The unique identifier.
   * @returns 返回一个对象实例，若找不到则返回 `null`。
   */
  getObjectById<T>(id: Id<T>): T | null;

  /**
   * 获取具有唯一指定 ID 的对象。 它可以是任何类型的游戏对象。 只能访问您可见的房间内的物体。
   * @param id The unique identifier.
   * @returns 返回一个对象实例，若找不到则返回 `null`。
   * @deprecated Use `Id<T>`, instead of strings, to increase type safety
   */
  // eslint-disable-next-line @typescript-eslint/unified-signatures
  getObjectById<T>(id: string): T | null;

  /**
   * 向你的个人资料中的邮件发送信息。
   *
   * 由此，你可以在游戏中的任何场合为自己设置通知
   *
   * 你最多可以安排 20 个通知。在模拟模式中不可用。
   *
   * @param 将在消息中发送的自定义文本。最大长度为 `1000` 个字符。
   * @param 如果被设为 `0` (默认), 通知将被立即安排。否早他将于其他通知编组，并在指定的时间（分钟）寄出。
   */
  notify(message: string, groupInterval?: number): undefined;
}

declare let Game: Game;
interface _HasId {
  id: Id<this>;
}

interface _HasRoomPosition {
  pos: RoomPosition;
}

interface GlobalControlLevel {
  /**
   * 当前的等级。
   */
  level: number;
  /**
   * 到下一个等级当前的进展。
   */
  progress: number;
  /**
   * 到下一个等级所需的进展。
   */
  progressTotal: number;
}

interface GlobalPowerLevel {
  /**
   * 当前的等级。
   */
  level: number;
  /**
   * 到下一个等级当前的进展。
   */
  progress: number;
  /**
   * 到下一个等级所需的进展。
   */
  progressTotal: number;
}

interface Shard {
  /**
   * shard 的名称。
   */
  name: string;
  /**
   * 目前总是等于 normal.
   */
  type: "normal";
  /**
   * 这个 shard 是否为 [PTR](https://screeps-cn.github.io/ptr.html).
   */
  ptr: boolean;
}

interface CPU {
  /**
   * 你在当前指定 shard 的 CPU 限制。
   */
  limit: number;
  /**
   * 当前游戏 tick 可用的 CPU 时间。通常它高于 `Game.cpu.limit`.
   * @see https://screeps-cn.github.io/cpu-limit.html
   */
  tickLimit: number;
  /**
   * 在你的 bucket 中累积的未使用的 CPU 数量。
   * @see https://screeps-cn.github.io/cpu-limit.html#Bucket
   */
  bucket: number;
  /**
   * 包含了每个 shard cpu 上限的对象，以 shard 名称为关键字。你可以使用 `setShardLimits` 方法重设他们。
   */
  shardLimits: CPUShardLimits;
  /**
   * 您的账户是否已经解锁了完整的 CPU。
   */
  unlocked: boolean;
  /**
   * 您账户解锁完整 CPU 时的 UNIX 毫秒时间戳。当您账户的完整 CPU 未解锁或未使用 subscription 时该属性未定义。
   */
  unlockedTime: number | undefined;

  /**
   * 获取当前游戏开始时使用的 CPU 时间总量。在模拟模式下始终返回 `0`。
   */
  getUsed(): number;
  /**
   * 分配 CPU 限制到不同的 shard。CPU 总量应保持等于 `Game.cpu.shardLimits`。此方法每 12 小时只能使用一次。
   *
   * @param limits 表示每个 shard 的 CPU 值，与 `Game.cpu.shardLimits` 格式相同。
   * @returns `OK | ERR_BUSY | ERR_INVALID_ARGS`
   */
  setShardLimits(limits: CPUShardLimits): OK | ERR_BUSY | ERR_INVALID_ARGS;

  /**
   * **这个方法只在虚拟机在你的账户运行时设置中被设为 Isolated 时可用**
   *
   * 使用此方法获取虚拟机的堆统计信息。
   * 返回值几乎与 Node.js 函数 `v8.getHeapStatistics()` 相同。 此函数返回一个附加属性：`externally_allocated_size`，它是当前分配的内存总量，不包含在 v8 堆中，但会计入此隔离的内存限制。
   * 超过一定大小的 `ArrayBuffer` 实例是外部分配的，将在此计算。
   */
  getHeapStatistics?(): HeapStatistics;

  /**
   * **这个方法只在虚拟机在你的账户运行时设置中被设为 Isolated 时可用**
   *
   * 重置你的运行环境并擦除堆内存中的所有数据。
   */
  halt?(): never;
  /**
   * 从您的 bucket 中取出 5000 CPU 来生成一点 pixel 资源。
   */
  generatePixel(): OK | ERR_NOT_ENOUGH_RESOURCES;

  /**
   * 为您的账户解锁 24 小时的完整 CPU。
   * 该方法将消耗一个您账户中的 CPU unlock（详见 Game.resources）。
   * 如果之前尚未激活过完整 CPU。则可能需要一点时间（5 分钟之内）来为您的账户应用解锁。
   */
  unlock(): OK | ERR_NOT_ENOUGH_RESOURCES | ERR_FULL;
}

interface HeapStatistics {
  total_heap_size: number;
  total_heap_size_executable: number;
  total_physical_size: number;
  total_available_size: number;
  used_heap_size: number;
  heap_size_limit: number;
  malloced_memory: number;
  peak_malloced_memory: number;
  does_zap_garbage: 0 | 1;
  externally_allocated_size: number;
}

/**
 * creep 身体部件的描述
 */
type BodyPartDefinition<T extends BodyPartConstant = BodyPartConstant> =
  T extends any ? {
    /**
       * `RESOURCE_*` 常量之一
       *
       * 如果该身体部件被强化(boost)了，则该属性指定了强化所用的化合物类型。[了解更多](https://screeps-cn.github.io/resources.html)。
       */
    boost?: keyof typeof BOOSTS[T];
    /**
       * 身体部件常量之一。
       */
    type: T;
    /**
       * 该身体部件剩余的生命值。
       */
    hits: number;
  }
    : never;

interface Owner {
  /**
   * 拥有者姓名。
   */
  username: string;
}
interface ReservationDefinition {
  /** 预定了该房间的玩家名称。 */
  username: string;
  /** 预定时间还有多少 tick 结束。 */
  ticksToEnd: number;
}
interface SignDefinition {
  /** 将控制器签名的玩家名称。 */
  username: string;
  /** 签名的文本内容。 */
  text: string;
  /** 进行签名的游戏 tick 时间。 */
  time: number;
  /** 进行签名的现实时间。 */
  datetime: Date;
}

interface CPUShardLimits {
  [shard: string]: number;
}

/** A general purpose Store, which has a limited capacity */
type StoreDefinition = Store<ResourceConstant, false>;

/** A general purpose Store, which has an unlimited capacity */
type StoreDefinitionUnlimited = Store<ResourceConstant, true>;

// type SD<K extends ResourceConstant> = {
//   [P in K]: number;
//   energy: number;
// }

type ExitsInformation = Partial<Record<ExitKey, string>>;

interface AllLookAtTypes {
  constructionSite: ConstructionSite;
  creep: Creep;
  energy: Resource<RESOURCE_ENERGY>;
  exit: any; // TODO what type is this?
  flag: Flag;
  mineral: Mineral;
  deposit: Deposit;
  nuke: Nuke;
  resource: Resource;
  source: Source;
  structure: Structure;
  terrain: Terrain;
  tombstone: Tombstone;
  powerCreep: PowerCreep;
  ruin: Ruin;
}

type LookAtTypes = Partial<AllLookAtTypes>;

type LookAtResult<K extends LookConstant = LookConstant> =
  & Pick<LookAtTypes, K>
  & { type: K };

type LookAtResultWithPos<K extends LookConstant = LookConstant> =
  & LookAtResult<K>
  & {
    x: number;
    y: number;
  };

interface LookAtResultMatrix<K extends LookConstant = LookConstant> {
  [y: number]: {
    [x: number]: LookAtResult<K>[];
  };
}

interface LookForAtAreaResultMatrix<
  T,
  K extends keyof LookAtTypes = keyof LookAtTypes,
> {
  [y: number]: {
    [x: number]: LookForAtAreaResult<T, K>[];
  };
}

type LookForAtAreaResult<T, K extends keyof LookAtTypes = keyof LookAtTypes> = {
  type: K;
} & { [P in K]: T };

type LookForAtAreaResultWithPos<
  T,
  K extends keyof LookAtTypes = keyof LookAtTypes,
> = LookForAtAreaResult<T, K> & {
  x: number;
  y: number;
};

type LookForAtAreaResultArray<
  T,
  K extends keyof LookAtTypes = keyof LookAtTypes,
> = LookForAtAreaResultWithPos<T, K>[];

interface FindTypes {
  [key: number]:
    | RoomPosition
    | AnyCreep
    | Source
    | Resource
    | Structure
    | Flag
    | ConstructionSite
    | Mineral
    | Nuke
    | Tombstone
    | Deposit
    | Ruin;
  1: RoomPosition; // FIND_EXIT_TOP
  3: RoomPosition; // FIND_EXIT_RIGHT
  5: RoomPosition; // FIND_EXIT_BOTTOM
  7: RoomPosition; // FIND_EXIT_LEFT
  10: RoomPosition; // FIND_EXIT
  101: Creep; // FIND_CREEPS
  102: Creep; // FIND_MY_CREEPS
  103: Creep; // FIND_HOSTILE_CREEPS
  104: Source; // FIND_SOURCES_ACTIVE
  105: Source; // FIND_SOURCES
  106: Resource; // FIND_DROPPED_RESOURCES
  107: AnyStructure; // FIND_STRUCTURES
  108: AnyOwnedStructure; // FIND_MY_STRUCTURES
  109: AnyOwnedStructure; // FIND_HOSTILE_STRUCTURES
  110: Flag; // FIND_FLAGS
  111: ConstructionSite; // FIND_CONSTRUCTION_SITES
  112: StructureSpawn; // FIND_MY_SPAWNS
  113: StructureSpawn; // FIND_HOSTILE_SPAWNS
  114: ConstructionSite; // FIND_MY_CONSTRUCTION_SITES
  115: ConstructionSite; // FIND_HOSTILE_CONSTRUCTION_SITES
  116: Mineral; // FIND_MINERALS
  117: Nuke; // FIND_NUKES
  118: Tombstone; // FIND_TOMBSTONES
  119: PowerCreep; // FIND_POWER_CREEPS
  120: PowerCreep; // FIND_MY_POWER_CREEPS
  121: PowerCreep; // FIND_HOSTILE_POWER_CREEPS
  122: Deposit; // FIND_DEPOSITS
  123: Ruin; // FIND_RUINS
}

interface FindPathOpts {
  /**
   * 将其他 creep 所处的地块视作可通行的。在附件有大量移动的 creep 或者其他一些情况时会很有用。默认值为 `false`。
   */
  ignoreCreeps?: boolean;

  /**
   * 将可破坏的建筑 (constructed walls, ramparts, spawns, extensions) 所在的地块视作可通行的。默认为 `false`。
   */
  ignoreDestructibleStructures?: boolean;

  /**
   * 无视道路。启用该项将加快搜索速度。默认值为 `false`。仅当新的 [`PathFinder`](https://screeps-cn.github.io/api/#PathFinder) 启用时才可用。
   */
  ignoreRoads?: boolean;

  /**
   * 你可以使用该回调在搜索过程中为任意房间修改 `CostMatrix`。
   *
   * 回调接受两个参数，`roomName` 和 `costMatrix`。
   *
   * 使用 `costMatrix` 实例来修改地形移动成本。如果你从回调中返回了一个新的 matrix。它将会代替内置的缓存 matrix。
   *
   * 仅当新的 `PathFinder` 启用时才可用。
   * @param roomName 房间名
   * @param costMatrix 当前的地形移动成本 `CostMatrix`
   * @returns 修改后的新的地形移动成本 `CostMatrix`
   */
  costCallback?(roomName: string, costMatrix: CostMatrix): void | CostMatrix;

  /**
   * 一个数组，其元素为房间中的对象或者 `RoomPosition` 对象，在搜索时会将该数组中的对象位置视作可通行的地块。当启用新的 `PathFinder` 时无法使用。（请用 `costCallback` 选项代替）。
   */
  ignore?: any[] | RoomPosition[];

  /**
   * 一个数组，其元素为房间中的对象或者 `RoomPosition` 对象，在搜索时会将该数组中的对象位置视作无法通行的地块。当启用新的 `PathFinder` 时无法使用。（请用 `costCallback` 选项代替）。
   */
  avoid?: any[] | RoomPosition[];

  /**
   * 用于寻路的消耗上限。你可以限制在寻路上花费的 CPU 时间，基于 1 op ~ 0.001 CPU 的比例。默认值为 `2000`。
   */
  maxOps?: number;

  /**
   * 应用于 A* 算法 `F = G + weight * H` 中的启发式权重(weight)。在使用该选项之前您最好已经了解了 A* 算法的底层实现！默认值为 `1.2`。
   */
  heuristicWeight?: number;

  /**
   * 如果为 `true`，将会使用 `Room.serializePath` 对结果路径进行序列化。默认值为 `false`。
   */
  serialize?: boolean;

  /**
   * 寻路所允许的最大房间数。默认值为 `16`。仅当新的 [`PathFinder`](https://screeps-cn.github.io/api/#PathFinder) 启用时才可用。
   */
  maxRooms?: number;

  /**
   * 找到到达位于目标指定线性区域内位置的路径。默认值为 `0`.
   */
  range?: number;

  /**
   * 平原地形的移动成本。默认为 `1`。
   */
  plainCost?: number;

  /**
   * 沼泽地形的移动成本。默认为 `5`。
   */
  swampCost?: number;
}

interface MoveToOpts extends FindPathOpts {
  /**
   * 此选项将缓存前方多个 tick 将要移动的路径。该操作可以节省 cpu 时间，但是会导致 creep 的反应变慢。
   * 路径被缓存到 creep 内存中的 `_move` 属性里。`reusePath` 的值定义了要缓存前方多少 tick 的移动路径。默认值为 `5`。
   * 增加该值来节省更多的 CPU。减少该值来使移动更加连贯。设置为 `0` 来禁用路径重用。
   */
  reusePath?: number;

  /**
   * 如果 `reusePath` 启用并且该值设为 `true`，重用的路径将会使用 [Room.serializePath](https://screeps-cn.github.io/api/#Room.Room-serializePath) 进行序列化并储存在内存中。默认值为 `true`。
   */
  serializeMemory?: boolean;

  /**
   * 如果该选择设为 `true` 并且内存中没有重用路径时，`moveTo` 将会返回 `ERR_NOT_FOUND`。
   * 在某些情况下，这会节省大量的 CPU 时间。默认值为 `false`。
   */
  noPathFinding?: boolean;

  /**
   * 使用 RoomVisual.poly 来在 creep 的移动路线上画一条线。你可以提供一个空对象或者自定义样式参数。默认的样式如下：
   *
   * ```css
   * {
   *   fill: 'transparent',
   *   stroke: '#fff',
   *   lineStyle: 'dashed',
   *   strokeWidth: .15,
   *   opacity: .1
   * }
   * ```
   */
  visualizePathStyle?: PolyStyle;
}

interface PathStep {
  x: number;
  dx: number;
  y: number;
  dy: number;
  direction: DirectionConstant;
}

/**
 * An object with survival game info
 */
interface SurvivalGameInfo {
  /**
   * Current score.
   */
  score: number;
  /**
   * Time to the next wave of invaders.
   */
  timeToWave: number;
  /**
   * The number of the next wave.
   */
  wave: number;
}

interface _Constructor<T> {
  readonly prototype: T;
}

interface _ConstructorById<T> extends _Constructor<T> {
  new (id: Id<T>): T;
  (id: Id<T>): T;
}

declare namespace Tag {
  const OpaqueTagSymbol: unique symbol;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  class OpaqueTag<T> {
    private [OpaqueTagSymbol]: T;
  }
}
type Id<T> = string & Tag.OpaqueTag<T>;
/**
 * `InterShardMemory` 对象提供了在不同的 shard 之间通信的接口。你的脚本在不同的 shard 内是单独执行的，并且他们的 `Memory` 对象对彼此隔离。
 * 为了在不同的 shard 之间传递信息，您需要使用 `InterShardMemory`。
 *
 * 每个 shard 可以拥有能被其他 shard 访问的数据字符串。每个数据字符串只有其所属的 shard 才有写权限， 而其他的 shard 只有读权限。
 *
 * 该数据和 `Memory` 完全不相关，它是一个独立的数据容器。
 */
interface InterShardMemory {
  /**
   * 返回当前 shard 的数据字符串内容。
   */
  getLocal(): string;
  /**
   * 将当前 shard 的数据替换为新的值。
   * @param value 格式化为字符串的新数据。
   */
  setLocal(value: string): void;
  /**
   * 返回其他 shard 的数据字符串内容。
   *
   * @param shard Shard 名称。
   * @throws Error if shard name is invalid
   */
  getRemote(shard: string): string | null;
}

declare const InterShardMemory: InterShardMemory;
/*
 * This file creates literal versions of many of the constants
 * It should be kept in sync with constants.ts
 */

// Extras

type Terrain = "plain" | "swamp" | "wall";

type ExitKey = "1" | "3" | "5" | "7";

type AnyCreep = Creep | PowerCreep;

type FindClosestByPathAlgorithm = "astar" | "dijkstra";

// Return Codes

type ScreepsReturnCode =
  | OK
  | ERR_NOT_OWNER
  | ERR_NO_PATH
  | ERR_BUSY
  | ERR_NAME_EXISTS
  | ERR_NOT_FOUND
  | ERR_NOT_ENOUGH_RESOURCES
  | ERR_NOT_ENOUGH_ENERGY
  | ERR_INVALID_TARGET
  | ERR_FULL
  | ERR_NOT_IN_RANGE
  | ERR_INVALID_ARGS
  | ERR_TIRED
  | ERR_NO_BODYPART
  | ERR_NOT_ENOUGH_EXTENSIONS
  | ERR_RCL_NOT_ENOUGH
  | ERR_GCL_NOT_ENOUGH;

type OK = 0;
type ERR_NOT_OWNER = -1;
type ERR_NO_PATH = -2;
type ERR_NAME_EXISTS = -3;
type ERR_BUSY = -4;
type ERR_NOT_FOUND = -5;
type ERR_NOT_ENOUGH_RESOURCES = -6;
type ERR_NOT_ENOUGH_ENERGY = -6;
type ERR_INVALID_TARGET = -7;
type ERR_FULL = -8;
type ERR_NOT_IN_RANGE = -9;
type ERR_INVALID_ARGS = -10;
type ERR_TIRED = -11;
type ERR_NO_BODYPART = -12;
type ERR_NOT_ENOUGH_EXTENSIONS = -6;
type ERR_RCL_NOT_ENOUGH = -14;
type ERR_GCL_NOT_ENOUGH = -15;

type CreepActionReturnCode =
  | OK
  | ERR_NOT_OWNER
  | ERR_BUSY
  | ERR_INVALID_TARGET
  | ERR_NOT_IN_RANGE
  | ERR_NO_BODYPART
  | ERR_TIRED;

type CreepMoveReturnCode =
  | OK
  | ERR_NOT_OWNER
  | ERR_BUSY
  | ERR_TIRED
  | ERR_NO_BODYPART;

// Find Constants

type ExitConstant =
  | FIND_EXIT_TOP
  | FIND_EXIT_RIGHT
  | FIND_EXIT_BOTTOM
  | FIND_EXIT_LEFT;

type FindConstant =
  | FIND_EXIT_TOP
  | FIND_EXIT_RIGHT
  | FIND_EXIT_BOTTOM
  | FIND_EXIT_LEFT
  | FIND_EXIT
  | FIND_CREEPS
  | FIND_MY_CREEPS
  | FIND_HOSTILE_CREEPS
  | FIND_SOURCES_ACTIVE
  | FIND_SOURCES
  | FIND_DROPPED_RESOURCES
  | FIND_STRUCTURES
  | FIND_MY_STRUCTURES
  | FIND_HOSTILE_STRUCTURES
  | FIND_FLAGS
  | FIND_CONSTRUCTION_SITES
  | FIND_MY_SPAWNS
  | FIND_HOSTILE_SPAWNS
  | FIND_MY_CONSTRUCTION_SITES
  | FIND_HOSTILE_CONSTRUCTION_SITES
  | FIND_MINERALS
  | FIND_NUKES
  | FIND_TOMBSTONES
  | FIND_POWER_CREEPS
  | FIND_MY_POWER_CREEPS
  | FIND_HOSTILE_POWER_CREEPS
  | FIND_DEPOSITS
  | FIND_RUINS;

type FIND_EXIT_TOP = 1;
type FIND_EXIT_RIGHT = 3;
type FIND_EXIT_BOTTOM = 5;
type FIND_EXIT_LEFT = 7;
type FIND_EXIT = 10;
type FIND_CREEPS = 101;
type FIND_MY_CREEPS = 102;
type FIND_HOSTILE_CREEPS = 103;
type FIND_SOURCES_ACTIVE = 104;
type FIND_SOURCES = 105;
type FIND_DROPPED_RESOURCES = 106;
type FIND_STRUCTURES = 107;
type FIND_MY_STRUCTURES = 108;
type FIND_HOSTILE_STRUCTURES = 109;
type FIND_FLAGS = 110;
type FIND_CONSTRUCTION_SITES = 111;
type FIND_MY_SPAWNS = 112;
type FIND_HOSTILE_SPAWNS = 113;
type FIND_MY_CONSTRUCTION_SITES = 114;
type FIND_HOSTILE_CONSTRUCTION_SITES = 115;
type FIND_MINERALS = 116;
type FIND_NUKES = 117;
type FIND_TOMBSTONES = 118;
type FIND_POWER_CREEPS = 119;
type FIND_MY_POWER_CREEPS = 120;
type FIND_HOSTILE_POWER_CREEPS = 121;
type FIND_DEPOSITS = 122;
type FIND_RUINS = 123;

// Filter Options

interface FilterOptions<T extends FindConstant> {
  filter: FilterFunction<T> | FilterObject | string;
}
type FilterFunction<T extends FindConstant> = (object: FindTypes[T]) => boolean;
interface FilterObject {
  [key: string]: any;
}

// Body Part Constants

type BodyPartConstant =
  | MOVE
  | WORK
  | CARRY
  | ATTACK
  | RANGED_ATTACK
  | TOUGH
  | HEAL
  | CLAIM;

type MOVE = "move";
type WORK = "work";
type CARRY = "carry";
type ATTACK = "attack";
type RANGED_ATTACK = "ranged_attack";
type TOUGH = "tough";
type HEAL = "heal";
type CLAIM = "claim";

// Look Constants

type LookConstant =
  | LOOK_CREEPS
  | LOOK_ENERGY
  | LOOK_RESOURCES
  | LOOK_SOURCES
  | LOOK_MINERALS
  | LOOK_DEPOSITS
  | LOOK_STRUCTURES
  | LOOK_FLAGS
  | LOOK_CONSTRUCTION_SITES
  | LOOK_NUKES
  | LOOK_TERRAIN
  | LOOK_TOMBSTONES
  | LOOK_POWER_CREEPS
  | LOOK_RUINS;

type LOOK_CONSTRUCTION_SITES = "constructionSite";
type LOOK_CREEPS = "creep";
type LOOK_ENERGY = "energy";
type LOOK_FLAGS = "flag";
type LOOK_MINERALS = "mineral";
type LOOK_DEPOSITS = "deposit";
type LOOK_NUKES = "nuke";
type LOOK_RESOURCES = "resource";
type LOOK_SOURCES = "source";
type LOOK_STRUCTURES = "structure";
type LOOK_TERRAIN = "terrain";
type LOOK_TOMBSTONES = "tombstone";
type LOOK_POWER_CREEPS = "powerCreep";
type LOOK_RUINS = "ruin";

type ORDER_SELL = "sell";
type ORDER_BUY = "buy";

// Direction Constants

type DirectionConstant =
  | TOP
  | TOP_RIGHT
  | RIGHT
  | BOTTOM_RIGHT
  | BOTTOM
  | BOTTOM_LEFT
  | LEFT
  | TOP_LEFT;

type TOP = 1;
type TOP_RIGHT = 2;
type RIGHT = 3;
type BOTTOM_RIGHT = 4;
type BOTTOM = 5;
type BOTTOM_LEFT = 6;
type LEFT = 7;
type TOP_LEFT = 8;

// Color Constants

type ColorConstant =
  | COLOR_RED
  | COLOR_PURPLE
  | COLOR_BLUE
  | COLOR_CYAN
  | COLOR_GREEN
  | COLOR_YELLOW
  | COLOR_ORANGE
  | COLOR_BROWN
  | COLOR_GREY
  | COLOR_WHITE;

type COLOR_RED = 1;
type COLOR_PURPLE = 2;
type COLOR_BLUE = 3;
type COLOR_CYAN = 4;
type COLOR_GREEN = 5;
type COLOR_YELLOW = 6;
type COLOR_ORANGE = 7;
type COLOR_BROWN = 8;
type COLOR_GREY = 9;
type COLOR_WHITE = 10;

// Structure Constants

type BuildableStructureConstant =
  | STRUCTURE_EXTENSION
  | STRUCTURE_RAMPART
  | STRUCTURE_ROAD
  | STRUCTURE_SPAWN
  | STRUCTURE_LINK
  | STRUCTURE_WALL
  | STRUCTURE_STORAGE
  | STRUCTURE_TOWER
  | STRUCTURE_OBSERVER
  | STRUCTURE_POWER_SPAWN
  | STRUCTURE_EXTRACTOR
  | STRUCTURE_LAB
  | STRUCTURE_TERMINAL
  | STRUCTURE_CONTAINER
  | STRUCTURE_NUKER
  | STRUCTURE_FACTORY;

type StructureConstant =
  | BuildableStructureConstant
  | STRUCTURE_KEEPER_LAIR
  | STRUCTURE_CONTROLLER
  | STRUCTURE_POWER_BANK
  | STRUCTURE_PORTAL
  | STRUCTURE_INVADER_CORE;

type STRUCTURE_EXTENSION = "extension";
type STRUCTURE_RAMPART = "rampart";
type STRUCTURE_ROAD = "road";
type STRUCTURE_SPAWN = "spawn";
type STRUCTURE_LINK = "link";
type STRUCTURE_WALL = "constructedWall";
type STRUCTURE_KEEPER_LAIR = "keeperLair";
type STRUCTURE_CONTROLLER = "controller";
type STRUCTURE_STORAGE = "storage";
type STRUCTURE_TOWER = "tower";
type STRUCTURE_OBSERVER = "observer";
type STRUCTURE_POWER_BANK = "powerBank";
type STRUCTURE_POWER_SPAWN = "powerSpawn";
type STRUCTURE_EXTRACTOR = "extractor";
type STRUCTURE_LAB = "lab";
type STRUCTURE_TERMINAL = "terminal";
type STRUCTURE_CONTAINER = "container";
type STRUCTURE_NUKER = "nuker";
type STRUCTURE_FACTORY = "factory";
type STRUCTURE_INVADER_CORE = "invaderCore";
type STRUCTURE_PORTAL = "portal";

// Terrain mask constants
type TERRAIN_MASK_WALL = 1;
type TERRAIN_MASK_SWAMP = 2;
type TERRAIN_MASK_LAVA = 4;

// Resource Constants

type ResourceConstant =
  | RESOURCE_ENERGY
  | RESOURCE_POWER
  | RESOURCE_OPS
  | MineralConstant
  | MineralCompoundConstant
  | DepositConstant
  | CommodityConstant;

type _ResourceConstantSansEnergy = Exclude<ResourceConstant, RESOURCE_ENERGY>;

/** The raw harvestable minerals */
type MineralConstant =
  | RESOURCE_UTRIUM
  | RESOURCE_LEMERGIUM
  | RESOURCE_KEANIUM
  | RESOURCE_ZYNTHIUM
  | RESOURCE_OXYGEN
  | RESOURCE_HYDROGEN
  | RESOURCE_CATALYST;

/** The compounds which can't boost */
type MineralBaseCompoundsConstant =
  | RESOURCE_HYDROXIDE
  | RESOURCE_ZYNTHIUM_KEANITE
  | RESOURCE_UTRIUM_LEMERGITE
  | RESOURCE_GHODIUM;

/** The boosts (from tier 1 to tier 3) */
type MineralBoostConstant =
  | RESOURCE_UTRIUM_HYDRIDE
  | RESOURCE_UTRIUM_OXIDE
  | RESOURCE_KEANIUM_HYDRIDE
  | RESOURCE_KEANIUM_OXIDE
  | RESOURCE_LEMERGIUM_HYDRIDE
  | RESOURCE_LEMERGIUM_OXIDE
  | RESOURCE_ZYNTHIUM_HYDRIDE
  | RESOURCE_ZYNTHIUM_OXIDE
  | RESOURCE_GHODIUM_HYDRIDE
  | RESOURCE_GHODIUM_OXIDE
  | RESOURCE_UTRIUM_ACID
  | RESOURCE_UTRIUM_ALKALIDE
  | RESOURCE_KEANIUM_ACID
  | RESOURCE_KEANIUM_ALKALIDE
  | RESOURCE_LEMERGIUM_ACID
  | RESOURCE_LEMERGIUM_ALKALIDE
  | RESOURCE_ZYNTHIUM_ACID
  | RESOURCE_ZYNTHIUM_ALKALIDE
  | RESOURCE_GHODIUM_ACID
  | RESOURCE_GHODIUM_ALKALIDE
  | RESOURCE_CATALYZED_UTRIUM_ACID
  | RESOURCE_CATALYZED_UTRIUM_ALKALIDE
  | RESOURCE_CATALYZED_KEANIUM_ACID
  | RESOURCE_CATALYZED_KEANIUM_ALKALIDE
  | RESOURCE_CATALYZED_LEMERGIUM_ACID
  | RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE
  | RESOURCE_CATALYZED_ZYNTHIUM_ACID
  | RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE
  | RESOURCE_CATALYZED_GHODIUM_ACID
  | RESOURCE_CATALYZED_GHODIUM_ALKALIDE;

/** All the mineral compounds */
type MineralCompoundConstant =
  | MineralBaseCompoundsConstant
  | MineralBoostConstant;

/** The raw deposits */
type DepositConstant =
  | RESOURCE_MIST
  | RESOURCE_BIOMASS
  | RESOURCE_METAL
  | RESOURCE_SILICON;

/** The commodities, produced by the Factory */
type CommodityConstant =
  | RESOURCE_UTRIUM_BAR
  | RESOURCE_LEMERGIUM_BAR
  | RESOURCE_ZYNTHIUM_BAR
  | RESOURCE_KEANIUM_BAR
  | RESOURCE_GHODIUM_MELT
  | RESOURCE_OXIDANT
  | RESOURCE_REDUCTANT
  | RESOURCE_PURIFIER
  | RESOURCE_BATTERY
  | RESOURCE_COMPOSITE
  | RESOURCE_CRYSTAL
  | RESOURCE_LIQUID
  | RESOURCE_WIRE
  | RESOURCE_SWITCH
  | RESOURCE_TRANSISTOR
  | RESOURCE_MICROCHIP
  | RESOURCE_CIRCUIT
  | RESOURCE_DEVICE
  | RESOURCE_CELL
  | RESOURCE_PHLEGM
  | RESOURCE_TISSUE
  | RESOURCE_MUSCLE
  | RESOURCE_ORGANOID
  | RESOURCE_ORGANISM
  | RESOURCE_ALLOY
  | RESOURCE_TUBE
  | RESOURCE_FIXTURES
  | RESOURCE_FRAME
  | RESOURCE_HYDRAULICS
  | RESOURCE_MACHINE
  | RESOURCE_CONDENSATE
  | RESOURCE_CONCENTRATE
  | RESOURCE_EXTRACT
  | RESOURCE_SPIRIT
  | RESOURCE_EMANATION
  | RESOURCE_ESSENCE;

type InterShardResourceConstant =
  | SUBSCRIPTION_TOKEN
  | CPU_UNLOCK
  | PIXEL
  | ACCESS_KEY;
type MarketResourceConstant = ResourceConstant | InterShardResourceConstant;

type RESOURCE_ENERGY = "energy";
type RESOURCE_POWER = "power";
type RESOURCE_OPS = "ops";

type RESOURCE_BIOMASS = "biomass";
type RESOURCE_METAL = "metal";
type RESOURCE_MIST = "mist";
type RESOURCE_SILICON = "silicon";

type RESOURCE_UTRIUM = "U";
type RESOURCE_LEMERGIUM = "L";
type RESOURCE_KEANIUM = "K";
type RESOURCE_ZYNTHIUM = "Z";
type RESOURCE_OXYGEN = "O";
type RESOURCE_HYDROGEN = "H";
type RESOURCE_CATALYST = "X";

type RESOURCE_HYDROXIDE = "OH";
type RESOURCE_ZYNTHIUM_KEANITE = "ZK";
type RESOURCE_UTRIUM_LEMERGITE = "UL";
type RESOURCE_GHODIUM = "G";

type RESOURCE_UTRIUM_HYDRIDE = "UH";
type RESOURCE_UTRIUM_OXIDE = "UO";
type RESOURCE_KEANIUM_HYDRIDE = "KH";
type RESOURCE_KEANIUM_OXIDE = "KO";
type RESOURCE_LEMERGIUM_HYDRIDE = "LH";
type RESOURCE_LEMERGIUM_OXIDE = "LO";
type RESOURCE_ZYNTHIUM_HYDRIDE = "ZH";
type RESOURCE_ZYNTHIUM_OXIDE = "ZO";
type RESOURCE_GHODIUM_HYDRIDE = "GH";
type RESOURCE_GHODIUM_OXIDE = "GO";

type RESOURCE_UTRIUM_ACID = "UH2O";
type RESOURCE_UTRIUM_ALKALIDE = "UHO2";
type RESOURCE_KEANIUM_ACID = "KH2O";
type RESOURCE_KEANIUM_ALKALIDE = "KHO2";
type RESOURCE_LEMERGIUM_ACID = "LH2O";
type RESOURCE_LEMERGIUM_ALKALIDE = "LHO2";
type RESOURCE_ZYNTHIUM_ACID = "ZH2O";
type RESOURCE_ZYNTHIUM_ALKALIDE = "ZHO2";
type RESOURCE_GHODIUM_ACID = "GH2O";
type RESOURCE_GHODIUM_ALKALIDE = "GHO2";

type RESOURCE_CATALYZED_UTRIUM_ACID = "XUH2O";
type RESOURCE_CATALYZED_UTRIUM_ALKALIDE = "XUHO2";
type RESOURCE_CATALYZED_KEANIUM_ACID = "XKH2O";
type RESOURCE_CATALYZED_KEANIUM_ALKALIDE = "XKHO2";
type RESOURCE_CATALYZED_LEMERGIUM_ACID = "XLH2O";
type RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE = "XLHO2";
type RESOURCE_CATALYZED_ZYNTHIUM_ACID = "XZH2O";
type RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE = "XZHO2";
type RESOURCE_CATALYZED_GHODIUM_ACID = "XGH2O";
type RESOURCE_CATALYZED_GHODIUM_ALKALIDE = "XGHO2";

type RESOURCE_UTRIUM_BAR = "utrium_bar";
type RESOURCE_LEMERGIUM_BAR = "lemergium_bar";
type RESOURCE_ZYNTHIUM_BAR = "zynthium_bar";
type RESOURCE_KEANIUM_BAR = "keanium_bar";
type RESOURCE_GHODIUM_MELT = "ghodium_melt";
type RESOURCE_OXIDANT = "oxidant";
type RESOURCE_REDUCTANT = "reductant";
type RESOURCE_PURIFIER = "purifier";
type RESOURCE_BATTERY = "battery";

type RESOURCE_COMPOSITE = "composite";
type RESOURCE_CRYSTAL = "crystal";
type RESOURCE_LIQUID = "liquid";

type RESOURCE_WIRE = "wire";
type RESOURCE_SWITCH = "switch";
type RESOURCE_TRANSISTOR = "transistor";
type RESOURCE_MICROCHIP = "microchip";
type RESOURCE_CIRCUIT = "circuit";
type RESOURCE_DEVICE = "device";

type RESOURCE_CELL = "cell";
type RESOURCE_PHLEGM = "phlegm";
type RESOURCE_TISSUE = "tissue";
type RESOURCE_MUSCLE = "muscle";
type RESOURCE_ORGANOID = "organoid";
type RESOURCE_ORGANISM = "organism";

type RESOURCE_ALLOY = "alloy";
type RESOURCE_TUBE = "tube";
type RESOURCE_FIXTURES = "fixtures";
type RESOURCE_FRAME = "frame";
type RESOURCE_HYDRAULICS = "hydraulics";
type RESOURCE_MACHINE = "machine";

type RESOURCE_CONDENSATE = "condensate";
type RESOURCE_CONCENTRATE = "concentrate";
type RESOURCE_EXTRACT = "extract";
type RESOURCE_SPIRIT = "spirit";
type RESOURCE_EMANATION = "emanation";
type RESOURCE_ESSENCE = "essence";

type SUBSCRIPTION_TOKEN = "token";
type CPU_UNLOCK = "cpuUnlock";
type PIXEL = "pixel";
type ACCESS_KEY = "accessKey";

type TOMBSTONE_DECAY_PER_PART = 5;

type EventConstant =
  | EVENT_ATTACK
  | EVENT_OBJECT_DESTROYED
  | EVENT_ATTACK_CONTROLLER
  | EVENT_BUILD
  | EVENT_HARVEST
  | EVENT_HEAL
  | EVENT_REPAIR
  | EVENT_RESERVE_CONTROLLER
  | EVENT_UPGRADE_CONTROLLER
  | EVENT_EXIT
  | EVENT_POWER
  | EVENT_TRANSFER;

type EVENT_ATTACK = 1;
type EVENT_OBJECT_DESTROYED = 2;
type EVENT_ATTACK_CONTROLLER = 3;
type EVENT_BUILD = 4;
type EVENT_HARVEST = 5;
type EVENT_HEAL = 6;
type EVENT_REPAIR = 7;
type EVENT_RESERVE_CONTROLLER = 8;
type EVENT_UPGRADE_CONTROLLER = 9;
type EVENT_EXIT = 10;
type EVENT_POWER = 11;
type EVENT_TRANSFER = 12;

type EventAttackType =
  | EVENT_ATTACK_TYPE_MELEE
  | EVENT_ATTACK_TYPE_RANGED
  | EVENT_ATTACK_TYPE_RANGED_MASS
  | EVENT_ATTACK_TYPE_DISMANTLE
  | EVENT_ATTACK_TYPE_HIT_BACK
  | EVENT_ATTACK_TYPE_NUKE;

type EVENT_ATTACK_TYPE_MELEE = 1;
type EVENT_ATTACK_TYPE_RANGED = 2;
type EVENT_ATTACK_TYPE_RANGED_MASS = 3;
type EVENT_ATTACK_TYPE_DISMANTLE = 4;
type EVENT_ATTACK_TYPE_HIT_BACK = 5;
type EVENT_ATTACK_TYPE_NUKE = 6;

type EventHealType = EVENT_HEAL_TYPE_MELEE | EVENT_HEAL_TYPE_RANGED;

type EVENT_HEAL_TYPE_MELEE = 1;
type EVENT_HEAL_TYPE_RANGED = 2;

type EventDestroyType = "creep" | StructureConstant;

type EventItem =
  | {
    event: EVENT_ATTACK;
    objectId: string;
    data: EventData[EVENT_ATTACK];
  }
  | {
    event: EVENT_OBJECT_DESTROYED;
    objectId: string;
    data: EventData[EVENT_OBJECT_DESTROYED];
  }
  | {
    event: EVENT_ATTACK_CONTROLLER;
    objectId: string;
    data: EventData[EVENT_ATTACK_CONTROLLER];
  }
  | {
    event: EVENT_BUILD;
    objectId: string;
    data: EventData[EVENT_BUILD];
  }
  | {
    event: EVENT_HARVEST;
    objectId: string;
    data: EventData[EVENT_HARVEST];
  }
  | {
    event: EVENT_HEAL;
    objectId: string;
    data: EventData[EVENT_HEAL];
  }
  | {
    event: EVENT_REPAIR;
    objectId: string;
    data: EventData[EVENT_REPAIR];
  }
  | {
    event: EVENT_RESERVE_CONTROLLER;
    objectId: string;
    data: EventData[EVENT_RESERVE_CONTROLLER];
  }
  | {
    event: EVENT_UPGRADE_CONTROLLER;
    objectId: string;
    data: EventData[EVENT_UPGRADE_CONTROLLER];
  }
  | {
    event: EVENT_EXIT;
    objectId: string;
    data: EventData[EVENT_EXIT];
  }
  | {
    event: EVENT_POWER;
    objectId: string;
    data: EventData[EVENT_POWER];
  }
  | {
    event: EVENT_TRANSFER;
    objectId: string;
    data: EventData[EVENT_TRANSFER];
  };

interface EventData {
  [EVENT_ATTACK]: {
    targetId: string;
    damage: number;
    attackType: EventAttackType;
  };
  [EVENT_OBJECT_DESTROYED]: {
    type: EventDestroyType;
  };
  [EVENT_ATTACK_CONTROLLER]: null;
  [EVENT_BUILD]: {
    targetId: string;
    amount: number;
    energySpent: number;
  };
  [EVENT_HARVEST]: {
    targetId: string;
    amount: number;
  };
  [EVENT_HEAL]: {
    targetId: string;
    amount: number;
    healType: EventHealType;
  };
  [EVENT_REPAIR]: {
    targetId: string;
    amount: number;
    energySpent: number;
  };
  [EVENT_RESERVE_CONTROLLER]: {
    amount: number;
  };
  [EVENT_UPGRADE_CONTROLLER]: {
    amount: number;
    energySpent: number;
  };
  [EVENT_EXIT]: {
    room: string;
    x: number;
    y: number;
  };
  [EVENT_POWER]: {
    targetId: string;
    power: PowerConstant;
  };
  [EVENT_TRANSFER]: {
    targetId: string;
    resourceType: ResourceConstant;
    amount: number;
  };
}

type PowerClassConstant = POWER_CLASS["OPERATOR"];

interface POWER_CLASS {
  OPERATOR: "operator";
}

type PowerConstant =
  | PWR_GENERATE_OPS
  | PWR_OPERATE_SPAWN
  | PWR_OPERATE_TOWER
  | PWR_OPERATE_STORAGE
  | PWR_OPERATE_LAB
  | PWR_OPERATE_EXTENSION
  | PWR_OPERATE_OBSERVER
  | PWR_OPERATE_TERMINAL
  | PWR_OPERATE_SPAWN
  | PWR_OPERATE_TOWER
  | PWR_DISRUPT_SPAWN
  | PWR_DISRUPT_TOWER
  | PWR_DISRUPT_SOURCE
  | PWR_SHIELD
  | PWR_REGEN_SOURCE
  | PWR_REGEN_MINERAL
  | PWR_DISRUPT_TERMINAL
  | PWR_OPERATE_POWER
  | PWR_FORTIFY
  | PWR_OPERATE_CONTROLLER
  | PWR_OPERATE_FACTORY;

type PWR_GENERATE_OPS = 1;
type PWR_OPERATE_SPAWN = 2;
type PWR_OPERATE_TOWER = 3;
type PWR_OPERATE_STORAGE = 4;
type PWR_OPERATE_LAB = 5;
type PWR_OPERATE_EXTENSION = 6;
type PWR_OPERATE_OBSERVER = 7;
type PWR_OPERATE_TERMINAL = 8;
type PWR_DISRUPT_SPAWN = 9;
type PWR_DISRUPT_TOWER = 10;
type PWR_DISRUPT_SOURCE = 11;
type PWR_SHIELD = 12;
type PWR_REGEN_SOURCE = 13;
type PWR_REGEN_MINERAL = 14;
type PWR_DISRUPT_TERMINAL = 15;
type PWR_OPERATE_POWER = 16;
type PWR_FORTIFY = 17;
type PWR_OPERATE_CONTROLLER = 18;
type PWR_OPERATE_FACTORY = 19;

type EffectConstant = EFFECT_INVULNERABILITY | EFFECT_COLLAPSE_TIMER;

type EFFECT_INVULNERABILITY = 1001;
type EFFECT_COLLAPSE_TIMER = 1002;
/**
 * The options that can be accepted by `findRoute()` and friends.
 */
interface RouteOptions {
  /**
   * 它可以用来计算进入一个房间的开销。你可以用它实现优先进入自己的房间或者回避某些房间等功能。你应该返回一个浮点数开销，或者返回 `Infinity` 代表不可进入。
   * @param roomName
   * @param fromRoomName
   */
  routeCallback: (roomName: string, fromRoomName: string) => any;
}

interface RoomStatusPermanent {
  status: "normal" | "closed";
  timestamp: null;
}

interface RoomStatusTemporary {
  status: "novice" | "respawn";
  timestamp: number;
}

type RoomStatus = RoomStatusPermanent | RoomStatusTemporary;

/**
 * 世界地图对象，用于在房间之间导航。
 */
interface GameMap {
  /**
   * 根据给定的房间名列出所有可用的出口。
   * @param roomName 房间名。
   * @returns 出口信息按照以下格式给出，在房间不存在时返回null。
   *
   * ```json
   * {
   *   "1": "W8N4",    // TOP
   *   "3": "W7N3",    // RIGHT
   *   "5": "W8N2",    // BOTTOM
   *   "7": "W9N3"     // LEFT
   * }
   * ```
   */
  describeExits(roomName: string): ExitsInformation;
  /**
   * 查找从给定房间到另一个房间的出口方向。
   * @param fromRoom 起点房间名或房间对象。
   * @param toRoom 终点房间名或房间对象。
   * @param opts (可选) 包含寻路选项的对象。参见 [`findRoute`](https://screeps-cn.github.io/api/#findRoute)。
   * @returns 房间方向常量，下列之一：
   * `FIND_EXIT_TOP`, `FIND_EXIT_RIGHT`, `FIND_EXIT_BOTTOM`, `FIND_EXIT_LEFT`
   *
   * 或下列错误码：
   * `ERR_NO_PATH`, `ERR_INVALID_ARGS`
   */
  findExit(
    fromRoom: string | Room,
    toRoom: string | Room,
    opts?: RouteOptions,
  ): ExitConstant | ERR_NO_PATH | ERR_INVALID_ARGS;
  /**
   * 查找从给定房间到另一个房间的路径。
   * @param fromRoom 起点房间名或房间对象。
   * @param toRoom 终点房间名或房间对象。
   * @param opts (可选) 包含下列选项的对象：
   *
   * - `routeCallback` 这个回调函数接受两个参数：`function(roomName, fromRoomName)`。
   * 它可以用来计算进入一个房间的开销。你可以用它实现优先进入自己的房间或者回避某些房间等功能。
   * 你应该返回一个浮点数开销，或者返回 `Infinity` 代表不可进入。
   * @returns 如下格式的路径数组：
   *
   * ```json
   * [
   *   { exit: FIND_EXIT_RIGHT, room: 'arena21' },
   *   { exit: FIND_EXIT_BOTTOM, room: 'arena22' },
   *   ...
   * ]
   * ```
   *
   * 或如下错误码之一：`ERR_NO_PATH`
   */
  findRoute(
    fromRoom: string | Room,
    toRoom: string | Room,
    opts?: RouteOptions,
  ):
    | {
      exit: ExitConstant;
      room: string;
    }[]
    | ERR_NO_PATH;
  /**
   * 获取两个房间之间直线距离（房间数）。你可以使用这个函数估算使用终端发送资源的能源开销，或用于使用观察者和核武器。
   * @param roomName1 第一个房间名。
   * @param roomName2 第二个房间名。
   * @param continuous 是否视世界地图为在边界连续。如果要计算交易或终端发送开销，请设置为 `true`。 默认值为 `false`。
   */
  getRoomLinearDistance(
    roomName1: string,
    roomName2: string,
    continuous?: boolean,
  ): number;
  /**
   * 此方法已被弃用，不久将被删除。
   * @deprecated 请使用更高效的方法 [`Game.map.getRoomTerrain`](https://screeps-cn.github.io/api/#Game.map.getRoomTerrain) 替代.
   */
  getTerrainAt(x: number, y: number, roomName: string): Terrain;
  /**
   * 此方法已被弃用，不久将被删除。
   * @deprecated 请使用更高效的方法 [`Game.map.getRoomTerrain`](https://screeps-cn.github.io/api/#Game.map.getRoomTerrain) 替代.
   */
  getTerrainAt(pos: RoomPosition): Terrain;
  /**
   * 获取 `Room.Terrain` 对象，快捷访问静态地形数据。此方法适用于所有房间，哪怕是无法访问的房间。
   * @param roomName 房间名。
   */
  getRoomTerrain(roomName: string): RoomTerrain;
  /**
   * 返回世界尺寸，即世界对角之间的房间数。例如对于一个从 W50N50 至 E50S50 的世界这个方法返回 `102`。
   */
  getWorldSize(): number;

  /**
   * 此方法已被弃用，不久将被删除。
   * @deprecated 请使用方法 [`Game.map.getRoomStatus`](https://screeps-cn.github.io/api/#Game.map.getRoomStatus) 替代.
   */
  isRoomAvailable(roomName: string): boolean;

  /**
   * 获取指定房间的开放状态。
   * @param roomName 房间名
   * @returns 包含如下属性的对象：
   *
   * ```json
   * {
   *   status: "normal" | "closed" | "novice" | "respawn",
   *   timestamp: number
   * }
   * ```
   * @see https://screeps-cn.github.io/start-areas.html
   */
  getRoomStatus(roomName: string): RoomStatus;

  /**
   * 地图可视化（Map visual）提供了一种途径来在游戏地图上显示各种可视化的调试信息。您可以使用 `Game.map.visual` 对象来绘制一些仅对您可见的简单图形。
   *
   * 地图可视化不会被存储在游戏数据库中，它们唯一的作用就是在您的浏览器上显示一些信息。所有的绘制效果只会被保留一个 tick，并且如果下个 tick 没有更新的话它们就会消失。
   * 所有的 `Game.map.visual` 调用都不会产生 CPU 消耗（只会产生一些代码执行的自然成本，并且大多与简单的 `JSON.serialize` 调用有关）。
   * 然而，这里有一条使用限制：您最多只能为每个房间发布 1000 KB 的序列化数据。
   *
   * 所有绘制坐标均等同于全局游戏坐标 ([`RoomPosition`](https://screeps-cn.github.io/api/#RoomPosition))。
   */
  visual: MapVisual;
}

// No static is available

interface MapVisual {
  /**
   * 绘制一条线。
   * @param pos1 起始点位置对象。
   * @param pos2 结束点位置对象。
   * @param style 样式
   * @returns `MapVisual` 对象本身，以便进行链式调用。
   */
  line(pos1: RoomPosition, pos2: RoomPosition, style?: MapLineStyle): MapVisual;

  /**
   * 绘制一个圆。
   * @param pos 中心点位置对象。
   * @param style 样式
   * @returns `MapVisual` 对象本身，以便进行链式调用。
   */
  circle(pos: RoomPosition, style?: MapCircleStyle): MapVisual;

  /**
   * 绘制一个矩形。
   * @param topLeftPos 左上角的位置对象。
   * @param width 矩形的宽。
   * @param height 矩形的高。
   * @param style 样式
   * @returns `MapVisual` 对象本身，以便进行链式调用。
   */
  rect(
    topLeftPos: RoomPosition,
    width: number,
    height: number,
    style?: MapPolyStyle,
  ): MapVisual;

  /**
   * 绘制一段折线.
   * @param points 包含了所有拐点的数组。每个数组元素都应是一个 `RoomPosition` 对象。
   * @param style 样式
   * @returns `MapVisual` 对象本身，以便进行链式调用。
   */
  poly(points: RoomPosition[], style?: MapPolyStyle): MapVisual;

  /**
   * 绘制一个文本标签。你可以使用任何有效的 Unicode 字符，包括 emoji。
   * @param text 文本信息
   * @param pos 文本基线（baseline）起始点的位置对象。
   * @param style 样式
   * @returns `MapVisual` 对象本身，以便进行链式调用。
   */
  text(text: string, pos: RoomPosition, style?: MapTextStyle): MapVisual;

  /**
   * 移除该房间的所有可视化效果。
   * @returns `MapVisual` 对象本身，以便进行链式调用。
   */
  clear(): MapVisual;

  /**
   * 获取本 tick 所有可视化效果的存储大小。最多不能超过 1024,000（1000 KB）。
   * @returns The size of the visuals in bytes.
   */
  getSize(): number;

  /**
   * 返回当前 tick 中添加到地图中的所有可视化效果的紧凑格式。
   * @returns 代表了可视化数据的字符串。除了将其存储以备后续使用外，您不应该对其进行其他操作。
   */
  export(): string;

  /**
   * 将先前导出（使用 `Game.map.visual.export`）的地图可视化效果添加到当前 tick。
   * @param data 从 `Game.map.visual.export` 返回的字符串。
   * @returns `MapVisual` 对象本身，以便进行链式调用。
   */
  import(data: string): MapVisual;
}

interface MapLineStyle {
  /**
   * 线条的宽度，默认值为 `0.1`。
   */
  width?: number;
  /**
   * 线条颜色，使用以下格式：`#ffffff`（十六进制颜色），默认为 `#ffffff`。
   */
  color?: string;
  /**
   * 透明度，默认值为 `0.5`。
   */
  opacity?: number;
  /**
   * `undefined` (实线)，`dashed` (虚线) 或者 `dotted` (点线) 之一。默认值为 `undefined`。
   */
  lineStyle?: "dashed" | "dotted" | "solid";
}

interface MapPolyStyle {
  /**
   * 线条颜色，使用以下格式：`#ffffff`（十六进制颜色），默认为 `#ffffff`。
   */
  fill?: string;
  /**
   * 透明度，默认值为 `0.5`。
   */
  opacity?: number;
  /**
   * 轮廓颜色，使用以下格式：`#ffffff`（十六进制颜色），默认为 `undefined`（无轮廓）。
   */
  stroke?: string | undefined;
  /**
   * 轮廓宽度，默认值为 `0.5`。
   */
  strokeWidth?: number;
  /**
   * `undefined` (实线)，`dashed` (虚线) 或者 `dotted` (点线) 之一。默认值为 `undefined`。
   */
  lineStyle?: "dashed" | "dotted" | "solid";
}

interface MapCircleStyle extends MapPolyStyle {
  /**
   * 圆的半径，默认值为 `10`。
   */
  radius?: number;
}

interface MapTextStyle {
  /**
   * 文本颜色，使用以下格式：`#ffffff`（十六进制颜色），默认为 `#ffffff`。
   */
  color?: string;
  /**
   * 文本字体，默认为 sans-serif
   */
  fontFamily?: string;
  /**
   * 字体大小，基于游戏坐标，默认为 `10`
   */
  fontSize?: number;
  /**
   * 字体风格（`'normal'`, `'italic'` 或者 `'oblique'`）
   */
  fontStyle?: string;
  /**
   * 字体变种（`'normal'` 或者 `'small-caps'`）
   */
  fontVariant?: string;
  /**
   * 轮廓颜色，使用以下格式：`#ffffff`（十六进制颜色），默认为 `undefined`（无轮廓）。
   */
  stroke?: string;
  /**
   * 轮廓宽带，默认为 `0.15`。
   */
  strokeWidth?: number;
  /**
   * 背景颜色，使用以下格式：`#ffffff`（十六进制颜色），默认为 `undefined`（无背景色）。
   * 当启用背景色时，文本的垂直对齐模式将被设置为居中（默认为 `baseline`）。
   */
  backgroundColor?: string;
  /**
   * 背景矩形的内边距（padding），默认为 `2`。
   */
  backgroundPadding?: number;
  /**
   * 文本对齐，`center`、`left`、`right` 之一。默认为 `center`。
   */
  align?: "center" | "left" | "right";
  /**
   * 透明度，默认值为 `0.5`。
   */
  opacity?: number;
}
/**
 * 描述游戏内市场的全局变量。您可以使用该对象追踪从您的终端接收/发送的资源交易，以及您的购买/出售订单。
 * @see https://screeps-cn.github.io/market.html
 */
interface Market {
  /**
   * 您当前的 credit 余额。
   */
  credits: number;
  /**
   * 一个数组，内容为您终端接收的最近 100 笔交易
   */
  incomingTransactions: Transaction[];
  /**
   * 一个对象，包含了您在市场中活跃 (activated) 和非活跃 (deactivated) 的购买/出售订单。
   */
  orders: { [key: string]: Order };
  /**
   * 一个数组，内容为您终端发送的最近 100 笔交易
   */
  outgoingTransactions: Transaction[];
  /**
   * 估算 `StructureTerminal.send` 和 `Game.market.deal` 方法的能量交易成本。 算法：
   *
   * ```js
   * Math.ceil( amount * (Math.log(0.1*linearDistanceBetweenRooms + 0.9) + 0.1) )
   * ```
   *
   * @param amount 要发送的资源数量。
   * @param roomName1 第一个房间的名称。
   * @param roomName2 第二个房间的名称。
   * @returns 进行交易所需的能量。
   */
  calcTransactionCost(
    amount: number,
    roomName1: string,
    roomName2: string,
  ): number;
  /**
   * 取消先前创建的订单。5% 的费用将不予退还。
   * @param orderId `Game.market.orders` 中提供的订单 ID。
   * @returns `OK`, `ERR_INVALID_ARGS`
   */
  cancelOrder(orderId: string): ScreepsReturnCode;
  /**
   * 修改一个已存在订单的单价。如果 `newPrice` 大于之前的单价，将向您收取 `(newPrice - oldPrice) * remainingAmount * 0.05` credit 的费用。
   * @param orderId `Game.market.orders` 提供的订单 ID。
   * @param newPrice 新的订单单价。
   * @returns `OK`, `ERR_NOT_OWNER`, `ERR_NOT_ENOUGH_RESOURCES`, `ERR_INVALID_ARGS`
   */
  changeOrderPrice(orderId: string, newPrice: number): ScreepsReturnCode;
  /**
   * 从您的终端创建一个市场订单。下单时将向您收取 `price * amount * 0.05` credit 的费用。
   *
   * 每个玩家最多可以拥有 300 个订单。您可以在任意时刻使用任意数量创建一个订单。之后会自动根据其可用资源量和 credit 来将其状态设置为活跃和非活跃。
   *
   * An order expires in 30 days after its creation, and the remaining market fee is returned.
   */
  createOrder(params: {
    type: ORDER_BUY | ORDER_SELL;
    resourceType: MarketResourceConstant;
    price: number;
    totalAmount: number;
    roomName?: string;
  }): ScreepsReturnCode;
  /**
   * 使用 `yourRoomName` 房间中的终端处理一个贸易订单，根据订单类型(购入/卖出)来和其他玩家的终端进行交易。
   *
   * 无论订单类型如何，您的终端都将承担本次资源交易所产生的能量消耗。您可以使用 `Game.market.calcTransactionCost` 方法估算运输成本。
   * 当多个玩家尝试处理同一个订单时，距离更近的玩家优先。您每 tick 不能处理超过 10 笔交易。
   * @param orderId 来自 `Game.market.getAllOrders` 的订单 ID。
   * @param amount 要转移的资源数量。
   * @param targetRoomName 您的某个房间名称，该房间应该存在有包含足够能量的可用终端。当订单的资源类型为 `SUBSCRIPTION_TOKEN` 时无需填写该参数。
   */
  deal(
    orderId: string,
    amount: number,
    targetRoomName?: string,
  ): ScreepsReturnCode;
  /**
   * 为一个已存在的订单添加容量。它将影响 `remainingAmount` 和 `totalAmount` 属性。您将要为此支付 `price * addAmount * 0.05` credit 的手续费。
   * @param orderId `Game.market.orders` 中提供的订单 ID。
   * @param addAmount 要增加多少容量。不能为负数。
   * @returns `OK`, `ERR_NOT_ENOUGH_RESOURCES`, `ERR_INVALID_ARGS`
   */
  extendOrder(orderId: string, addAmount: number): ScreepsReturnCode;
  /**
   * 获取当前市场上其他玩家活跃的订单。该方法支持 `resourceType` 内置索引。
   * @param filter (optional) 一个对象或者函数，将使用 `_.filter` 方法对结果列表进行筛选。
   */
  getAllOrders(filter?: OrderFilter | ((o: Order) => boolean)): Order[];
  /**
   * 获取最近 14 天以来市场中指定资源的每日价格记录。
   * @param resource `RESOURCE_*` 常量之一。如果为 `undefined`，则返回所有资源的历史数据。
   */
  getHistory(resource?: MarketResourceConstant): PriceHistory[];
  /**
   * 检索指定的市场订单。
   * @param orderId 订单 ID。
   */
  getOrderById(id: string): Order | null;
}

// No static is available

interface Transaction {
  transactionId: string;
  time: number;
  sender?: { username: string };
  recipient?: { username: string };
  resourceType: MarketResourceConstant;
  amount: number;
  from: string;
  to: string;
  description: string;
  order?: TransactionOrder;
}

interface Order {
  /** 唯一的订单 ID。 */
  id: string;
  /** 订单创建时的游戏 tick。inter-shard 市场中的订单不存在该属性。 */
  created: number;
  active?: boolean;
  /** `ORDER_SELL` 或 `ORDER_BUY`。 */
  type: string;
  /** ` RESOURCE_*` 常量之一或者 `SUBSCRIPTION_TOKEN`。 */
  resourceType: MarketResourceConstant;
  /** 下订单的房间。 */
  roomName?: string;
  /** 当前可用的交易量。 */
  amount: number;
  /** 该订单还可以交易多少资源。 */
  remainingAmount: number;
  totalAmount?: number;
  /** 当前的交易单价。 */
  price: number;
}

interface TransactionOrder {
  id: string;
  type: string;
  price: number;
}

interface OrderFilter {
  id?: string;
  created?: number;
  type?: string;
  resourceType?: MarketResourceConstant;
  roomName?: string;
  amount?: number;
  remainingAmount?: number;
  price?: number;
}

interface PriceHistory {
  resourceType: MarketResourceConstant;
  date: string;
  transactions: number;
  volume: number;
  avgPrice: number;
  stddevPrice: number;
}
interface Memory {
  creeps: { [name: string]: CreepMemory };
  powerCreeps: { [name: string]: PowerCreepMemory };
  flags: { [name: string]: FlagMemory };
  rooms: { [name: string]: RoomMemory };
  spawns: { [name: string]: SpawnMemory };
}

interface CreepMemory {}
interface FlagMemory {}
interface PowerCreepMemory {}
interface RoomMemory {}
interface SpawnMemory {}

declare const Memory: Memory;
/**
 * 矿床。在建有 extractor 建筑时可以通过带有 `WORK` 身体部件的 creep 采集。
 * @see https://screeps-cn.github.io/resources.html
 */
interface Mineral<T extends MineralConstant = MineralConstant>
  extends RoomObject {
  /**
   * The prototype is stored in the Mineral.prototype global object. You can use it to extend game objects behaviour globally.
   */
  readonly prototype: Mineral;
  /**
   * 矿床丰度。丰度越高其容量越大。一旦再生时间 (ticksToRegeneration) 降为 `0`，该矿床的丰度将被重置为 `DENSITY_*` 常量之一。
   */
  density: number;
  /**
   * 资源的剩余容量。
   */
  mineralAmount: number;
  /**
   * 资源类型，`RESOURCE_*` 常量之一。
   */
  mineralType: T;
  /**
   * 一个唯一的对象标识。你可以使用 `Game.getObjectById` 方法获取对象实例。
   */
  id: Id<this>;
  /**
   * 矿床容量将要恢复满额的剩余时间。
   */
  ticksToRegeneration: number;
}

interface MineralConstructor
  extends _Constructor<Mineral>, _ConstructorById<Mineral> {}

declare const Mineral: MineralConstructor;
/**
 * 核弹原爆点，此对象无法被更改或移除。但可以用常数 `FIND_NUKES` 查找即将抵达房间的核弹。核弹只能由 [核弹发射井](https://screeps-cn.github.io/api/#StructureNuker) 发射
 */
interface Nuke extends RoomObject {
  readonly prototype: Nuke;

  /**
   * 全局唯一的对象标识。你可以通过调用 `Game.getObjectById` 方法取得对象实例。
   */
  id: Id<this>;
  /**
   * 发射此核弹的房间名。
   */
  launchRoomName: string;
  /**
   * 着落倒计时。
   */
  timeToLand: number;
}

interface NukeConstructor extends _Constructor<Nuke>, _ConstructorById<Nuke> {}

declare const Nuke: NukeConstructor;
/**
 * 包含了在游戏中进行寻路的强大方法。
 * 这个模块使用原生的高性能 C++ 代码实现，并支持跨越多个房间的自定义寻路成本及路径。
 */
interface PathFinder {
  /**
   * Container for custom navigation cost data.
   */
  CostMatrix: CostMatrix;

  /**
   * 在 `origin` 和 `goal` 之间查找最佳路径。
   *
   * @param origin 起始位置。
   * @param goal 一个或一组目标。如果提供了多个目标，则返回所有目标中移动成本最低的路径。
   * **重要：** 请注意，如果您的目标是无法行走的（例如，一个 `source`），请至少将 `range` 设置成至少为 `1`。否则您将浪费很多 CPU 资源来查找一个无法到达的目标。
   * @param opts 一个包含其他寻路选项的对象。
   */
  search(
    origin: RoomPosition,
    goal:
      | RoomPosition
      | { pos: RoomPosition; range: number }
      | (RoomPosition | { pos: RoomPosition; range: number })[],
    opts?: PathFinderOpts,
  ): PathFinderPath;
  /**
   * 指定是否在游戏中使用新的实验性 pathfinder
   * 该方法应在每个 tick 调用。它将影响以下方法的行为：
   * * `Room.findPath`
   * * `RoomPosition.findPathTo`
   * * `RoomPosition.findClosestByPath`
   * * `Creep.moveTo`
   *
   * @deprecated 此方法已被弃用，不久将被删除。
   * @param 是否要激活新的 pathfinder。默认值为 `true`。
   */
  use(isEnabled: boolean): undefined;
}

/**
 * 包含以下属性的对象：
 * - path - RoomPosition` 对象数组。
 * - ops - 寻路完成时的 operation 总消耗。
 * - cost - 从 `plainCost`，`swampCost` 和任何给定的 `CostMatrix` 实例推导出的移动总成本。
 * - incomplete - 如果 `pathfinder` 找不到完整的路径的话，该值将为 `true`。
 *   注意，`path` 中依旧会有部分路径，其中的不完整路径代表在当前搜索限制下所能找到的最接近的路径。
 */
interface PathFinderPath {
  /**
   * `RoomPosition` 对象数组。
   */
  path: RoomPosition[];
  /**
   * 寻路完成时的 operation 总消耗。
   */
  ops: number;
  /**
   * 从 `plainCost`，`swampCost` 和任何给定的 `CostMatrix` 实例推导出的移动总成本。
   */
  cost: number;
  /**
   * 如果 `pathfinder` 找不到完整的路径的话，该值将为 `true`。
   * 注意，`path` 中依旧会有部分路径，其中的不完整路径代表在当前搜索限制下所能找到的最接近的路径。
   */
  incomplete: boolean;
}

/**
 * 一个包含其他寻路选项的对象。
 */
interface PathFinderOpts {
  /**
   * 平原上的移动成本，默认为 `1`。
   */
  plainCost?: number;
  /**
   * 沼泽上的移动成本，默认为 `5`。
   */
  swampCost?: number;
  /**
   * 与其寻找前往目标的道路，不如寻找远离目标的道路。
   * 返回远离每个目标 `range` 的移动成本最低的路径。默认为 `false`。
   */
  flee?: boolean;
  /**
   * 寻路所允许的最大消耗。你可以限制用于搜索路径的 CPU 时间，基于 1 op ~ 0.001 CPU 的比例。默认值为 `2000`。
   */
  maxOps?: number;
  /**
   * 寻路所允许的最大房间数。默认值(最大值)为 `16`。
   */
  maxRooms?: number;
  /**
   * 寻路所允许的最大移动成本。如果 `pathfinder` 发现无论如何都找不到移动成本小于等于 `maxCost` 的路径时，它将立即停止搜索。默认值为无穷大(`Infinity`)。
   */
  maxCost?: number;
  /**
   * 应用于 A* 算法 `F = G + weight * H` 中的启发式权重(weight)。在使用该选项之前您最好已经了解了 A* 算法的底层实现！默认值为 `1.2`。
   */
  heuristicWeight?: number;

  /**
   * 该回调可以用来生成某些房间的 [`CostMatrix`](https://screeps-cn.github.io/api/#PathFinder-CostMatrix)，并提供给 `pathfinder` 来增强寻路效果。该回调拥有一个 `roomName` 参数。
   * 在寻路搜索中，每个房间只会被执行一次回调。
   * 如果您要在 1 tick 内为单个房间执行多次寻路操作，可以考虑缓存您的 `CostMatrix` 来提高代码运行效率。
   * 请阅读 [`CostMatrix`](https://screeps-cn.github.io/api/#PathFinder-CostMatrix) 文档来了解更多关于 `CostMatrix` 的信息。如果该回调返回 `false`，则对应的房间不会被搜索，并且该房间也不会加入到 `maxRooms` 里。
   *
   * @param roomName The name of the room the pathfinder needs a cost matrix for.
   */
  roomCallback?(roomName: string): boolean | CostMatrix;
}

/**
 * 存放自定义导航寻路成本的对象。
 *
 * 默认情况下，`PathFinder` 在寻路时只考虑地形 (平原、沼泽、墙壁) —— 如果您需要绕过建筑或者 creep，就需要把他们放进一个 `CostMatrix` 里。
 * 通常情况下，您将在 `roomCallback` 内部创建 `CostMatrix`。如果在房间的 `CostMatrix` 里找到了一个非零值，那么它将替代默认的地形移动成本。
 * 您应该避免在 `CostMatrix` 和地形移动成本标志里使用较大值。例如，使用 `{ plainCost: 1, swampCost: 5 }` 的 `PathFinder.search` 将比使用 `{plainCost: 2, swampCost: 10 }` 的运行的更快，并且他们将会寻路出相同的路径。
 */
interface CostMatrix {
  /**
   * Creates a new CostMatrix containing 0's for all positions.
   */
  // eslint-disable-next-line @typescript-eslint/no-misused-new
  new (): CostMatrix;
  /**
   * 在 `CostMatrix` 中设置指定位置的移动成本。
   * @param x 位置在房间中的 x 坐标。
   * @param y 位置在房间中的 y 坐标。
   * @param cost 该位置的移动成本，必须是整数。值为 `0` 时将使用该地块默认的地形移动成本。大于或等于 `255` 的移动成本将视为无法通过。
   */
  set(x: number, y: number, cost: number): undefined;
  /**
   * 获取该 CostMatrix 中指定位置的移动成本。
   * @param x 位置在房间中的 x 坐标。
   * @param y 位置在房间中的 y 坐标。
   */
  get(x: number, y: number): number;
  /**
   * 使用当前 `CostMatrix` 中的相同数据创建一个新的 `CostMatrix`。
   */
  clone(): CostMatrix;
  /**
   * 返回该 `CostMatrix` 的紧凑形式，使其可以使用 `JSON.stringify` 进行存储。
   */
  serialize(): number[];
  /**
   * 静态方法，可以将 serialize 方法返回的值反序列化为一个新的 `CostMatrix`。
   * @param val 任何 serialize 的返回值。
   */
  deserialize(val: number[]): CostMatrix;
}

declare const PathFinder: PathFinder;
/**
 * Power Creeps are immortal "heroes" that are tied to your account and can be respawned in any PowerSpawn after death.
 * You can upgrade their abilities ("powers") up to your account Global Power Level (see `Game.gpl`).
 */
interface PowerCreep extends RoomObject {
  /**
   * An object with the creep's cargo contents.
   * @deprecated An alias for Creep.store.
   */
  carry: StoreDefinition;
  /**
   * The total amount of resources the creep can carry.
   * @deprecated An alias for Creep.store.getCapacity().
   */
  carryCapacity: number;
  /**
   * The power creep's class, one of the `POWER_CLASS` constants.
   */
  className: PowerClassConstant;
  /**
   * A timestamp when this creeep is marked to be permanently deleted from the account, or undefined otherwise.
   */
  deleteTime: number | undefined;
  /**
   * The current amount of hit points of the creep.
   */
  hits: number;
  /**
   * The maximum amount of hit points of the creep.
   */
  hitsMax: number;
  /**
   * A unique identifier. You can use `Game.getObjectById` method to retrieve an object instance by its id.
   */
  id: Id<this>;
  /**
   * The power creep's level.
   */
  level: number;
  /**
   * A shorthand to `Memory.powerCreeps[creep.name]`. You can use it for quick access to the creep's specific memory data object.
   */
  memory: PowerCreepMemory;
  /**
   * Whether it is your creep or foe.
   */
  my: boolean;
  /**
   * Power creep name. You can choose the name while creating a new power creep, and `rename` it while unspawned. This name is a hash key to access the creep via the `Game.powerCreeps` object.
   */
  name: string;
  /**
   * An object with the creep's owner information.
   */
  owner: Owner;
  /**
   * A Store object that contains cargo of this creep.
   */
  store: StoreDefinition;
  /**
   * An object with the creep's available powers.
   */
  powers: PowerCreepPowers;
  /**
   * The text message that the creep was saying at the last tick.
   */
  saying: string;
  /**
   * The name of the shard where the power creeps is spawned, or undefined.
   */
  shard: string | undefined;
  /**
   * The timestamp when spawning or deleting this creep will become available. Undefined if the power creep is spawned in the world.
   * Note: This is a timestamp, not ticks as powerCreeps are not shard dependent.
   */
  spawnCooldownTime: number | undefined;
  /**
   * The remaining amount of game ticks after which the creep will die and become unspawned. Undefined if the creep is not spawned in the world.
   */
  ticksToLive: number | undefined;
  /**
   *
   * @param methodName Cancel the order given during the current game tick.
   */
  cancelOrder(
    methodName: string,
  ): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NOT_FOUND;
  /**
   * Delete the power creep permanently from your account.
   * It should NOT be spawned in the world. The creep is not deleted immediately, but a 24-hour delete time is started (see `deleteTime`).
   * You can cancel deletion by calling `delete(true)`.
   */
  delete(cancel?: boolean): OK | ERR_NOT_OWNER | ERR_BUSY;
  /**
   * Drop this resource on the ground.
   * @param resourceType One of the RESOURCE_* constants.
   * @param amount The amount of resource units to be dropped. If omitted, all the available carried amount is used.
   */
  drop(
    resourceType: ResourceConstant,
    amount?: number,
  ): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NOT_ENOUGH_RESOURCES;
  /**
   * Enable power usage in this room. The room controller should be at adjacent tile.
   * @param controller The room controller
   */
  enableRoom(
    controller: StructureController,
  ): OK | ERR_NOT_OWNER | ERR_INVALID_TARGET | ERR_NOT_IN_RANGE;
  /**
   * Move the creep one square in the specified direction or towards a creep that is pulling it.
   *
   * Requires the MOVE body part if not being pulled.
   * @param direction The direction to move in (`TOP`, `TOP_LEFT`...)
   */
  move(direction: DirectionConstant): CreepMoveReturnCode;
  move(
    target: Creep,
  ): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NOT_IN_RANGE | ERR_INVALID_ARGS;
  /**
   * Move the creep using the specified predefined path. Needs the MOVE body part.
   * @param path A path value as returned from Room.findPath or RoomPosition.findPathTo methods. Both array form and serialized string form are accepted.
   */
  moveByPath(
    path: PathStep[] | RoomPosition[] | string,
  ): CreepMoveReturnCode | ERR_NOT_FOUND | ERR_INVALID_ARGS;
  /**
   * Find the optimal path to the target within the same room and move to it.
   * A shorthand to consequent calls of pos.findPathTo() and move() methods.
   * If the target is in another room, then the corresponding exit will be used as a target.
   *
   * Needs the MOVE body part.
   * @param x X position of the target in the room.
   * @param y Y position of the target in the room.
   * @param opts An object containing pathfinding options flags (see Room.findPath for more info) or one of the following: reusePath, serializeMemory, noPathFinding
   */
  moveTo(
    x: number,
    y: number,
    opts?: MoveToOpts,
  ): CreepMoveReturnCode | ERR_NO_PATH | ERR_INVALID_TARGET;
  /**
   * Find the optimal path to the target within the same room and move to it.
   * A shorthand to consequent calls of pos.findPathTo() and move() methods.
   * If the target is in another room, then the corresponding exit will be used as a target.
   *
   * Needs the MOVE body part.
   * @param target Can be a RoomPosition object or any object containing RoomPosition.
   * @param opts An object containing pathfinding options flags (see Room.findPath for more info) or one of the following: reusePath, serializeMemory, noPathFinding
   */
  moveTo(
    target: RoomPosition | { pos: RoomPosition },
    opts?: MoveToOpts,
  ): CreepMoveReturnCode | ERR_NO_PATH | ERR_INVALID_TARGET | ERR_NOT_FOUND;
  /**
   * Toggle auto notification when the creep is under attack. The notification will be sent to your account email. Turned on by default.
   * @param enabled Whether to enable notification or disable.
   */
  notifyWhenAttacked(
    enabled: boolean,
  ): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_INVALID_ARGS;
  /**
   * Pick up an item (a dropped piece of energy). Needs the CARRY body part. The target has to be at adjacent square to the creep or at the same square.
   * @param target The target object to be picked up.
   */
  pickup(target: Resource): CreepActionReturnCode | ERR_FULL;
  /**
   * Rename the power creep. It must not be spawned in the world.
   */
  rename(name: string): OK | ERR_NOT_OWNER | ERR_NAME_EXISTS | ERR_BUSY;
  /**
   * Instantly restore time to live to the maximum using a Power Spawn or a Power Bank nearby. It has to be at adjacent tile.
   * @param target The target structure
   */
  renew(
    target: StructurePowerBank | StructurePowerSpawn,
  ): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_INVALID_TARGET | ERR_NOT_IN_RANGE;
  /**
   * Display a visual speech balloon above the creep with the specified message.
   *
   * The message will disappear after a few seconds. Useful for debugging purposes.
   *
   * Only the creep's owner can see the speech message unless toPublic is true.
   * @param message The message to be displayed. Maximum length is 10 characters.
   * @param set to 'true' to allow other players to see this message. Default is 'false'.
   */
  say(message: string, toPublic?: boolean): OK | ERR_NOT_OWNER | ERR_BUSY;
  /**
   * Spawn this power creep in the specified Power Spawn.
   * @param powerSpawn Your Power Spawn structure
   */
  spawn(
    powerSpawn: StructurePowerSpawn,
  ):
    | OK
    | ERR_NOT_OWNER
    | ERR_BUSY
    | ERR_INVALID_TARGET
    | ERR_TIRED
    | ERR_RCL_NOT_ENOUGH;
  /**
   * Kill the power creep immediately. It will not be destroyed permanently, but will become unspawned, so that you can `spawn` it again.
   */
  suicide(): OK | ERR_NOT_OWNER | ERR_BUSY;
  /**
   * Transfer resource from the creep to another object. The target has to be at adjacent square to the creep.
   * @param target The target object.
   * @param resourceType One of the RESOURCE_* constants
   * @param amount The amount of resources to be transferred. If omitted, all the available carried amount is used.
   */
  transfer(
    target: AnyCreep | Structure,
    resourceType: ResourceConstant,
    amount?: number,
  ): ScreepsReturnCode;
  /**
   * Upgrade the creep, adding a new power ability to it or increasing the level of the existing power. You need one free Power Level in your account to perform this action.
   */
  upgrade(
    power: PowerConstant,
  ):
    | OK
    | ERR_NOT_OWNER
    | ERR_NOT_ENOUGH_RESOURCES
    | ERR_FULL
    | ERR_INVALID_ARGS;
  /**
   * Apply one of the creep's powers on the specified target.
   */
  usePower(power: PowerConstant, target?: RoomObject): ScreepsReturnCode;
  /**
   * Withdraw resources from a structure, tombstone, or ruin.
   *
   * The target has to be at adjacent square to the creep.
   *
   * Multiple creeps can withdraw from the same structure in the same tick.
   *
   * Your creeps can withdraw resources from hostile structures as well, in case if there is no hostile rampart on top of it.
   * @param target The target object.
   * @param resourceType The target One of the RESOURCE_* constants..
   * @param amount The amount of resources to be transferred. If omitted, all the available amount is used.
   */
  withdraw(
    target: Structure | Tombstone | Ruin,
    resourceType: ResourceConstant,
    amount?: number,
  ): ScreepsReturnCode;
}

interface PowerCreepConstructor
  extends _Constructor<PowerCreep>, _ConstructorById<PowerCreep> {
  /**
   * A static method to create new Power Creep instance in your account. It will be added in an unspawned state,
   * use spawn method to spawn it in the world.
   *
   * You need one free Power Level in your account to perform this action.
   *
   * @param name The name of the power creep.
   * @param className The class of the new power creep, one of the `POWER_CLASS` constants
   */
  create(
    name: string,
    className: PowerClassConstant,
  ): OK | ERR_NAME_EXISTS | ERR_NOT_ENOUGH_RESOURCES;
}

declare const PowerCreep: PowerCreepConstructor;

/**
 * Available powers, an object with power ID as a key, and the following properties
 */
interface PowerCreepPowers {
  [powerID: number]: {
    /**
     * Current level of the power
     */
    level: number;
    /**
     * Cooldown ticks remaining, or undefined if the power creep is not spawned in the world.
     */
    cooldown: number | undefined;
  };
}
/**
 * RawMemory object allows to implement your own memory stringifier instead of built-in serializer based on JSON.stringify.
 */
interface RawMemory {
  /**
   * An object with asynchronous memory segments available on this tick. Each object key is the segment ID with data in string values.
   * Use RawMemory.setActiveSegments to fetch segments on the next tick. Segments data is saved automatically in the end of the tick.
   */
  segments: { [segmentId: number]: string };

  /**
   * An object with a memory segment of another player available on this tick. Use `setActiveForeignSegment` to fetch segments on the next tick.
   */
  foreignSegment: {
    username: string;
    id: number;
    data: string;
  };

  /**
   *  @deprecated Use `InterShardMemory` instead.
   *
   *  A string with a shared memory segment available on every world shard. Maximum string length is 100 KB.
   *
   * **Warning:** this segment is not safe for concurrent usage! All shards have shared access to the same instance of
   * data. When the segment contents is changed by two shards simultaneously, you may lose some data, since the segment
   * string value is written all at once atomically. You must implement your own system to determine when each shard is
   * allowed to rewrite the inter-shard memory, e.g. based on mutual exclusions.
   *
   */
  interShardSegment: string;

  /**
   * Get a raw string representation of the Memory object.
   */
  get(): string;
  /**
   * Set new memory value.
   * @param value New memory value as a string.
   */
  set(value: string): undefined;
  /**
   * Request memory segments using the list of their IDs. Memory segments will become available on the next tick in RawMemory.segments object.
   * @param ids An array of segment IDs. Each ID should be a number from 0 to 99. Maximum 10 segments can be active at the same time. Subsequent calls of setActiveSegments override previous ones.
   */
  setActiveSegments(ids: number[]): undefined;
  /**
   * Request a memory segment of another user.
   *
   * The segment should be marked by its owner as public using `setPublicSegments`.
   *
   * The segment data will become available on the next tick in `foreignSegment` object.
   *
   * You can only have access to one foreign segment at the same time.
   *
   * @param username The name of another user. Pass `null` to clear the foreign segment.
   * @param id The ID of the requested segment from 0 to 99. If undefined, the user's default public segment is requested as set by `setDefaultPublicSegment`.
   */
  setActiveForeignSegment(username: string | null, id?: number): undefined;
  /**
   * Set the specified segment as your default public segment. It will be returned if no id parameter is passed to `setActiveForeignSegment` by another user.
   *
   * @param id The ID of the requested segment from 0 to 99. Pass `null` to clear the foreign segment.
   */
  setDefaultPublicSegment(id: number | null): undefined;
  /**
   * Set specified segments as public. Other users will be able to request access to them using `setActiveForeignSegment`.
   *
   * @param ids An array of segment IDs. Each ID should be a number from 0 to 99. Subsequent calls of `setPublicSegments` override previous ones.
   */
  setPublicSegments(ids: number[]): undefined;
}

declare const RawMemory: RawMemory;
/**
 * 掉落的资源。 如果没有拿起，它会在一段时间后消失。 掉落的资源以每 tick `ceil(amount/1000)` 的速度消失。
 */
interface Resource<T extends ResourceConstant = ResourceConstant>
  extends RoomObject {
  readonly prototype: Resource;

  /**
   * 资源数量。
   */
  amount: number;
  /**
   * 一个唯一的对象标识。你可以使用 [`Game.getObjectById`](https://screeps-cn.github.io/api/#Game.getObjectById) 方法获取对象实例。
   */
  id: Id<this>;
  /**
   * `RESOURCE_*` 常量之一。
   */
  resourceType: T;
}

interface ResourceConstructor
  extends _Constructor<Resource>, _ConstructorById<Resource> {}

declare const Resource: ResourceConstructor;
/**
 * 房间中所有具有坐标的对象。几乎所有的游戏对象原型都是从 `RoomObject` 派生出来的。
 */
interface RoomObject {
  readonly prototype: RoomObject;
  /**
   * 附加的效果，一个包含如下属性的对象数组：
   *
   * - power `number` - 被应用的效果id。可以是自然效果或者超能效果。
   * - level `number` - 被应用的效果等级。如果不是超能效果的话则不存在。
   * - ticksRemaining number - 多长时间之后会失去这个效果。
   */
  effects: RoomObjectEffect[];
  /**
   * 表示该对象在房间中的坐标的对象。
   */
  pos: RoomPosition;
  /**
   * Room 对象的链接。如果对象是标志或工地并且放置在你不可见的房间中，则可能为 `undefined`。
   */
  room: Room | undefined;
}

interface RoomObjectConstructor extends _Constructor<RoomObject> {
  new (x: number, y: number, roomName: string): RoomObject;
  (x: number, y: number, roomName: string): RoomObject;
}

declare const RoomObject: RoomObjectConstructor;

/**
 * Discriminated union of possible effects on `effect`
 */
type RoomObjectEffect = NaturalEffect | PowerEffect;

/**
 * Natural effect applied to room object
 */
interface NaturalEffect {
  /**
   * Effect ID of the applied effect. `EFFECT_*` constant.
   */
  effect: EffectConstant;
  /**
   * How many ticks will the effect last.
   */
  ticksRemaining: number;
}

/**
 * Effect applied to room object as result of a `PowerCreep.usePower`.
 */
interface PowerEffect {
  /**
   * Power level of the applied effect.
   */
  level: number;
  /**
   * Effect ID of the applied effect. `PWR_*` constant.
   */
  effect: PowerConstant;
  /**
   * @deprecated Power ID of the applied effect. `PWR_*` constant. No longer documented, will be removed.
   */
  power: PowerConstant;
  /**
   * How many ticks will the effect last.
   */
  ticksRemaining: number;
}
/**
 * 表示房间中指定位置的对象。
 *
 * 房间中的每个 `RoomObject` 都通过其 `pos` 属性链接到对应的 `RoomPosition` 上。
 *
 * 可以使用 `Room.getPositionAt` 或者构造函数创建自定义地点的位置对象。
 */
interface RoomPosition {
  readonly prototype: RoomPosition;

  /**
   * 所处房间的名称。
   */
  roomName: string;
  /**
   * 所处房间的 X 坐标。
   */
  x: number;
  /**
   * 所处房间的 Y 坐标。
   */
  y: number;
  /**
   * 在指定位置创建新的 `ConstructionSite`。
   * @param structureType `STRUCTURE_*` 常量之一:
   *  * `STRUCTURE_EXTENSION`
   *  * `STRUCTURE_RAMPART`
   *  * `STRUCTURE_ROAD`
   *  * `STRUCTURE_SPAWN`
   *  * `STRUCTURE_WALL`
   *  * `STRUCTURE_LINK`
   */
  createConstructionSite(
    structureType: BuildableStructureConstant,
  ): ScreepsReturnCode;
  /**
   * 在指定位置创建新的 `ConstructionSite`。
   * @param structureType `STRUCTURE_*` 常量之一:
   *  * `STRUCTURE_EXTENSION`
   *  * `STRUCTURE_RAMPART`
   *  * `STRUCTURE_ROAD`
   *  * `STRUCTURE_SPAWN`
   *  * `STRUCTURE_WALL`
   *  * `STRUCTURE_LINK`
   * @param name 建筑的名称，该建筑必须支持设置名字（当前仅有 spawn）。
   */
  createConstructionSite(
    structureType: STRUCTURE_SPAWN,
    name?: string,
  ): ScreepsReturnCode;
  /**
   * 在指定位置创建一个新的 `Flag`。
   * @param name 新旗帜的名称。
   * 它应该是唯一的，即 `Game.flags` 不应该包含拥有相同名称(哈希键)的不同旗帜。
   * 如果未定义，则会生成随机名称。
   * @param color 新旗帜的颜色。应为 `COLOR_*` 常量之一。默认值为 `COLOR_WHITE`。
   * @param secondaryColor 新旗帜的次要颜色。应为 `COLOR_*` 常量之一。默认值等于 `color` 属性值。
   * @returns 新旗帜的名称，或者下列错误码之一: `ERR_NAME_EXISTS`, `ERR_INVALID_ARGS`
   */
  createFlag(
    name?: string,
    color?: ColorConstant,
    secondaryColor?: ColorConstant,
  ): ERR_NAME_EXISTS | ERR_INVALID_ARGS | string;
  /**
   * 查找到该位置路径最短的对象。使用跳点搜索（Jump Point Search）算法和 Dijkstra's 算法进行搜索。
   * @param type `FIND_*` 常量之一。
   * @param opts 一个对象，包含了寻路选项（详见 `Room.findPath`），或下列属性：
   *
   * - filter, 只有通过筛选器的对象才会被使用，由 `_.filter` 执行筛选。
   *
   * - algorithm 下列常量之一：
   *
   *   - `astar` 当可能存在的目标相对较少时运行速度更快；
   *   - `dijkstra` 当可能存在的目标较多或者附近就有最近的目标时，速度会更快。
   *
   * 默认算法是使用启发法自行决定的。
   * @returns 返回找到的最近对象，没找到则返回 null。
   */
  findClosestByPath<K extends FindConstant>(
    type: K,
    opts?: FindPathOpts & Partial<FilterOptions<K>> & {
      algorithm?: FindClosestByPathAlgorithm;
    },
  ): FindTypes[K] | null;
  findClosestByPath<T extends Structure>(
    type: FIND_STRUCTURES | FIND_MY_STRUCTURES | FIND_HOSTILE_STRUCTURES,
    opts?: FindPathOpts & Partial<FilterOptions<FIND_STRUCTURES>> & {
      algorithm?: FindClosestByPathAlgorithm;
    },
  ): T | null;
  /**
   * 查找到该位置路径最短的对象。使用跳点搜索（Jump Point Search）算法和 Dijkstra's 算法进行搜索。
   * @param objects 要执行搜索的房间对象数组或者 `RoomPosition` 对象数组。
   * @param opts 一个对象，包含了寻路选项（详见 `Room.findPath`），或下列属性：
   *
   * - filter, 只有通过筛选器的对象才会被使用，由 `_.filter` 执行筛选。
   *
   * - algorithm 下列常量之一：
   *
   *   - `astar` 当可能存在的目标相对较少时运行速度更快；
   *   - `dijkstra` 当可能存在的目标较多或者附近就有最近的目标时，速度会更快。
   *
   * 默认算法是使用启发法自行决定的。
   * @returns 返回找到的最近对象，没找到则返回 null。
   */
  findClosestByPath<T extends _HasRoomPosition | RoomPosition>(
    objects: T[],
    opts?: FindPathOpts & {
      filter?: ((object: T) => boolean) | FilterObject | string;
      algorithm?: FindClosestByPathAlgorithm;
    },
  ): T | null;
  /**
   * 查找到该位置线性距离最短的对象。
   * @param type `FIND_*` 常量之一。
   * @param opts 可选对象
   */
  findClosestByRange<K extends FindConstant>(
    type: K,
    opts?: FilterOptions<K>,
  ): FindTypes[K] | null;
  findClosestByRange<T extends Structure>(
    type: FIND_STRUCTURES | FIND_MY_STRUCTURES | FIND_HOSTILE_STRUCTURES,
    opts?: FilterOptions<FIND_STRUCTURES>,
  ): T | null;
  /**
   * 查找到该位置线性距离最短的对象。
   * @param objects 要执行搜索的房间对象数组或者 `RoomPosition` 对象数组。
   * @param opts 可选对象
   */
  findClosestByRange<T extends _HasRoomPosition | RoomPosition>(
    objects: T[],
    opts?: { filter: any | string },
  ): T | null;
  /**
   * 查找在指定线性范围中的所有对象。
   * @param type `FIND_*` 常量之一。
   * @param range T范围距离（半径）。
   * @param opts 详见 `Room.find`.
   */
  findInRange<K extends FindConstant>(
    type: K,
    range: number,
    opts?: FilterOptions<K>,
  ): FindTypes[K][];
  findInRange<T extends Structure>(
    type: FIND_STRUCTURES | FIND_MY_STRUCTURES | FIND_HOSTILE_STRUCTURES,
    range: number,
    opts?: FilterOptions<FIND_STRUCTURES>,
  ): T[];
  /**
   * 查找在指定线性范围中的所有对象。
   * @param objects 要执行搜索的房间对象数组或者 `RoomPosition` 对象数组。
   * @param range 范围距离（半径）。
   * @param opts 详见 `Room.find`.
   */
  findInRange<T extends _HasRoomPosition | RoomPosition>(
    objects: T[],
    range: number,
    opts?: { filter?: any | string },
  ): T[];
  /**
   * 使用 A* 算法查找到指定位置的最佳路径。
   *
   * 该方法是 `Room.findPath` 的简写。如果目标在其他房间，则相应的出口将被作为目标。
   * @param x 该房间中的 X 坐标。
   * @param y 该房间中的 Y 坐标。
   * @param opts 一个对象，包含了寻路相关的选项标识 (查看 `Room.findPath` 来获得更多信息)。
   */
  findPathTo(x: number, y: number, opts?: FindPathOpts): PathStep[];
  /**
   * 使用 A* 算法查找到指定位置的最佳路径。
   *
   * 该方法是 `Room.findPath` 的简写。如果目标在其他房间，则相应的出口将被作为目标。
   * @param target 可以是 `RoomPosition` 对象或者任何包含 `RoomPosition` 属性的对象。
   * @param opts 一个对象，包含了寻路相关的选项标识 (查看 `Room.findPath` 来获得更多信息)。
   */
  findPathTo(
    target: RoomPosition | _HasRoomPosition,
    opts?: FindPathOpts,
  ): PathStep[];
  /**
   * 获取到指定位置的直线方向。
   * @param x 该房间中的 X 坐标。
   * @param y 该房间中的 Y 坐标。
   */
  getDirectionTo(x: number, y: number): DirectionConstant;
  /**
   * 获取到指定位置的直线方向。
   * @param target 可以是 RoomPosition 对象或者任何包含 RoomPosition 属性的对象。
   */
  getDirectionTo(target: RoomPosition | _HasRoomPosition): DirectionConstant;
  /**
   * 获取到指定位置的线性范围。
   * @param x 该房间中的 X 坐标。
   * @param y 该房间中的 Y 坐标。
   */
  getRangeTo(x: number, y: number): number;
  /**
   * 获取到指定位置的线性范围。
   * @param target 可以是 RoomPosition 对象或者任何包含 RoomPosition 属性的对象。
   */
  getRangeTo(target: RoomPosition | { pos: RoomPosition }): number;
  /**
   * 检查该位置是否在其他位置的指定范围内。
   * @param x 该房间中的 X 坐标。
   * @param y 该房间中的 Y 坐标。
   * @param range 范围距离（半径）。
   */
  inRangeTo(x: number, y: number, range: number): boolean;
  /**
   * 检查该位置是否在其他位置的指定范围内。
   * @param toPos 目标位置
   * @param range 范围距离（半径）。
   */
  inRangeTo(
    target: RoomPosition | { pos: RoomPosition },
    range: number,
  ): boolean;
  /**
   * 检查该位置是否和指定位置相同。
   * @param x 该房间中的 X 坐标。
   * @param y 该房间中的 Y 坐标。
   */
  isEqualTo(x: number, y: number): boolean;
  /**
   * 检查该位置是否和指定位置相同。
   * @param target 可以是 `RoomPosition` 对象或者任何包含 `RoomPosition` 属性的对象。
   */
  isEqualTo(target: RoomPosition | { pos: RoomPosition }): boolean;
  /**
   * 检查该位置是否在紧邻指定位置的正方形区域内。类似于 `inRangeTo(target, 1)`。
   * @param x 该房间中的 X 坐标。
   * @param y 该房间中的 Y 坐标。
   */
  isNearTo(x: number, y: number): boolean;
  /**
   * 检查该位置是否在紧邻指定位置的正方形区域内。类似于 `inRangeTo(target, 1)`。
   * @param target 可以是 RoomPosition 对象或者任何包含 RoomPosition 属性的对象。
   */
  isNearTo(target: RoomPosition | { pos: RoomPosition }): boolean;
  /**
   * 获取位于该位置的对象列表。
   */
  look(): LookAtResult[];
  /**
   * 获取该位置上给定类型的对象列表。
   * @param type `LOOK_*` 常量之一。
   */
  lookFor<T extends keyof AllLookAtTypes>(type: T): AllLookAtTypes[T][];
}

interface RoomPositionConstructor extends _Constructor<RoomPosition> {
  /**
   * 你可以使用其构造函数创建一个新的 RoomPosition 对象。
   * @param x 房间中的 X 坐标。
   * @param y 房间中的 Y 坐标。
   * @param roomName 房间名称。
   */
  new (x: number, y: number, roomName: string): RoomPosition;
  (x: number, y: number, roomName: string): RoomPosition;
}

declare const RoomPosition: RoomPositionConstructor;
/**
 * 提供快速访问房间地形数据的对象。您可以为游戏世界中的任何房间构造这些对象，即使没有该房间的视野。
 * 从技术上讲，每个 `Room.Terrain` 对象都是一个非常轻量级的适配器，用于提供具有最小访问权限的静态地形缓冲区。
 */
interface RoomTerrain {
  /**
   * 通过 (x,y) 坐标获取指定房间位置处的地形。和 [`Game.map.getTerrainAt(...)`](https://screeps-cn.github.io/api/#Game.map.getTerrainAt) 方法不同，此方法不执行任何字符串操作，并返回整数 terrain 类型值。
   * @param x 该房间中的 X 坐标。
   * @param y 该房间中的 Y 坐标。
   */
  get(x: number, y: number): 0 | TERRAIN_MASK_WALL | TERRAIN_MASK_SWAMP;
}

interface RoomTerrainConstructor extends _Constructor<RoomTerrain> {
  /**
   * 通过房间名称创建一个新的 `Terrain`。`Terrain` 对象可以从游戏世界中的任何房间构造，即使没有该房间的视野。
   * @param roomName String name of the room.
   */
  new (roomName: string): RoomTerrain;
}
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
declare class RoomVisual {
  /**
   * You can create new RoomVisual object using its constructor.
   * @param roomName The room name. If undefined, visuals will be posted to all rooms simultaneously.
   */
  constructor(roomName?: string);

  /**
   * The name of the room.
   */
  roomName: string;

  /**
   * Draw a line.
   * @param x1 The start X coordinate.
   * @param y1 The start Y coordinate.
   * @param x2 The finish X coordinate.
   * @param y2 The finish Y coordinate.
   * @param style The (optional) style.
   * @returns The RoomVisual object, for chaining.
   */
  line(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    style?: LineStyle,
  ): RoomVisual;

  /**
   * Draw a line.
   * @param pos1 The start position object.
   * @param pos2 The finish position object.
   * @param style The (optional) style.
   * @returns The RoomVisual object, for chaining.
   */
  line(pos1: RoomPosition, pos2: RoomPosition, style?: LineStyle): RoomVisual;

  /**
   * Draw a circle.
   * @param x The X coordinate of the center.
   * @param y The Y coordinate of the center.
   * @param style The (optional) style.
   * @returns The RoomVisual object, for chaining.
   */
  circle(x: number, y: number, style?: CircleStyle): RoomVisual;

  /**
   * Draw a circle.
   * @param pos The position object of the center.
   * @param style An object describing the style.
   * @returns The RoomVisual object itself, so that you can chain calls.
   */
  circle(pos: RoomPosition, style?: CircleStyle): RoomVisual;

  /**
   * Draw a rectangle.
   * @param x The X coordinate of the top-left corner.
   * @param y The Y coordinate of the top-left corner.
   * @param w The width of the rectangle.
   * @param h The height of the rectangle.
   * @param style The (optional) style.
   * @returns The RoomVisual object, for chaining.
   */
  rect(
    x: number,
    y: number,
    w: number,
    h: number,
    style?: PolyStyle,
  ): RoomVisual;

  /**
   * Draw a line.
   * @param topLeftPos The position object of the top-left corner.
   * @param width The width of the rectangle.
   * @param height The height of the rectangle.
   * @param style An object describing the style.
   * @returns The RoomVisual object itself, so that you can chain calls.
   */
  rect(
    topLeftPos: RoomPosition,
    width: number,
    height: number,
    style?: PolyStyle,
  ): RoomVisual;
  /**
   * Draw a polygon.
   * @param points An array of points. Every array item should be either an array with 2 numbers (i.e. [10,15]), or a RoomPosition object.
   * @param style The (optional) style.
   * @returns The RoomVisual object, for chaining.
   */
  poly(
    points: ([number, number] | RoomPosition)[],
    style?: PolyStyle,
  ): RoomVisual;

  /**
   * Draw a text label.
   * @param text The text message.
   * @param x The X coordinate of the label baseline center point.
   * @param y The Y coordinate of the label baseline center point.
   * @param style The (optional) text style.
   * @returns The RoomVisual object, for chaining.
   */
  text(text: string, x: number, y: number, style?: TextStyle): RoomVisual;

  /**
   * Draw a text label. You can use any valid Unicode characters, including emoji.
   * @param text The text message.
   * @param pos The position object of the center.
   * @param style An object describing the style.
   * @returns The RoomVisual object itself, so that you can chain calls.
   */
  text(text: string, pos: RoomPosition, style?: TextStyle): RoomVisual;

  /**
   * Remove all visuals from the room.
   * @returns The RoomVisual object, for chaining.
   */
  clear(): RoomVisual;

  /**
   * Get the stored size of all visuals added in the room in the current tick.
   * It must not exceed 512,000 (500 KB).
   * @returns The size of the visuals in bytes.
   */
  getSize(): number;

  /**
   * Returns a compact representation of all visuals added in the room in the current tick.
   * @returns A string with visuals data. There's not much you can do with the string besides store them for later.
   */
  export(): string;

  /**
   * Add previously exported (with `RoomVisual.export`) room visuals to the room visual data of the current tick.
   * @param data The string returned from `RoomVisual.export`.
   * @returns The RoomVisual object itself, so that you can chain calls.
   */
  import(data: string): RoomVisual;
}

interface LineStyle {
  /**
   * Line width, default is 0.1.
   */
  width?: number;
  /**
   * Line color in any web format, default is #ffffff(white).
   */
  color?: string;
  /**
   * Opacity value, default is 0.5.
   */
  opacity?: number;
  /**
   * Either undefined (solid line), dashed, or dotted.Default is undefined.
   */
  lineStyle?: "dashed" | "dotted" | "solid";
}

interface PolyStyle {
  /**
   * 填充颜色，允许使用任何 web 格式颜色，默认值为 `#ffffff` (白色)。
   */
  fill?: string;
  /**
   * 透明度，默认值为 `0.5`。
   */
  opacity?: number;
  /**
   * 轮廓颜色，允许使用任何 web 格式颜色，默认 `undefined`（没有轮廓）。
   */
  stroke?: string | undefined;
  /**
   * 轮廓宽度，默认值为 `0.1`。
   */
  strokeWidth?: number;
  /**
   * `undefined`(实线)，`solid`(实线)，`dashed` (虚线) 或者 `dotted` (点线) 之一。默认值为 `undefined`。
   */
  lineStyle?: "dashed" | "dotted" | "solid";
}

interface CircleStyle extends PolyStyle {
  /**
   * 圆的半径，默认值为 `0.15`。
   */
  radius?: number;
}

interface TextStyle {
  /**
   * Font color in any web format, default is #ffffff(white).
   */
  color?: string;
  /**
   * Either a number or a string in one of the following forms:
   * 0.7 - relative size in game coordinates
   * 20px - absolute size in pixels
   * 0.7 serif
   * bold italic 1.5 Times New Roman
   */
  font?: number | string;
  /**
   * Stroke color in any web format, default is undefined (no stroke).
   */
  stroke?: string;
  /**
   * Stroke width, default is 0.15.
   */
  strokeWidth?: number;
  /**
   * Background color in any web format, default is undefined (no background).When background is enabled, text vertical align is set to middle (default is baseline).
   */
  backgroundColor?: string;

  /**
   * Background rectangle padding, default is 0.3.
   */
  backgroundPadding?: number;
  align?: "center" | "left" | "right";
  /**
   * Opacity value, default is 1.0.
   */
  opacity?: number;
}
/**
 * 一个代表了你的单位和建筑所在房间的对象。
 *
 * 它可以被用来“环顾四周”，查找路径等。
 *
 * 所有 `RoomObject` 都有一个链接到其所在房间 `Room` 实例的属性 `room`。
 */
interface Room {
  readonly prototype: Room;

  /**
   * 该房间中的控制器（Controller）建筑，如果其不存在则返回 `undefined`。
   */
  controller?: StructureController;
  /**
   * 本房间中所有 spawn 和 extension 中的可用能量总额。
   */
  energyAvailable: number;
  /**
   * 本房间中所有 spawn 和 extension 的容量上限 `energyCapacity` 总额。
   */
  energyCapacityAvailable: number;
  /**
   * 返回该房间中前一个 tick 发生的事件数组。
   * @param raw 如果该参数为 false 或者未定义，则本方法将会返回使用 `JSON.parse` 解析后的对象，在首次访问时可能会造成一些 CPU 消耗（返回值会被缓存以方便后续调用）。如果 raw 为 `true`。则原始的 JSON 字符串将会被返回。
   */
  getEventLog(raw?: boolean): EventItem[];
  /**
   * `Memory.rooms[room.name]` 的简写。你可以用它来快速访问到该房间特定的内存数据对象。[点此了解有关内存的更多信息](https://screeps-cn.github.io/global-objects.html#Memory-object)。
   */
  memory: RoomMemory;
  /**
   * One of the `MODE_*` constants.
   */
  mode: string;
  /**
   * 房间名称。
   */
  readonly name: string;
  /**
   * 该房间中的 `Storage` 建筑，如果其不存在则返回 `undefined`。
   */
  storage?: StructureStorage;
  /**
   * 该房间中的 `Terminal` 建筑，如果其不存在则返回 `undefined`。
   */
  terminal?: StructureTerminal;
  /**
   * 该房间的 `RoomVisual` 对象。您可以使用该对象在房间中绘制简单的形状 (线条，圆，文本标签)。
   */
  visual: RoomVisual;
  /**
   * 在指定位置创建一个新的 `ConstructionSite`。
   * @param x X 坐标。
   * @param y Y 坐标。
   * @param structureType `STRUCTURE_*` 常量之一: STRUCTURE_EXTENSION, STRUCTURE_RAMPART, STRUCTURE_ROAD, STRUCTURE_SPAWN, STRUCTURE_WALL, STRUCTURE_LINK
   * @returns Result Code: OK, ERR_INVALID_TARGET, ERR_INVALID_ARGS, ERR_RCL_NOT_ENOUGH
   */
  createConstructionSite(
    x: number,
    y: number,
    structureType: BuildableStructureConstant,
  ): ScreepsReturnCode;
  /**
   * 在指定位置创建一个新的 `ConstructionSite`。
   * @param pos 可以为 [`RoomPosition`](https://screeps-cn.github.io/api/#RoomPosition) 对象或任何包含 `RoomPosition` 的对象。
   * @param structureType `STRUCTURE_*` 常量之一: STRUCTURE_EXTENSION, STRUCTURE_RAMPART, STRUCTURE_ROAD, STRUCTURE_SPAWN, STRUCTURE_WALL, STRUCTURE_LINK
   * @returns Result Code: OK, ERR_INVALID_TARGET, ERR_INVALID_ARGS, ERR_RCL_NOT_ENOUGH
   */
  createConstructionSite(
    pos: RoomPosition | _HasRoomPosition,
    structureType: StructureConstant,
  ): ScreepsReturnCode;
  /**
   * 在指定位置创建一个新的 `ConstructionSite`。
   * @param x X 坐标。
   * @param y Y 坐标。
   * @param structureType `STRUCTURE_*` 常量之一: STRUCTURE_EXTENSION, STRUCTURE_RAMPART, STRUCTURE_ROAD, STRUCTURE_SPAWN, STRUCTURE_WALL, STRUCTURE_LINK
   * @param name 建筑的名称，该建筑必须支持设置名字（当前仅有 spawn）。
   * @returns Result Code: OK, ERR_INVALID_TARGET, ERR_INVALID_ARGS, ERR_RCL_NOT_ENOUGH
   */
  createConstructionSite(
    x: number,
    y: number,
    structureType: STRUCTURE_SPAWN,
    name?: string,
  ): ScreepsReturnCode;
  /**
   * 在指定位置创建一个新的 `ConstructionSite`。
   * @param pos 可以为 [`RoomPosition`](https://screeps-cn.github.io/api/#RoomPosition) 对象或任何包含 `RoomPosition` 的对象。
   * @param structureType `STRUCTURE_*` 常量之一: STRUCTURE_EXTENSION, STRUCTURE_RAMPART, STRUCTURE_ROAD, STRUCTURE_SPAWN, STRUCTURE_WALL, STRUCTURE_LINK
   * @param name 建筑的名称，该建筑必须支持设置名字（当前仅有 spawn）。
   * @returns Result Code: OK, ERR_INVALID_TARGET, ERR_INVALID_ARGS, ERR_RCL_NOT_ENOUGH
   */
  createConstructionSite(
    pos: RoomPosition | _HasRoomPosition,
    structureType: STRUCTURE_SPAWN,
    name?: string,
  ): ScreepsReturnCode;
  /**
   * 在指定位置创建一个新的 [Flag](https://screeps-cn.github.io/api/#Flag)。
   * @param x X 坐标。
   * @param y Y 坐标。
   * @param name (可选) 新旗帜的名称。
   *
   * 它应该是唯一的，即 `Game.flags` 不应该包含拥有相同名称(哈希键)的不同旗帜。
   *
   * 如果未定义，则会生成随机名称。
   *
   * 最长不得超过 60 字符。
   * @param color (可选) 新旗帜的颜色。应为 `COLOR_*` 常量之一。默认值为 `COLOR_WHITE`。
   * @param secondaryColor (可选) 新旗帜的次要颜色。应为 `COLOR_*` 常量之一。默认值等于 color 属性值。
   * @returns 新旗帜的名称，或者下列错误码之一: `ERR_NAME_EXISTS`, `ERR_INVALID_ARGS`
   */
  createFlag(
    x: number,
    y: number,
    name?: string,
    color?: ColorConstant,
    secondaryColor?: ColorConstant,
  ): ERR_NAME_EXISTS | ERR_INVALID_ARGS | string;
  /**
   * 在指定位置创建一个新的 [Flag](https://screeps-cn.github.io/api/#Flag)。
   * @param pos 可以为 [`RoomPosition`](https://screeps-cn.github.io/api/#RoomPosition) 对象或任何包含 `RoomPosition` 的对象。
   * @param name (可选) 新旗帜的名称。
   *
   * 它应该是唯一的，即 `Game.flags` 不应该包含拥有相同名称(哈希键)的不同旗帜。
   *
   * 如果未定义，则会生成随机名称。
   *
   * 最长不得超过 60 字符。
   * @param color (可选) 新旗帜的颜色。应为 `COLOR_*` 常量之一。默认值为 `COLOR_WHITE`。
   * @param secondaryColor (可选) 新旗帜的次要颜色。应为 `COLOR_*` 常量之一。默认值等于 color 属性值。
   * @returns 新旗帜的名称，或者下列错误码之一: `ERR_NAME_EXISTS`, `ERR_INVALID_ARGS`
   */
  createFlag(
    pos: RoomPosition | { pos: RoomPosition },
    name?: string,
    color?: ColorConstant,
    secondaryColor?: ColorConstant,
  ): ERR_NAME_EXISTS | ERR_INVALID_ARGS | string;
  /**
   * 查找房间中指定类型的所有对象。在应用自定义的 `filter` 之前，搜索结果会被自动缓存到指定的房间和类型，自动缓存将持续到本 tick 结束。
   * @param type `FIND_*` 常量之一
   * @param opts 可选项对象，用户刷选。
   * @returns 找到的对象数组
   */
  find<K extends FindConstant>(
    type: K,
    opts?: FilterOptions<K>,
  ): FindTypes[K][];
  find<T extends Structure>(
    type: FIND_STRUCTURES | FIND_MY_STRUCTURES | FIND_HOSTILE_STRUCTURES,
    opts?: FilterOptions<FIND_STRUCTURES>,
  ): T[];
  /**
   * 找到通往另一个房间的出口方向。请注意，房间之间的移动不需要此方法，您只需将另一个房间中的目标传递给 `Creep.moveTo` 方法即可。
   * @param room 其他房间的名称或者房间对象。
   * @returns 出口方向常量: `FIND_EXIT_TOP`, `FIND_EXIT_RIGHT`, `FIND_EXIT_BOTTOM`, `FIND_EXIT_LEFT`
   * 或者下列错误码之一: `ERR_NO_PATH`, `ERR_INVALID_ARGS`
   */
  findExitTo(
    room: string | Room,
  ): ExitConstant | ERR_NO_PATH | ERR_INVALID_ARGS;
  /**
   * 使用优化的 A* 搜索算法 [Jump Point Search](http://en.wikipedia.org/wiki/Jump_point_search) 在 `fromPos` 和 `toPos` 之间找到房间内的最佳路径。
   * @param fromPos 起始位置。
   * @param toPos 结束位置。
   * @param opts (可选) 包含寻路可选项的对象
   * @returns 一个数组，其元素为如下形式的路径步骤：
   *
   * ```json
   * [
   *   { x: 10, y: 5, dx: 1,  dy: 0, direction: RIGHT },
   *   { x: 10, y: 6, dx: 0,  dy: 1, direction: BOTTOM },
   *   { x: 9,  y: 7, dx: -1, dy: 1, direction: BOTTOM_LEFT },
   *   ...
   * ]
   * ```
   */
  findPath(
    fromPos: RoomPosition,
    toPos: RoomPosition,
    opts?: FindPathOpts,
  ): PathStep[];
  /**
   * 获取指定位置的 `RoomPosition` 对象。
   * @param x X 坐标。
   * @param y Y 坐标。
   * @returns 一个 RoomPosition 对象，如果无法获取则返回 null。
   */
  getPositionAt(x: number, y: number): RoomPosition | null;
  /**
   * 获取一个 [`Room.Terrain`](https://screeps-cn.github.io/api/#Room-Terrain) 对象，可以用它来快速访问房间内的静态地形数据。
   * 即使没有指定房间的视野，您依旧可以使用该方法访问它的地形数据，该方法适用于游戏世界中的所有房间。
   */
  getTerrain(): RoomTerrain;
  /**
   * 获取指定房间位置的对象数组。
   * @param x 该房间中的 X 坐标。
   * @param y 该房间中的 Y 坐标。
   * @returns 一个位于指定位置的对象数组，格式如下：
   *
   * ```json
   * [
   *   { type: 'creep', creep: {...} },
   *   { type: 'structure', structure: {...} },
   *   ..
   *   { type: 'terrain', terrain: 'swamp' }
   * ]
   * ```
   */
  lookAt(x: number, y: number): LookAtResult[];
  /**
   * 获取指定房间位置的对象数组。
   * @param target 可以是 `RoomPosition` 对象或者任何包含 RoomPosition 属性的对象。
   * @returns 一个位于指定位置的对象数组，格式如下：
   *
   * ```json
   * [
   *   { type: 'creep', creep: {...} },
   *   { type: 'structure', structure: {...} },
   *   ..
   *   { type: 'terrain', terrain: 'swamp' }
   * ]
   * ```
   */
  lookAt(target: RoomPosition | { pos: RoomPosition }): LookAtResult[];
  /**
   * 获取指定房间区域内的对象列表。
   * @param top 区域顶部边界的 Y 坐标。
   * @param left 区域左侧边界的 X 坐标。
   * @param bottom 区域底部边界的 Y 坐标。
   * @param right 区域右侧边界的 X 坐标。
   * @param asArray 设为 `true` 来获得纯数组形式。
   * @returns `asArray` 值为 `false` 或者未定义，则该方法以如下格式返回指定区域内的对象。
   */
  lookAtArea(
    top: number,
    left: number,
    bottom: number,
    right: number,
    asArray?: false,
  ): LookAtResultMatrix;
  /**
   * 获取指定房间区域内的对象列表。
   * @param top 区域顶部边界的 Y 坐标。
   * @param left 区域左侧边界的 X 坐标。
   * @param bottom 区域底部边界的 Y 坐标。
   * @param right 区域右侧边界的 X 坐标。
   * @param asArray 设为 `true` 来获得纯数组形式。
   * @returns 如果 `asArray` 值为 `true`，则该方法以如下格式返回指定区域内的对象数组：
   */
  lookAtArea(
    top: number,
    left: number,
    bottom: number,
    right: number,
    asArray: true,
  ): LookAtResultWithPos[];
  /**
   * 在指定位置查找指定类型的对象。
   * @param type `LOOK_*` 常量之一。
   * @param x 该房间中的 X 坐标。
   * @param y 该房间中的 Y 坐标。
   * @returns 在指定位置找到的指定类型的对象数组。
   */
  lookForAt<T extends keyof AllLookAtTypes>(
    type: T,
    x: number,
    y: number,
  ): AllLookAtTypes[T][];
  /**
   * 在指定位置查找指定类型的对象。
   * @param type `LOOK_*` 常量之一。
   * @param target 可以是 `RoomPosition` 对象或者任何包含 `RoomPosition` 属性的对象。
   * @returns 在指定位置找到的指定类型的对象数组。
   */
  lookForAt<T extends keyof AllLookAtTypes>(
    type: T,
    target: RoomPosition | _HasRoomPosition,
  ): AllLookAtTypes[T][];
  /**
   * 在指定房间区域查找指定类型的对象列表。
   * @param type `LOOK_*` 常量之一。
   * @param top 区域顶部边界的 Y 坐标。
   * @param left 区域左侧边界的 X 坐标。
   * @param bottom 区域底部边界的 Y 坐标。
   * @param right 区域右侧边界的 X 坐标。
   * @param asArray 设为 `true` 来获得纯数组形式。
   * @returns 如果 `asArray` 值为 `false` 或者未定义，则该方法以如下格式返回指定区域内的对象
   */
  lookForAtArea<T extends keyof AllLookAtTypes>(
    type: T,
    top: number,
    left: number,
    bottom: number,
    right: number,
    asArray?: false,
  ): LookForAtAreaResultMatrix<AllLookAtTypes[T], T>;
  /**
   * 在指定房间区域查找指定类型的对象列表。
   * @param type `LOOK_*` 常量之一。
   * @param top 区域顶部边界的 Y 坐标。
   * @param left 区域左侧边界的 X 坐标。
   * @param bottom 区域底部边界的 Y 坐标。
   * @param right 区域右侧边界的 X 坐标。
   * @param asArray 设为 `true` 来获得纯数组形式。
   * @returns 如果 `asArray` 值为 `true`，则该方法以如下格式返回指定区域内的对象数组
   */
  lookForAtArea<T extends keyof AllLookAtTypes>(
    type: T,
    top: number,
    left: number,
    bottom: number,
    right: number,
    asArray: true,
  ): LookForAtAreaResultArray<AllLookAtTypes[T], T>;

  /**
   * Serialize a path array into a short string representation, which is suitable to store in memory.
   * @param path A path array retrieved from Room.findPath.
   * @returns A serialized string form of the given path.
   */

  /**
   * Deserialize a short string path representation into an array form.
   * @param path A serialized path string.
   * @returns A path array.
   */
}

interface RoomConstructor extends _Constructor<Room> {
  new (id: string): Room;

  Terrain: RoomTerrainConstructor;

  /**
   * 将路径数组序列化为适合存储在内存中的短字符串形式。
   * @param path [`Room.findPath`](https://screeps-cn.github.io/api/#Room.findPath) 返回的路径数组。
   * @returns 参数路径的序列化字符串。
   */
  serializePath(path: PathStep[]): string;
  /**
   * 将短字符串形式的路径反序列化为路径数组。
   * @param path 序列化的路径字符串。
   * @returns 路径数组
   */
  deserializePath(path: string): PathStep[];
}

declare const Room: RoomConstructor;
/**
 * A destroyed structure. This is a walkable object.
 * <ul>
 *     <li>Decay: 500 ticks except some special cases</li>
 * </ul>
 */
interface Ruin extends RoomObject {
  /**
   * A unique object identificator.
   * You can use {@link Game.getObjectById} method to retrieve an object instance by its id.
   */
  id: Id<this>;
  /**
   * Time of destruction.
   */
  destroyTime: number;
  /**
   * An object with the ruin contents.
   */
  store: StoreDefinitionUnlimited;
  /**
   * The amount of game ticks before this ruin decays.
   */
  ticksToDecay: number;
  /**
   * An object containing the destroyed structure.
   */
  structure: AnyStructure;
}

interface RuinConstructor extends _Constructor<Ruin>, _ConstructorById<Ruin> {}

declare const Ruin: RuinConstructor;
/**
 * 一个能量源对象。可以被拥有 `WORK` 身体部件的 creep 采集。
 */
interface Source extends RoomObject {
  /**
   * The prototype is stored in the Source.prototype global object. You can use it to extend game objects behaviour globally:
   */
  readonly prototype: Source;
  /**
   * 能量的剩余容量。
   */
  energy: number;
  /**
   * 该 source 的总能量容量。
   */
  energyCapacity: number;
  /**
   * 一个唯一的对象标识。你可以使用 [`Game.getObjectById`](https://screeps-cn.github.io/api/#Game.getObjectById) 方法获取对象实例。
   */
  id: Id<this>;
  /**
   * 如果你可以获得一个 Source 的实例，那么你就可以看到这个实例。
   * 如果你能看到某个 Source，那么你就可以看到它所在的 room。
   */
  room: Room;
  /**
   * 该 source 还有多少 tick 将会再生。
   */
  ticksToRegeneration: number;
}

interface SourceConstructor
  extends _Constructor<Source>, _ConstructorById<Source> {}

declare const Source: SourceConstructor;
/**
 * 母巢 (spawn) 是你的殖民地中心。此建筑可以创建、更新和回收 creeps。
 * 你能通过 `Game.spawns` 这个 hash list 访问所有的母巢 (spawn) 。
 * 母巢 (spawn) 每 tick 会生产少许能量，以免玩家陷入无 creep 可用、无 creep 可造的困境。
 */
interface StructureSpawn extends OwnedStructure<STRUCTURE_SPAWN> {
  readonly prototype: StructureSpawn;
  /**
   * 此属性已被弃用，将很快删除。
   * @deprecated `.store[RESOURCE_ENERGY]` 的别名
   */
  energy: number;
  /**
   * 此属性已被弃用，将很快删除。
   * @deprecated `.store.getCapacity(RESOURCE_ENERGY)` 的别名
   */
  energyCapacity: number;
  /**
   * `Memory.spawns[spawn.name]` 的一个简写。您可以使用它来快速访问母巢 (spawn) 的特定内存数据对象。
   *
   * @see https://screeps-cn.github.io/global-objects.html#Memory-object
   */
  memory: SpawnMemory;
  /**
   * Spawn 的名字。在创建新母巢 (spawn) 时赋予，一但创建就无法更改，除非拆除重造。此名称是一个散列键，用于通过 [`Game.spawns`](https://screeps-cn.github.io/api/#Game.spawns) 对象访问。
   */
  name: string;
  /**
   * 如果母巢 (spawn) 正在孵化一个新的 creep ，母巢 (spawn) 将包含一个 [`StructureSpawn.Spawning`](https://screeps-cn.github.io/api/#StructureSpawn-Spawning) 对象，否则为 `null`。
   */
  spawning: Spawning | null;
  /**
   * 一个 [`Store`](https://screeps-cn.github.io/api/#Store) 对象，它包含这个建筑的所有货物。
   */
  store: Store<RESOURCE_ENERGY, false>;
  /**
   * 检查是否可以创建 creep。
   *
   * **此方法已被弃用，不久将被删除。**
   *
   * @deprecated 请使用 [`StructureSpawn.spawnCreep`](https://screeps-cn.github.io/api/#StructureSpawn.spawnCreep) 的 `dryRun` 标志代替。
   * @param body 描述新 creep’s body 的数组。应该包含1至50个元素（以下常量之一）: `WORK`, `MOVE`, `CARRY`, `ATTACK`, `RANGED_ATTACK`, `HEAL`, `TOUGH`, `CLAIM`
   * @param name 新 creep 的名字。它应该是唯一的 creep 名称, 所以 `Game.creeps` 对象不应该包含另一个同名的 creep (hash key)。如果没有定义，将生成一个随机名称。
   */
  canCreateCreep(body: BodyPartConstant[], name?: string): ScreepsReturnCode;
  /**
   * 启动 creep 孵化过程。所需的能量量可以从房间里的所有母巢和扩展中提取出来。
   *
   * **此方法已被弃用，不久将被删除。**
   *
   * @deprecated 请使用 [`StructureSpawn.spawnCreep`](https://screeps-cn.github.io/api/#StructureSpawn.spawnCreep) 代替。
   * @param body 描述新 creep’s body 的数组。应该包含1至50个元素（以下常量之一）: `WORK`, `MOVE`, `CARRY`, `ATTACK`, `RANGED_ATTACK`, `HEAL`, `TOUGH`, `CLAIM`
   * @param name 新 creep 的名字。它应该是唯一的 creep 名称, 所以 `Game.creeps` 对象不应该包含另一个同名的 creep (hash key)。如果没有定义，将生成一个随机名称。
   * @param memory 一个新 creep 的 memory 。如果提供，它将立即存储到 `Memory.creeps[name]`。
   * @returns 产生一个新的 creep 会遇到这些错误代码之一
   * ```
   * ERR_NOT_OWNER            -1  你不是该 spawn 的所有者。
   * ERR_NAME_EXISTS          -3  已经有一个叫这个名字的 creep 了。
   * ERR_BUSY                 -4  这个母巢已经在孵化另一个 creep 了。
   * ERR_NOT_ENOUGH_ENERGY    -6  这个母巢和他的扩展包含的能量不足以孵化具有给定 body 的 creep。
   * ERR_INVALID_ARGS         -10 Body 没有被恰当地描述。
   * ERR_RCL_NOT_ENOUGH       -14 您的房间控制器级别不足以使用此 spawn。
   * ```
   */
  createCreep(
    body: BodyPartConstant[],
    name?: string,
    memory?: CreepMemory,
  ): ScreepsReturnCode | string;

  /**
   * 启动 creep 孵化过程。所需的能量量可以从房间里的所有母巢和扩展中提取出来。
   *
   * @param body 描述新 creep’s body 的数组。应该包含1至50个元素（以下常量之一）
   *  * `WORK`
   *  * `MOVE`
   *  * `CARRY`
   *  * `ATTACK`
   *  * `RANGED_ATTACK`
   *  * `HEAL`
   *  * `TOUGH`
   *  * `CLAIM`
   * @param name 新 creep 的名字。它应是个独一无二的 creep 名以保证 `Game.creeps` 不含有重名的的 creep 。
   * @param opts 为孵化进程提供附加选项的对象。
   * @returns 如下错误码之一：
   * ```
   * OK                       0   这个操作已经成功纳入计划。
   * ERR_NOT_OWNER            -1  你不是该母巢 (spawn) 的所有者。
   * ERR_NAME_EXISTS          -3  已经有一个叫这个名字的 creep 了。
   * ERR_BUSY                 -4  这个母巢 (spawn) 已经在孵化另一个 creep 了。
   * ERR_NOT_ENOUGH_ENERGY    -6  这个母巢 (spawn) 和他的扩展包含的能量不足以孵化具有给定 body 的 creep。
   * ERR_INVALID_ARGS         -10 Body 没有被恰当地描述。
   * ERR_RCL_NOT_ENOUGH       -14 您的房间控制器级别不足以使用此 spawn。
   * ```
   */
  spawnCreep(
    body: BodyPartConstant[],
    name: string,
    opts?: SpawnOptions,
  ): ScreepsReturnCode;

  /**
   * 立即摧毁这个建筑。
   */
  destroy(): ScreepsReturnCode;
  /**
   * 检查这个建筑是否可用。如果房间控制等级不足，这个方法会返回 `false`，并且这个建筑会在游戏中红色高亮。
   */
  isActive(): boolean;
  /**
   * 切换这个建筑受到攻击时的自动通知。通知会发送到你的账户邮箱。默认开启。
   * @param enabled 是否启用通知。
   */
  notifyWhenAttacked(enabled: boolean): ScreepsReturnCode;
  /**
   * 增加目标 creep 的剩余生存时间。
   *
   * 目标应在相邻的方格处。
   *
   * spawn 不应忙于孵化过程。
   *
   * 每次执行都会增加 creep 的计时器，根据此公式按 ticks 数计算：
   *
   * `floor(600/body_size)`
   *
   * 每次执行所需的能量由以下公式确定:
   *
   * `ceil(creep_cost/2.5/body_size)`
   *
   * 更新 creep 会移除所有的增益。
   *
   * @param target 目标 creep 对象。
   */
  renewCreep(target: Creep): ScreepsReturnCode;
  /**
   * 杀死 creep ，并视其剩余寿命而掉落最多 100％ 的资源用于其繁殖和增强。目标应该在相邻的方块上。每个身体部位的能量回收限制在 125 个单位。
   * @param target 目标 creep 对象。
   */
  recycleCreep(target: Creep): ScreepsReturnCode;
}

interface StructureSpawnConstructor
  extends _Constructor<StructureSpawn>, _ConstructorById<StructureSpawn> {
  Spawning: SpawningConstructor;
}

declare const StructureSpawn: StructureSpawnConstructor;
declare const Spawn: StructureSpawnConstructor; // legacy alias
// declare type Spawn = StructureSpawn;

/**
 * 当前正在孵化的 creep 的详细信息，可以通过 [`StructureSpawn.spawning`](https://screeps-cn.github.io/api/#StructureSpawn.spawning) 属性进行访问。
 */
interface Spawning {
  readonly prototype: Spawning;

  /**
   * 一个指示了出生方向的数组
   * @see https://screeps-cn.github.io/api/#StructureSpawn.Spawning.setDirections
   */
  directions: DirectionConstant[];

  /**
   * 新 creep 的名字。
   */
  name: string;

  /**
   * 完成孵化总共需要的时间。
   */
  needTime: number;

  /**
   * 剩下的时间。
   */
  remainingTime: number;

  /**
   * 一个到对应 spawn 的链接。
   */
  spawn: StructureSpawn;

  /**
   * 立即取消孵化。不返还消耗的资源。
   */
  cancel(): ScreepsReturnCode & (OK | ERR_NOT_OWNER);

  /**
   * 设置出生方向，以使它们在生成时应移动到的位置。
   * @param directions 包含方向常量的数组。
   */
  setDirections(
    directions: DirectionConstant[],
  ): ScreepsReturnCode & (OK | ERR_NOT_OWNER | ERR_INVALID_ARGS);
}

/**
 * 为孵化进程提供附加选项的对象。
 */
interface SpawnOptions {
  /**
   * 一个新 creep 的 memory。如果提供，它将立即存储到 `Memory.creeps[name]`。
   */
  memory?: CreepMemory;
  /**
   * 孵化时使用能量的 spawns/extensions 数组，建筑将按顺序使用其中的能量。
   */
  energyStructures?: (StructureSpawn | StructureExtension)[];
  /**
   * 如果 `dryRun` 为 `true`，则操作将仅检查是否可以孵化 creep。
   */
  dryRun?: boolean;
  /**
   * 设置 creep 出生时移动的方向，是一个带有以下常量的数组:
   * - TOP
   * - TOP_RIGHT
   * - RIGHT
   * - BOTTOM_RIGHT
   * - BOTTOM
   * - BOTTOM_LEFT
   * - LEFT
   * - TOP_LEFT
   */
  directions?: DirectionConstant[];
}

interface SpawningConstructor
  extends _Constructor<Spawning>, _ConstructorById<Spawning> {}
/**
 * 一个代表了其存储中资源的对象。
 *
 * 游戏中有两种类型的 store：通用型 store 和限定型 store。
 *
 * - 通用型 store 可以储存任意类型的资源 (例如: creep, 容器(containers), 存储(storages), 终端(terminals))。
 *
 * - 限定型 store 只能储存该对象所需的几种特定资源 (例如: spawn, 拓展(extension), 实验室(lab), 核弹(nuker))。
 *
 * 两种 `Store` 的原型都是相同的，但是其返回值取决于调用方法时传入的 resource 参数。
 *
 * 你可以把资源的类型当做对象属性来获取对应的资源:
 *
 * ```js
 * console.log(creep.store[RESOURCE_ENERGY]);
 * ```
 */
interface StoreBase<
  POSSIBLE_RESOURCES extends ResourceConstant,
  UNLIMITED_STORE extends boolean,
> {
  /**
   * 返回指定资源的存储容量, 对于通用型 store，当 `reource` 参数为 `undefined` 则返回总容量。
   * @param resource 资源的类型
   * @returns 返回存储的数量, 当 `resource` 参数不是一个有效的存储类型时返回 `null`。
   */
  getCapacity<R extends ResourceConstant | undefined = undefined>(
    resource?: R,
  ): UNLIMITED_STORE extends true ? null
    : R extends undefined ? ResourceConstant extends POSSIBLE_RESOURCES ? number
    : null
    : R extends POSSIBLE_RESOURCES ? number
    : null;
  /**
   * 返回指定资源已使用的容量, 若为通用型存储时, `reource` 参数为 `undefined` 则返回总使用容量。
   * @param resource 资源的类型
   * @returns 返回已使用的容量, 当 `resource` 参数不是一个有效的存储类型时返回 `null`。
   */
  getUsedCapacity<R extends ResourceConstant | undefined = undefined>(
    resource?: R,
  ): R extends undefined ? ResourceConstant extends POSSIBLE_RESOURCES ? number
  : null
    : R extends POSSIBLE_RESOURCES ? number
    : null;
  /**
   * 返回该存储的剩余可用容量，对于限定型 store 来说，将在 `resource` 对该存储有效时返回该资源的剩余可用容量。
   * @param resource 资源的类型
   * @returns 返回可用的剩余容量，如果 resource 对该 store 无效则返回 null。
   */
  getFreeCapacity<R extends ResourceConstant | undefined = undefined>(
    resource?: R,
  ): R extends undefined ? ResourceConstant extends POSSIBLE_RESOURCES ? number
  : null
    : R extends POSSIBLE_RESOURCES ? number
    : null;
}

type Store<
  POSSIBLE_RESOURCES extends ResourceConstant,
  UNLIMITED_STORE extends boolean,
> =
  & StoreBase<
    POSSIBLE_RESOURCES,
    UNLIMITED_STORE
  >
  & { [P in POSSIBLE_RESOURCES]: number }
  & { [P in Exclude<ResourceConstant, POSSIBLE_RESOURCES>]: 0 };

interface GenericStoreBase {
  /**
   * 返回指定资源的存储容量, 对于通用型 store，当 `reource` 参数为 `undefined` 则返回总容量。
   * @param resource 资源的类型
   * @returns 返回存储的数量, 当 `resource` 参数不是一个有效的存储类型时返回 `null`。
   */
  getCapacity(resource?: ResourceConstant): number | null;
  /**
   * 返回指定资源已使用的容量, 若为通用型存储时, `reource` 参数为 `undefined` 则返回总使用容量。
   * @param resource 资源的类型
   * @returns 返回已使用的容量, 当 `resource` 参数不是一个有效的存储类型时返回 `null`。
   */
  getUsedCapacity(resource?: ResourceConstant): number | null;
  /**
   * 返回该存储的剩余可用容量，对于限定型 store 来说，将在 `resource` 对该存储有效时返回该资源的剩余可用容量。
   * @param resource 资源的类型
   * @returns 返回可用的剩余容量，如果 resource 对该 store 无效则返回 null。
   */
  getFreeCapacity(resource?: ResourceConstant): number | null;
}

type GenericStore = GenericStoreBase & { [P in ResourceConstant]: number };
/**
 * 所有建筑的基础原型对象。
 */
interface Structure<T extends StructureConstant = StructureConstant>
  extends RoomObject {
  readonly prototype: Structure;

  /**
   * 当前这个建筑的当前生命值。
   */
  hits: number;
  /**
   * 这个建筑的最大生命值。
   */
  hitsMax: number;
  /**
   * 一个唯一的对象标识。你可以使用 [`Game.getObjectById`](https://screeps-cn.github.io/api/#Game.getObjectById) 方法获取对象实例。
   */
  id: Id<this>;
  /**
   * Room 对象的链接。如果对象是标志或工地并且放置在你不可见的房间中，则可能为 `undefined`。
   */
  room: Room;
  /**
   * `STRUCTURE_*` 常量之一。
   */
  structureType: T;
  /**
   * 立即摧毁这个建筑。
   */
  destroy(): ScreepsReturnCode;
  /**
   * 检查这个建筑是否可用。如果房间控制等级不足，这个方法会返回 `false`，并且这个建筑会在游戏中红色高亮。
   */
  isActive(): boolean;
  /**
   * 切换这个建筑受到攻击时的自动通知。通知会发送到你的账户邮箱。默认开启。
   * @param enabled 是否启用通知。
   */
  notifyWhenAttacked(enabled: boolean): ScreepsReturnCode;
}

interface StructureConstructor
  extends _Constructor<Structure>, _ConstructorById<Structure> {}

declare const Structure: StructureConstructor;

/**
 * 存在拥有者的建筑的基础原型。 这类建筑可以被用 `FIND_MY_STRUCTURES` 或 `FIND_HOSTILE_STRUCTURES` 找到。
 */
interface OwnedStructure<T extends StructureConstant = StructureConstant>
  extends Structure<T> {
  readonly prototype: OwnedStructure;

  /**
   * 是否是你拥有的建筑。
   */
  my: boolean;
  /**
   * 建筑拥有者信息
   */
  owner: T extends STRUCTURE_CONTROLLER ? Owner | undefined : Owner;
  /**
   * Room 对象的链接
   */
  room: Room;
}

interface OwnedStructureConstructor
  extends _Constructor<OwnedStructure>, _ConstructorById<OwnedStructure> {}

declare const OwnedStructure: OwnedStructureConstructor;

/**
 * 占领(claim) 这个建筑来控制其所在的房间。控制器无法被攻击或摧毁。你可以通过 `Room.controller` 属性来快速访问到它。
 */
interface StructureController extends OwnedStructure<STRUCTURE_CONTROLLER> {
  readonly prototype: StructureController;

  /**
   * 该房间是否启用了超能 (power)。
   *
   * 使用 [`PowerCreep.enableRoom`](https://screeps-cn.github.io/api/#PowerCreep.enableRoom) 来启用超能。
   */
  isPowerEnabled: boolean;
  /**
   * 当前的控制器等级，从 `0` 到 `8`。
   */
  level: number;
  /**
   * 当前控制器升级到下个等级的进度。
   */
  progress: number;
  /**
   * 控制器升级到下个等级所需的总进度。
   */
  progressTotal: number;
  /**
   * 如果控制器被预定，则该对象表示预定的信息
   */
  reservation: ReservationDefinition | undefined;
  /**
   * 安全模式还有多少 tick 结束。没激活安全模式时返回 `undefined`。
   */
  safeMode?: number;
  /**
   * 可用的安全模式激活次数。
   */
  safeModeAvailable: number;
  /**
   * 安全模式的冷却时间还有多少 tick。冷却结束前将无法激活安全模式，当安全模式没有冷却时返回 `undefined`。
   */
  safeModeCooldown?: number;
  /**
   * 如果控制器被签名，则该对象表示签名的信息
   */
  sign: SignDefinition | undefined;
  /**
   * 该控制器还有多少 tick 将要降级。当控制器升级或者降级时, 该计时器将被设置为总降级时间的 50%。可以使用 [`Creep.upgradeController`](https://screeps-cn.github.io/api/#Creep.upgradeController) 来增加该计时器的时间。控制器想要升级必须先保证该计时器满额。
   */
  ticksToDowngrade: number;
  /**
   * 还有多少 tick 就能从控制器被攻击从而无法升级的状态中恢复过来。在此期间安全模式也不可用。
   */
  upgradeBlocked: number;
  /**
   * 激活安全模式 (如果有的话)。
   * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_NOT_ENOUGH_RESOURCES, ERR_TIRED
   */
  activateSafeMode(): ScreepsReturnCode;
  /**
   * 放弃该房间，使得控制器重新变为中立状态。
   */
  unclaim(): ScreepsReturnCode;
}

interface StructureControllerConstructor
  extends
    _Constructor<StructureController>,
    _ConstructorById<StructureController> {}

declare const StructureController: StructureControllerConstructor;

/**
 * 填充能量从而允许建造更大型的 creep。Extension 可以被放置在房间的任何地方，无论距离有多远，任何 spawn 都可以使用其中的能量进行孵化。
 */
interface StructureExtension extends OwnedStructure<STRUCTURE_EXTENSION> {
  readonly prototype: StructureExtension;

  /**
   * @deprecated 已废弃。使用 `.store[RESOURCE_ENERGY]` 代替。
   */
  energy: number;
  /**
   * @deprecated 已废弃。使用 `.store.getCapacity(RESOURCE_ENERGY) 代替。
   */
  energyCapacity: number;

  /**
   * 一个包含了该建筑中所存储的货物的 `Store` 对象。
   */
  store: Store<RESOURCE_ENERGY, false>;
}

interface StructureExtensionConstructor
  extends
    _Constructor<StructureExtension>,
    _ConstructorById<StructureExtension> {}

declare const StructureExtension: StructureExtensionConstructor;

/**
 * 将能量远程传输到同一房间的另一个 Link 中。
 */
interface StructureLink extends OwnedStructure<STRUCTURE_LINK> {
  readonly prototype: StructureLink;

  /**
   * 下次传输之前还需多少 tick 的冷却。
   */
  cooldown: number;
  /**
   * 此属性已被弃用，将很快删除。
   * @deprecated `.store[RESOURCE_ENERGY]` 的别名。
   */
  energy: number;
  /**
   * 此属性已被弃用，将很快删除。
   * @deprecated `.store.getCapacity(RESOURCE_ENERGY)` 的别名。
   */
  energyCapacity: number;
  /**
   * 一个包含了该建筑中所存储资源的 [`Store`](https://screeps-cn.github.io/api/#Store) 对象。
   */
  store: Store<RESOURCE_ENERGY, false>;
  /**
   * 将能量远程传输到同一房间中任何位置的另一个 Link 中。
   *
   * If the target is a creep, it has to be at adjacent square to the link.
   *
   * If the target is a link, it can be at any location in the same room.
   *
   * Remote transfer process implies 3% energy loss and cooldown delay depending on the distance.
   * @param target 目标对象。
   * @param amount 将要传输的能量值。如果省略，所有能量都将被传输。
   */
  transferEnergy(
    target: Creep | StructureLink,
    amount?: number,
  ): ScreepsReturnCode;
}

interface StructureLinkConstructor
  extends _Constructor<StructureLink>, _ConstructorById<StructureLink> {}

declare const StructureLink: StructureLinkConstructor;

/**
 * 非玩家建筑。孵化 NPC 资源守护者（Source Keeper）来守卫某些房间中的能量 source 和 mineral。该建筑无法被摧毁。
 */
interface StructureKeeperLair extends OwnedStructure<STRUCTURE_KEEPER_LAIR> {
  readonly prototype: StructureKeeperLair;

  /**
   * 距离孵化下一个资源守护者还有多少 tick。
   */
  ticksToSpawn?: number;
}

interface StructureKeeperLairConstructor
  extends
    _Constructor<StructureKeeperLair>,
    _ConstructorById<StructureKeeperLair> {}

declare const StructureKeeperLair: StructureKeeperLairConstructor;

/**
 * 为你的代码提供远处房间的视野。
 */
interface StructureObserver extends OwnedStructure<STRUCTURE_OBSERVER> {
  readonly prototype: StructureObserver;

  /**
   * 为你的代码提供远处房间的视野。目标房间将在下一个 tick 可见。最大范围为 5 房间。
   * @param roomName 目标房间名。
   */
  observeRoom(roomName: string): ScreepsReturnCode;
}

interface StructureObserverConstructor
  extends
    _Constructor<StructureObserver>,
    _ConstructorById<StructureObserver> {}

declare const StructureObserver: StructureObserverConstructor;

/**
 * 非玩家建筑。储存着超能资源，可以通过摧毁该建筑获得。
 * 攻击该建筑的 creep 每次攻击都会承受反弹回来的伤害。
 * 点击[本文](https://screeps-cn.github.io/power.html)了解更多关于超能的信息。
 */
interface StructurePowerBank extends OwnedStructure<STRUCTURE_POWER_BANK> {
  readonly prototype: StructurePowerBank;

  /**
   * 储存的 power 容量。
   */
  power: number;
  /**
   * 该建筑还有多少 tick 就要因老化而消失。
   */
  ticksToDecay: number;
}

interface StructurePowerBankConstructor
  extends
    _Constructor<StructurePowerBank>,
    _ConstructorById<StructurePowerBank> {}

declare const StructurePowerBank: StructurePowerBankConstructor;

/**
 * 提炼超能 (power) 并注册到您的账户当中，可以孵化拥有独一无二能力的超能 creep (仍在开发中)。 点击[本文](https://screeps-cn.github.io/power.html)查看跟多有关超能的信息。
 */
interface StructurePowerSpawn extends OwnedStructure<STRUCTURE_POWER_SPAWN> {
  readonly prototype: StructurePowerSpawn;
  /**
   * 此属性已被弃用，将很快删除。
   * @deprecated `.store[RESOURCE_ENERGY]` 的别名。
   */
  energy: number;
  /**
   * 此属性已被弃用，将很快删除。
   * @deprecated `.store.getCapacity(RESOURCE_ENERGY)` 的别名。
   */
  energyCapacity: number;
  /**
   * 此属性已被弃用，将很快删除。
   * @deprecated `.store[RESOURCE_POWER]` 的别名。
   */
  power: number;
  /**
   * 此属性已被弃用，将很快删除。
   * @deprecated `.store.getCapacity(RESOURCE_POWER)` 的别名。
   */
  powerCapacity: number;
  /**
   * 一个包含了该建筑中所存储的货物的 [`Store`](https://screeps-cn.github.io/api/#Store) 对象。
   */
  store: Store<RESOURCE_ENERGY | RESOURCE_POWER, false>;

  /**
   * 将超能 (power) 资源注册到您的账户当中。注册超能允许开发超能 creep 的技能。
   */
  processPower(): ScreepsReturnCode;
}

interface StructurePowerSpawnConstructor
  extends
    _Constructor<StructurePowerSpawn>,
    _ConstructorById<StructurePowerSpawn> {}

declare const StructurePowerSpawn: StructurePowerSpawnConstructor;

/**
 * 阻挡敌方 creep 的移动。并防御本格空间上的我方建筑和 creep。可以当做可控门来进行使用。
 */
interface StructureRampart extends OwnedStructure<STRUCTURE_RAMPART> {
  readonly prototype: StructureRampart;

  /**
   * 还有多少 tick 就要因老化而失去生命值。
   */
  ticksToDecay: number;

  /**
   * 当值为 `false` (默认) 时。只有你的 creep 能通过。当值为 `true` 时，任何玩家的 creep 都可以通过。
   */
  isPublic: boolean;

  /**
   * 将该 rampart 的状态设置为开放，从而允许其他玩家的 creep 通过。
   * @param isPublic 该 rampart 是否开放
   */
  setPublic(isPublic: boolean): undefined;
}

interface StructureRampartConstructor
  extends _Constructor<StructureRampart>, _ConstructorById<StructureRampart> {}

declare const StructureRampart: StructureRampartConstructor;

/**
 * 将每个身体部件的移动成本降低至 `1`。建造道路之后，你就可以用更少的 `MOVE` 身体部件来孵化一个 creep。
 * 你也可以在自然墙壁上建造一个道路来使其可以通行。
 */
interface StructureRoad extends Structure<STRUCTURE_ROAD> {
  readonly prototype: StructureRoad;

  /**
   * 还有多少 tick 就要因老化而失去生命值。
   */
  ticksToDecay: number;
}

interface StructureRoadConstructor
  extends _Constructor<StructureRoad>, _ConstructorById<StructureRoad> {}

declare const StructureRoad: StructureRoadConstructor;

/**
 * 可以储存大量资源的建筑。每个房间内仅允许建造一个，所以你可以使用 `Room.storage` 属性来快速访问它。
 */
interface StructureStorage extends OwnedStructure<STRUCTURE_STORAGE> {
  readonly prototype: StructureStorage;

  /**
   * 一个包含了该建筑中所存储的货物的 Store 对象。
   */
  store: StoreDefinition;
  /**
   * 此属性已被弃用，将很快删除。
   * @deprecated `.store.getCapacity()` 属性的别名。
   */
  storeCapacity: number;
}

interface StructureStorageConstructor
  extends _Constructor<StructureStorage>, _ConstructorById<StructureStorage> {}

declare const StructureStorage: StructureStorageConstructor;

/**
 * 远程攻击 creep，治疗 creep，或维修建筑。房间里的任意对象都可以指定为它的目标。然而，效果线性地取决距离。每一个动作都会消耗能量。
 */
interface StructureTower extends OwnedStructure<STRUCTURE_TOWER> {
  readonly prototype: StructureTower;

  /**
   * 此属性已被弃用，将很快删除。
   * @deprecated `.store[RESOURCE_ENERGY]` 的别名。
   */
  energy: number;
  /**
   * 此属性已被弃用，将很快删除。
   * @deprecated `.store.getCapacity(RESOURCE_ENERGY)` 的别名。
   */
  energyCapacity: number;
  /**
   * 一个代表这该结构所存储能量的 `Store` 对象。
   */
  store: Store<RESOURCE_ENERGY, false>;

  /**
   * 远程攻击房间里的任意 creep、超能 creep 或房间内的结构。
   * @param target 目标 creep。
   */
  attack(target: AnyCreep | Structure): ScreepsReturnCode;
  /**
   * 远程治疗房间里的任意 creep 或超能 creep。
   * @param target 目标 creep。
   */
  heal(target: AnyCreep): ScreepsReturnCode;
  /**
   * 远程维修房间里的任意建筑。
   * @param target 目标建筑。
   */
  repair(target: Structure): ScreepsReturnCode;
}

interface StructureTowerConstructor
  extends _Constructor<StructureTower>, _ConstructorById<StructureTower> {}

declare const StructureTower: StructureTowerConstructor;

/**
 * 阻挡所有 creep 的移动。 玩家可以在已控制的房间中建造可破坏的构筑墙。
 * 有些房间还包含不可破坏的构筑墙，将新手区或重生区与世界其他地方隔开，又或将新手/重生区划分为较小的区域。
 * 不可破坏的构筑墙没有 `hits` 属性。
 */
interface StructureWall extends Structure<STRUCTURE_WALL> {
  readonly prototype: StructureWall;
  /**
   * 该 wall 还有多少 tick 死亡(only for automatically placed border walls at the start of the game)。
   */
  ticksToLive: number;
}

interface StructureWallConstructor
  extends _Constructor<StructureWall>, _ConstructorById<StructureWall> {}

declare const StructureWall: StructureWallConstructor;

/**
 * 允许采集矿藏 (Mineral)，点击 [本文](https://screeps-cn.github.io/resources.html) 查看更多关于矿物的内容。
 */
interface StructureExtractor extends OwnedStructure<STRUCTURE_EXTRACTOR> {
  readonly prototype: StructureExtractor;
  /**
   * 还有多少 tick 才能进行下次采集 (harvest) 操作。
   */
  cooldown: number;
}

interface StructureExtractorConstructor
  extends
    _Constructor<StructureExtractor>,
    _ConstructorById<StructureExtractor> {}

declare const StructureExtractor: StructureExtractorConstructor;

/**
 * 使用基础矿物生产化合物，强化(boost) creep 和清除强化。 点击本文来了解更多关于矿物的信息。
 */
interface StructureLab extends OwnedStructure<STRUCTURE_LAB> {
  readonly prototype: StructureLab;
  /**
   * 下次反应或者清除强化之前还需等待多少 tick 的冷却。
   */
  cooldown: number;
  /**
   * 此属性已被弃用，将很快删除。
   * @deprecated `.store[RESOURCE_ENERGY]` 的别名。
   */
  energy: number;
  /**
   * 此属性已被弃用，将很快删除。
   * @deprecated `.store.getCapacity(RESOURCE_ENERGY)` 的别名。
   */
  energyCapacity: number;
  /**
   * 此属性已被弃用，将很快删除。
   * @deprecated `lab.store[lab.mineralType]` 的别名。
   */
  mineralAmount: number;
  /**
   * 该 lab 储存的矿物类型。lab 同一时间内只能储存一种类型的矿物。
   * `null` in case there is no mineral resource in the lab.
   */
  mineralType: MineralConstant | MineralCompoundConstant | null;
  /**
   * 此属性已被弃用，将很快删除。
   * @deprecated `lab.store.getCapacity(lab.mineralType || yourMineral)` 的别名。
   */
  mineralCapacity: number;
  /**
   * 一个包含了该建筑中所存储资源的 `Store` 对象。
   */
  store: Store<
    RESOURCE_ENERGY | MineralConstant | MineralCompoundConstant,
    false
  >;
  /**
   * 使用存储中的矿物强化 creep 的身体部件。creep 必须在相邻与 lab 的正方形区域内。
   * @param creep 目标 creep。
   * @param bodyPartsCount 要强化的指定身体部件的数量。
   *
   * `TOUGH` 身体部件始终是从左到右进行强化，而其他部件则是从右到左。
   *
   * 如果 `undefined`，则对所有合适的身体部件进行强化。
   */
  boostCreep(creep: Creep, bodyPartsCount?: number): ScreepsReturnCode;
  /**
   * 立刻从 creep 身上移除强化并将强化所需的 50% 化合物丢弃在地面上，该操作不会关心 creep 的剩余存活时间。
   * creep 必须在紧邻 lab 的正方形区域内。清除强化所需的冷却时间等于生产强化该 creep 所需化合物的总时间。
   * @param creep 目标 creep。
   */
  unboostCreep(creep: Creep): ScreepsReturnCode;
  /**
   * Breaks mineral compounds back into reagents. The same output labs can be used by many source labs.
   * @param lab1 The first result lab.
   * @param lab2 The second result lab.
   */
  reverseReaction(lab1: StructureLab, lab2: StructureLab): ScreepsReturnCode;
  /**
   * 将化合物还原为其反应底物。同一个输出 lab 可以和多个输入 lab 进行反应。
   * @param lab1 第一个输出 lab。
   * @param lab2 第二个输出 lab。
   */
  runReaction(lab1: StructureLab, lab2: StructureLab): ScreepsReturnCode;
}

interface StructureLabConstructor
  extends _Constructor<StructureLab>, _ConstructorById<StructureLab> {}

declare const StructureLab: StructureLabConstructor;

/**
 * 终端可以发送任意资源到另一个房间的终端。目标终端可以属于任何一个玩家。 每个事务都需要额外消耗能量（无论传输资源类型如何），
 * 可以使用 `Game.market.calcTransactionCost` 计算所需能量。
 *
 * 例如，从 W0N0 发送 1000 单位矿物到 W10N5 需要消耗 742 单位能量。 你可以使用 `Game.market` 对象跟踪你的收入和支出事务。
 * 一个房间只会有一个终端，所以可以通过 `Room.terminal` 属性访问。
 *
 * 终端可以用于交易系统.
 */
interface StructureTerminal extends OwnedStructure<STRUCTURE_TERMINAL> {
  readonly prototype: StructureTerminal;
  /**
   * 这个终端不能调用 `StructureTerminal.send` 或 `Game.market.deal` 的剩余 tick。
   */
  cooldown: number;
  /**
   * 一个包含了该建筑中所存储资源的 `Store` 对象。
   */
  store: StoreDefinition;
  /**
   * 此属性已被弃用，将很快删除。
   * @deprecated `.store.getCapacity()` 的别名。
   */
  storeCapacity: number;
  /**
   * 发送资源给指定房间的终端
   * @param resourceType `RESOURCE_*` 常量之一。
   * @param amount 发送资源数量。
   * @param destination 目标房间名称。这个房间不需要对你可见。
   * @param description 这个事务的备注。它只对收件人可见。最大长度100字符。
   */
  send(
    resourceType: ResourceConstant,
    amount: number,
    destination: string,
    description?: string,
  ): ScreepsReturnCode;
}

interface StructureTerminalConstructor
  extends
    _Constructor<StructureTerminal>,
    _ConstructorById<StructureTerminal> {}

declare const StructureTerminal: StructureTerminalConstructor;

/**
 * 一个可以用来存储资源的小型容器。这是一个允许走上去的建筑。所有丢弃在同一方格上的资源都会被自动存储到 container 中。
 */
interface StructureContainer extends Structure<STRUCTURE_CONTAINER> {
  readonly prototype: StructureContainer;
  /**
   * 一个包含了该建筑中所存储的货物的 `Store` 对象。
   */
  store: StoreDefinition;
  /**
   * 此属性已被弃用，将很快删除。
   * @deprecated `.store.getCapacity()` 的别名。
   */
  storeCapacity: number;
  /**
   * 还有多少 tick 就要因老化而失去生命值。
   */
  ticksToDecay: number;
}

interface StructureContainerConstructor
  extends
    _Constructor<StructureContainer>,
    _ConstructorById<StructureContainer> {}

declare const StructureContainer: StructureContainerConstructor;

/**
 * 向其他房间发射一枚核弹，对着落区域造成大量伤害。发射后需要时间冷却且需重新装填能量和 ghodium 资源。
 * 发射后将会在目标房间位置创建一个对任何玩家可见的 [`Nuke`](https://screeps-cn.github.io/api/#Nuke) 对象，直至其着陆。
 * 已发射的核弹无法移动或者取消。核弹不能从新手房间发射或者发射向新手房间。
 * 放置到 `StructureNuker` 中的资源无法被取出 (withdraw)。
 */
interface StructureNuker extends OwnedStructure<STRUCTURE_NUKER> {
  readonly prototype: StructureNuker;
  /**
   * 此属性已被弃用，将很快删除。
   * @deprecated `.store[RESOURCE_ENERGY]` 的别名。
   */
  energy: number;
  /**
   * 此属性已被弃用，将很快删除。
   * @deprecated `.store.getCapacity(RESOURCE_ENERGY)` 的别名。
   */
  energyCapacity: number;
  /**
   * 此属性已被弃用，将很快删除。
   * @deprecated `.store[RESOURCE_GHODIUM]` 的别名。
   */
  ghodium: number;
  /**
   * 此属性已被弃用，将很快删除。
   * @deprecated `.store.getCapacity(RESOURCE_GHODIUM)` 的别名。
   */
  ghodiumCapacity: number;
  /**
   * 下次发射前还需多少 tick 的冷却时间。
   */
  cooldown: number;
  /**
   * 一个包含了该建筑中所存储资源的 `Store` 对象。
   */
  store: Store<RESOURCE_ENERGY | RESOURCE_GHODIUM, false>;
  /**
   * 向指定位置发射核弹。
   * @param pos 目标房间位置
   */
  launchNuke(pos: RoomPosition): ScreepsReturnCode;
}

interface StructureNukerConstructor
  extends _Constructor<StructureNuker>, _ConstructorById<StructureNuker> {}

declare const StructureNuker: StructureNukerConstructor;

/**
 * 一个非玩家建筑。立刻将你的 creep 传送至一个遥远房间的出口位置。传送门会在每个区块的中央房间随机刷新。
 */
interface StructurePortal extends Structure<STRUCTURE_PORTAL> {
  readonly prototype: StructurePortal;
  /**
   * 如果这是个**通往其他房间**的传送门，则该属性为指向目的地房间出口位置的 `RoomPosition` 对象。
   *
   * 如果这是个**通往其他 shard** 的传送门，则该属性为一个包含了 `shard` 和 `room` 字符串属性的对象。无法确定其具体出口位置，creep 会被随机传送到目标房间的任意空闲位置。
   */
  destination: RoomPosition | { shard: string; room: string };
  /**
   * 还有多少 tick 就要因老化而失去生命值，当传送门稳定时其值为 `undefined`。
   */
  ticksToDecay: number | undefined;
}

interface StructurePortalConstructor
  extends _Constructor<StructurePortal>, _ConstructorById<StructurePortal> {}

declare const StructurePortal: StructurePortalConstructor;

/**
 * 使用基础矿物和其他商品(commodities)来生产贸易商品。
 */
interface StructureFactory extends OwnedStructure<STRUCTURE_FACTORY> {
  readonly prototype: StructureFactory;
  /**
   * 还有多少 tick 才能进行下一次生产。
   */
  cooldown: number;
  /**
   * 工厂的等级，可以通过 `PWR_OPERATE_FACTORY` 超能来给一个新建的工厂设置等级。 一旦被设置，等级将无法再次更改。
   */
  level: number;
  /**
   * 一个包含了该建筑中所存储的货物的 Store 对象。
   */
  store: StoreDefinition;
  /**
   * 生产指定商品。工厂存储中应该包含所有的生产用料。
   */
  produce(
    resource:
      | CommodityConstant
      | MineralConstant
      | RESOURCE_ENERGY
      | RESOURCE_GHODIUM,
  ): ScreepsReturnCode;
}

interface StructureFactoryConstructor
  extends _Constructor<StructureFactory>, _ConstructorById<StructureFactory> {}

declare const StructureFactory: StructureFactoryConstructor;

/**
 * 该 NPC 建筑是 NPC 要塞的控制中心，并且也统治着本区块中的所有入侵者。
 *
 * @see https://screeps-cn.github.io/api/#StructureInvaderCore
 */
interface StructureInvaderCore extends OwnedStructure<STRUCTURE_INVADER_CORE> {
  readonly prototype: StructureInvaderCore;
  /**
   * 此要塞的等级。该等级也决定了战利品的数量和质量。
   */
  level: number;
  /**
   * 部署阶段的计时器，在要塞尚未部署完成时显示，否则为 `undefined`。
   */
  ticksToDeploy: number;
}

interface StructureInvaderCoreConstructor
  extends
    _Constructor<StructureInvaderCore>,
    _ConstructorById<StructureInvaderCore> {}

declare const StructureInvaderCore: StructureInvaderCoreConstructor;

/**
 * A discriminated union on Structure.type of all owned structure types
 */
type AnyOwnedStructure =
  | StructureController
  | StructureExtension
  | StructureExtractor
  | StructureFactory
  | StructureInvaderCore
  | StructureKeeperLair
  | StructureLab
  | StructureLink
  | StructureNuker
  | StructureObserver
  | StructurePowerBank
  | StructurePowerSpawn
  | StructureRampart
  | StructureSpawn
  | StructureStorage
  | StructureTerminal
  | StructureTower;

type AnyStoreStructure =
  | StructureExtension
  | StructureFactory
  | StructureLab
  | StructureLink
  | StructureNuker
  | StructurePowerSpawn
  | StructureSpawn
  | StructureStorage
  | StructureTerminal
  | StructureTower
  | StructureContainer;

/**
 * A discriminated union on Structure.type of all structure types
 */
type AnyStructure =
  | AnyOwnedStructure
  | StructureContainer
  | StructurePortal
  | StructureRoad
  | StructureWall;

/**
 * Conditional type for all concrete implementations of Structure.
 * Unlike Structure<T>, ConcreteStructure<T> gives you the actual concrete class that extends Structure<T>.
 */
type ConcreteStructure<T extends StructureConstant> = T extends
  STRUCTURE_EXTENSION ? StructureExtension
  : T extends STRUCTURE_RAMPART ? StructureRampart
  : T extends STRUCTURE_ROAD ? StructureRoad
  : T extends STRUCTURE_SPAWN ? StructureSpawn
  : T extends STRUCTURE_LINK ? StructureLink
  : T extends STRUCTURE_WALL ? StructureWall
  : T extends STRUCTURE_STORAGE ? StructureStorage
  : T extends STRUCTURE_TOWER ? StructureTower
  : T extends STRUCTURE_OBSERVER ? StructureObserver
  : T extends STRUCTURE_POWER_SPAWN ? StructurePowerSpawn
  : T extends STRUCTURE_EXTRACTOR ? StructureExtractor
  : T extends STRUCTURE_LAB ? StructureLab
  : T extends STRUCTURE_TERMINAL ? StructureTerminal
  : T extends STRUCTURE_CONTAINER ? StructureContainer
  : T extends STRUCTURE_NUKER ? StructureNuker
  : T extends STRUCTURE_FACTORY ? StructureFactory
  : T extends STRUCTURE_KEEPER_LAIR ? StructureKeeperLair
  : T extends STRUCTURE_CONTROLLER ? StructureController
  : T extends STRUCTURE_POWER_BANK ? StructurePowerBank
  : T extends STRUCTURE_PORTAL ? StructurePortal
  : T extends STRUCTURE_INVADER_CORE ? StructureInvaderCore
  : never;
/**
 * 死亡creep的遗物。这个对象不阻碍行走。
 * <ul>
 *     <li>消失: 死去的 creep 每个身体部件 5 tick</li>
 * </ul>
 */
interface Tombstone extends RoomObject {
  /**
   * 一个唯一的对象标识。你可以使用 [`Game.getObjectById`](https://screeps-cn.github.io/api/#Game.getObjectById) 方法获取对象实例。
   */
  id: Id<this>;
  /**
   * 死亡时间。
   */
  deathTime: number;
  /**
   * 一个表示该结构所存储资源的 [`Store`](https://screeps-cn.github.io/api/#Store) 对象。
   */
  store: StoreDefinitionUnlimited;
  /**
   * 这个墓碑消失的剩余时间。
   */
  ticksToDecay: number;
  /**
   * 一个内含死亡 creep 或超能 creep 的对象。
   */
  creep: AnyCreep;
}

interface TombstoneConstructor
  extends _Constructor<Tombstone>, _ConstructorById<Tombstone> {}

declare const Tombstone: TombstoneConstructor;
