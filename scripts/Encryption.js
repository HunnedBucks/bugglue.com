(() => {

    /*
    Store the calculated ciphertext here, so we can decrypt the message later.
    */
    let ciphertext;
  
    /*
    Fetch the contents of the "message" textbox, and encode it
    in a form we can use for the encrypt operation.
    */
    function getMessageEncoding() {
      const messageBox = document.getElementById('ToEncrypt').value;
      let message = messageBox.value;
      let enc = new TextEncoder();
      return enc.encode(message);
    }
  /*
  Get the encoded message, encrypt it and display a representation
  of the ciphertext in the "Ciphertext" element.
  */
 async function encryptMessage(key) {
    let encoded = getMessageEncoding();
    ciphertext = await window.crypto.subtle.encrypt(
      {
        name: "RSA-OAEP"
      },
      key,
      encoded
    );
    let buffer = new Uint8Array(ciphertext, 0, 5);
    document.getElementById('ToDecrypt').value = `${buffer}...[${ciphertext.byteLength} bytes total]`;
  }

  /*
  Fetch the ciphertext and decrypt it.
  Write the decrypted message into the "Decrypted" box.
  */
  async function decryptMessage(key) {
    let decrypted = await window.crypto.subtle.decrypt(
      {
        name: "RSA-OAEP"
      },
      key,
      ciphertext
    );

    let dec = new TextDecoder();
    document.getElementById('Decrypted').value = dec.decode(decrypted);
  }

  /*
  Generate an encryption key pair, then set up event listeners
  on the "Encrypt" and "Decrypt" buttons.
  */
  window.crypto.subtle.generateKey(
    {
    name: "RSA-OAEP",
    // Consider using a 4096-bit key for systems that require long-term security
    modulusLength: 2048,
    publicExponent: new Uint8Array([1, 0, 1]),
    hash: "SHA-256",
    },
    true,
    ["encrypt", "decrypt"]
  ).then((keyPair) => {
    const encryptButton = document.getElementById('encryptBtn');
    encryptButton.addEventListener("click", () => {
      encryptMessage(keyPair.publicKey);
    });

    // const decryptButton = document.querySelector(".rsa-oaep .decrypt-button");
    // decryptButton.addEventListener("click", () => {
    //   decryptMessage(keyPair.privateKey);
    // });
  });

})();