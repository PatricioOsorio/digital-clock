setInterval(() => {
    const $hour = document.getElementById("hour");
    const $minute = document.getElementById("minute");
    const $second = document.getElementById("second");
    const now = new Date();

    $hour.textContent = now.getHours();
    $minute.textContent = now.getMinutes();
    $second.textContent = now.getSeconds();
}, 1000);

