const clockElement = document.getElementById("clock");
const uptimeElement = document.getElementById("uptime");

let startTime = Date.now();  // Capture the start time

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const currentTime = `${hours}:${minutes}:${seconds}`;
  clockElement.textContent = currentTime;

  const uptime = Math.floor((Date.now() - startTime) / 1000);  // Uptime in seconds
  const uptimeText = formatUptime(uptime);
  uptimeElement.textContent = `Uptime: ${uptimeText}`;

  requestAnimationFrame(updateClock);
}

function formatUptime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = hours > 0 ? `${hours} hours ` : "";
  const formattedMinutes = minutes > 0 ? `${minutes} minutes ` : "";
  const formattedSeconds = `${remainingSeconds} seconds`;

  return formattedHours + formattedMinutes + formattedSeconds;
}

updateClock();  // Call the updateClock function initially
