const urlIdParams = new URLSearchParams(window.location.search);
const urlId = urlIdParams.get('id');

document.getElementById("img").src = `/api/object/${urlId}/img.jpg`;

    fetch(`/api/object/${urlId}/properties.json`)
.then(response => response.json())
.then(objectPropertiesjson => {
    document.getElementById("card-title").innerText = objectPropertiesjson.title;
    document.getElementById("card-description").innerText = objectPropertiesjson.description;
})