const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const resultDiv = document.getElementById('result');

// "그렇다 (천재)" 버튼 피하기 로직
yesBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - yesBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - yesBtn.offsetHeight);
    
    yesBtn.style.position = 'fixed';
    yesBtn.style.left = `${x}px`;
    yesBtn.style.top = `${y}px`;
    
    // 재미를 위해 회전도 추가
    yesBtn.style.transform = `rotate(${Math.random() * 360}deg)`;
});

// "아니다 (바보)" 버튼 클릭 로직
noBtn.addEventListener('click', () => {
    resultDiv.style.display = 'block';
    document.body.style.backgroundColor = '#000';
    document.body.style.color = '#fff';
    
    // 파티 효과 대신 배경색 막 바꾸기
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    setInterval(() => {
        document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }, 100);
});

// "예" 버튼을 클릭하려 할 때 (모바일 등)
yesBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('어딜 감히 유지혁을 천재라고 하려 하느냐!');
});
