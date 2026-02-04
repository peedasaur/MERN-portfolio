document.addEventListener('DOMContentLoaded', () => {
    
    const backBtn = document.createElement('a');
    backBtn.href = '../index.html';
    backBtn.innerHTML = '<i class="fas fa-arrow-left"></i> Back to Portfolio';

    
    Object.assign(backBtn.style, {
        position: 'fixed',
        top: '25px',
        left: '25px',
        padding: '10px 20px',
        background: 'rgba(255, 255, 255, 0.1)',
        color: 'inherit',
        textDecoration: 'none',
        borderRadius: '30px',
        backdropFilter: 'blur(10px)',
        webkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        fontFamily: "'Outfit', sans-serif",
        fontSize: '14px',
        fontWeight: '500',
        zIndex: '1000',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        mixBlendMode: 'difference', 
        color: '#fff' 
    });

    
    backBtn.addEventListener('mouseenter', () => {
        backBtn.style.transform = 'translateY(-2px)';
        backBtn.style.background = 'rgba(255, 255, 255, 0.2)';
        backBtn.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)';
    });

    backBtn.addEventListener('mouseleave', () => {
        backBtn.style.transform = 'translateY(0)';
        backBtn.style.background = 'rgba(255, 255, 255, 0.1)';
        backBtn.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.05)';
    });

    
    const fontAwesomeId = 'font-awesome-cdn';
    if (!document.getElementById(fontAwesomeId)) {
        const link = document.createElement('link');
        link.id = fontAwesomeId;
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(link);
    }

    
    const fontId = 'outfit-font';
    if (!document.getElementById(fontId)) {
        const link = document.createElement('link');
        link.id = fontId;
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap';
        document.head.appendChild(link);
    }

    
    document.body.appendChild(backBtn);
});

