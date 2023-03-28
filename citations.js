const base_citations =[
    ["« Beaucoup pensent à vivre longtemps, peu à bien vivre. »", "Socrate"],
    ["« Deux années de ma vie valent mieux qu'une lettre d'introduction. »", "Marcel Achard"],
    ["« Ma vie entière s'est portée sur les films et la religion. C'est tout. Rien d'autre. »","Martin Scorsese"],
    ["« La vie d’un homme n’est que d’un instant. »","Marc Aurèle"],
    ["« La vie, c’est apprendre à aimer. »","Abbé Pierré"],
    ["« Une belle vie, c’est une vie où on a beaucoup souffert. »","Christian Bobin"],
    ["« La qualité de votre vie est égale à la qualité de vos pensées. »","Anthony Robbins"],
    ["« Fais de ta vie un rêve, et d’un rêve, une réalité. »","Antoine de Saint Exupéry"],
    ["« Il faut faire de sa vie un chef d’œuvre. »","Goethe"],
    ["« Là où il y a l’amour, il y a la vie. »","Gandhi"],
    
];

let index = Math.floor(Math.random() * (base_citations.length))

base_citations[index][0];
base_citations[index][1];
