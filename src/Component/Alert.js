// JavaScript to handle 'Alerts' tab view and render alert notifications

const alertTab = document.querySelector('[data-type="alert"]');
const notificationList = document.getElementById('notificationList');

// Example alert notifications
const alertNotifications = [
  {
    title: 'Fire Detected',
    desc: 'Smoke sensor triggered in kitchen.',
    icon: '🔥'
  },
  {
    title: 'Water Leak',
    desc: 'Leak sensor activated in Basement.',
    icon: '💧'
  },
  {
    title: 'Glass Break',
    desc: 'Living Room window sensor triggered.',
    icon: '🪟'
  }
];

// Function to render alert notifications
function renderAlerts() {
  notificationList.innerHTML = ''; // Clear existing notifications

  alertNotifications.forEach(n => {
    const item = document.createElement('div');
    item.className = 'notification-item';
    item.innerHTML = `
      <div class="icon">${n.icon}</div>
      <div>
        <strong>${n.title}</strong>
        <p>${n.desc}</p>
      </div>
    `;
    notificationList.appendChild(item);
  });
}

// Initialize Alerts view
if (alertTab) {
  alertTab.classList.add('active');
  renderAlerts();
}
