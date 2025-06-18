$(document).ready(function () {
    $('.flag').click(function () {
        const lang = $(this).data('lang');
        alert(`Language switched to: ${lang.toUpperCase()}`);
    });
});

$(document).ready(function () {
    const translations = {
        en: {
            home: "Home",
            about: "About Us",
            team: "Our Team",
            mission: "Mission & Vision",
            "main-content": "Welcome to Our Website. Explore our features and portals.",
            footer: "Follow us on social media."
        },
        fr: {
            home: "Accueil",
            about: "À Propos",
            team: "Notre Équipe",
            mission: "Mission et Vision",
            "main-content": "Bienvenue sur notre site Web. Découvrez nos fonctionnalités et portails.",
            footer: "Suivez-nous sur les réseaux sociaux."
        },
        es: {
            home: "Inicio",
            about: "Sobre Nosotros",
            team: "Nuestro Equipo",
            mission: "Misión y Visión",
            "main-content": "Bienvenido a nuestro sitio web. Explora nuestras funciones y portales.",
            footer: "Síguenos en las redes sociales."
        }
    };

    function updateLanguage(lang) {
        $("[data-lang-key]").each(function () {
            const key = $(this).data("lang-key");
            if (translations[lang][key]) {
                $(this).text(translations[lang][key]);
            }
        });
    }

    $(".language-option").click(function (e) {
        e.preventDefault();
        const selectedLang = $(this).data("lang");
        const selectedFlag = $(this).find(".flag-icon").attr("src");
        const selectedText = $(this).text().trim();

        $("#selected-flag").attr("src", selectedFlag);
        $("#languageDropdown").html(`<img src="${selectedFlag}" class="flag-icon"> ${selectedText}`);

        updateLanguage(selectedLang);
    });

    // Set default language
    updateLanguage("en");
});
