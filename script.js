// Lesson(59) v (61) Explain: atob - btoa, And Create a webapp to encrypt and decrypt data:
//  شرح atob - btoa و انشاء تطبيق ويب لتشفير و فك تشفير البيانات
// ...............................................................................
//  The btoa() method encodes a string in bass-64.
//  Use it to encrypt text data to encrypt with system rule btoa() : 64
// ................................................................................
//  This method uses the "A-Z", "a-z", "0-9", "+", "/" and "*" Characters to encode string.
// This element uses Capital, small English letters,Numbers, signs: = , / , and + when it's text encrypt.
// ................................................................................
// Tip: Use the atob() method to decode a base-64 encoded string.
//  Use this element to decrypt encrypted text with system rule atob() : 64.
// ................................................................................
//   encrypt.        التشفير
//   decrypt         فك التشفير
//   encode.         التشفير
//   decode.         فك التشفير
//   encryption.     التشفير
// ................................................................................

// Ex (1):
// let text = "Learn JS with us.";
// let encode_text = btoa(text);
// The previous.you can define the data you want to encode as "Learn JS with us.", or define variable that stores inside what you want to encode a (text).
// alert(encode_text);
// Show alert msg, inside write encode.
// ........ Succeeded ........

// Ex (2):
// To decode of data with system rule base-64.
// let text = "Learn JS with us.";
// let encode_text = btoa(text);
// Next, add another variable to encode text.
// let decode_text = atob(encode_text);

// alert(decode_text);
// Show alert msg, inside text.
// ........ Succeeded ........
// ....................................................................................

//............. Create web app use to encode & decode data .............



let text = "Learn JS with us.";
let encode_text = btoa(text);

let decode_text = atob(encode_text);

let textarea = document.getElementById("text");
let result = document.getElementById("result");
let select = document.getElementById("select");

textarea.addEventListener('input', () => {
    make_result();
    // Here, Called function
});


select.addEventListener('change', () => {
    make_result();
    // Here, Called function
});

function make_result() {
    if (select.value == "decode") {
        result.value = window.atob(textarea.value);
    } else {
        result.value = window.btoa(textarea.value);

    }
}