const quotes = [
    "欸欸，你是不是又在摸魚啊？",
    "這不是我要的，你重寫！",
    "你的效率比龜還慢，但龜至少知道往前走。",
    "需求改了87次，我媽都不會這樣搞我。",
    "你這程式寫得像盲人畫畫。",
    "今天deadline欸，你居然還在睡？",
    "這bug修一修，下輩子見！",
    "別跟我說你又沒備份...",
    "你這頁面醜得我奶奶看了都搖頭。",
    "快下班啦！啊不是，才早上十點。",
    "我家三歲姪子都比你寫得好。",
    "測試？不存在的，直接上線啦！",
    "這功能做完我就退休，年薪百萬見。",
    "作業寫完了嗎？別騙我，我看到你在打遊戲。",
    "你的報告比我的早餐還要草率。",
    "這不是我教的，你是不是去抄ChatGPT？",
    "你的考試成績像股市，只是都在跌。",
    "上課不要睡覺，我知道昨晚你在看動畫。",
    "今天又遲到？公車應該改叫私車了吧！",
    "作業抄同學的？至少換個版面排版啊！",
    "這題這麼簡單，我奶奶都會寫。",
    "小考又考零分？你是來學校當吉祥物的嗎？",
    "你的筆記跟藝術品一樣，看不懂在寫什麼。",
    "別以為我沒發現你在偷滑手機。",
    "這不會？上課都在幹嘛？喔，在睡覺啊！",
    "交報告的速度要是有打遊戲那麼快就好了。",
    "你的理由比我的頭髮還多，但至少我的頭髮是真的。"
];

const generateBtn = document.getElementById('generateBtn');
const quoteElement = document.getElementById('quote');

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

generateBtn.addEventListener('click', () => {
    quoteElement.textContent = '';  // 清空現有內容
    setTimeout(() => {
        quoteElement.textContent = getRandomQuote();
    }, 100);  // 小延遲來觸發動畫效果
});