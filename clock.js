function updateClock() {
  const clockElement = document.getElementById('clock');
  const dateElement = document.getElementById('date');

  const now = new Date();
  
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add leading zeros if necessary
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // Get the current date
  const day = now.getDate();
  const month = now.toLocaleString('default', { month: 'long' });
  const year = now.getFullYear();

  // Update clock and date display
  clockElement.textContent = `${hours}:${minutes}:${seconds}`;
  dateElement.textContent = `${month} ${day}, ${year}`;

  // Add glowing effect to clock
  clockElement.style.animation = 'glow 1.5s infinite';
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();
