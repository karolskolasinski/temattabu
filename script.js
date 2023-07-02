function copyLink() {
    const adresStrony = window.location.href;

    navigator.clipboard.writeText(adresStrony)
        .then(function() {
            console.log('Adres strony został skopiowany do schowka: ' + adresStrony);

            const copyIcon = document.querySelector(".icon-copy");
            if (copyIcon) {
                copyIcon.attributes.title.value = "skopiowano"
                copyIcon.classList.remove("icon-copy");
                copyIcon.classList.add("icon-check");
            }

            setTimeout(() => {
                copyIcon.attributes.title.value = "kopiuj link";
                copyIcon.classList.remove("icon-check");
                copyIcon.classList.add("icon-copy");
            }, 1500)

        })
        .catch(function(error) {
            console.error('Błąd podczas kopiowania adresu strony: ', error);
        });
}
