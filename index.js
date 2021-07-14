// locating elements
const projectCards = document.querySelectorAll('.personalProjects > a');
console.log(projectCards);

// adding events on project card hover and click
// projectCards.forEach(element => {
//     // functions to scale/descale project card elements
//     const zoomIn = () => {
//         element.style.transform = 'scale(1.25)';
//         element.style.transition = 'transition: all 1s';
//     };
//     const zoomOut = () => {
//         element.style.transform = 'scale(1)';
//         // element.style.transition = 'transition: all 1s';
//     };
//     // adding enlarging on hover
//     element.addEventListener('mouseover', zoomIn);
//     // removing enlarging on mouseout
//     element.addEventListener('mouseout', zoomOut);
// });

// navigation on project cards click
projectCards.forEach(element => {
    element.addEventListener('click', () => {
        switch (element.getAttribute('id')) {
            case 'card1Link':
                window.open('https://github.com/MykeSelivanov/jd-ticketing-project-rest', '_blank');
                break;
            case 'card2Link':
                window.open('https://github.com/MykeSelivanov/java-data-structures', '_blank');
                break;
            case 'card3Link':
                window.open('https://github.com/MykeSelivanov/java-functional-programming', '_blank');
                break;
            case 'card4Link':
                window.open('https://github.com/MykeSelivanov/java-functional-programming', '_blank');
                break;
            case 'card4Link':
                window.open('https://github.com/MykeSelivanov/jd-ticketing-project-security', '_blank');
                break;
            default:
                alert('Click on invalid element!');
        };
    });
});