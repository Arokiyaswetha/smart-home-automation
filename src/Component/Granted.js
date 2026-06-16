function saveAccessCode() {
  const codeName = document.getElementById('codeName').value.trim();
  const validFrom = document.getElementById('validFrom').value;
  const validUntil = document.getElementById('validUntil').value;
  const permissions = document.getElementById('permissions').value;

  if (!codeName || !validFrom || !validUntil || !permissions) {
    alert('Please fill out all fields.');
    return;
  }

  const accessCodeData = {
    codeName,
    validFrom,
    validUntil,
    permissions
  };

  console.log("Access Code Saved:", accessCodeData);
  alert("Temporary access code created successfully!");
}
