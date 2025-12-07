// script.js - Figure Vault Anime Figurines Marketplace

// Sample figurine data with Philippine Peso prices
const figurinesData = [
    {
        id: 1,
        title: "Naruto Uzumaki",
        series: "Naruto Shippuden",
        price: 4599.99,
        image:  "https://mattsboxph.com/cdn/shop/files/29889_2770581_5.jpg?v=1750609587",
        description: "Limited edition Naruto in Sage Mode pose"
    },
    {
        id: 2,
        title: "Sailor Moon",
        series: "Sailor Moon Crystal",
        price: 6499.99,
        image: "https://m.media-amazon.com/images/I/61OZLYNsojL.jpg",
        description: "Glitter version with light-up moon rod"
    },
    {
        id: 3,
        title: "Levi Ackerman",
        series: "Attack on Titan",
        price: 7899.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnNgbgh8FW1ma6X_ppxiRtwGsF3evDLrQTkg&s",
        description: "Premium Levi with ODM gear and display base"
    },
    {
        id: 4,
        title: "Deku",
        series: "My Hero Academia",
        price: 4199.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSniSWRwVWkzgnlfCB7OZeY-6I6Ap_ata6w_Q&ss://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Izuku Midoriya in hero costume, season 5"
    },
    {
        id: 5,
        title: "Goku Ultra Instinct",
        series: "Dragon Ball Super",
        price: 10599.99,
        image: "https://tse3.mm.bing.net/th/id/OIP.C4zyVXekffIT7mGfIWJJpwHaKe?pid=Api&P=0&h=180",
        description: "Mastered Ultra Instinct Goku with aura effect"
    },
    {
        id: 6,
        title: "Killua Zoldyck",
        series: "Hunter x Hunter",
        price: 6899.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWjx4_BA5UdaVWVe7X2JHx4F6mzStiyN9acQ&s",
        description: "Killua with yo-yos and lightning effects"
    }
];

// User data (for demo purposes)
let currentUser = null;

// Initialize the application when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Figure Vault website initialized');
    
    // Check if user is already logged in
    checkLoggedInUser();
    
    // Populate figurines
    populateFigurines();
    
    // Set up authentication handlers
    setupAuthHandlers();
    
    // Set up button interactions
    setupButtonInteractions();
    
    // Set up navigation active state
    setupNavigation();
    
    // Fix for any external script errors
    window.solveSimpleChallenge = function() {
        console.log('solveSimpleChallenge called - this is a dummy function');
        return true;
    };
});

// Populate figurines on the page
function populateFigurines() {
    const figurinesGrid = document.querySelector('.figurines-grid');
    
    if (!figurinesGrid) {
        console.error('Figurines grid not found');
        return;
    }
    
    figurinesGrid.innerHTML = '';
    
    figurinesData.forEach(figurine => {
        const figurineCard = createFigurineCard(figurine);
        figurinesGrid.appendChild(figurineCard);
    });
    
    console.log(`Loaded ${figurinesData.length} figurines`);
}

// Create a figurine card element
function createFigurineCard(figurine) {
    const card = document.createElement('div');
    card.className = 'figurine-card';
    card.dataset.id = figurine.id;
    
    card.innerHTML = `
        <img src="${figurine.image}" alt="${figurine.title} Figurine" class="figurine-img">
        <div class="figurine-info">
            <h3 class="figurine-title">${figurine.title}</h3>
            <span class="figurine-series">${figurine.series}</span>
            <div class="figurine-price">${figurine.price.toFixed(2)}</div>
            <p class="figurine-description">${figurine.description}</p>
            <div class="figurine-actions">
                <button class="btn btn-buy" data-id="${figurine.id}">Buy Now</button>
                <button class="btn btn-sell" data-id="${figurine.id}">Make Offer</button>
            </div>
        </div>
    `;
    
    return card;
}

