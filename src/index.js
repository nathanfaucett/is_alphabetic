module.exports = isAlphabetic;


function isAlphabetic(ch) {
    return isAlphabeticCode(ch.charCodeAt(0));
}

isAlphabetic.code = isAlphabeticCode;

function isAlphabeticCode(charCode) {
    return (
        (charCode >= 0x41 && charCode <= 0x5A) ||
        (charCode >= 0x61 && charCode <= 0x7A)
    );
}
