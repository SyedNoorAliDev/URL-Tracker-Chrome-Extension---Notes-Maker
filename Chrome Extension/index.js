let myLeads = []
const ulEl = document.getElementById("ul-l")
const inputy = document.getElementById("input-tag")
const inputBtn = document.getElementById("button-tag")
const delbtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab")
//localStorage.clear()
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
inputBtn.addEventListener("click", function(){
    let trimmed = inputy.value.trim()
    if ((trimmed != "")){
        myLeads.push(trimmed)
        inputy.value = ""
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    }
})
delbtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})
tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow:true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
        }
    )
})

function isValidHttpUrl(string) {
    let url;
    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
}
function render(leadsArray){
    let listItems = ""
    for (let i=0;i<leadsArray.length; i++){
        if (!isValidHttpUrl(leadsArray[i])){
            listItems += ("<li>"+leadsArray[i]+"</li>");
        }
        else {
            // listItems += ("<li><a target='_blank' href=${myLeads[i]}>"+myLeads[i]+"</li>");
            listItems += `<li><a target='_blank' href="${leadsArray[i]}">${leadsArray[i]}</a></li>`;

        }

    }
    ulEl.innerHTML = listItems
}





