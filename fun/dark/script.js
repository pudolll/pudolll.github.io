function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomizeGridItemSizes() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        const colSpan = getRandomInt(1, 10); // Random column span between 1 and 3
        const rowSpan = getRandomInt(3, 5); // Random row span between 1 and 3
        item.style.gridColumn = `span ${colSpan}`;
        item.style.gridRow = `span ${rowSpan}`;
    });
}

document.addEventListener('DOMContentLoaded', randomizeGridItemSizes);