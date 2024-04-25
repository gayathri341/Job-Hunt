const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const dropdownMenu = document.getElementById('dropdown-menu');

// Sample search results
const searchResults = ['Housekeeper',
  'Janitor',
  'Maid',
  'Custodian',
  'Cleaner',
  'House Cleaning Technician',
  'Environmental Services Technician',
  'Office Cleaner',
  'Sanitation Worker',
  'Industrial Cleaner'];

// Function to display dropdown menu
function displayDropdownMenu(results) {
  dropdownMenu.innerHTML = '';
  results.forEach(result => {
    const listItem = document.createElement('li');
    listItem.textContent = result;
    dropdownMenu.appendChild(listItem);
  });
  dropdownMenu.style.display = 'block';
}

// Event listener for search button click
searchButton.addEventListener('click', function(event) {
  event.stopPropagation(); // Prevent event bubbling
  // Display dropdown menu
  displayDropdownMenu(searchResults);
});

// Event listener for clicking outside the dropdown menu to close it
document.addEventListener('click', function(event) {
  if (!dropdownMenu.contains(event.target) && event.target !== searchButton) {
    dropdownMenu.style.display = 'none';
  }
});

// Event listener for clicking on search input to close the dropdown menu
searchInput.addEventListener('click', function() {
  dropdownMenu.style.display = 'none';
});

// Event listener for clicking on dropdown menu items
dropdownMenu.addEventListener('click', function(event) {
  const selectedItem = event.target.textContent;
  console.log('Selected item:', selectedItem);
});
