document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.cardContentBarButton');
    const overlayTablet = document.querySelector('.cardContentBarButtonOverlay');
    const overlayMobile = document.querySelector('.cardContentOverlay');
    const overlayMobileTriangle = document.querySelector('.cardContentBarButtonOverlayTriangle');
    const overlayIcons = document.querySelectorAll('.overlayIcon');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            overlayTablet.classList.toggle('active');
            overlayMobile.classList.toggle('active');
            overlayMobileTriangle.classList.toggle('active');
        })
    });

    document.addEventListener('click', (event) => {
        if (!event.target.classList.contains('cardContentBarButton')
            && !event.target.classList.contains('buttonIcon')
            && !event.target.classList.contains('overlayIcon')) {
            overlayTablet.classList.remove('active');
            overlayMobile.classList.remove('active');
            overlayMobileTriangle.classList.remove('active');
        }
    })

    overlayIcons.forEach(icon => {
        const altText = icon.getAttribute('alt');
        switch (altText) {
            case 'facebook':
                icon.addEventListener('click', () => {
                   window.open('https://facebook.com');
                });
                break;
            case 'twitter':
                icon.addEventListener('click', () => {
                    window.open('https://x.com');
                });
                break;
            case 'pinterest':
                icon.addEventListener('click', () => {
                    window.open('https://pinterest.com');
                });
                break;
        }
    });
});
