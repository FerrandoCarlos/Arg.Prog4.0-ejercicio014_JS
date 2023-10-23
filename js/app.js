fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(photos => {
        const filterPhotos = photos.filter(filter =>
            filter.albumId === 10);

        for (let photo of filterPhotos) {
            document.querySelector(".container").insertAdjacentHTML("beforeend",`
                <figure>
                    <img src="${photo.thumbnailUrl}">
                    <figcaption>${photo.title}</figcaption>
                
                </figure>
            
            `)
        }
    });