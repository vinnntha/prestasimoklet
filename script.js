document.querySelectorAll('.prestasi-item').forEach(item => {
    item.addEventListener('click', function() {
        const videoSrc = this.getAttribute('data-video');
        document.getElementById('videoFrame').src = `https://www.youtube.com/embed/${videoSrc}`;
    });
});