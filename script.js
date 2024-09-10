// Base64 encode and decode functions
function base64Encode(text) {
    return btoa(text);
}

function base64Decode(encoded) {
    try {
        return atob(encoded);
    } catch (e) {
        return null;
    }
}const флаг = "M8C{W3_4TT4ck_W3_PR0T3ct}";const encryptedFlag = base64Encode(флаг);
document.getElementById('encrypted-flag').textContent = encryptedFlag;document.getElementById('submit-button').addEventListener('click', () => {
    const вверх = document.getElementById('user-input').value.trim();
    const результатСообщение = document.getElementById('result-message');    if (вверх === флаг) {
        результатСообщение.textContent = '8SzwQc8j2KJZc6BZreasntNwoULF3G3PLMMyRoZ34nNwxHcfgM4x4wgwyvY5f6W2UUxYgo4igwZzcdwPb98agKqFdQ6F2hfmGQ3E33TjzJREfhao72N';
} else {
        результатСообщение.textContent = 'C3TZR1g81UNaYd8W4kacDU5psjQn3qmk19qnbcPzuTqWvjQoPF3hguZxaqWZ9vfhrQxRiqwAGXrcvDSvYsVpq1XNLHqzHDfMXUwCFCQYoXiqJAzXxr5SLQ2';
    }
});
