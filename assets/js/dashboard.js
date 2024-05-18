document.addEventListener('DOMContentLoaded', function() {
    const radios = document.querySelectorAll('input[name="accountType"]');
    const linkItems = document.querySelectorAll('.link-item');
    
    radios.forEach(radio => {
        radio.addEventListener('change', function() {
            const selectedType = this.value;
            linkItems.forEach(linkItem => {
                if (linkItem.classList.contains(selectedType)) {
                    linkItem.style.display = 'list-item';
                } else {
                    linkItem.style.display = 'none';
                }
            });
        });
    });
});
