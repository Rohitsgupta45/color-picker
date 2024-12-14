const colorInput = document.getElementById('color');
const colorCode = document.getElementById('colorCode');
const previewBox = document.getElementById('previewBox');

colorInput.addEventListener('input', () => {
  const selectedColor = colorInput.value;
  colorCode.textContent = selectedColor;
  previewBox.style.backgroundColor = selectedColor;
});