// Set up authentication form handlers
function setupAuthHandlers() {
    console.log('Setting up auth handlers');
    
    // Get elements
    const openSignupBtn = document.getElementById('openSignup');
    const openLoginBtn = document.getElementById('openLogin');
    const closeSignupBtn = document.getElementById('closeSignup');
    const closeLoginBtn = document.getElementById('closeLogin');
    const signupOverlay = document.getElementById('signupOverlay');
    const loginOverlay = document.getElementById('loginOverlay');
    const switchToLogin = document.getElementById('switchToLogin');
    const switchToSignup = document.getElementById('switchToSignup');
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    
    // Check if elements exist
    if (!openSignupBtn || !openLoginBtn) {
        console.warn('Some auth elements not found');
    }
    
    // Open signup form
    if (openSignupBtn) {
        openSignupBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (signupOverlay) signupOverlay.style.display = 'flex';
        });
    }
    
    // Open login form
    if (openLoginBtn) {
        openLoginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (loginOverlay) loginOverlay.style.display = 'flex';
        });
    }
    
    // Close signup form
    if (closeSignupBtn) {
        closeSignupBtn.addEventListener('click', function() {
            if (signupOverlay) signupOverlay.style.display = 'none';
        });
    }
    
    // Close login form
    if (closeLoginBtn) {
        closeLoginBtn.addEventListener('click', function() {
            if (loginOverlay) loginOverlay.style.display = 'none';
        });
    }
    
    // Switch to login form
    if (switchToLogin) {
        switchToLogin.addEventListener('click', function(e) {
            e.preventDefault();
            if (signupOverlay) signupOverlay.style.display = 'none';
            if (loginOverlay) loginOverlay.style.display = 'flex';
        });
    }
    
    // Switch to signup form
    if (switchToSignup) {
        switchToSignup.addEventListener('click', function(e) {
            e.preventDefault();
            if (loginOverlay) loginOverlay.style.display = 'none';
            if (signupOverlay) signupOverlay.style.display = 'flex';
        });
    }
    
    // Close forms when clicking outside
    window.addEventListener('click', function(e) {
        if (signupOverlay && e.target === signupOverlay) {
            signupOverlay.style.display = 'none';
        }
        if (loginOverlay && e.target === loginOverlay) {
            loginOverlay.style.display = 'none';
        }
    });
    
    // Form submissions
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
}

// Handle signup form submission
function handleSignup(e) {
    e.preventDefault();
    
    // Get form values
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    
    // Simple validation
    if (password !== confirmPassword) {
        showNotification('Passwords do not match!', 'error');
        return;
    }
    
    if (password.length < 6) {
        showNotification('Password must be at least 6 characters long!', 'error');
        return;
    }
    
    if (!username || !email) {
        showNotification('Please fill in all fields!', 'error');
        return;
    }
    
    // Create user object
    currentUser = {
        username,
        email,
        joinedDate: new Date().toISOString()
    };
    
    // Save to localStorage for demo purposes
    try {
        localStorage.setItem('figureVaultUser', JSON.stringify(currentUser));
    } catch (e) {
        console.warn('LocalStorage not available:', e);
    }
    
    // Show success message
    showNotification(`Account created successfully, ${username}! Welcome to Figure Vault.`, 'success');
    
    // Update UI to show logged in state
    updateUserUI();
    
    // Close form
    const signupOverlay = document.getElementById('signupOverlay');
    if (signupOverlay) signupOverlay.style.display = 'none';
    
    // Reset form
    e.target.reset();
}

// Handle login form submission
function handleLogin(e) {
    e.preventDefault();
    
    // Get form values
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simple validation
    if (!email || !password) {
        showNotification('Please fill in all fields!', 'error');
        return;
    }
    
    // For demo purposes, check if user exists in localStorage
    let savedUser = null;
    try {
        savedUser = localStorage.getItem('figureVaultUser');
    } catch (e) {
        console.warn('LocalStorage not available:', e);
    }
    
    if (savedUser) {
        try {
            const user = JSON.parse(savedUser);
            
            // Check if email matches (in a real app, you'd check password too)
            if (user.email === email) {
                currentUser = user;
                showNotification(`Login successful! Welcome back, ${user.username}.`, 'success');
                
                // Update UI to show logged in state
                updateUserUI();
                
                // Close form
                const loginOverlay = document.getElementById('loginOverlay');
                if (loginOverlay) loginOverlay.style.display = 'none';
                
                // Reset form
                e.target.reset();
                return;
            }
        } catch (e) {
            console.error('Error parsing user data:', e);
        }
    }
    
    // If no saved user or email doesn't match, create a demo user
    const username = email.split('@')[0] || 'User';
    currentUser = {
        username,
        email,
        joinedDate: new Date().toISOString()
    };
    
    // Save to localStorage for demo purposes
    try {
        localStorage.setItem('figureVaultUser', JSON.stringify(currentUser));
    } catch (e) {
        console.warn('LocalStorage not available:', e);
    }
    
    showNotification(`Login successful! Welcome to Figure Vault, ${username}.`, 'success');
    
    // Update UI to show logged in state
    updateUserUI();
    
    // Close form
    const loginOverlay = document.getElementById('loginOverlay');
    if (loginOverlay) loginOverlay.style.display = 'none';
    
    // Reset form
    e.target.reset();
}

