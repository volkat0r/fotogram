/* Modul 6 - Script for Project Fotogram */

// #region - VARIABLES
//// global Variables
const GALLERY_IMAGES = [
    './img/gallery/cow_01.jpg',
    './img/gallery/cow_02.jpg',
    './img/gallery/cow_03.jpg',
    './img/gallery/cow_04.jpg',
    './img/gallery/cow_05.jpg',
    './img/gallery/cow_06.jpg',
    './img/gallery/cow_07.jpg',
    './img/gallery/cow_08.jpg',
    './img/gallery/cow_09.jpg',
    './img/gallery/cow_10.jpg',
    './img/gallery/cow_11.jpg',
    './img/gallery/cow_12.jpg',
    './img/gallery/cow_13.jpg',
    './img/gallery/cow_14.jpg',
    './img/gallery/cow_15.jpg',
    './img/gallery/cow_16.jpg',
    './img/gallery/cow_17.jpg',
    './img/gallery/cow_18.jpg',
    './img/gallery/cow_19.jpg',
    './img/gallery/cow_20.jpg',
    './img/gallery/cow_21.jpg'
]
const IMAGE_DESCRIPTIONS = [
    'Description of cow 01',
    'Description of cow 02',
    'Description of cow 03',
    'Description of cow 04',
    'Description of cow 05',
    'Description of cow 06',
    'Description of cow 07',
    'Description of cow 08',
    'Description of cow 09',
    'Description of cow 10',
    'Description of cow 11',
    'Description of cow 12',
    'Description of cow 13',
    'Description of cow 14',
    'Description of cow 15',
    'Description of cow 16',
    'Description of cow 17',
    'Description of cow 18',
    'Description of cow 19',
    'Description of cow 20',
    'Description of cow 21'
]

const DIALOG_IMG = document.getElementById("dialogImg");
const GALLERY_ITEMS = GALLERY_IMAGES.length;
// #endregion

// #region - FUNCTIONS 
// render images into the website
function renderImages(){
    const containerGallery = document.getElementById("containerGallery");
    containerGallery.innerHTML = "";
    /* For-Loop to render arrays(galleryImages, imageDescriptions) within the template */
    for(let i = 0; i < GALLERY_IMAGES.length; i++){
        containerGallery.innerHTML += imgTemplate(i);
    }
}

// refresh Dialog Content
function refreshDialog(counterIndex){
    currentIndex = counterIndex;
    const singleImg = document.getElementById("singleImage");
    const textIndexCounter = document.getElementById("indexOfText");
    singleImg.innerHTML = "";
    singleImg.innerHTML = imgDialogTemplate(counterIndex);
    textIndexCounter.innerHTML = textCounterIndex(counterIndex);
}

// open Dialog
function openDialog(counterIndex){
    refreshDialog(counterIndex);
    if (!DIALOG_IMG.open) {
        DIALOG_IMG.showModal(); // öffnet modal
    }
}

// close Dialog
function closeDialog(){
    // event.stopPropagation();
    DIALOG_IMG.close();
}

// closing dialog by clicking outside of dialog
DIALOG_IMG.addEventListener('click', (outsideClick) => {
    const dialogForm = document.getElementById("dialogForm");
    if(!dialogForm.contains(outsideClick.target)){
        closeDialog();
    }
});

// next Button in Dialog
function nextImg(){
    if(currentIndex < GALLERY_ITEMS -1){
        currentIndex++;
        refreshDialog(currentIndex);
    } else if(currentIndex == GALLERY_ITEMS -1){
        currentIndex = 0;
        refreshDialog(currentIndex);
    }
}

// previous Button in Dialog
function prevImg(){
    if(currentIndex >= 1){
        currentIndex--;
        refreshDialog(currentIndex);
    } else if(currentIndex <= 1){
        currentIndex = GALLERY_ITEMS -1;
        refreshDialog(currentIndex);
    }
}

// Shows the Image-Counter within the dialog
function textCounterIndex(counterIndex){
    const currentImage = counterIndex;
    return `<p>Image ${currentImage +1} of ${GALLERY_ITEMS}</p>`;
} 
// #endregion

// #region - TEMPLATES
// Template for single image in gallery
function imgTemplate(galArr){
    return `<figure class="hoverEffect" onclick="openDialog(${galArr})"><img class="galleryImage" src="${GALLERY_IMAGES[galArr]}" alt="${IMAGE_DESCRIPTIONS[galArr]}"/></figure>`;
}
// Template for single image in dialog
function imgDialogTemplate(galArr){
    return `<figure class="hoverEffect"><img class="galleryImage" src="${GALLERY_IMAGES[galArr]}" alt="${IMAGE_DESCRIPTIONS[galArr]}"/><figcaption>${IMAGE_DESCRIPTIONS[galArr]}</figcaption></figure>`;
}
// #endregion