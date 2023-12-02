const cameraFeedEle = document.getElementById("cameraFeed")



navigator.mediaDevices.getUserMedia({ video:true })
.then(stream => {
    cameraFeedEle.srcObject = stream;
})
.catch(error => {
    console.error('Error accessing camera', error);
})