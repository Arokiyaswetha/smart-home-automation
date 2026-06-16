function connectPlatform(platform) {
  switch (platform) {
    case 'googleHome':
      console.log("Connecting to Google Home...");
      alert("Connected to Google Home successfully!");
      break;
    case 'homekit':
      console.log("Connecting to Apple HomeKit...");
      alert("Connected to Apple HomeKit successfully!");
      break;
    case 'energyProvider':
      console.log("Connecting to Energy Provider...");
      alert("Connected to Energy Provider successfully!");
      break;
    default:
      console.error("Unknown platform selected.");
  }
}

function viewApiDocs() {
  console.log("Opening API documentation...");
  window.open("https://example.com/api-docs", "_blank");
}

function generateApiKey() {
  const apiKey = "KEY-" + Math.random().toString(36).substr(2, 12).toUpperCase();
  console.log("Generated API Key:", apiKey);
  alert("Generated API Key:\n" + apiKey);
}

function viewEnergyApiInfo() {
  console.log("Viewing energy provider API info...");
  window.open("https://example.com/energy-api-info", "_blank");
}

// Legacy DOM pages call these handlers from inline attributes.
window.connectPlatform = connectPlatform;
window.viewApiDocs = viewApiDocs;
window.generateApiKey = generateApiKey;
window.viewEnergyApiInfo = viewEnergyApiInfo;
