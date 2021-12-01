export const addImage = (imgSrc) => {
  const p = new Promise((resolve, reject) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const onImageLoaded = () => {
      const { width, height } = imgElem;
      const sizeElem = document.querySelector('.image-size');
      sizeElem.textContent = `${width} x ${height}`;
      resolve(imgElem);
    };

    imgElem.addEventListener('load', onImageLoaded);

    imgElem.addEventListener('error', () =>
      reject(new Error('Image load is failed'))
    );
  });

  return p;
};

/* const resultPromise = addImage(
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'
);

resultPromise.then((data) => console.log(data));

resultPromise.catch((error) => console.log(error));
 */
