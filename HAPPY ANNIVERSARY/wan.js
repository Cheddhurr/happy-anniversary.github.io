function showImage(number) {
    var imageSrc;
    switch(number) {
      case '1':
        imageSrc = 'miss/1.png'; // Path to your image file
        break;
      case '2':
        imageSrc = 'miss/2.png'; // Path to your image file
        break;
      case '3':
        imageSrc = 'miss/3.png'; // Path to your image file
        break;
      case '4':
        imageSrc = 'miss/4.png'; // Path to your image file
        break;
      case '5':
        imageSrc = 'miss/5.png'; // Path to your image file
        break;
      case '6':
        imageSrc = 'miss/6.png'; // Path to your image file
        break;
      case '7':
        imageSrc = 'miss/7.png'; // Path to your image file
        break;
      case '8':
        imageSrc = 'miss/8.png'; // Path to your image file
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