document.addEventListener("DOMContentLoaded", function () {
  // Select all images within Blogger posts
  const images = document.querySelectorAll(".post-body img");
  images.forEach((img) => {
    // Wrap each image in a link with Fancybox attributes
    const link = document.createElement("a");
    link.href = img.src;
    link.setAttribute("data-fancybox", "gallery");
    
    // Insert the link before the image and then move the image inside the link
    img.parentNode.insertBefore(link, img);
    link.appendChild(img);
  });

  // Select all videos within Blogger posts
  const videos = document.querySelectorAll(".post-body video");
  videos.forEach((video) => {
    // Wrap each video in a link with Fancybox attributes
    const link = document.createElement("a");
    link.href = video.src;
    link.setAttribute("data-fancybox", "gallery");
    link.setAttribute("data-type", "video");
    
    // Insert the link before the video and then move the video inside the link
    video.parentNode.insertBefore(link, video);
    link.appendChild(video);
  });

  // Initialize Fancybox
  Fancybox.bind("[data-fancybox='gallery']", {
    Thumbs: {
      autoStart: true, // Show thumbnail navigation
    },
    Toolbar: {
      display: ["close"], // Show close button
    },
  });
});