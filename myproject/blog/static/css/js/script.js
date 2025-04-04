// Mobile menu toggle if needed
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Add responsive behavior
    function handleResize() {
        const sidebar = document.querySelector('.sidebar');
        const appContainer = document.querySelector('.app-container');
        
        if (window.innerWidth <= 768) {
            sidebar.style.height = 'auto';
            sidebar.style.position = 'relative';
        } else {
            sidebar.style.height = '100vh';
            sidebar.style.position = 'fixed';
        }
    }
    
    window.addEventListener('resize', handleResize);
    handleResize();
});
