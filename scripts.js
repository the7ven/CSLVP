// Gestion des clics sur les images
        const imageItems = document.querySelectorAll('.image-item');
        
        imageItems.forEach(item => {
            item.addEventListener('click', () => {
                // Retirer la classe active de tous les éléments
                imageItems.forEach(img => img.classList.remove('active'));
                
                // Ajouter la classe active à l'élément cliqué
                item.classList.add('active');
                
                // Animation subtile au clic
                item.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    item.style.transform = 'scale(1)';
                }, 200);
            });
            
            // Effet de survol
            item.addEventListener('mouseenter', () => {
                if (!item.classList.contains('active')) {
                    item.style.transform = 'scale(1.01)';
                }
            });
            
            item.addEventListener('mouseleave', () => {
                if (!item.classList.contains('active')) {
                    item.style.transform = 'scale(1)';
                }
            });
        });

        // Animation d'entrée
        window.addEventListener('load', () => {
            imageItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    item.style.transition = 'all 0.6s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 100);
            });
        });



        class FurnitureSlider {
            constructor() {
                this.currentSlide = 0;
                this.totalSlides = 3;
                this.sliderWrapper = document.getElementById('sliderWrapper');
                this.prevBtn = document.getElementById('prevBtn');
                this.nextBtn = document.getElementById('nextBtn');
                this.dots = document.querySelectorAll('.dot');
                
                this.init();
            }
            
            init() {
                this.prevBtn.addEventListener('click', () => this.prevSlide());
                this.nextBtn.addEventListener('click', () => this.nextSlide());
                
                this.dots.forEach((dot, index) => {
                    dot.addEventListener('click', () => this.goToSlide(index));
                });
                
                // Auto-play
                setInterval(() => this.nextSlide(), 5000);
                
                // Touche pour mobile
                let startX = 0;
                let endX = 0;
                
                this.sliderWrapper.addEventListener('touchstart', (e) => {
                    startX = e.touches[0].clientX;
                });
                
                this.sliderWrapper.addEventListener('touchend', (e) => {
                    endX = e.changedTouches[0].clientX;
                    this.handleSwipe();
                });
            }
            
            handleSwipe() {
                const swipeThreshold = 50;
                const diff = startX - endX;
                
                if (Math.abs(diff) > swipeThreshold) {
                    if (diff > 0) {
                        this.nextSlide();
                    } else {
                        this.prevSlide();
                    }
                }
            }
            
            updateSlider() {
                const translateX = -this.currentSlide * 100;
                this.sliderWrapper.style.transform = `translateX(${translateX}%)`;
                
                this.dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === this.currentSlide);
                });
            }
            
            nextSlide() {
                this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
                this.updateSlider();
            }
            
            prevSlide() {
                this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
                this.updateSlider();
            }
            
            goToSlide(index) {
                this.currentSlide = index;
                this.updateSlider();
            }
        }
        
        // Initialisation su slider
        document.addEventListener('DOMContentLoaded', () => {
            new FurnitureSlider();
        });  
        
        

         function toggleFaq(element) {
            // Remove active class from all FAQ items
            const allFaqItems = document.querySelectorAll('.faq-item');
            allFaqItems.forEach(item => {
                if (item !== element) {
                    item.classList.remove('active');
                }
            });
            
            // Toggle active class on clicked item
            element.classList.toggle('active');
            
            // Add smooth animation
            element.style.transform = 'scale(0.98)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 150);
        }

        // Add hover effects and smooth interactions
        document.addEventListener('DOMContentLoaded', function() {
            const faqItems = document.querySelectorAll('.faq-item');
            
            faqItems.forEach(item => {
                item.addEventListener('mouseenter', function() {
                    if (!this.classList.contains('active')) {
                        this.style.transform = 'translateY(-2px)';
                    }
                });
                
                item.addEventListener('mouseleave', function() {
                    if (!this.classList.contains('active')) {
                        this.style.transform = 'translateY(0)';
                    }
                });
            });

            // Get Started button animation
            const getStartedBtn = document.querySelector('.get-started-btn');
            getStartedBtn.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
                
                // You can add your actual functionality here
                console.log('Get Started clicked!');
            });

            // Add subtle parallax effect to brand text
            window.addEventListener('scroll', function() {
                const brandText = document.querySelector('.brand-text');
                const scrolled = window.pageYOffset;
                brandText.style.transform = `translateY(${scrolled * 0.1}px)`;
            });
        });




       // Gestion du menu hamburger
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');

        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        // Fermer le menu mobile quand on clique sur un lien
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });

        // Fermer le menu mobile quand on redimensionne la fenêtre
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });

        // Fermer le menu mobile quand on clique à l'extérieur
        document.addEventListener('click', function(event) {
            const isClickInsideNav = event.target.closest('nav');
            const isClickInsideMobileMenu = event.target.closest('.mobile-menu');
            
            if (!isClickInsideNav && !isClickInsideMobileMenu) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });