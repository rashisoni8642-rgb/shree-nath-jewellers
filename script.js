/* ==========================================
   MOBILE MENU
========================================== */

function toggleMenu() {

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("active");

}


/* ==========================================
   SEARCH
========================================== */

function openSearch() {

    const modal =
        document.getElementById("searchModal");

    modal.classList.add("active");

    setTimeout(() => {

        document
            .getElementById("searchInput")
            .focus();

    }, 100);

}


function closeSearch() {

    document
        .getElementById("searchModal")
        .classList.remove("active");

}


function performSearch() {

    const value =
        document
            .getElementById("searchInput")
            .value
            .trim();

    if (value === "") {

        alert("Please enter a jewellery name.");

        return;

    }

    alert(
        "Searching for: " + value
    );

}


/* ==========================================
   WISHLIST
========================================== */

function toggleWishlist(button) {

    if (button.innerHTML === "♡") {

        button.innerHTML = "♥";

        button.style.color = "#e6c873";

    } else {

        button.innerHTML = "♡";

        button.style.color = "#e6c873";

    }

}


/* ==========================================
   WHATSAPP
========================================== */

function openWhatsApp() {

    /*
       Replace this number with
       your actual WhatsApp number.

       Format:
       91 + 10 digit number

       Example:
       919876543210
    */

    const phoneNumber = "919999999999";

    const message =
        "Hello Shree Nath Jewellers! I would like to know more about your jewellery collection.";

    const url =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(url, "_blank");

}


/* ==========================================
   ESCAPE SEARCH
========================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeSearch();

        }

    }
);


/* ==========================================
   CLOSE SEARCH OUTSIDE BOX
========================================== */

document
    .getElementById("searchModal")
    .addEventListener(
        "click",
        function(event) {

            if (event.target === this) {

                closeSearch();

            }

        }
    );


/* ==========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================== */

document
    .querySelectorAll("#navMenu a")
    .forEach(function(link) {

        link.addEventListener(
            "click",
            function() {

                document
                    .getElementById("navMenu")
                    .classList.remove("active");

            }
        );

    });