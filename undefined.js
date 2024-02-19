undefined
function upDate(previewPic) {
  console.log('Event triggered');
  console.log(previewPic);
  
  // Change the text of the element with the id of 'image'
  document.getElementById('image').textContent = `Image: ${previewPic.alt}`;
  
  // Change the background image of the element with the id of 'image'
  document.getElementById('image').style.backgroundImage = `url(${previewPic.src})`;
}
function undo() {
    // Reset the background image of the div with the id of 'image' back to the original value
    document.getElementById('image').style.backgroundImage = '';
    
    // Reset the text of the div with the id of 'image' back to the original text
    document.getElementById('image').textContent = 'Hover over an image below to display here.';
  }
  