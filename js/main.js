// 搜索功能
document.querySelector('.search-box input').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    // TODO: 实现搜索逻辑
});

// 标签点击事件
document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', function() {
        const tagText = this.textContent;
        document.querySelector('.search-box input').value = tagText;
        // TODO: 实现标签搜索逻辑
    });
});

// 视频按钮点击事件
document.querySelectorAll('.video-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productId = productCard.querySelector('h3').textContent;
        // TODO: 实现视频播放逻辑
    });
}); 