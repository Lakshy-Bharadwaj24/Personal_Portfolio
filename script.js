
document.addEventListener('DOMContentLoaded', () => {
    
    // 1.  Navbar Scroll Effect: Navbar background will change when scrolling
    const header = document.querySelector('.nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {   
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
            header.style.padding = '1rem 9%';
        } else {
            header.style.boxShadow = 'none';
            header.style.padding = '1.5rem 9%';
        }
    });

    // 2.  Typing Effect: To display dynamic text in the hero section
    // <span class="typing"></span> For this you will have to add it to your HTML.
    const typingText = document.querySelector('.home .content p b');
    if (typingText) {
        const roles = ["Bireena InfoTech Intern", "Full Stack Developer", "Cloud Solutions Enthusiast"];
        let count = 0;
        let index = 0;
        let currentText = "";
        let letter = "";

        (function type() {
            if (count === roles.length) { count = 0; }
            currentText = roles[count];
            letter = currentText.slice(0, ++index);

            typingText.textContent = letter;
            if (letter.length === currentText.length) {
                count++;
                index = 0;
                setTimeout(type, 2000); // Pause after each roll
            } else {
                setTimeout(type, 100);
            }
        }());
    }

    // 3.  Scroll reveal animation: As you scroll down, components will appear smoothly
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply animation to cards and sections
    document.querySelectorAll('.skill-box, .project-card, .exp-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });

    // 4. Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 5.  Active link highlighting: Menus will be highlighted with scrolling
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('yellowColor');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('yellowColor');
            }
        });
    });

    // 6. Contact Form Success Message
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;
            
            btn.textContent = "Message Sent! ✓";
            btn.style.background = "#4bb543"; // Success Green
            contactForm.reset();

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = "#ffcc00"; // Back to your Yellow
            }, 3000);
        });
    }
});
    
    // --- 1. Mobile Menu Auto-Close Feature ---
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.querySelectorAll('.navbar li a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Clicking will check the checkbox and close the menu
            if (menuBtn.checked) {
                menuBtn.checked = false;
            }
        });
    });


// new add
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Putting the submit button in the loading state
            const btn = this.querySelector('button');
            const originalText = btn.textContent;
            btn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
            btn.disabled = true;

            // Fake delays to make the user think real work is being done
            setTimeout(() => {
                // Professional Popup
                showSuccessPopup("Message Sent Successfully! 🚀");

                // Form reset and button normalization
                this.reset();
                btn.innerHTML = 'Message Sent! <i class="fas fa-check"></i>';
                btn.style.background = '#27ae60';

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '#ffcc00';
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }
});

// Popup Function
function showSuccessPopup(message) {
    const popup = document.createElement('div');
    popup.className = 'professional-alert';
    popup.innerHTML = `
        <div class="alert-content">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
    `;
    document.body.appendChild(popup);

    // It will automatically delete itself after a four second.
    setTimeout(() => {
        popup.classList.add('alert-hide');
        setTimeout(() => popup.remove(), 500);
    }, 4000);
}
