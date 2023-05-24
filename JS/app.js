//hamberger navbar
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

//filtering system
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("userInput");
    filter = input.value.toUpperCase();
    ul = document.querySelectorAll(".course__card");
    for (i = 0; i < ul.length; i++) {
        li = ul[i].getElementsByTagName("h2")[0];
        txtValue = li.textContent || li.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            ul[i].style.display = "";
        } else {
            ul[i].style.display = "none";
        }
    }
}

/* sorting system*/

// Define the initial sorting order as ascending
var sortOrder = 'asc';
// Get the button element with the id 'sortButton'
var sortButton = document.getElementById('sortButton');
// Add an event listener to the 'sortButton' that executes when it is clicked
sortButton.addEventListener('click', function () {
    // Get all the elements with the class 'course__card'
    var courseCards = document.querySelectorAll('.course__card');

    // Sort the elements based on the text content of their 'h2' tag
    var sortedCards = Array.from(courseCards).sort(function (a, b) {
        var titleA = a.querySelector('h2').textContent.toLowerCase();
        var titleB = b.querySelector('h2').textContent.toLowerCase();

        // Check if the sorting order is descending
        if (sortOrder === 'desc') {
            // Compare the elements in descending order
            if (titleA < titleB) {
                return 1;
            }
            if (titleA > titleB) {
                return -1;
            }
            return 0;
        } else {
            // Compare the elements in ascending order
            if (titleA < titleB) {
                return -1;
            }
            if (titleA > titleB) {
                return 1;
            }
            return 0;
        }
    });

    // Get the element with the class 'course'
    var courses = document.querySelector('.course');

    // Add the sorted elements back to the 'courses' element
    sortedCards.forEach(function (card) {
        courses.appendChild(card);
    });

    // Toggle the sorting order between ascending and descending
    sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';

    // Change the text content of the 'sortButton' to reflect the new sorting order
    sortButton.textContent = `Sort ${sortOrder === 'asc' ? 'Descending' : 'Ascending'}`;
});

/*level selector*/

// Get the button and all course cards
const levelButton = document.getElementById('levelButton');
const courseCards = document.querySelectorAll('.course__card');

// Set event listener to toggle course card visibility based on level
levelButton.addEventListener('click', function () {
    // Get the selected option
    const selectedOption = document.getElementById('levelSelect').value;

    // Loop through each course card
    courseCards.forEach(function (card) {
        // Get the level of the current course card
        const level = card.querySelector('h3').textContent.toLowerCase();

        // Toggle card visibility based on selected option
        if (selectedOption === 'all') {
            card.style.display = 'block';
        } else if (level === selectedOption) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

