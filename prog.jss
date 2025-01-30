function uploadFiles() {
  const fileInput = document.getElementById('fileInput');
  const files = fileInput.files;
  if (files.length === 0) {
    alert("Please select at least one file.");
    return;
  }

  const preview = document.getElementById('preview');
  preview.innerHTML = ""; // Clear previous previews

  Array.from(files).forEach((file, index) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = document.createElement('img');
      img.src = e.target.result;
      preview.appendChild(img);
    };
    reader.readAsDataURL(file);

    // Upload file to Google Drive
    const formData = new FormData();
    formData.append('file', file);
    const xhr = new XMLHttpRequest();
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        document.getElementById('progressBar').style.width = percentComplete + '%';
      }
    };
    xhr.open('POST', webAppUrl, true);
    xhr.send(formData);
  });
}
