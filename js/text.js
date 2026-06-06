const textinputelement=document.getElementById("textinput");
const charCountElement=document.getElementById("charCount");
const wordcountelement=document.getElementById("wordcount");
const readingtimeelement=document.getElementById("readingtime");
const longestWordelement=document.getElementById("longestword");
textinputelement.addEventListener("input", function()  {
    const text=textinputelement.value;
    charCountElement.innerText=text.length; 
    const wordsarray=text.trim().split(/\s+/);
    let totalwords=0;
    if (text.trim() !== "") {
        totalwords=wordsarray.length;
    }
    wordcountelement.innerText=totalwords;
    const totalseconds=Math.ceil((totalwords/200)*60);
    if (totalwords===0) {
        readingtimeelement.innerText="0s";
    } else {
        readingtimeelement.innerText=totalseconds + "s";
    }
    let longestWord="";
    if (text.trim()!=="") {
        for(let currentWord of wordsarray) {
            const cleanWord=currentWord.replace(/[.,\/#!$%\^$\*;:{}=\-_'~()]/g,"");
            if (cleanWord.length>longestWord.length) {
                longestWord=cleanWord;
            }
        }
    }
    if (longestWord=== "") {
        longestWordelement.innerText = "-";
    } else {
        longestWordelement.innerText =longestWord + "(" + longestWord.length + " letters)";
    }
});
