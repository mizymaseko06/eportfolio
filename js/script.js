document.querySelectorAll('.navbar-nav .dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
      // Get the dropdown element and hide it
      const dropdownMenu = item.closest('.dropdown-menu');
      const dropdownToggle = item.closest('.dropdown');
      const bootstrapDropdown = new bootstrap.Dropdown(dropdownToggle);
      bootstrapDropdown.hide();  // Close the dropdown
    });
  });