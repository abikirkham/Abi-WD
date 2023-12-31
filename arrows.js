(function() {
    var rotator = document.getElementById('rotator');
    var imageDir = 'assets/images/';
    var currentIndex = 1;

    var titles = [
        'Web Development',
        'E-Commerce Solutions',
        'Ongoing Support & Updates',
        'Graphic Design Integration',
        'Custom E-Commerce Solutions'
    ];
    
    var images = [
        'webdev.jpg',
        'ecommerce.jpg',
        'updates.jpg',
        'graphic.jpg',
        'tools.jpg'
    ];

    var texts = [
        'Create fully functional websites from scratch, handling UI design and responsive development using technologies like HTML, CSS, and JavaScript or frameworks such as React, Python and C+.',
        'Specializing in setting up online stores, I integrate payment gateways and implement e-commerce features such as catalogs, carts, and secure checkouts. I use known platforms or develop custom solutions based on the client needs.',
        'I provide ongoing support for websites, managing content updates, fixing bugs, and ensuring compatibility with the latest web standards. Regular maintenance enhances security, performance, and user experience.',
        'As a web developer, I offer a comprehensive service that seamlessly integrates cutting-edge web development with captivating graphic design to elevate your online presence and user experience.',
        'Specializing in setting up online stores, I integrate payment gateways and implement e-commerce features such as catalogs, carts, and secure checkouts. I use known platforms or develop custom solutions based on the client needs.'
    ];

    
    var changeImage = function() {
        var len = images.length;
    
        // Calculate previous, current, and next indices
        var prevIndex = (currentIndex - 1 + len) % len;
        var nextIndex = (currentIndex + 1) % len;
    
        // Set the source, text, and title for each image

        document.getElementById('image-title-prev').textContent = titles[prevIndex];
        document.getElementById('image-title').textContent = titles[currentIndex];
        document.getElementById('image-title-next').textContent = titles[nextIndex];

        document.getElementById('rotator-prev').src = imageDir + images[prevIndex];
        document.getElementById('rotator').src = imageDir + images[currentIndex];
        document.getElementById('rotator-next').src = imageDir + images[nextIndex];
    
        document.getElementById('image-text-prev').textContent = texts[prevIndex];
        document.getElementById('image-text').textContent = texts[currentIndex];
        document.getElementById('image-text-next').textContent = texts[nextIndex];
    
        
    };
    
    var prevButton = document.getElementById('prev-button');
    var nextButton = document.getElementById('next-button');

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        changeImage();
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        changeImage();
    });

    // Initial image display
    changeImage();
})();








// Add this section for testimonials


var testimonialTexts = [
    '"Lorem ipsum dolor sit amet, consectetur adipiscing elit." - Client 1',
    '"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." - Client 2',
    '"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." - Client 3',
    '"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." - Client 4',
    '"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." - Client 5',
    '"Lorem ipsum dolor sit amet, consectetur adipiscing elit." - Client 6',
    '"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." - Client 7',
    '"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." - Client 8',
    '"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." - Client 9',
    '"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." - Client 10'
];

var currentTestimonialIndex = 1;

var changeTestimonial = function () {
  var len = testimonialTexts.length;

  var prevTestimonialIndex = (currentTestimonialIndex - 1 + len) % len;
  var nextTestimonialIndex = (currentTestimonialIndex + 1) % len;

  document.getElementById('testimonial-text-prev').textContent = testimonialTexts[prevTestimonialIndex];
  document.getElementById('testimonial-text').textContent = testimonialTexts[currentTestimonialIndex];
  document.getElementById('testimonial-text-next').textContent = testimonialTexts[nextTestimonialIndex];
};

var prevTestimonialButton = document.getElementById('prev-testimonial-button');
var nextTestimonialButton = document.getElementById('next-testimonial-button');

prevTestimonialButton.addEventListener('click', function () {
  currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonialTexts.length) % testimonialTexts.length;
  changeTestimonial();
});

nextTestimonialButton.addEventListener('click', function () {
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialTexts.length;
  changeTestimonial();
});

// Initial testimonial display
changeTestimonial();