// Update UI to reflect logged in state
function updateUserUI() {
    const userActions = document.querySelector('.user-actions');
    
    if (!userActions) {
        console.warn('User actions element not found');
        return;
    }
    
    if (!currentUser) {
        // Show login/signup buttons
        userActions.innerHTML = `
            <a href="#" class="signup-btn" id="openSignup">Sign Up</a>
            <a href="#" class="login-btn" id="openLogin">Log In</a>
        `;
        // Reattach event listeners
        setupAuthHandlers();
        return;
    }
    
    // Create user profile element
    const userProfile = document.createElement('div');
    userProfile.className = 'user-profile';
    userProfile.innerHTML = `
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${currentUser.username}" alt="${currentUser.username}">
        <span>${currentUser.username}</span>
        <div class="user-dropdown" style="display: none;">
            <a href="#"><i class="fas fa-user"></i> My Profile</a>
            <a href="#"><i class="fas fa-box"></i> My Listings</a>
            <a href="#"><i class="fas fa-shopping-cart"></i> My Cart</a>
            <a href="#" id="logoutBtn"><i class="fas fa-sign-out-alt"></i> Logout</a>
        </div>
    `;
    
    // Replace signup/login buttons with user profile
    userActions.innerHTML = '';
    userActions.appendChild(userProfile);
    
    // Add dropdown functionality
    const userProfileElement = document.querySelector('.user-profile');
    if (userProfileElement) {
        userProfileElement.addEventListener('click', function(e) {
            e.stopPropagation();
            const dropdown = this.querySelector('.user-dropdown');
            if (dropdown) {
                dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
            }
        });
    }
    
    // Add logout functionality
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            logoutUser();
        });
    }
    
    // Close dropdown when clicking elsewhere
    document.addEventListener('click', function() {
        const dropdowns = document.querySelectorAll('.user-dropdown');
        dropdowns.forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    });
}

// Log out user
function logoutUser() {
    currentUser = null;
    try {
        localStorage.removeItem('figureVaultUser');
    } catch (e) {
        console.warn('LocalStorage not available:', e);
    }
    
    showNotification('You have been logged out.', 'info');
    
    // Update UI to show signup/login buttons
    updateUserUI();
}

