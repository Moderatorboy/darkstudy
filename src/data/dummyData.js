export const subjects = [
  { id: 's1', name: 'Physics', thumbnail: '/images/physics.jpg' },
  { id: 's2', name: 'Chemistry', thumbnail: '/images/chemistry.jpg' },
  { id: 's3', name: 'Maths', thumbnail: '/images/maths.jpg' }
];

export const chapters = {
  s1: [
    { id: 'c1', name: 'Mechanics' },
    { id: 'c2', name: 'Optics' }
  ],
  s2: [
    { id: 'c3', name: 'Organic' },
    { id: 'c4', name: 'Inorganic' }
  ]
};

export const lectures = {
  c1: [
    { id: 'l1', title: 'Lecture 1', rumble: 'https://rumble.com/embed/example1' },
    { id: 'l2', title: 'Lecture 2', rumble: 'https://rumble.com/embed/example2' }
  ]
};
