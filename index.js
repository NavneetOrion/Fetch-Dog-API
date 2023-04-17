
let promise = fetch("https://dog.ceo/api/breeds/image/random");
promise
  .then((response) => {
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers);
    return response.json();
  })
  .then((value2) => {
    display_image(value2.message);

    console.log(value2);
  });

function display_image(image_url) {
  document.getElementById("img").src = image_url;
}

