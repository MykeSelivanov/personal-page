// locating elements
const projectCards = document.querySelectorAll('.personalProjects > a');

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
                window.open('https://github.com/MykeSelivanov/chat-chat', '_blank');
                break;
            case 'card3Link':
                window.open('https://github.com/MykeSelivanov/jd-java-springboot', '_blank');
                break;
            case 'card4Link':
                window.open('https://github.com/MykeSelivanov/puppies-tinder', '_blank');
                break;
            case 'card5Link':
                window.open('https://github.com/MykeSelivanov/jd-ticketing-project-security', '_blank');
                break;
            case 'card6Link':
                window.open('https://github.com/MykeSelivanov/java-functional-programming', '_blank');
                break;
            case 'card7Link':
                window.open('https://github.com/MykeSelivanov/swe-101', '_blank');
                break;
            case 'card8Link':
                window.open('https://github.com/MykeSelivanov/java-data-structures', '_blank');
                break;
            case 'card9Link':
                window.open('https://github.com/MykeSelivanov/reactichat', '_blank');
                break;
            case 'card10Link':
                window.open('https://github.com/MykeSelivanov/mini-react-clone', '_blank');
                break;
            case 'card11Link':
                window.open('https://github.com/MykeSelivanov/char-freq-txt-file', '_blank');
                break;
            default:
                alert('Click on invalid element!');
        };
    });
});