// Sample data
const routines = [
  {
    name: "Morning Lights",
    description: "Turns on hallway and kitchen lights at 7:00 AM on weekdays.",
    status: "Active"
  },
  {
    name: "Night Lockdown",
    description: "Locks all doors and arms security at 11:00 PM daily.",
    status: "Active"
  },
  {
    name: "Eco Mode",
    description: "Sets thermostat to 18°C when house is empty.",
    status: "Active"
  }
];

const schedules = [
  { name: "Water Plants", time: "Every Sat 8:00 AM", device: "Sprinkler", status: "Active" },
  { name: "Garden Open", time: "Mon-Fri 6:30 AM", device: "Garage Door", status: "Paused" },
  { name: "Evening Lights", time: "Daily 6:00 PM", device: "Living Room", status: "Active" }
];

// Render routines
function renderRoutines(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  routines.forEach((routine, index) => {
    const card = document.createElement('div');
    card.className = 'routine';
    card.innerHTML = `
      <h4>${routine.name}</h4>
      <p>${routine.description}</p>
      <button onclick="editRoutine(${index})">Edit</button>
      <button onclick="disableRoutine(${index})">Disable</button>
    `;
    container.appendChild(card);
  });
}

// Render schedules
function renderSchedules(containerId) {
  const tableBody = document.getElementById(containerId);
  tableBody.innerHTML = '';
  schedules.forEach(schedule => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${schedule.name}</td>
      <td>${schedule.time}</td>
      <td>${schedule.device}</td>
      <td>${schedule.status}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Dummy handlers
function editRoutine(index) {
  alert(`Editing routine: ${routines[index].name}`);
}

function disableRoutine(index) {
  routines[index].status = "Disabled";
  alert(`Disabled: ${routines[index].name}`);
  renderRoutines("routine-list");
}

// Call these functions after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  renderRoutines("routine-list");
  renderSchedules("schedule-list");
});
