document.addEventListener("DOMContentLoaded", function() {
    let videos = document.querySelectorAll("video");
    videos.forEach(video => {
        video.play().catch(error => console.log("Autoplay geblokkeerd:", error));
    });
});
