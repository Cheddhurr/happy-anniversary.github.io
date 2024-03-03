function showImage(number) {
    var imageSrc;
    switch(number) {
      case '1':
        imageSrc = 'sick/1.png'; // Path to your image file
        break;
      case '2':
        imageSrc = 'sick/2.png'; // Path to your image file
        break;
      case '3':
        imageSrc = 'sick/3.png'; // Path to your image file
        break;
      default:
        imageSrc = '';
    }

    document.getElementById('popupImage').src = imageSrc;
    document.getElementById('imagePopup').style.display = 'block';
  }

  function closeImagePopup() {
    document.getElementById('imagePopup').style.display = 'none';
  }