
// 提交答題並顯示結果與答案
        function submitQuiz() {
            let score = 0;
            let feedback = '';

            // 填充題答案檢查
            let answer1 = document.getElementById("answer1").value.trim();
            let answer2 = document.getElementById("answer2").value.trim();
            let answer3 = document.getElementById("answer3").value.trim();

            if (answer1 === correctAnswers.fill1) {
                score += 4;
            } else {
                feedback += "<p>填充題 1 錯誤。正確答案是 " + correctAnswers.fill1 + "。</p>";
            }

            if (answer2 === correctAnswers.fill2) {
                score += 4;
            } else {
                feedback += "<p>填充題 2 錯誤。正確答案是 " + correctAnswers.fill2 + "。</p>";
            }

            if (answer3 === correctAnswers.fill3) {
                score += 4;
            } else {
                feedback += "<p>填充題 3 錯誤。正確答案是 " + correctAnswers.fill3 + "。</p>";
            }

            // 選擇題答案檢查
            let q1Answer = document.querySelector('input[name="q1"]:checked');
            let q2Answer = document.querySelector('input[name="q2"]:checked');

            if (q1Answer && q1Answer.value === correctAnswers.choice1) {
                score += 4;
            } else {
                feedback += "<p>選擇題 1 錯誤。正確答案是 " + correctAnswers.choice1 + "。</p>";
            }

            if (q2Answer && q2Answer.value === correctAnswers.choice2) {
                score += 4;
            } else {
                feedback += "<p>選擇題 2 錯誤。正確答案是 " + correctAnswers.choice2 + "。</p>";
            }

            // 顯示總分
            document.getElementById("result").innerHTML = "你的總分是：" + score + " 分";
            document.getElementById("feedback").innerHTML = feedback;
        }
