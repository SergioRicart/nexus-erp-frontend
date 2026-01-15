

function initMenu() {
    document.addEventListener('DOMContentLoaded', () => {
        const sidebar = document.getElementById('sidebar');
        const menuToggle = document.getElementById('menuToggle');
        const menuLinks = document.querySelectorAll('.menu-link');

        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                    sidebar.classList.remove('active');
                }
            }
        });

        menuLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); 
                
                menuLinks.forEach(l => l.classList.remove('active'));
                
                link.classList.add('active');

                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('active');
                }
            });
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                sidebar.classList.remove('active');
            }
        });
    });
}