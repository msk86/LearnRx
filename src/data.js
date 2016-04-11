const superHeroes = [
    {
        world: 'DC',
        heroes: [
            {
                id: 10001,
                name: 'Superman',
                identity: 'Clerk Kent',
                superPower: ['Flight', 'Strength', 'X-Ray vision'],
                avatars: [
                    {w: 100, h: 100, url: 'http://super-heroes.com/superman/medium.jpg'},
                    {w: 150, h: 150, url: 'http://super-heroes.com/superman/large.jpg'}
                ]
            }, {
                id: 10002,
                name: 'Batman',
                identity: 'Bruce Wayne',
                superPower: ['Rich', 'Martial arts', 'Espionage'],
                avatars: [
                    {w: 100, h: 100, url: 'http://super-heroes.com/batman/medium.jpg'},
                    {w: 150, h: 150, url: 'http://super-heroes.com/batman/large.jpg'}
                ]
            }
        ]
    }, {
        world: 'MARVEL',
        heroes: [
            {
                id: 20001,
                name: 'Thor',
                identity: 'Thor',
                superPower: ['Flight', 'Strength', 'Lightning'],
                avatars: [
                    {w: 100, h: 100, url: 'http://super-heroes.com/thor/medium.jpg'},
                    {w: 150, h: 150, url: 'http://super-heroes.com/thor/large.jpg'}
                ]
            }, {
                id: 20002,
                name: 'Ironman',
                identity: 'Tony Stark',
                superPower: ['Rich', 'Flight', 'Missile', 'Laser'],
                avatars: [
                    {w: 100, h: 100, url: 'http://super-heroes.com/ironman/medium.jpg'},
                    {w: 150, h: 150, url: 'http://super-heroes.com/ironman/large.jpg'}
                ]
            }
        ]
    }
];

export default [superHeroes];
