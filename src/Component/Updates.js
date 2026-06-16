// JavaScript to handle 'Updates' tab view and render update notifications

const updatesTab = document.querySelector('[data-type="updates"]');
const notificationList = document.getElementById('notificationList');

// Example update notifications
const updateNotifications = [
  {
    title: 'System Firmware Updated',
    desc: 'Version 2.14 installed successfully.',
    icon: '✅'
  },
  {
    title: 'New Device Added',
    desc: 'Smart Lock connected in Main Entrance.',
    icon: '🔐'
  },
  {
    title: 'User Access Changed',
    desc: 'Guest access updated for Jane Doe.',
    icon: '👤'
  }
];

// Function to render update notifications
function renderUpdates() {
  notificationList.innerHTML = ''; // Clear existing notifications

  updateNotifications.forEach(n => {
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

// Initialize Updates view
if (updatesTab) {
  updatesTab.classList.add('active');
  renderUpdates();
}
