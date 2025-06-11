
// Main JavaScript file
// document.addEventListener('DOMContentLoaded', function() {
//     console.log('Portal de Serviços carregado');
    
//     // Initialize all modules
//     initializeServiceCards();
//     initializeContactInfo();
//     initializeBackButtons();
// });

// Service cards interactions
// function initializeServiceCards() {
//     const serviceCards = document.querySelectorAll('.service-card');
    
//     serviceCards.forEach(card => {
//         card.addEventListener('mouseenter', function() {
//             this.style.transform = 'translateY(-4px)';
//         });
        
//         card.addEventListener('mouseleave', function() {
//             this.style.transform = 'translateY(0)';
//         });
//     });
// }

// Contact information animations
// function initializeContactInfo() {
//     const contactCards = document.querySelectorAll('.info-card');
    
//     contactCards.forEach(card => {
//         card.addEventListener('click', function() {
//             const phone = this.querySelector('p').textContent;
//             if (phone.includes('(11)')) {
//                 navigator.clipboard.writeText(phone).then(() => {
//                     showToast('Telefone copiado para área de transferência');
//                 });
//             }
//         });
//     });
// }

// Back button functionality
// function initializeBackButtons() {
//     const backButtons = document.querySelectorAll('.back-button, .back-link');
    
//     backButtons.forEach(button => {
//         button.addEventListener('click', function(e) {
//             e.preventDefault();
//             window.history.back();
//         });
//     });
// }

// Toast notification system
// function showToast(message) {
//     const toast = document.createElement('div');
//     toast.className = 'toast';
//     toast.textContent = message;
//     toast.style.cssText = `
//         position: fixed;
//         top: 20px;
//         right: 20px;
//         background-color: #10b981;
//         color: white;
//         padding: 12px 24px;
//         border-radius: 8px;
//         box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//         z-index: 1000;
//         animation: slideIn 0.3s ease;
//     `;
    
//     document.body.appendChild(toast);
    
//     setTimeout(() => {
//         toast.style.animation = 'slideOut 0.3s ease';
//         setTimeout(() => {
//             document.body.removeChild(toast);
//         }, 300);
//     }, 3000);
// }

// Add CSS animations for toast
// const style = document.createElement('style');
// style.textContent = `
//     @keyframes slideIn {
//         from { transform: translateX(100%); opacity: 0; }
//         to { transform: translateX(0); opacity: 1; }
//     }
    
//     @keyframes slideOut {
//         from { transform: translateX(0); opacity: 1; }
//         to { transform: translateX(100%); opacity: 0; }
//     }
// `;
// document.head.appendChild(style);
