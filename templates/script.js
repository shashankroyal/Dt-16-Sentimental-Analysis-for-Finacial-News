-    document.addEventListener("DOMContentLoaded", function () {
        // Dark Mode Toggle
        const darkModeToggle = document.getElementById("darkModeToggle");
        darkModeToggle.addEventListener("click", function () {
            document.body.classList.toggle("light-mode");
        });
    
        // Fake stock sentiment data (replace with API)
        const stockSentiment = [
            "AAPL: +2.5% 🚀 | TSLA: -1.3% 🔻 | AMZN: +1.8% 📈 | BTC: +3.2% 🚀",
            "GOOGL: +1.1% 📈 | META: -0.8% 🔻 | ETH: +4.1% 🚀 | NVDA: +2.3% 📈"
        ];
        let ticker = document.getElementById("stockTicker");
        let index = 0;
        setInterval(() => {
            ticker.innerText = stockSentiment[index];
            index = (index + 1) % stockSentiment.length;
        }, 5000);
    
        // Fetch Latest Financial News (Replace with API)
        const newsContainer = document.getElementById("newsContainer");
        const sampleNews = [
            { title: "Market hits all-time high", link: "#" },
            { title: "Tech stocks see a major rally", link: "#" },
            { title: "Crypto market surges 10% in a week", link: "#" }
        ];
        sampleNews.forEach(news => {
            let newsCard = document.createElement("div");
            newsCard.classList.add("news-card");
            newsCard.innerHTML = `<a href="${news.link}" target="_blank">${news.title}</a>`;
            newsContainer.appendChild(newsCard);
        });
    
        // AI Insights (Fake Data)
        document.getElementById("aiInsight").innerText = "AI predicts a bullish trend for the next quarter.";
    
        // Chart.js Market Trends Visualization
        const ctx = document.getElementById("marketChart").getContext("2d");
        new Chart(ctx, {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May"],
                datasets: [{
                    label: "Stock Market Index",
                    data: [3200, 3400, 3300, 3500, 3600],
                    borderColor: "#ffcc00",
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true
            }
        });
    });