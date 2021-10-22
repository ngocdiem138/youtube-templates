
// toggle menu when menubar onclick
const toggleMenuBar = function (isDisplay) {
    const menuBar = $('#menu-bar');
    const menuBehavior = $('#menu-behavior');

    menuBar.onclick = () => {
        if (!isDisplay) {
            menuBehavior.style.display = 'block';
        } else {
            menuBehavior.style.display = 'none';
        }
        isDisplay = !isDisplay;
    }
};

// toggle profile when avatar onlick
const toggleProfile = function (isDisplay) {
    const avatar = $('#avatar');
    const profile = $('#profile');

    avatar.onclick = () => {
        if (!isDisplay) {
            profile.style.display = 'block';
        } else {
            profile.style.display = 'none';
        }
        isDisplay = !isDisplay;
    }
};

const disableItems = function() {
    const container = $('#container');
    const menuBehavior = $('#menu-behavior');
    const profile = $('#profile');
    if (menuBehavior.style.display === 'block') {
        menuBehavior.style.display = 'none';
        toggleMenuBar(false);
    }
    if (profile.style.display === 'block') {
        profile.style.display = 'none';
        toggleProfile(false);
    }
};

// hide menu bar and more if container onlick
const hideItem = function () {
    const container = $('#container');
    container.onclick = () => {
        disableItems();
    }
    window.onscroll = () => {
        disableItems();
    }
}

toggleMenuBar(false);
toggleProfile(false);
hideItem();