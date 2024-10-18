document.addEventListener('DOMContentLoaded', () => {
    const startListeningBtn = document.getElementById('start-listening');
    const listeningArea = document.getElementById('listening-area');
    const submitAnswersBtn = document.getElementById('submit-answers');
    const resultArea = document.getElementById('result-area');

    startListeningBtn.addEventListener('click', () => {
        listeningArea.style.display = 'block';
        // 这里可以添加加载听力练习的逻辑
    });

    submitAnswersBtn.addEventListener('click', () => {
        // 这里可以添加提交答案和获取结果的逻辑
        resultArea.style.display = 'block';
    });
});
