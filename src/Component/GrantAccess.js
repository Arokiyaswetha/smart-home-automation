function grantAccess() {
  const features = document.querySelectorAll('.feature-toggle');
  const accessPermissions = {};

  features.forEach((toggle) => {
    const featureName = toggle.getAttribute('data-feature');
    accessPermissions[featureName] = toggle.checked;
  });

  console.log("Access Permissions Granted:", accessPermissions);

  alert("Guest access permissions updated successfully!");
}

// Legacy DOM pages call this handler from inline attributes.
window.grantAccess = grantAccess;
