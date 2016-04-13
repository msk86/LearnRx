const worlds = [
    {id: 1, world: 'DC'},
    {id: 2, world: 'MARVEL'}
];
const heroes = [
    {worldId: 1, id: 10001, name: 'Superman', identity: 'Clerk Kent'},
    {worldId: 1, id: 10002, name: 'Batman', identity: 'Bruce Wayne'},
    {worldId: 2, id: 20001, name: 'Thor', identity: 'Thor'},
    {worldId: 2, id: 20002, name: 'Ironman', identity: 'Tony Stark'}
];
const superPowers = [
    {power: 'Flight', heroes: [10001, 20001, 20002]},
    {power: 'Rich', heroes: [10002, 20002]},
    {power: 'Strength', heroes: [10001, 20001]},
    {power: 'Espionage', heroes: [10002]}
];
const avatars = [
    {heroId: 10001, w: 100, h: 100, url: 'http://super-heroes.com/superman/medium.jpg'},
    {heroId: 10001, w: 150, h: 150, url: 'http://super-heroes.com/superman/large.jpg'},
    {heroId: 10002, w: 100, h: 100, url: 'http://super-heroes.com/batman/medium.jpg'},
    {heroId: 10002, w: 150, h: 150, url: 'http://super-heroes.com/batman/large.jpg'},
    {heroId: 20001, w: 100, h: 100, url: 'http://super-heroes.com/thor/medium.jpg'},
    {heroId: 20001, w: 150, h: 150, url: 'http://super-heroes.com/thor/large.jpg'},
    {heroId: 20002, w: 100, h: 100, url: 'http://super-heroes.com/ironman/medium.jpg'},
    {heroId: 20002, w: 150, h: 150, url: 'http://super-heroes.com/ironman/large.jpg'}
];

export default [worlds, heroes, superPowers, avatars];
