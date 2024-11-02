let oneInput = document.querySelector(".frist .add_word");
let twoInput = document.querySelector(".frist .delete_word");
let text = document.querySelector(".second");
let oneclick = document.querySelector(".add");
let twoclick = document.querySelector(".del");
let third_continer = document.querySelector(".third");

oneclick.onclick = function() {
    if (oneInput.value == "") {
        text.innerHTML = "Not Available Element";
    } else {
        let splitword = oneInput.value.split(" ");
        for (let i = 0; i < splitword.length; i++) {
            let onespan = document.createElement("span");
            let textspan = document.createTextNode(splitword[i]);
            onespan.appendChild(textspan);
            third_continer.appendChild(onespan);
        }
        text.innerHTML = "Yes Available Element";
        oneInput.value = "";
    }
};

twoclick.onclick = function() {
    let wordToDelete = twoInput.value.trim(); // إزالة الفراغات الزائدة
    let spans = third_continer.getElementsByTagName("span");
    let found = false;

    for (let i = 0; i < spans.length; i++) {
        if (spans[i].textContent === wordToDelete) {
            third_continer.removeChild(spans[i]);
            found = true;
            break;
        }
    }

    if (found) {
        text.innerHTML = "Element Deleted";
    } else {
        text.innerHTML = "Element Not Found";
    }

    twoInput.value = ""; // حذف النص بعد الإرسال
};