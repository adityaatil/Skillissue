// script.js
let bluetoothDevice;

document.getElementById('connect').addEventListener('click', async () => {
  try {
    bluetoothDevice = await navigator.bluetooth.requestDevice({
      acceptAllDevices: true,
      optionalServices: ['battery_service'] // Replace with your RC car's service UUID
    });

    const server = await bluetoothDevice.gatt.connect();
    console.log('Connected to device:', bluetoothDevice.name);

    // Add logic to send commands to the RC car
  } catch (error) {
    console.error('Error connecting to device:', error);
  }
});

// Function to send commands to the RC car
function sendCommand(command) {
  if (bluetoothDevice && bluetoothDevice.gatt.connected) {
    // Replace with your logic to send commands via Bluetooth
    console.log('Sending command:', command);
  } else {
    console.error('Device not connected');
  }
}

// Add event listeners for control buttons
document.getElementById('forward').addEventListener('click', () => sendCommand('forward'));
document.getElementById('backward').addEventListener('click', () => sendCommand('backward'));
document.getElementById('left').addEventListener('click', () => sendCommand('left'));
document.getElementById('right').addEventListener('click', () => sendCommand('right'));
document.getElementById('stop').addEventListener('click', () => sendCommand('stop'));