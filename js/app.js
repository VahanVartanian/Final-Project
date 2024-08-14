// this event listener ensures that the JavaScript runs only after the DOM is fully loaded.
// this prevents errors on pages that don’t have JavaScript.
document.addEventListener("DOMContentLoaded", function () {

    // this selects the elements for opening and closing the mobile menu and the menu itself
    const menuOpen = document.querySelector('.js-menu-open'); // button to open the menu for the mobile view
    const menuClose = document.querySelector('.js-menu-close'); // button to close the menu for the mobile view
    const menu = document.querySelector('.js-menu'); // the menu element that will be shown or hidden

    // this if statement checks if all necessary menu elements are present in the document
    if (menuOpen && menuClose && menu) {
        // adds an event listener for clicks on the menu open button
        menuOpen.addEventListener('click', () => {
            // removes the class that hides the menu (off-screen or invisible)
            menu.classList.remove('-translate-y-full');
            // adds the class that makes the menu visible and slides it into view
            menu.classList.add('translate-y-0');
        });

        // add an event listener for clicks on the menu close button
        menuClose.addEventListener('click', () => {
            // removes the class that shows the menu (in view or visible)
            menu.classList.remove('translate-y-0');
            // adds the class that hides the menu (off-screen or invisible)
            menu.classList.add('-translate-y-full');
        });
    }

    // this selects all elements with the class 'size-button'
    const sizeButtons = document.querySelectorAll('.size-button');
    // checks to see if there are any size buttons on the page to prevent console log errors
    if (sizeButtons.length) {
        // this adds a click event listener to each size button
        $('.size-button').on('click', function () {
            // this removes the 'selected' class from all size buttons to reset their color
            $('.size-button').removeClass('selected');
            // this adds the 'selected' class to the clicked size button to highlight it, so it changes color
            $(this).addClass('selected');
        });
    }

    // PLUGIN #1: SLICK SLIDER

    // this selects the div that contains the slider functionality
    const slider = document.querySelector('.slider');
    // this checks if the slider element exists in the document so there is no errors in the console log
    if (slider) {
        // this starts the slick slider on the selected element
        $('.slider').slick({
            dots: true, // displays navigation dots for slide indicators
            infinite: true, // enables infinite looping of the slides
            speed: 500, // sets the speed to 500ms
            slidesToShow: 1, // shows one slide at a time
            slidesToScroll: 1, // scrolls one slide at a time
            autoplay: true, // enables autoplay
            autoplaySpeed: 2000, // time between autoplay slides
        });
    }

    // PLUGIN #2: LOTTIE ANIMATION

    // this selects the container where the Lottie animation will be rendered
    const animationContainer = document.getElementById('animation-container');
    // checks if the animation container element exists in the document to prevent console log errors
    if (animationContainer) {
        // loads and configurse the Lottie animation within the container
        var animation = lottie.loadAnimation({
            container: animationContainer, // specifies the DOM element to render the animation into
            renderer: 'svg', // uses SVG as the rendering method for the animation
            loop: true, // loops the animation
            autoplay: true, // automatically starts playing the animation
            path: 'animations/THISONE.json' // path to the JSON file that contains the animation data
        });
    }


    // PLUGIN #3: AOS

    // this if statement checks if the AOS library is available in the global scope to prevent console log errors 
    if (typeof AOS !== 'undefined') {
        // starts AOS for animations triggered by scrolling
        AOS.init();
    }


    // PLUGIN #4: JQUERY FORM VALIDATOR

    // this selects the contact form element by its ID
    const contactForm = document.getElementById("contact-form");
    // checks to see if the contact form element exists in the document to prevent console log errors 
    if (contactForm) {
        // starts the jQuery Validation plugin for the contact form
        $("#contact-form").validate({
            // here is where we define the validation rules for the form fields
            rules: {
                name: "required", // 'name' field is required
                email: {
                    required: true, // 'email' field is required
                    email: true // 'email' field must be a valid email address
                },
                message: "required" // 'message' field is required
            },
            // here is where we define the custom error messages for the validation
            messages: {
                name: "Please enter your name", // this is the error message for missing name
                email: {
                    required: "Please enter your email", // this is the error message for missing email
                    email: "Please enter a valid email address" // this is the error message for an invalid email
                },
                message: "Please enter your message" // this is the error message for missing message
            },
            // this defines the function to be executed when the form is valid and submitted
            submitHandler: function (form) {
                // this submits the forms
                form.submit();
            }
        });
    }

    // PLUGIN #5: LEAFLET MAP

    // this selects the element that will contain the map by its ID
    const mapContainer = document.getElementById('map');
    // this checks if the map container element exists in the document to prevent console log errors
    if (mapContainer) {
        // this initializes the Leaflet map and set its view to Vancouver, BC with a zoom level of 13
        var map = L.map('map').setView([49.2827, -123.1207], 13);

        // this adds a tile layer from OpenStreetMap to the map
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // this adds a marker to the map at these specific coordinates
        L.marker([49.283494, -123.114621]).addTo(map)
            // this adds a popup to the marker with my custom content
            .bindPopup('<b>Vahan</b><br>1440 Seymour St, Vancouver, BC')
            // this opens the popup immediately
            .openPopup();
    }
});
