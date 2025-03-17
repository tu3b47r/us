function showAnswers() {
    let score = 0;
    let resultMessage = "";

    // 選擇題答案
    // 選擇題 1
    let q1 = document.querySelector('input[name="q1"]:checked');
    if (q1) {
        if (q1.value === "b") {
            score += 4;
        } else {
            resultMessage += "<p>1. 錯誤答案: " + q1.nextSibling.nodeValue.trim() + ". 正確答案: B </p>";
        }
    } else {
        resultMessage += "<p>1. 未回答，正確答案: B </p>";
    }

    // 選擇題 2
    let q2 = document.querySelector('input[name="q2"]:checked');
    if (q2) {
        if (q2.value === "b") {
            score += 4;
        } else {
            resultMessage += "<p>2. 錯誤答案: " + q2.nextSibling.nodeValue.trim() + ". 正確答案: B </p>";
        }
    } else {
        resultMessage += "<p>2. 未回答，正確答案: B </p>";
    }

    // 選擇題 3
    let q3 = document.querySelector('input[name="q3"]:checked');
    if (q3) {
        if (q3.value === "c") {
            score += 4;
        } else {
            resultMessage += "<p>3. 錯誤答案: " + q3.nextSibling.nodeValue.trim() + ". 正確答案: C </p>";
        }
    } else {
        resultMessage += "<p>3. 未回答，正確答案: C </p>";
    }
    
    let q4 = document.querySelector('input[name="q4"]:checked');
    if (q4) {
        if (q4.value === "a") {
            score += 4;
        } else {
            resultMessage += "<p>4. 錯誤答案: " + q4.nextSibling.nodeValue.trim() + ". 正確答案: A </p>";
        }
    } else {
        resultMessage += "<p>4. 未回答，正確答案: A </p>";
    }

    let q5 = document.querySelector('input[name="q5"]:checked');
    if (q5) {
        if (q5.value === "d") {
            score += 4;
        } else {
            resultMessage += "<p>5. 錯誤答案: " + q5.nextSibling.nodeValue.trim() + ". 正確答案: D </p>";
        }
    } else {
        resultMessage += "<p>5. 未回答，正確答案: D </p>";
    }

    let q6 = document.querySelector('input[name="q6"]:checked');
    if (q6) {
        if (q6.value === "a") {
            score += 4;
        } else {
            resultMessage += "<p>6. 錯誤答案: " + q6.nextSibling.nodeValue.trim() + ". 正確答案: A </p>";
        }
    } else {
        resultMessage += "<p>6. 未回答，正確答案: A </p>";
    }

    let q7 = document.querySelector('input[name="q7"]:checked');
    if (q7) {
        if (q7.value === "c") {
            score += 4;
        } else {
            resultMessage += "<p>7. 錯誤答案: " + q7.nextSibling.nodeValue.trim() + ". 正確答案: C </p>";
        }
    } else {
        resultMessage += "<p>7. 未回答，正確答案: C </p>";
    }

    let q8 = document.querySelector('input[name="q8"]:checked');
    if (q8) {
        if (q8.value === "b") {
            score += 4;
        } else {
            resultMessage += "<p>8. 錯誤答案: " + q8.nextSibling.nodeValue.trim() + ". 正確答案: B </p>";
        }
    } else {
        resultMessage += "<p>8. 未回答，正確答案: B </p>";
    }

    let q9 = document.querySelector('input[name="q9"]:checked');
    if (q9) {
        if (q9.value === "c") {
            score += 4;
        } else {
            resultMessage += "<p>9. 錯誤答案: " + q9.nextSibling.nodeValue.trim() + ". 正確答案: C </p>";
        }
    } else {
        resultMessage += "<p>9. 未回答，正確答案: C </p>";
    }

    let q10 = document.querySelector('input[name="q10"]:checked');
    if (q10) {
        if (q10.value === "d") {
            score += 4;
        } else {
            resultMessage += "<p>10. 錯誤答案: " + q10.nextSibling.nodeValue.trim() + ". 正確答案: D </p>";
        }
    } else {
        resultMessage += "<p>10. 未回答，正確答案: D </p>";
    }

    // 填充題答案
    // 填充題 4
    let q11 = document.getElementById("q11").value.trim();
    if (q11.toLowerCase() === "(x+7y-1)/6") {
        score += 4;
        } else {
            resultMessage += "<p>1. 錯誤答案: " + q11 + ". 正確答案: (x+7y-1)/6</p>";
        }

    let q12 = document.getElementById("q12").value.trim();
    if (q12.toLowerCase() === "7") {
        score += 4;
        } else {
            resultMessage += "<p>2. 錯誤答案: " + q12 + ". 正確答案: 7";
        }

    let q13 = document.getElementById("q13").value.trim();
    if (q13.toLowerCase() === "10x+5y=50" || q13.toLowerCase() === "2x+y=10") {
            score += 4;
        } else {
            resultMessage += "<p>3. 錯誤答案: " + q13 + ". 正確答案: 10x+5y=50 or 2x+y=10";
        }

    let q14 = document.getElementById("q14").value.trim();
    if (q14.toLowerCase() === "5/2") {
            score += 4;
        } else {
            resultMessage += "<p>4. 錯誤答案: " + q14 + ". 正確答案: 5/2";
        }

    let q15 = document.getElementById("q15").value.trim();
    if (q15.toLowerCase() === "320") {
            score += 4;
        } else {
            resultMessage += "<p>5. 錯誤答案: " + q15 + ". 正確答案: 320";
        }

    let q16 = document.getElementById("q16").value.trim();
    if (q16.toLowerCase() === "12") {
            score += 4;
        } else {
            resultMessage += "<p>6. 錯誤答案: " + q16 + ". 正確答案: 12";
        }

    let q17 = document.getElementById("q17").value.trim();
    if (q17.toLowerCase() === "二") {
            score += 4;
        } else {
            resultMessage += "<p>7. 錯誤答案: " + q17 + ". 正確答案: 二";
        }

    let q18 = document.getElementById("q18").value.trim();
    if (q18.toLowerCase() === "(-4,2)") {
            score += 4;
        } else {
            resultMessage += "<p>8. 錯誤答案: " + q18 + ". 正確答案: (-4,2)";
        }
    
    let q19 = document.getElementById("q19").value.trim();
    if (q19.toLowerCase() === "135") {
            score += 4;
        } else {
            resultMessage += "<p>9. 錯誤答案: " + q19 + ". 正確答案: 135";
        }
    // 顯示總分
    resultMessage += `<p>總分: ${score} 分</p>`;
    document.getElementById("result").innerHTML = resultMessage;
}