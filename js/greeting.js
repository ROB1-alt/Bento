// Get the hour
const Today = new Date();
const hour = Today.getHours();

// Here you can change your name
const name = ' Rob1 ';

// Here you can change your greetings
const gree1 = 'Va te coucher,  ';
const gree2 = 'Bonne matinée,  ';
const gree3 = 'Bonne après-midi,  ';
const gree4 = 'Bonne soirée, ';
const gree5 = 'Bonne nuit, ';
const gree6 = 'Bonne nuit,  ';

// Define the hours of the greetings
if (hour >= 23 && hour < 5) {
  document.getElementById('greetings').innerText = gree1 + name;
} else if (hour >= 6 && hour < 12) {
  document.getElementById('greetings').innerText = gree2 + name;
} else if (hour >= 12 && hour < 17) {
  document.getElementById('greetings').innerText = gree3 + name;
} else {
  document.getElementById('greetings').innerText = gree4 + name;
}
