// configuration constants

export const config = {
  ui: {
    // booleans
    mouse_visible: false,
    show_mouse_position: false,
    // smoothing
    camera_smoothness: 0.1,
    // scale
    camera_scale: 0.0008,
  },
  physics: {
    gravity_x: 0,
    gravity_y: 0,
    speed_factor: 0.00005,
    velocity_shoot_boost: 0.5,
  },
  game: {
    respawn_time: 180,
    respawn_invincibility: 180,
    health_mult: 10,
    damage_points_mult: 10,
    kill_points_mult: 100,
    item_points_mult: 50,
    clear_points_mult: 1,
    bonus_points_mult: 1,
    clear_wave_time_add: 1000,
    clear_wave_normal_points: 10000,
    enemy_spawn_delay: 60,
  },
  controls: {
    up: ["ArrowUp", "w", "W"],
    down: ["ArrowDown", "s", "S"],
    left: ["ArrowLeft", "a", "A"],
    right: ["ArrowRight", "d", "D"],
    click: ["Mouse", " "],
    shoot: ["Mouse", " "],
    shoot2: ["MouseRight", "ShiftLeft"],
    uienter: ["Enter", " "],
  },
  joystick: {
    pointer: false,
    dynamic: true,
    size: 25,
  },
  dev: {
    make_shortcuts: ["ram", "strong", "oct", "ramshoot", "small", "boss_tutorial", "boss_tutorial_2", "boss_oct", "escape", "invisible"],
  },
};

// collision categories

const group = {
  none: 0x0000,
  default: 0x0001,
  wall: 0x0002,
  player: 0x0004,
  enemy: 0x0008,
  item: 0x0010,
  player_bullet: 0x0020,
  enemy_bullet: 0x0040,
  all: 0x00FF,
};

export const category = {
  group: group,
  all: {
    category: group.default,
    mask: group.all,
  },
  none: {
    category: group.default,
    mask: group.none,
  },
  wall: {
    category: group.wall,
    mask: group.default | group.player | group.enemy | group.enemy_bullet | group.player_bullet | group.item
  },
  bullet_blocker: {
    category: group.wall,
    mask: group.default | group.enemy_bullet | group.player_bullet | group.item,
  },
  player_blocker: {
    category: group.wall,
    mask: group.default | group.player | group.enemy | group.item,
  },
  player: {
    category: group.player,
    mask: group.default | group.wall | group.enemy_bullet | group.player | group.enemy | group.item
  },
  player_bullet: {
    category: group.player_bullet,
    mask: group.default | group.wall | group.enemy | group.enemy_bullet
  },
  enemy: {
    category: group.enemy,
    mask: group.default | group.wall | group.player | group.player_bullet | group.enemy
  },
  enemy_bullet: {
    category: group.enemy_bullet,
    mask: group.default | group.wall | group.player | group.player_bullet
  },
  item: {
    category: group.item,
    mask: group.default | group.wall | group.player,
  },
};

// calculate cholesterol change