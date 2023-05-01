async function init() {

    let rustApp = null;

    try {
        rustApp = await import('../pkg');
    } catch (e) {
        console.error("Failed to load rust app", e);
        return;
    }

    const input = document.getElementById('upload');

    /*
    FileReader() is a built-in function of JS that allows us to read the contents of files stored on a user's computer (or device).
    * */
    const fileReader = new FileReader();

    fileReader.onload = () => {
        let base64 = fileReader.result.replace(/^data:image\/(png|jpg|jpeg);base64,/, "")
        let img_data_url = rustApp.grayscale(base64);
        document.getElementById('new-img').setAttribute('src', img_data_url)
        // document.getElementById('spinner').style.display = 'none';
    }


    // fileReader.addEventListener('upload', () => {
    //
    //     document.getElementById('spinner').style.display = 'block';
    // })


    /*
    * change event is fired when the value of the input element has been changed.
    * readAsText() is a built-in function of JS that reads the contents of the specified Blob or File.
    * */
    input.addEventListener('change', () => {
        fileReader.readAsDataURL(input.files[0]);
    });
}

init();