const deleteElement = () => {
    const element = document.querySelector(".tiktok-2wi892-DivContentContainer");
    element.remove();
}
// delete the element when the extension button is clicked

chrome.action.onClicked.addListener((tab) => {
    if (tab.url.includes('https://www.tiktok.com/')) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: deleteElement
        });
    }
})