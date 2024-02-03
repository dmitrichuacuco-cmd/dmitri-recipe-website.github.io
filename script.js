/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function highlightButton(id) {
  // Remove the 'active' class from all links
  var links = document.getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove('active');
  }

  // Add the 'active' class to the clicked link
  var selectedLink = document.querySelector('a[href="#' + id + '"]');
  selectedLink.classList.add('active');

  // Prevent the default behavior of the anchor tag
  event.preventDefault();
}

// Function to filter food items based on search query and category
function filterFoodItems() {
    var searchQuery = document.querySelector('.search-bar input[name="q"]').value.toLowerCase();
    var selectedCategory = document.querySelector('.navbar .active').textContent.trim().toLowerCase();
    
    var foodItems = document.querySelectorAll('.foodboard .food');
    foodItems.forEach(function(foodItem) {
        var foodName = foodItem.querySelector('h4').textContent.toLowerCase();
        var foodCategory = foodItem.querySelector('.category').textContent.trim().toLowerCase();
        
        if ((foodName.includes(searchQuery) || searchQuery === '') && (foodCategory === selectedCategory || selectedCategory === 'all')) {
            foodItem.style.display = 'block'; // Show the item
        } else {
            foodItem.style.display = 'none'; // Hide the item, but maintain its space in the layout
        }
    });
}


// Event listeners for search input and category selection
document.querySelector('.search-bar input[name="q"]').addEventListener('input', filterFoodItems);
document.querySelectorAll('.navbar a').forEach(function(navLink) {
    navLink.addEventListener('click', function() {
        document.querySelector('.navbar .active').classList.remove('active');
        this.classList.add('active');
        filterFoodItems();
    });
});

// Initial filtering when the page loads
filterFoodItems();