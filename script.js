const quoteTemplates = {
    '作業': [
        "你的作業比我的早餐還要草率",
        "作業寫完了嗎？別騙我，我看到你在打遊戲",
        "這作業是你寫的？連狗都寫得比你好",
        "作業抄同學的？至少換個版面排版啊",
        "這作業寫得跟剛學寫字一樣"
    ],
    '考試': [
        "你的考試成績像股市，只是都在跌",
        "小考又考零分？你是來學校當吉祥物的嗎",
        "這次考試是不是又在蒙答案？",
        "考卷上的答案比天書還難懂",
        "考試不及格？你的人生也不及格了"
    ],
    '報告': [
        "這報告寫得比我的字還醜",
        "你的報告內容就像複製貼上的工具人",
        "這報告是你趕出來的嗎？質量跟泡麵差不多",
        "報告做成這樣，連我阿嬤都搖頭",
        "這簡報排版是用腳排的嗎？"
    ],
    '上課': [
        "上課不要睡覺，我知道昨晚你在看動畫",
        "別以為我沒發現你在偷滑手機",
        "這不會？上課都在幹嘛？喔，在睡覺啊",
        "你上課的專注力比金魚還短",
        "又在放空？腦袋裡裝的是氦氣嗎？"
    ],
    '遲到': [
        "今天又遲到？公車應該改叫私車了吧",
        "遲到理由比我的頭髮還多，但我是真的禿了",
        "你的準時觀念跟我的存款一樣不存在",
        "遲到王登基了是不是？",
        "你是把鬧鐘當白噪音在聽嗎？"
    ]
};

// 默認幹話，當沒有匹配關鍵字時使用
const defaultQuotes = [
    "你這效率比龜還慢，但龜至少知道往前走",
    "不會就說不會，裝懂的樣子比考試還難看",
    "這種表現，我連狗都不屑做",
    "你的理由比我的頭髮還多，但至少我的頭髮是真的",
    "這不是我教的，你是不是去抄ChatGPT？"
];

const generateBtn = document.getElementById('generateBtn');
const quoteElement = document.getElementById('quote');
const keywordInput = document.getElementById('keywordInput');

function getRandomQuote(quotes) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function findMatchingQuotes(keyword) {
    if (!keyword) return defaultQuotes;
    
    // 搜尋完全匹配的關鍵字
    for (const key in quoteTemplates) {
        if (keyword.includes(key)) {
            return quoteTemplates[key];
        }
    }
    
    return defaultQuotes;
}

generateBtn.addEventListener('click', () => {
    const keyword = keywordInput.value.trim().toLowerCase();
    const matchingQuotes = findMatchingQuotes(keyword);
    
    quoteElement.textContent = '';  // 清空現有內容
    setTimeout(() => {
        quoteElement.textContent = getRandomQuote(matchingQuotes);
    }, 100);
});