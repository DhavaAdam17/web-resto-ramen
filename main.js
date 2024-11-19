// navbar

// Get modal elements
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');

// Get button elements
const loginBtn = document.querySelector('.login-btn');
const registerBtn = document.querySelector('.register-btn');

// Get close elements
const closeElements = document.querySelectorAll('.close');

// Open login modal
loginBtn.addEventListener('click', () => {
  loginModal.style.display = 'flex';
});

// Open register modal
registerBtn.addEventListener('click', () => {
  registerModal.style.display = 'flex';
});

// Close modals
closeElements.forEach(close => {
  close.addEventListener('click', () => {
    loginModal.style.display = 'none';
    registerModal.style.display = 'none';
  });
});

// Close modals when clicking outside of the modal
window.addEventListener('click', (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = 'none';
  }
  if (e.target === registerModal) {
    registerModal.style.display = 'none';
  }
});

// fitur chat admin

// JavaScript for Chat Feature
document.addEventListener('DOMContentLoaded', () => {
  const chatBox = document.getElementById('chat-box');
  const whatsappLink = document.getElementById('whatsapp-link');
  const chatInput = document.getElementById('chat-input');
  const chatForm = document.getElementById('chat-form');
  const closeChat = document.getElementById('close-chat');

  // Show Chat Box
  whatsappLink.addEventListener('click', (e) => {
    e.preventDefault();
    chatBox.style.display = 'flex';
  });

  // Close Chat Box
  closeChat.addEventListener('click', () => {
    chatBox.style.display = 'none';
  });

  // Submit Chat
  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = chatInput.value.trim();
    if (message) {
      const whatsappURL = `https://wa.me/6281224942513?text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, '_blank');
      chatInput.value = '';
    }
  });
});

document.querySelector(".hamburger-menu").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav-links").classList.toggle("active");
});

// contact us

function showAlert() {
  alert("Your message has been successfully sent. Thank you!");
  return false; // Prevent actual form submission
}

// lokasi adam ramen

function showMap(location) {
  const map = document.getElementById('map');
  let mapSrc = '';

  switch (location) {
      case 'jakarta':
          mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126916.18017049923!2d106.68943169999999!3d-6.229728599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f153ba0c928d%3A0x401576d14fedc50!2sJakarta!5e0!3m2!1sen!2sid!4v1631441526827!5m2!1sen!2sid';
          break;
      case 'bandung':
          mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126908.02290263784!2d107.5796574!3d-6.9147445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7c1f2d16ec7%3A0x400b7cdb7e482d0!2sBandung!5e0!3m2!1sen!2sid!4v1631441526827!5m2!1sen!2sid';
          break;
      case 'surabaya':
          mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127724.72525530594!2d112.619204!3d-7.2574725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f93cde647c9b%3A0xf8ef3e4b7db2147b!2sSurabaya!5e0!3m2!1sen!2sid!4v1631441526827!5m2!1sen!2sid';
          break;

          case 'bekasi':
              mapSrc = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d126840.73496590207!2d107.4266112!3d-6.5503232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e93f6547c727%3A0x93740c3087a0ef2f!2sHarapan%20Indah%20Bekasi!5e0!3m2!1sid!2sid!4v1731907563495!5m2!1sid!2sid'
              break;
      default:
          mapSrc = '';
  }

  if (mapSrc) {
      map.src = mapSrc;
  }
}

