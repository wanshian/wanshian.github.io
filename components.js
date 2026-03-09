// components.js

// 1. 導覽列組件 (加入 Logo 圖標與手機版選單)
const headerHTML = `
<nav class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <a href="index.html" class="flex items-center group">
            <img src="images/favicon.png" alt="萬象機械 Logo" class="w-8 h-8 md:w-10 md:h-10 mr-3 object-contain">
            <div class="flex flex-col">
                <span class="text-xl md:text-2xl font-black tracking-widest text-blue-900 group-hover:text-blue-700 transition">萬象機械工程有限公司</span>
                <span class="text-[9px] md:text-[10px] text-blue-600 font-bold tracking-[0.2em] uppercase">Wan Shian Mechanical Engineering Llc.</span>
            </div>
        </a>

        <button id="menu-btn" class="md:hidden text-blue-900 text-2xl p-2 focus:outline-none">
            <i class="fa-solid fa-bars"></i>
        </button>

        <div class="hidden md:flex space-x-8 font-medium items-center">
            <a href="index.html" class="nav-link hover:text-blue-600 transition">首頁</a>
            <a href="about.html" class="nav-link hover:text-blue-600 transition">關於萬象</a>
            <a href="philosophy.html" class="nav-link hover:text-blue-600 transition">企業理念</a>
            <a href="services.html" class="nav-link hover:text-blue-600 transition">經營項目</a>
            <a href="mailto:wan.shian5bm@gmail.com?subject=關於萬象機械工程諮詢" class="bg-blue-900 text-white px-5 py-2 rounded shadow-md hover:bg-blue-800 transition">聯絡我們</a>
        </div>
    </div>

    <div id="mobile-menu" class="hidden md:hidden bg-white border-b border-slate-200 px-6 py-4 flex flex-col gap-4 shadow-inner">
        <a href="index.html" class="py-2 border-b border-slate-50">首頁</a>
        <a href="about.html" class="py-2 border-b border-slate-50">關於萬象</a>
        <a href="philosophy.html" class="py-2 border-b border-slate-50">企業理念</a>
        <a href="services.html" class="py-2 border-b border-slate-50">經營項目</a>
        <a href="mailto:wan.shian5bm@gmail.com?subject=關於萬象機械工程諮詢" class="text-blue-600 font-bold">聯絡我們</a>
    </div>
</nav>
`;

// 2. 頁尾組件 (恢復地圖超連結與聯絡功能)
const footerHTML = `
<footer class="bg-slate-900 text-white py-16 px-6">
    <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-left">
        <div>
            <h3 class="text-xl font-bold mb-6">萬象機械工程有限公司</h3>
            <p class="text-slate-400 text-sm leading-relaxed">
                秉持「態度、專業及責任」的經營理念，創造員工安全與歡欣的工作環境。
            </p>
        </div>
        <div>
            <h4 class="font-bold mb-6 text-blue-400">據點資訊</h4>
            <ul class="text-slate-400 text-sm space-y-4">
                <li>
                    <i class="fa-solid fa-location-dot mr-2 text-blue-400"></i> 
                    <b>高雄總管理處：</b><br>
                    <a href="https://www.google.com/maps/search/?api=1&query=高雄市鼓山區迪化街88之1號" target="_blank" class="hover:text-white hover:underline transition">
                        高雄市鼓山區迪化街88之1號
                    </a>
                </li>
                <li>
                    <i class="fa-solid fa-location-dot mr-2 text-blue-400"></i> 
                    <b>台南辦公室：</b><br>
                    <a href="https://www.google.com/maps/search/?api=1&query=台南市安南區本田路三段339巷77-1號" target="_blank" class="hover:text-white hover:underline transition">
                        台南市安南區本田路三段339巷77-1號
                    </a>
                </li>
                <li>
                    <i class="fa-solid fa-location-dot mr-2 text-blue-400"></i> 
                    <b>嘉義辦公室：</b><br>
                    <a href="https://www.google.com/maps/search/?api=1&query=嘉義縣太保市太保五路176號" target="_blank" class="hover:text-white hover:underline transition">
                        嘉義縣太保市太保五路176號
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <h4 class="font-bold mb-6 text-blue-400">聯繫方式</h4>
            <ul class="text-slate-400 text-sm space-y-4">
                <li>
                    <i class="fa-solid fa-phone mr-2 text-blue-400"></i> 
                    <a href="tel:075520817" class="hover:text-white transition">07-5520817</a>
                </li>
                <li>
                    <i class="fa-solid fa-envelope mr-2 text-blue-400"></i> 
                    <a href="mailto:wan.shian5bm@gmail.com" class="hover:text-white transition text-xs md:text-sm">服務信箱：wan.shian5bm@gmail.com</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
        © 2026 萬象機械工程有限公司 Wan Shian Mechanical. All rights reserved.
    </div>
</footer>
`;

// 3. 注入邏輯
document.addEventListener("DOMContentLoaded", function() {
    // 注入導覽列
    const headerElem = document.getElementById('header-placeholder');
    if (headerElem) {
        headerElem.innerHTML = headerHTML;
        
        // 綁定手機版選單開關
        const btn = document.getElementById('menu-btn');
        const menu = document.getElementById('mobile-menu');
        if(btn && menu) {
            btn.onclick = function() {
                menu.classList.toggle('hidden');
            };
        }

        // 自動標註當前頁面顏色
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('text-blue-600', 'font-bold', 'border-b-2', 'border-blue-600');
            }
        });
    }

    // 注入頁尾
    const footerElem = document.getElementById('footer-placeholder');
    if (footerElem) {
        footerElem.innerHTML = footerHTML;
    }
});
// components.js 底部

// 1. 定義內容浮現的偵測邏輯
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add("active");
        }
    });
}

// 監聽捲動事件
window.addEventListener("scroll", reveal);

// 2. 處理載入動畫與內容同步
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    
    // 檢查是否為首次進入（或分頁重新開啟）
    if (!sessionStorage.getItem('hasSeenPreloader')) {
        if (preloader) {
            // 強制停留 3 秒展示 Logo
            setTimeout(() => {
                preloader.classList.add('fade-out'); // 啟動 0.5 秒淡出
                
                setTimeout(() => {
                    preloader.style.display = 'none'; // 徹底移除遮罩
                    sessionStorage.setItem('hasSeenPreloader', 'true'); // 標記已看過
                    
                    // --- 關鍵修改：等遮罩消失後，才啟動內容浮現動畫 ---
                    reveal(); 
                }, 500); 
            }, 3000); 
        }
    } else {
        // 如果已經看過了，直接移除遮罩並立刻顯示內容
        if (preloader) preloader.style.display = 'none';
        reveal();
    }
});

