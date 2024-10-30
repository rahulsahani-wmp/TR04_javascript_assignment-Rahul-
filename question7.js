function fuctionone(displaymessage) {
    setTimeout(displaymessage, 2000)
}

function displaymessage() {
    console.log("this meassage is displayed after 2 seconds");
}

fuctionone(displaymessage);