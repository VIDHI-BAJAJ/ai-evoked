// Logo Section Start
    // Logo data - Replace these with your actual logo image paths
        const logos = [
            { name: 'Company 1', src: 'https://via.placeholder.com/180x60/667eea/ffffff?text=Logo+1' },
            { name: 'Company 2', src: 'https://via.placeholder.com/180x60/f093fb/ffffff?text=Logo+2' },
            { name: 'Company 3', src: 'https://via.placeholder.com/180x60/4facfe/ffffff?text=Logo+3' },
            { name: 'Company 4', src: 'https://via.placeholder.com/180x60/43e97b/ffffff?text=Logo+4' },
            { name: 'Company 5', src: 'https://via.placeholder.com/180x60/667eea/ffffff?text=Logo+5' },
            { name: 'Company 6', src: 'https://via.placeholder.com/180x60/f093fb/ffffff?text=Logo+6' }
        ];

        // Create logo element
        function createLogoElement(logo) {
            return `
                <div class="logo-item">
                    <img src="${logo.src}" alt="${logo.name}" loading="lazy">
                </div>
            `;
        }

        // Initialize carousel
        function initCarousel() {
            const track = document.getElementById('logoTrack');
            
            // Create two sets of logos for seamless infinite scroll
            const logosHTML = logos.map(logo => createLogoElement(logo)).join('');
            track.innerHTML = logosHTML + logosHTML;
        }

        // Adjust animation speed based on screen size
        function adjustAnimationSpeed() {
            const track = document.getElementById('logoTrack');
            const screenWidth = window.innerWidth;
            
            let duration;
            if (screenWidth < 480) {
                duration = 20;
            } else if (screenWidth < 768) {
                duration = 25;
            } else {
                duration = 30;
            }
            
            track.style.animationDuration = `${duration}s`;
        }

        // Initialize on load
        document.addEventListener('DOMContentLoaded', () => {
            initCarousel();
            adjustAnimationSpeed();
        });

        // Adjust on resize
        window.addEventListener('resize', adjustAnimationSpeed);


// Testimonals Section Start
 // Testimonial data for first row
        const testimonialsRow1 = [
            {
                text: "The sound quality is extraordinary. Every note, every beat, and every nuance comes through with stunning clarity and depth. The active noise cancellation is top-notch, effortlessly drowning out background noise.",
                author: "Seddik walid",
                role: "Product Designer",
                color: "pink"
            },
            {
                text: "Excelente producto, fácil de enlazar y me gustó que tiene un botón que es para reducción de ruido pero también al oprimirlo te permite escuchar lo que se escucha en tu entorno.",
                author: "Seddik walid",
                role: "Product Designer",
                color: "light"
            },
            {
                text: "Very nice headphones, deep rich sound quality and clear without distortion. Easy blue tooth connection with my iPhone. A little expensive, but I am still happy with the purchase as I bought them on sale. Very comfortable when wearing, excellent build quality.",
                author: "Seddik walid",
                role: "Product Designer",
                color: "peach"
            },
            {
                text: "Excelente producto, fácil de enlazar y me gustó que tiene un botón que es para reducción de ruido pero también al oprimirlo te permite escuchar lo que se escucha en tu entorno.",
                author: "Seddik walid",
                role: "Product Designer",
                color: "light"
            }
        ];

        // Testimonial data for second row
        const testimonialsRow2 = [
            {
                text: "I cae enlazar y me gustó que tiene un botón que es para reducción de ruido pero también al oprimirlo te permite escuchar lo que se escucha en tu entorno.",
                author: "Seddik walid",
                role: "Product Designer",
                color: "light"
            },
            {
                text: "The sound quality is extraordinary. Every note, every beat, and every nuance comes through with stunning clarity and depth. The active noise cancellation is top-notch, effortlessly drowning out background noise.",
                author: "Seddik walid",
                role: "Product Designer",
                color: "pink"
            },
            {
                text: "Excelente producto, fácil de enlazar y me gustó que tiene un botón que es para reducción de ruido pero también al oprimirlo te permite escuchar lo que se escucha en tu entorno.",
                author: "Seddik walid",
                role: "Product Designer",
                color: "blue"
            },
            {
                text: "Very nice headphones, deep rich sound quality and clear without distortion. Easy blue tooth connection with my iPhone. A little expensive, but I am still happy with the purchase as I bought them on sale. Very comfortable when wearing, excellent build quality.",
                author: "Seddik walid",
                role: "Product Designer",
                color: "peach"
            }
        ];

        // Function to create testimonial card
        function createCard(testimonial) {
            const initials = testimonial.author.split(' ').map(n => n[0]).join('');
            
            return `
                <div class="testimonial-card ${testimonial.color}">
                    <div class="card-label">Testimonial</div>
                    <p class="card-text">${testimonial.text}</p>
                    <div class="card-author">
                        <div class="author-avatar">${initials}</div>
                        <div class="author-info">
                            <div class="author-name">${testimonial.author}</div>
                            <div class="author-role">${testimonial.role}</div>
                        </div>
                    </div>
                    <div class="quote-icon">"</div>
                </div>
            `;
        }

        // Populate and duplicate cards for infinite scroll
        function populateRow(rowId, testimonials) {
            const wrapper = document.getElementById(rowId);
            let cardsHTML = '';
            
            // Create cards 3 times for seamless infinite scroll
            for (let i = 0; i < 3; i++) {
                testimonials.forEach(testimonial => {
                    cardsHTML += createCard(testimonial);
                });
            }
            
            wrapper.innerHTML = cardsHTML;
        }

        // Initialize both rows
        populateRow('row1', testimonialsRow1);
        populateRow('row2', testimonialsRow2);

        // Pause animation on hover for better UX
        const scrollContainers = document.querySelectorAll('.scroll-container');
        scrollContainers.forEach(container => {
            container.addEventListener('mouseenter', () => {
                container.querySelector('.scroll-wrapper').style.animationPlayState = 'paused';
            });
            
            container.addEventListener('mouseleave', () => {
                container.querySelector('.scroll-wrapper').style.animationPlayState = 'running';
            });
        });

