function copyLink() {
    const adresStrony = window.location.href;
    const copyIcon = document.querySelector(".icon-copy");

    navigator.clipboard.writeText(adresStrony)
        .then(function() {
            console.log('Adres strony został skopiowany do schowka: ' + adresStrony);

            if (copyIcon) {
                copyIcon.setAttribute("title", "Skopiowano");
                copyIcon.classList.replace("icon-copy", "icon-check");
            }

            setTimeout(() => {
                if (copyIcon) {
                    copyIcon.setAttribute("title", "Kopiuj link");
                    copyIcon.classList.replace("icon-check", "icon-copy");
                }
            }, 1500);
        })
        .catch(function(error) {
            console.error('Błąd podczas kopiowania adresu strony: ', error);
        });
}
