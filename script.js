// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(faq => {
            faq.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// WhatsApp CTA Configuration
// Replace this with your actual WhatsApp business number (format: country code + number, no + or spaces)
const WHATSAPP_NUMBER = '254792265306'; // Replace with your actual number

// Customize your WhatsApp message
const getWhatsAppMessage = () => {
    return encodeURIComponent(
        `Hi! I'm interested in FunnelFlow Systems' services. I'd like to learn more about building high-converting funnels for my business.`
    );
};

// WhatsApp button click handler
const whatsappBtn = document.getElementById('whatsappBtn');

whatsappBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Track conversion (you can integrate with Google Analytics, Facebook Pixel, etc.)
    trackConversion();
    
    // Open WhatsApp
    const message = getWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');
});

// All CTA buttons should link to WhatsApp
const allCtaButtons = document.querySelectorAll('a[href="#contact"], .nav-cta');

allCtaButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const href = btn.getAttribute('href');
        
        if (href === '#contact') {
            e.preventDefault();
            
            // Smooth scroll to contact section
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Conversion tracking function
function trackConversion() {
    // Google Analytics (if integrated)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'whatsapp_click', {
            'event_category': 'engagement',
            'event_label': 'WhatsApp Click',
            'transport_type': "beacon"
        });
    }
    
    // Facebook Pixel (if integrated)
    if (typeof fbq !== 'undefined') {
        fbq('track', 'Contact');
    }
    
    // Console log for development
    console.log('Conversion tracked: WhatsApp CTA clicked');
}

// Spots remaining countdown (creates urgency)
const spotsElement = document.getElementById('spotsRemaining');
let spotsRemaining = 3;

// Simulate spots decreasing (in production, this should come from your backend)
function updateSpots() {
    // Get from localStorage or set initial value
    const storedSpots = localStorage.getItem('spotsRemaining');
    
    if (storedSpots) {
        spotsRemaining = parseInt(storedSpots);
    } else {
        // Random number between 2-4 for urgency
        spotsRemaining = Math.floor(Math.random() * 3) + 2;
        localStorage.setItem('spotsRemaining', spotsRemaining);
    }
    
    spotsElement.textContent = spotsRemaining;
    
    // Add animation
    spotsElement.style.animation = 'none';
    setTimeout(() => {
        spotsElement.style.animation = 'pulse 2s ease-in-out';
    }, 10);
}

updateSpots();

// Simulate spot decrease (optional - for demo purposes)
// In production, remove this and update based on actual bookings
setInterval(() => {
    if (Math.random() > 0.7 && spotsRemaining > 1) { // 30% chance every interval
        spotsRemaining--;
        localStorage.setItem('spotsRemaining', spotsRemaining);
        spotsElement.textContent = spotsRemaining;
        
        // Show notification (optional)
        showNotification();
    }
}, 60000); // Check every minute

// Show recent booking notification (social proof)
function showNotification() {
    const names = [
        'Sarah from New York',
        'Mike from California',
        'Jessica from Texas',
        'David from Florida',
        'Emma from Illinois'
    ];
    
    const randomName = names[Math.floor(Math.random() * names.length)];
    
    const notification = document.createElement('div');
    notification.className = 'booking-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-icon">✅</div>
            <div class="notification-text">
                <strong>${randomName}</strong> just booked a strategy call
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Add notification styles dynamically
const notificationStyles = `
    .booking-notification {
        position: fixed;
        bottom: 30px;
        left: 30px;
        background: white;
        padding: 16px 20px;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
        z-index: 9999;
        transform: translateX(-400px);
        transition: transform 0.3s ease;
        max-width: 300px;
        border: 2px solid #10b981;
    }
    
    .booking-notification.show {
        transform: translateX(0);
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 12px;
    }
    
    .notification-icon {
        font-size: 24px;
        flex-shrink: 0;
    }
    
    .notification-text {
        font-size: 14px;
        color: #0f172a;
        line-height: 1.4;
    }
    
    .notification-text strong {
        display: block;
        margin-bottom: 2px;
    }
    
    @media (max-width: 640px) {
        .booking-notification {
            left: 16px;
            right: 16px;
            max-width: none;
            bottom: 16px;
        }
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

// Show first notification after 10 seconds
setTimeout(() => {
    showNotification();
}, 10000);

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.pain-card, .service-card, .testimonial-card, .step');

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Handle smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (href !== '#' && href !== '#contact') {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add loading state to CTA buttons
const ctaButtons = document.querySelectorAll('.btn');

ctaButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        // Add subtle click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Track scroll depth for analytics
let maxScroll = 0;

window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    if (scrollPercent > maxScroll) {
        maxScroll = Math.floor(scrollPercent);
        
        // Track milestones
        if (maxScroll === 25 || maxScroll === 50 || maxScroll === 75 || maxScroll === 100) {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'scroll_depth', {
                    'event_category': 'Engagement',
                    'event_label': `${maxScroll}% Scrolled`,
                    'value': maxScroll
                });
            }
            console.log(`User scrolled ${maxScroll}% of the page`);
        }
    }
});

// Exit intent popup (optional - triggers when user is about to leave)
let exitIntentShown = false;

document.addEventListener('mouseleave', (e) => {
    if (e.clientY <= 0 && !exitIntentShown && window.scrollY > 500) {
        exitIntentShown = true;
        
        // Show exit intent offer (you can customize this)
        if (confirm('Wait! Before you go...\n\nGet a FREE funnel audit worth $297!\n\nClick OK to message us on WhatsApp now.')) {
            const message = encodeURIComponent(
                `Hi! I saw the exit popup and I'm interested in the FREE funnel audit offer!`
            );
            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
        }
        
        // Reset after 5 minutes
        setTimeout(() => {
            exitIntentShown = false;
        }, 300000);
    }
});

// Console message for developers
console.log('%c👋 Welcome to FunnelFlow Systems!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with conversion psychology and modern web standards.', 'color: #64748b; font-size: 14px;');
console.log('%c⚡ Ready to build your funnel? Contact us!', 'color: #10b981; font-size: 14px;');

// Performance monitoring
window.addEventListener('load', () => {
    // Calculate page load time
    const loadTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
    console.log(`Page loaded in ${loadTime}ms`);
    
    // Track in analytics if available
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_load_time', {
            'event_category': 'Performance',
            'event_label': 'Load Time',
            'value': loadTime
        });
    }
});



