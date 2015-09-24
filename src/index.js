module.exports = isAlphabetic;


function isAlphabetic(ch) {
    var charCode = ch.charCodeAt(0);

    return (
        (charCode >= 0x41 && charCode <= 0x5A) ||
        (charCode >= 0x61 && charCode <= 0x7A)
    );
}
