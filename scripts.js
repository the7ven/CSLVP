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