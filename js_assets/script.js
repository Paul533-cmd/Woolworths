/*ENQUIRY FORM PROCESSING*/

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function(event){

    event.preventDefault();

    const fullName =
        document.getElementById("fullName").value;

    const productPrice =
        Number(document.getElementById("product").value);

    const quantity =
        Number(document.getElementById("quantity").value);

    const totalCost =
        productPrice * quantity;

    document.getElementById("responseMessage").innerHTML =
        "<p>Processing enquiry...</p>";

    setTimeout(function(){

        document.getElementById("responseMessage").innerHTML = `
            <h3>Enquiry Submitted Successfully</h3>

            <p>
                Thank you, ${fullName}.
            </p>

            <p>
                The selected product is available.
            </p>

            <p>
                Estimated Cost:
                <strong>R${totalCost.toFixed(2)}</strong>
            </p>

            <p>
                A Woolworths consultant will contact you shortly.
            </p>
        `;

    }, 1500);

});

}

/*CONTACT FORM*/

const contactForm = document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit", function(event){

        event.preventDefault();

        const name =
            document.getElementById("contactName").value;

        const email =
            document.getElementById("contactEmail").value;

        const type =
            document.getElementById("messageType").value;

        const message =
            document.getElementById("message").value;

        const mailLink =
            `mailto:custserv@woolworths.co.za?subject=${encodeURIComponent(type)}&body=${encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message
        )}`;

        window.location.href = mailLink;

        document.getElementById("contactResponse").innerHTML = `
            <h3>Message Prepared Successfully</h3>

            <p>
             Your email application should now open with your message ready to send.
            </p>
        `;
    });

}

/*PRODUCT SEARCH*/

const searchInput =
document.getElementById("productSearch");

if(searchInput){

    searchInput.addEventListener("keyup", function(){

        const searchValue =
        searchInput.value.toLowerCase();

        const products =
        document.querySelectorAll(".product-card");

        products.forEach(product => {

            const text =
            product.textContent.toLowerCase();

            if(text.includes(searchValue)){

                product.style.display = "block";

            }

            else{

                product.style.display = "none";

            }

        });

    });

}

/*ADD TO CART*/

const buttons =
document.querySelectorAll(".cart-btn");

buttons.forEach(button => {

    button.addEventListener("click", function(){

        alert("Product added to cart.");

    });

});

/*LIGHTBOX GALLERY*/

const galleryImages =
document.querySelectorAll(".gallery-image");

const lightbox =
document.getElementById("lightbox");

const lightboxImage =
document.getElementById("lightboxImage");

const closeLightbox =
document.getElementById("closeLightbox");

galleryImages.forEach(image => {

    image.addEventListener("click", function(){

        lightbox.style.display = "flex";

        lightboxImage.src = this.src;

        lightboxImage.alt = this.alt;

    });

});

if(closeLightbox){

    closeLightbox.addEventListener("click", function(){

        lightbox.style.display = "none";

    });

}

if(lightbox){

    lightbox.addEventListener("click", function(event){

        if(event.target === lightbox){

            lightbox.style.display = "none";

        }

    });

}

/*LEAFLET MAP*/

const mapContainer =
document.getElementById("map");

if(mapContainer){

    const map =
    L.map("map").setView(
        [-29.0, 24.0],
        5
    );

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution:
            "&copy; OpenStreetMap contributors"
        }
    ).addTo(map);

    L.marker([-25.7458, 28.1906])
        .addTo(map)
        .bindPopup(
            "<b>Woolworths Pretoria</b><br>Sammy Marks Square"
        );

    L.marker([-33.9741, 18.3638])
        .addTo(map)
        .bindPopup(
            "<b>Woolworths Cape Town</b><br>3 Arts Village"
        );

}