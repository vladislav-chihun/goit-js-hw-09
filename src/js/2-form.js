const form = document.querySelector("form")
const textarea = document.querySelector("textarea")
const storageKey = "feedback-form-state"

form.addEventListener("input", formChange)
function formChange(e) {
    const message = textarea.value.trim();
    const email = form.elements.email.value.trim();
    const data = JSON.stringify({ email, message });
    localStorage.setItem(storageKey, data)
}

form.addEventListener("submit", formSubmit);
function formSubmit(e) {
    e.preventDefault();
    const message = textarea.value.trim();
    const email = form.elements.email.value.trim();
    if (message === "" || email === "") return;
    console.log({ email, message });
    localStorage.removeItem(storageKey);
    textarea.value = "";
    form.elements.email.value = "";
}

const storageData = localStorage.getItem(storageKey)?? "";

try {
    const parseData = JSON.parse(storageData);
    textarea.value = parseData.message;
    form.elements.email.value = parseData.email;
} catch {
    console.log("No Data")
}