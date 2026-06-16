function saveMemberAccess() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const roleInput = document.getElementById('role');

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const role = roleInput.value.trim();

  if (!name || !email || !role) {
    alert('Please fill out all fields.');
    return;
  }

  const memberData = {
    name: name,
    email: email,
    role: role
  };

  // Simulate saving the member data
  console.log('Member access saved:', memberData);

  // Optionally reset the form
  nameInput.value = '';
  emailInput.value = '';
  roleInput.value = '';

  alert(`Access granted to ${name} with role ${role}`);
}
function saveMemberAccess() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const roleInput = document.getElementById('role');

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const role = roleInput.value.trim();

  if (!name || !email || !role) {
    alert('Please fill out all fields.');
    return;
  }

  const memberData = {
    name: name,
    email: email,
    role: role
  };

  // Simulate saving the member data
  console.log('Member access saved:', memberData);

  // Optionally reset the form
  nameInput.value = '';
  emailInput.value = '';
  roleInput.value = '';

  alert(`Access granted to ${name} with role ${role}`);
}
