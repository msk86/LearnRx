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
                ],
                appearances: [
                    {appearance: 'first', time: '1938', place: 'Action Comics #1'},
                    {appearance: 'last', time: '2016', place: 'Batman v Superman: Dawn of Justice'}
                ]
            }, {
                id: 10002,
                name: 'Batman',
                identity: 'Bruce Wayne',
                superPower: ['Rich', 'Martial arts', 'Espionage'],
                avatars: [
                    {w: 100, h: 100, url: 'http://super-heroes.com/batman/medium.jpg'},
                    {w: 150, h: 150, url: 'http://super-heroes.com/batman/large.jpg'}
                ],
                appearances: [
                    {appearance: 'first', time: '1939', place: 'Detective Comics #27'},
                    {appearance: 'last', time: '2016', place: 'Batman v Superman: Dawn of Justice'}
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
                ],
                appearances: [
                    {appearance: 'first', time: '1962', place: 'Journey into Mystery #83'},
                    {appearance: 'last', time: '2016', place: 'Captain America: Civil War'}
                ]
            }, {
                id: 20002,
                name: 'Ironman',
                identity: 'Tony Stark',
                superPower: ['Rich', 'Flight', 'Missile', 'Laser'],
                avatars: [
                    {w: 100, h: 100, url: 'http://super-heroes.com/ironman/medium.jpg'},
                    {w: 150, h: 150, url: 'http://super-heroes.com/ironman/large.jpg'}
                ],
                appearances: [
                    {appearance: 'first', time: '1963', place: 'Tales of Suspense #39'},
                    {appearance: 'last', time: '2016', place: 'Captain America: Civil War'}
                ]
            }
        ]
    }
];

export default [superHeroes];
