async function init() {

    let rustApp = null;

    try{
        rustApp = await import('../pkg');
        console.log("Rust app loaded successfully");
    }catch (e){
        console.error("Failed to load rust app", e);
        return;
    }

    // console.log(rustApp)


    const input = document.getElementById('upload');
    if (!input) {
        console.error('Input element not found in DOM');
        return;
    }


    /*
    FileReader() is a built-in function of JS that allows us to read the contents of files stored on a user's computer (or device).
    * */
    const fileReader = new FileReader();

    fileReader.onload = () => {
        let base64 = fileReader.result.replace(/^data:image\/(png|jpg|jpeg);base64,/, "")
        console.log(input.files[0]);
        console.log(base64);
    }

    /*
    * change event is fired when the value of the input element has been changed.
    * readAsText() is a built-in function of JS that reads the contents of the specified Blob or File.
    * */
    input.addEventListener('change', () => {
        // const file = input.files[0];
        // fileReader.readAsText(file);

        fileReader.readAsDataURL(input.files[0]);
    });


}

init();