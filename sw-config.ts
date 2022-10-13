const btnAdd = document.querySelector('#btn-add') as HTMLElement;
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  console.log('before install');

  btnAdd.style.display = 'block';
});

btnAdd.addEventListener('click', (e) => {
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('Yah!!! we rock');
    }
    deferredPrompt = null;
  });
});

window.addEventListener('appinstalled', (e) => {
  //   app.logEvent('a2hs', 'installed');
  console.log('This app has already been installed');
});