// Set up button interactions
function setupButtonInteractions() {
    console.log('Setting up button interactions');
    
    // Start selling button
    const startSellingBtn = document.getElementById('startSellingBtn');
    if (startSellingBtn) {
        startSellingBtn.addEventListener('click', function() {
            if (!currentUser) {
                showNotification('Please log in or sign up to start selling!', 'warning');
                const openSignup = document.getElementById('openSignup');
                if (openSignup) openSignup.click();
                return;
            }
            
            showNotification('Redirecting to seller dashboard...', 'success');
            // In a real app, this would redirect to the seller dashboard
            setTimeout(() => {
                alert('In a real application, this would open the seller interface where you can list your figurines for sale.');
            }, 500);
        });
    }
    
    // Buy/Sell button interactions for figurine cards (delegated)
    document.addEventListener('click', function(e) {
        // Buy button
        if (e.target.classList.contains('btn-buy') || e.target.closest('.btn-buy')) {
            const btn = e.target.classList.contains('btn-buy') ? e.target : e.target.closest('.btn-buy');
            const figurineId = btn.dataset.id;
            const figurine = figurinesData.find(f => f.id == figurineId);
            
            if (!figurine) {
                console.error('Figurine not found with ID:', figurineId);
                return;
            }
            
            if (!currentUser) {
                showNotification('Please log in or sign up to make a purchase!', 'warning');
                const openLogin = document.getElementById('openLogin');
                if (openLogin) openLogin.click();
                return;
            }
            
            showNotification(`Added "${figurine.title}" to your cart for ₱${figurine.price.toFixed(2)}!`, 'success');
            
            // In a real app, this would add to cart
            console.log('Added to cart:', figurine);
        }
        
        // Make offer button
        if (e.target.classList.contains('btn-sell') || e.target.closest('.btn-sell')) {
            const btn = e.target.classList.contains('btn-sell') ? e.target : e.target.closest('.btn-sell');
            const figurineId = btn.dataset.id;
            const figurine = figurinesData.find(f => f.id == figurineId);
            
            if (!figurine) {
                console.error('Figurine not found with ID:', figurineId);
                return;
            }
            
            if (!currentUser) {
                showNotification('Please log in or sign up to make an offer!', 'warning');
                const openSignup = document.getElementById('openSignup');
                if (openSignup) openSignup.click();
                return;
            }
            
            const offer = prompt(`Make an offer for "${figurine.title}" (Current price: ₱${figurine.price.toFixed(2)})`, Math.round(figurine.price * 0.8));
            
            if (offer) {
                const offerAmount = parseFloat(offer);
                if (isNaN(offerAmount)) {
                    showNotification('Please enter a valid amount!', 'error');
                    return;
                }
                
                showNotification(`Your offer of ₱${offerAmount.toFixed(2)} for "${figurine.title}" has been submitted!`, 'success');
                console.log('Offer made:', { figurine, offer: offerAmount });
            }
        }
    });
}

// Set up navigation active state
function setupNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    
    if (!navLinks.length) {
        console.warn('No navigation links found');
        return;
    }
    
    // Set active link on click
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only for anchor links
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                
                // Add active class to clicked link
                this.classList.add('active');
                
                // Scroll to section if not '#'
                if (href !== '#') {
                    const targetSection = document.querySelector(href);
                    if (targetSection) {
                        window.scrollTo({
                            top: targetSection.offsetTop - 100,
                            behavior: 'smooth'
                        });
                    }
                }
            }
        });
    });
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Add styles for notification if not already added
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                padding: 15px 20px;
                border-radius: 10px;
                color: white;
                font-weight: 600;
                display: flex;
                align-items: center;
                justify-content: space-between;
                min-width: 300px;
                max-width: 400px;
                z-index: 3000;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
                animation: slideIn 0.3s ease-out;
            }
            
            .notification-info {
                background: linear-gradient(90deg, #2d2b55, #3a3780);
                border-left: 4px solid var(--accent);
            }
            
            .notification-success {
                background: linear-gradient(90deg, #28a745, #34ce57);
                border-left: 4px solid #1e7e34;
            }
            
            .notification-error {
                background: linear-gradient(90deg, #dc3545, #e4606d);
                border-left: 4px solid #bd2130;
            }
            
            .notification-warning {
                background: linear-gradient(90deg, #ffc107, #ffce3a);
                border-left: 4px solid #d39e00;
                color: #212529;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: inherit;
                font-size: 1.5rem;
                cursor: pointer;
                margin-left: 15px;
                padding: 0;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Add close functionality
    const closeBtn = notification.querySelector('.notification-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            notification.remove();
        });
    }
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification && notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Check if user is already logged in (on page load)
function checkLoggedInUser() {
    let savedUser = null;
    try {
        savedUser = localStorage.getItem('figureVaultUser');
    } catch (e) {
        console.warn('LocalStorage not available:', e);
        return;
    }
    
    if (savedUser) {
        try {
            currentUser = JSON.parse(savedUser);
            updateUserUI();
        } catch (e) {
            console.error('Error parsing saved user data:', e);
            // Clear corrupted data
            try {
                localStorage.removeItem('figureVaultUser');
            } catch (e2) {
                console.warn('Could not clear localStorage:', e2);
            }
        }
    }
}

// Currency formatting function (if needed elsewhere)
function formatCurrency(amount) {
    return '₱' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Make functions available globally for debugging if needed
window.figureVault = {
    populateFigurines,
    setupAuthHandlers,
    updateUserUI,
    logoutUser,
    showNotification,
    checkLoggedInUser
};

console.log('Figure Vault JavaScript loaded successfully');