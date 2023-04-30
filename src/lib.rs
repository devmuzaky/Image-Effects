use std::ops::Index;
use wasm_bindgen::prelude::*;   // import wasm_bindgen macros into scope so we can use them
use web_sys::console::log_1 as log;    // import log_1 function from web_sys::console module into scope so we can use it to log to the browser console
use base64::decode; // import decode function from base64 crate into scope so we can use it to decode base64 encoded strings
use image::load_from_memory; // import load_from_memory function from image crate into scope so we can use it to load images from memory


#[wasm_bindgen] // macro to generate JS bindings for Rust functions

pub fn grayscale(encoded_file: &str) {
    log(&"Grayscale called".into()); // log to browser console

    let base64_to_vector = decode(encoded_file).unwrap(); // convert base64 encoded string to a Vec<u8>
    let mut img = load_from_memory(&base64_to_vector).unwrap(); // load image from memory
    img = img.grayscale(); // convert image to grayscale

}