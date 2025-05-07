setTimeout(() => {
  const quitarButtons = Array.from(document.querySelectorAll('button, a')).filter(el => 
    el.textContent.trim().toLowerCase() === 'quitar' ||
    el.innerText.trim().toLowerCase() === 'quitar'
  );

  console.log(`Encontrados ${quitarButtons.length} botones con texto "Quitar".`);

  let i = 0;
  const interval = setInterval(() => {
    if (i >= quitarButtons.length) {
      clearInterval(interval);
      console.log("Proceso completado.");
      return;
    }
    try {
      quitarButtons[i].click();
      console.log(`Clic en botón ${i + 1}`);
    } catch (e) {
      console.warn(`Error al hacer clic en el botón ${i + 1}`, e);
    }
    i++;
  }, 1000);
}, 3000);
