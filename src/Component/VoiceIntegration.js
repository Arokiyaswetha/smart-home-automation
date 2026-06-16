function connectAssistant(assistant) {
  switch (assistant) {
    case 'alexa':
      console.log("Connecting to Amazon Alexa...");
      alert("Amazon Alexa connected successfully!");
      break;
    case 'google':
      console.log("Connecting to Google Assistant...");
      alert("Google Assistant connected successfully!");
      break;
    case 'siri':
      console.log("Connecting to Apple Siri...");
      alert("Apple Siri connected successfully!");
      break;
    default:
      console.error("Unknown assistant selected.");
  }
}

function learnMore(assistant) {
  switch (assistant) {
    case 'alexa':
      window.open('https://www.amazon.com/alexa-smart-home/', '_blank');
      break;
    case 'google':
      window.open('https://assistant.google.com/', '_blank');
      break;
    case 'siri':
      window.open('https://support.apple.com/en-us/HT204389', '_blank');
      break;
    default:
      console.error("Unknown assistant for Learn More.");
  }
}

// Legacy DOM pages call these handlers from inline attributes.
window.connectAssistant = connectAssistant;
window.learnMore = learnMore;
