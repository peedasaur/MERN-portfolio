document.addEventListener('DOMContentLoaded', () => {
    // Create the back button element
    const backBtn = document.createElement('a');
    backBtn.href = '../index.html';
    backBtn.innerHTML = '<i class="fas fa-arrow-left"></i> Back to Portfolio';
    
    // Style the button
    Object.assign(backBtn.style, {
        position: 'fixed',
        top: '20px',
        left: '20px',
        padding: '10px 20px',
        background: 'rgba(15, 23, 42, 0.8)',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '30px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        fontFamily: "'Inter', sans-serif",
        fontSize: '14px',
        fontWeight: '500',
        zIndex: '9999',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        transition: 'transform 0.2s ease, background 0.2s ease'
    });

    // Add hover effect
    backBtn.addEventListener('mouseenter', () => {
        backBtn.style.transform = 'translateY(-2px)';
        backBtn.style.background = 'rgba(15, 23, 42, 1)';
    });

    backBtn.addEventListener('mouseleave', () => {
        backBtn.style.transform = 'translateY(0)';
        backBtn.style.background = 'rgba(15, 23, 42, 0.8)';
    });

    // Ensure Font Awesome is loaded if not already
    const fontAwesomeId = 'font-awesome-cdn';
    if (!document.getElementById(fontAwesomeId)) {
        const link = document.createElement('link');
        link.id = fontAwesomeId;
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(link);
    }

    // Append to body
    document.body.appendChild(backBtn);
});
