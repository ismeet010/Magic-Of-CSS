img = document.querySelector('img');
arr = ['https://i.pinimg.com/originals/d6/64/a4/d664a4e1a33c09e90e73ce32d49c6ac0.jpg', 'https://www.pixelstalk.net/wp-content/uploads/2016/07/Cute-Baby-Animal-Photos-768x432.jpg', 'https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Download-Cute-Baby-Animal-Image-768x576.jpg', 'https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Download-Cute-Baby-Animal-Picture-768x432.jpg', 'https://www.pixelstalk.net/wp-content/uploads/2016/07/Cute-Baby-Animal-Photo-768x480.jpg']
btnnext = document.querySelector('#next');
btnadd = document.querySelector('#add');

var i = 0
img.setAttribute('src', arr[i]);

btnnext.addEventListener('click', () => {
    img.setAttribute('src', arr[(i + 1) % arr.length])
    i++;
})
