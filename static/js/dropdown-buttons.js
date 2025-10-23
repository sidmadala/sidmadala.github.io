// Open the dropdown menu specific to switching language 
var inputElement = document.getElementById("languageDropdownMenuButton");
if (inputElement) {
  inputElement.addEventListener('click', function () {
    var dropdownMenu = document.getElementById("languageDropdownMenu");
    if (dropdownMenu) dropdownMenu.classList.toggle('currently-showing');
  });
}

// Open the dropdown menu specific to switching language on mobile
var inputElementMobile = document.getElementById("languageDropdownMenuButton-mobile");
if (inputElementMobile) {
  inputElementMobile.addEventListener('click', function () {
    var dropdownMenu = document.getElementById("languageDropdownMenu-mobile");
    if (dropdownMenu) dropdownMenu.classList.toggle('currently-showing');
  });
}

// Open the dropdown menu specific to switching section, when user is on mobile 
var sectionBtn = document.getElementById("sectionDropdownMenuButton");
var sectionMenu = document.getElementById("sectionDropdownMenu");

if (sectionBtn && sectionMenu) {
  // Toggle open/close
  function toggleSectionMenu(e) {
    if (e) e.stopPropagation(); // don't bubble to document click-closer
    sectionMenu.classList.toggle('currently-showing');
    sectionBtn.setAttribute('aria-expanded', sectionMenu.classList.contains('currently-showing') ? 'true' : 'false');
  }

  sectionBtn.addEventListener('click', toggleSectionMenu);
  sectionBtn.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') toggleSectionMenu(e);
  });

  // Prevent clicks inside the menu from closing it before navigation
  sectionMenu.addEventListener('click', function (e) { e.stopPropagation(); });

  // Close on outside click or Escape
  document.addEventListener('click', function () {
    if (sectionMenu.classList.contains('currently-showing')) {
      sectionMenu.classList.remove('currently-showing');
      sectionBtn.setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      sectionMenu.classList.remove('currently-showing');
      sectionBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

// Close dropdown menus if the user clicks anywhere outside of one
// (Keep language handler null-safe; this now coexists with the document click above)
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-menu-button')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    Array.from(dropdowns).forEach(element => {
      if (element.classList.contains('currently-showing')) {
        element.classList.remove('currently-showing')
      }
    });
  }
}