const scheduleList = [];

document.getElementById("scheduleForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const device = document.getElementById("device").value;
  const action = document.getElementById("action").value;
  const time = document.getElementById("time").value;
  const repeat = document.getElementById("repeat").value;

  const newSchedule = {
    device,
    action,
    time,
    repeat,
  };

  scheduleList.push(newSchedule);
  renderSchedules();
  this.reset(); // clear form
});

function cancelSchedule() {
  document.getElementById("scheduleForm").reset();
}

function renderSchedules() {
  const listDiv = document.getElementById("scheduleList");
  listDiv.innerHTML = "<h3>Upcoming Schedules</h3>";

  scheduleList.forEach((s, index) => {
    listDiv.innerHTML += `
      <div>
        <strong>${s.device}</strong> - ${s.action} at ${s.time} (${s.repeat})
        <button onclick="deleteSchedule(${index})">Delete</button>
      </div>
    `;
  });
}

function deleteSchedule(index) {
  scheduleList.splice(index, 1);
  renderSchedules();
}

// Legacy DOM markup calls these handlers from inline attributes.
window.cancelSchedule = cancelSchedule;
window.deleteSchedule = deleteSchedule;
