function showImage(number) {
    var imageSrc;
    switch(number) {
      case '1':
        imageSrc = 'letter.png'; // Path to your image file
        break;
    }
        document.getElementById('popupImage').src = imageSrc;
    document.getElementById('imagePopup').style.display = 'block';
  }

  function closeImagePopup() {
    document.getElementById('imagePopup').style.display = 'none';
  }