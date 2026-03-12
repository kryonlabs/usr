// 9front web development JavaScript

console.log('9front web environment loaded');

// Simple function to check if we're running on 9front
function is9front() {
    return navigator.userAgent.includes('9front') || document.location.host === '';
}

// Display environment info
document.addEventListener('DOMContentLoaded', function() {
    if (is9front()) {
        console.log('Running on 9front httpd');
    }
});
