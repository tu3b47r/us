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
    if (q1) {
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
        if (q4.value === "c") {
            score += 4;
        } else {
            resultMessage += "<p>4. 錯誤答案: " + q4.nextSibling.nodeValue.trim() + ". 正確答案: C </p>";
        }
    } else {
        resultMessage += "<p>4. 未回答，正確答案: C </p>";
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
        if (q6.value === "b") {
            score += 4;
        } else {
            resultMessage += "<p>6. 錯誤答案: " + q6.nextSibling.nodeValue.trim() + ". 正確答案: B </p>";
        }
    } else {
        resultMessage += "<p>6. 未回答，正確答案: B </p>";
    }

    let q7 = document.querySelector('input[name="q7"]:checked');
    if (q7) {
        if (q7.value === "a") {
            score += 4;
        } else {
            resultMessage += "<p>7. 錯誤答案: " + q7.nextSibling.nodeValue.trim() + ". 正確答案: A </p>";
        }
    } else {
        resultMessage += "<p>7. 未回答，正確答案: A </p>";
    }

    let q8 = document.querySelector('input[name="q8"]:checked');
    if (q8) {
        if (q8.value === "a") {
            score += 4;
        } else {
            resultMessage += "<p>8. 錯誤答案: " + q8.nextSibling.nodeValue.trim() + ". 正確答案: A </p>";
        }
    } else {
        resultMessage += "<p>8. 未回答，正確答案: A </p>";
    }

    let q9 = document.querySelector('input[name="q9"]:checked');
    if (q9) {
        if (q9.value === "d") {
            score += 4;
        } else {
            resultMessage += "<p>9. 錯誤答案: " + q9.nextSibling.nodeValue.trim() + ". 正確答案: D </p>";
        }
    } else {
        resultMessage += "<p>9. 未回答，正確答案: D </p>";
    }

    let q10 = document.querySelector('input[name="q10"]:checked');
    if (q10) {
        if (q10.value === "c") {
            score += 4;
        } else {
            resultMessage += "<p>10. 錯誤答案: " + q10.nextSibling.nodeValue.trim() + ". 正確答案: C </p>";
        }
    } else {
        resultMessage += "<p>10. 未回答，正確答案: C </p>";
    }

    let q11 = document.querySelector('input[name="q11"]:checked');
    if (q11) {
        if (q11.value === "a") {
            score += 4;
        } else {
            resultMessage += "<p>11. 錯誤答案: " + q11.nextSibling.nodeValue.trim() + ". 正確答案: A </p>";
        }
    } else {
        resultMessage += "<p>11. 未回答，正確答案: A </p>";
    }

    let q12 = document.querySelector('input[name="q12"]:checked');
    if (q12) {
        if (q12.value === "c") {
            score += 4;
        } else {
            resultMessage += "<p>12. 錯誤答案: " + q12.nextSibling.nodeValue.trim() + ". 正確答案: C </p>";
        }
    } else {
        resultMessage += "<p>12. 未回答，正確答案: C </p>";
    }

    let q13 = document.querySelector('input[name="q13"]:checked');
    if (q13) {
        if (q13.value === "b") {
            score += 4;
        } else {
            resultMessage += "<p>13. 錯誤答案: " + q13.nextSibling.nodeValue.trim() + ". 正確答案: B </p>";
        }
    } else {
        resultMessage += "<p>13. 未回答，正確答案: B </p>";
    }

    let q14 = document.querySelector('input[name="q14"]:checked');
    if (q14) {
        if (q14.value === "d") {
            score += 4;
        } else {
            resultMessage += "<p>14. 錯誤答案: " + q14.nextSibling.nodeValue.trim() + ". 正確答案: D </p>";
        }
    } else {
        resultMessage += "<p>14. 未回答，正確答案: D </p>";
    }

    let q15 = document.querySelector('input[name="q15"]:checked');
    if (q15) {
        if (q15.value === "b") {
            score += 4;
        } else {
            resultMessage += "<p>15. 錯誤答案: " + q15.nextSibling.nodeValue.trim() + ". 正確答案: B </p>";
        }
    } else {
        resultMessage += "<p>15. 未回答，正確答案: B </p>";
    }

    let q16 = document.querySelector('input[name="q16"]:checked');
    if (q16) {
        if (q16.value === "d") {
            score += 4;
        } else {
            resultMessage += "<p>16. 錯誤答案: " + q16.nextSibling.nodeValue.trim() + ". 正確答案: D </p>";
        }
    } else {
        resultMessage += "<p>16. 未回答，正確答案: D </p>";
    }
    // 顯示總分
    resultMessage += `<p>總分: ${score} 分</p>`;
    document.getElementById("result").innerHTML = resultMessage;
}