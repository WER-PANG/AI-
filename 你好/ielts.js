document.addEventListener('DOMContentLoaded', () => {
    const startPracticeBtn = document.getElementById('start-practice');
    const practiceArea = document.getElementById('practice-area');
    const submitAnswerBtn = document.getElementById('submit-answer');
    const resultArea = document.getElementById('result-area');

    startPracticeBtn.addEventListener('click', () => {
        practiceArea.style.display = 'block';
        // 这里可以添加获取练习题的逻辑
    });

    submitAnswerBtn.addEventListener('click', () => {
        // 这里可以添加提交答案和获取结果的逻辑
        resultArea.style.display = 'block';
    });
});
