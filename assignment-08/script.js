const GEOGRAPHY_LIST = [
    {
        country: 'United States',
        capital: 'Washington',
        largestCity: 'New York',
        subdivisionName: 'state',
        subdivisions: [
            {
                name: 'Louisiana',
                capital: 'Baton Rouge',
                largestCity: 'New Orleans',
                area: 134264,
            },
            {
                name: 'California',
                capital: 'Sacramento',
                largestCity: 'Los Angeles',
                area: 423970,
            },
            {
                name: 'Nevada',
                capital: 'Carson City',
                largestCity: 'Las Vegas',
                area: 286382,
            },
        ],
    },
    {
        country: 'Guatemala',
        capital: 'Guatemala City',
        largestCity: 'Guatemala City',
        subdivisionName: 'department',
        subdivisions: [
            {
                name: 'Huehuetenango',
                capital: 'Huehuetenango',
                largestCity: 'Huehuetenango',
                area: 7403,
            },
            {
                name: 'Izabal',
                capital: 'Puerto Barrios',
                largestCity: 'Puerto Barrios',
                area: 9038,
            },
            {
                name: 'El Progreso',
                capital: 'Guastatoya',
                largestCity: 'Guastatoya',
                area: 1922,
            },
        ],
    },
    {
        country: 'Atlantis',
        capital: 'Earth City',
        largestCity: 'Neptune Port',
        subdivisionName: 'district',
        subdivisions: [
            {
                name: 'Coral Bay',
                capital: 'Pearl Harbor',
                largestCity: 'Marina Point',
                area: 12345,
            },
            {
                name: 'Deep Sea Territory',
                capital: 'Rupees',
                largestCity: 'Travistown',
                area: 67890,
            },
            {
                name: 'Indiana Ocean',
                capital: 'Atlantis drain',
                largestCity: 'Waves town',
                area: 45678,
            },
        ],
    },
    {
        country: 'Lemonade',
        capital: 'Golden Town',
        largestCity: 'Amazing Town',
        subdivisionName: 'province',
        subdivisions: [
            {
                name: 'Nimbu Gold',
                capital: 'Yellow City',
                largestCity: 'Shinyville',
                area: 58321,
            },
            {
                name: 'Elephant City',
                capital: 'Animal Town',
                largestCity: 'Dog City',
                area: 98735,
            },
            {
                name: 'San Leandro',
                capital: 'Sunnyvale',
                largestCity: 'Cattown',
                area: 112233,
            },
        ],
    },
];

// Wait for the DOM content to be loaded
document.addEventListener('DOMContentLoaded', function() {
    // Loop through the GEOGRAPHY_LIST array
    GEOGRAPHY_LIST.forEach(countryData => {
        // Create a container div for each country
        const countryContainer = document.createElement('div');
        countryContainer.classList.add('country');

        // Create a heading for the country
        const countryHeading = document.createElement('h2');
        countryHeading.textContent = `${countryData.country}`;

        // Create paragraphs for capital and largest city
        const capitalParagraph = document.createElement('p');
        capitalParagraph.textContent = `Capital: ${countryData.capital}`;
        const largestCityParagraph = document.createElement('p');
        largestCityParagraph.textContent = `Largest City: ${countryData.largestCity}`;

        // Create a sublist for subdivisions
        const subdivisionsList = document.createElement('ul');
        countryData.subdivisions.forEach(subdivision => {
            const subdivisionItem = document.createElement('li');
            subdivisionItem.textContent = `${subdivision.name} - Capital: ${subdivision.capital} - Area: ${subdivision.area} sq mi`;
            subdivisionsList.appendChild(subdivisionItem);
        });

        // Append elements to country container
        countryContainer.appendChild(countryHeading);
        countryContainer.appendChild(capitalParagraph);
        countryContainer.appendChild(largestCityParagraph);
        countryContainer.appendChild(subdivisionsList);

        // Append country container to main
        document.querySelector('main').appendChild(countryContainer);
    });
});

