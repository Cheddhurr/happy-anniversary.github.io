function showImage(number) {
    var imageSrc;
    switch(number) {
      case '1':
        imageSrc = 'insecure/1.png'; // Path to your image file
        break;
      case '2':
        imageSrc = 'insecure/2.png'; // Path to your image file
        break;
      case '3':
        imageSrc = 'insecure/3.png'; // Path to your image file
        break;
      case '4':
        imageSrc = 'insecure/4.png'; // Path to your image file
        break;
      case '5':
        imageSrc = 'insecure/5.png'; // Path to your image file
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