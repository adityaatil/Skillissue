if (!navigator.bluetooth) {
  alert('Web Bluetooth API is not supported in this browser.');
}

let bluetoothDevice;

document.getElementById('forward').addEventListener('click', () => sendCommand('F'));
document.getElementById('backward').addEventListener('click', () => sendCommand('B'));
document.getElementById('left').addEventListener('click', () => sendCommand('L'));
document.getElementById('right').addEventListener('click', () => sendCommand('R'));
document.getElementById('stop').addEventListener('click', () => sendCommand('S'));

document.getElementById('speed').addEventListener('input', (e) => {
  sendCommand(`V${e.target.value}`);
});

async function connectBluetooth() {
  try {
    bluetoothDevice = await navigator.bluetooth.requestDevice({
      acceptAllDevices: true,
      optionalServices: ['battery_service'] // Replace with your RC car's service UUID
    });
    const server = await bluetoothDevice.gatt.connect();
    const service = await server.getPrimaryService('battery_service'); // Replace with your RC car's service UUID
    const characteristic = await service.getCharacteristic('battery_level'); // Replace with your RC car's characteristic UUID
    console.log('Connected to Bluetooth device');
  } catch (error) {
    console.error('Bluetooth connection failed:', error);
  }
}

function sendCommand(command) {
  if (bluetoothDevice && bluetoothDevice.gatt.connected) {
    console.log(`Sending command: ${command}`);
    // Implement sending logic here
  } else {
    console.error('Bluetooth device not connected');
  }
}

connectBluetooth();
