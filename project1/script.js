document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.getElementById('navigation_cmka37rmg00003j772qqkd8o6');

    // Sample data for the food delivery menu
    const menuItems = [
        "🥗 Healthy Salads", 
        "🍔 Veggie Burgers", 
        "🥤 Fresh Smoothies", 
        "🍕 Thin Crust Pizza", 
        "🍲 Organic Soups", 
        "🍰 Low-Sugar Desserts"
    ];

    // Populate the main grid with cards
    menuItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'category-card';
        li.innerHTML = `<h3>${item}</h3><p>Explore Fresh Options</p>`;
        
        // Initial state for animation
        li.style.opacity = '0';
        li.style.transform = 'scale(0.9)';
        
        navContainer.appendChild(li);

        // Staggered reveal animation
        setTimeout(() => {
            li.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            li.style.opacity = '1';
            li.style.transform = 'scale(1)';
        }, index * 150);
    });

    // Simple click interaction
    navContainer.addEventListener('click', (e) => {
        const card = e.target.closest('.category-card');
        if (card) {
            card.style.backgroundColor = '#105235';
            setTimeout(() => {
                alert("Redirecting to " + card.querySelector('h3').innerText + "...");
            }, 100);
        }
    });
});