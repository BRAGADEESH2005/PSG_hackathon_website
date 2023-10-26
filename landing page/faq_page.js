const toggleIcons = document.querySelectorAll('[data-bs-toggle="collapse"]');
toggleIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        // Icon Change
        const selectedImage = this.querySelector('i');
        if (selectedImage.classList.contains("bi-plus-circle-fill")) {
            selectedImage.classList.remove("bi-plus-circle-fill");
            selectedImage.classList.add("bi-dash-circle-fill");
        }
        else {
            selectedImage.classList.remove("bi-dash-circle-fill");
            selectedImage.classList.add("bi-plus-circle-fill");
        }
    });
})