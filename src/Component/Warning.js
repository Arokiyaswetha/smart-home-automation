// JavaScript to handle tab switching and rendering warnings only

const warningTab = document.querySelector('[data-type="warnings"]');
const notificationList = document.getElementById('notificationList');

// Example warning notifications
const warningNotifications = [
  {
    title: 'Unauthorized Access Attempt',
    desc: 'Guest access denied at 10:42 AM.',
    icon: '🔐'
  },
  {
    title: 'Device Offline',
    desc: 'Living Room Camera disconnected.',
    icon: '📴'
  }
];

// Function to render warning notifications
function renderWarnings() {
  notificationList.innerHTML = ''; // Clear existing notifications

  warningNotifications.forEach(n => {
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

// Initialize with warnings view
if (warningTab) {
  warningTab.classList.add('active');
  renderWarnings();
}
