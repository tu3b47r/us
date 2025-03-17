// game.js

// 预设的30个单词和它们的中文提示
const allWords = [
    { word: "apple", hint: "一种红色或绿色的水果" },
    { word: "banana", hint: "一种黄色的水果" },
    { word: "cherry", hint: "一种小红色水果" },
    { word: "date", hint: "一种枣状水果" },
    { word: "elderberry", hint: "一种紫色的浆果" },
    { word: "fig", hint: "一种紫色或绿色的水果" },
    { word: "grape", hint: "一种紫色或绿色的小水果" },
    { word: "honeydew", hint: "一种绿色的甜瓜" },
    { word: "kiwi", hint: "一种小而毛茸茸的水果，绿色的果肉" },
    { word: "lemon", hint: "一种黄色的柑橘类水果" },
    { word: "mango", hint: "一种黄色或橙色的热带水果" },
    { word: "nectarine", hint: "一种无毛的桃子" },
    { word: "orange", hint: "一种橙色的柑橘类水果" },
    { word: "papaya", hint: "一种绿色和橙色的热带水果" },
    { word: "quince", hint: "一种黄色的苹果状水果" },
    { word: "raspberry", hint: "一种小红色或黑色的浆果" },
    { word: "strawberry", hint: "一种红色的小水果，形状像心形" },
    { word: "tomato", hint: "一种红色的蔬菜（或水果）" },
    { word: "watermelon", hint: "一种绿色外皮，红色果肉的水果" },
    { word: "apricot", hint: "一种黄色的小水果" },
    { word: "avocado", hint: "一种绿色的热带水果，常用于沙拉" },
    { word: "blueberry", hint: "一种小的蓝色浆果" },
    { word: "cantaloupe", hint: "一种橙色果肉的甜瓜" },
    { word: "coconut", hint: "一种外壳坚硬、内部有水的热带水果" },
    { word: "dragonfruit", hint: "一种外形像龙的热带水果，外皮鲜艳" },
    { word: "jackfruit", hint: "一种巨大且有甜味的热带水果" },
    { word: "lime", hint: "一种绿色的柑橘类水果，味道酸" },
    { word: "peach", hint: "一种柔软且多汁的水果，常见的是黄色或红色" },
    { word: "pear", hint: "一种有点圆形的绿色或黄色水果" },
    { word: "plum", hint: "一种紫色或红色的水果，味道甜" }
];

let selectedWords = []; // 当前选择的10个单词
let currentWordIndex = 0; // 当前单词索引
let score = 0; // 玩家得分

// 启动游戏，随机选取10个单词
function startGame() {
    // 清空反馈信息和输入框
    document.getElementById("feedback").textContent = '';
    document.getElementById("input-word").value = '';
    document.getElementById("score").textContent = '';

    // 随机选择10个单词
    selectedWords = [];
    let shuffledWords = [...allWords];
    for (let i = shuffledWords.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledWords[i], shuffledWords[j]] = [shuffledWords[j], shuffledWords[i]]; // 随机交换元素
    }

    selectedWords = shuffledWords.slice(0, 10); // 获取前10个单词

    // 显示第一个单词
    displayNextWord();
}

// 显示下一个单词
function displayNextWord() {
    if (currentWordIndex < selectedWords.length) {
        const word = selectedWords[currentWordIndex].word;
        const hint = selectedWords[currentWordIndex].hint;
        const firstLetter = word[0];
        const lastLetter = word[word.length - 1];

        document.getElementById("word-container").innerHTML = `
            <p><strong>中文提示:</strong> ${hint}</p>
            <p>第一个字母: <strong>${firstLetter}</strong>, 最后一个字母: <strong>${lastLetter}</strong></p>
        `;
    } else {
        // 游戏结束，显示分数
        document.getElementById("feedback").textContent = "游戏结束！";
        document.getElementById("feedback").style.color = "green";
        document.getElementById("score").textContent = `你的分数是：${score} / 10`;
    }
}

// 检查拼写
function checkSpelling() {
    const inputWord = document.getElementById("input-word").value.trim().toLowerCase();
    const correctWord = selectedWords[currentWordIndex].word;

    if (inputWord === "") {
        document.getElementById("feedback").textContent = "请输入一个单词！";
        return;
    }

    if (inputWord === correctWord) {
        score++; // 拼写正确，增加分数
        document.getElementById("feedback").textContent = "拼写正确！";
        document.getElementById("feedback").style.color = "green";
    } else {
        document.getElementById("feedback").textContent = "拼写错误，请再试一次！";
        document.getElementById("feedback").style.color = "red";
    }

    // 清空输入框并显示下一个单词
    document.getElementById("input-word").value = '';
    currentWordIndex++;
    setTimeout
