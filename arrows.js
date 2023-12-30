(function() {
    var rotator = document.getElementById('rotator');
    var imageDir = 'assets/images/';
    var currentIndex = 0;

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
