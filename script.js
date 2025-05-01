const quoteTemplates = {
    '作業': [
        "你這作業的創意程度跟白開水一樣精彩呢",
        "這作業的完成度，讓我想起了沒放調味料的開水白菜",
        "你是把課本當枕頭用嗎？作業品質很有睡美人的水準",
        "這作業寫得真特別，特別像電腦當機的樣子",
        "看完你的作業，我悟出了佛家的空即是色"
    ],
    '考試': [
        "你的成績單很環保，幾乎全部都是零",
        "這考卷答得真有個性，個性就是不及格",
        "你的答案很有想像力，可惜這不是寫作課",
        "看到你的考卷，讓我想起了北極，都是零下",
        "考試對你來說是選擇題，選擇性放空"
    ],
    '報告': [
        "這報告的邏輯性就像春天的櫻花，飄散無蹤",
        "你的簡報很有藝術感，因為沒人看得懂",
        "這報告內容真獨特，獨特到讓我以為在看天書",
        "你的報告結構很像散文，可惜這是理科課",
        "這份報告很環保，省了很多有用的內容"
    ],
    '上課': [
        "你上課的專注力讓我想起了雲朵，飄來飄去",
        "你坐在教室的樣子，讓我想起了一尊佛像",
        "你的眼神告訴我，你的靈魂正在旅行",
        "你上課時的表情很豐富，豐富到讓我以為你在看電影",
        "你是把教室當成度假村了嗎？看起來很放鬆呢"
    ],
    '遲到': [
        "你的時間觀念很特別，特別像平行時空",
        "看來你家的時鐘都是擺設用的",
        "你是把上課時間當成建議時間嗎？",
        "你的準時程度就像台灣的天氣，無法預測",
        "你應該去申請個人時區，畢竟總是跟大家不同步"
    ]
};

// 默認回應，當沒有匹配關鍵字時使用
const defaultQuotes = [
    "你的表現讓我想起了一隻優雅的樹懶",
    "這程度令人印象深刻，深刻到讓我語塞",
    "你的努力程度跟仙人掌一樣，很省水呢",
    "看來你跟認真這個詞有點距離，大概一個地球那麼遠",
    "你的表現很特別，特別到讓我開始懷疑人生"
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