// Testimonals End

// How it works Start
   // Handle graph image errors with placeholders
        const graphs = [
            { id: 'graph1', color: '#3b82f6' },
            { id: 'graph2', color: '#60a5fa' },
            { id: 'graph3', color: '#3b82f6' }
        ];

        graphs.forEach(graph => {
            const img = document.getElementById(graph.id);
            img.onerror = function() {
                this.style.display = 'none';
                const placeholder = document.createElement('div');
                placeholder.style.cssText = `
                    width: 100%;
                    height: 140px;
                    background: linear-gradient(135deg, ${graph.color}20 0%, ${graph.color}10 100%);
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: ${graph.color};
                    font-size: 0.9rem;
                    font-weight: 500;
                `;
                placeholder.innerHTML = `
                    <svg width="60" height="40" viewBox="0 0 60 40">
                        <rect x="5" y="30" width="8" height="10" fill="${graph.color}" opacity="0.3" rx="2"/>
                        <rect x="15" y="25" width="8" height="15" fill="${graph.color}" opacity="0.5" rx="2"/>
                        <rect x="25" y="20" width="8" height="20" fill="${graph.color}" opacity="0.7" rx="2"/>
                        <rect x="35" y="15" width="8" height="25" fill="${graph.color}" rx="2"/>
                        <rect x="45" y="10" width="8" height="30" fill="${graph.color}" opacity="0.8" rx="2"/>
                    </svg>
                `;
                this.parentNode.appendChild(placeholder);
            };
        });

        // Add smooth scroll for "How It Works" link
        document.querySelector('.how-it-works-link').addEventListener('click', (e) => {
            e.preventDefault();
            console.log('How It Works clicked');
            // Add your navigation logic here
        });

        // Add card hover effects
        const cards = document.querySelectorAll('.feature-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                const icon = card.querySelector('.card-icon');
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            });
            
            card.addEventListener('mouseleave', () => {
                const icon = card.querySelector('.card-icon');
                icon.style.transform = 'scale(1) rotate(0deg)';
            });
        });
// How it works End
//   Cta Section Start 
  
  // Add interactive effects
        const ctaButton = document.getElementById('ctaButton');
        const ctaSection = document.querySelector('.cta-section');

        // Parallax effect on mouse move
        ctaSection.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { offsetWidth, offsetHeight } = ctaSection;
            
            const xPos = (clientX / offsetWidth - 0.5) * 20;
            const yPos = (clientY / offsetHeight - 0.5) * 20;
            
            const blob1 = document.querySelector('.blob-1');
            const blob2 = document.querySelector('.blob-2');
            
            blob1.style.transform = `translate(${xPos}px, ${yPos}px)`;
            blob2.style.transform = `translate(${-xPos}px, ${-yPos}px)`;
        });

        // Button click effect
        ctaButton.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = ctaButton.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s ease-out';
            
            ctaButton.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Add your action here
            console.log('CTA Button clicked!');
        });

        // Add ripple animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });

        observer.observe(ctaSection);

