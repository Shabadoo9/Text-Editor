const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();

    butInstall.addEventListener('click', () => {
        event.prompt();
        butInstall.setAttribute('disabled', true);
        butInstall.textContent = 'Installed!';
    });
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    // Show the install prompt
    promptEvent.prompt();

    // Reset the deferred prompt variable, it can only be used once
    window.deferredPrompt = null;
});

window.addEventListener('appinstalled', (evt) => {
    console.log('The app was installed successfully!');
});
