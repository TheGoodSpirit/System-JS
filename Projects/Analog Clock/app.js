// Get the hour, minute, and second elements
const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");

function updateClock() {
  // Get current time
  const now = new Date();
  const hours = now.getHours(); // Convert to 12-hour format
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const milliseconds = now.getMilliseconds();

  // Calculate rotation angles for hour, minute, and second hands
  const hourAngle = ((hours + minutes / 60) / 12) * 360; // 30 degrees per hour, 0.5 degrees per minute
  const minuteAngle = ((minutes + seconds / 60) / 60) * 360; // 6 degrees per minute, 0.1 degrees per second
  const secondAngle = (seconds / 60) * 360 + (milliseconds / 1000) * 6; // 6 degrees per second

  // Apply rotation to hands
  hourHand.style.transform = `rotate(${hourAngle}deg)`;
  minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
  secondHand.style.transform = `rotate(${secondAngle}deg)`;

}

// Update clock every second
setInterval(updateClock, 1);
                                                                                                                                                               