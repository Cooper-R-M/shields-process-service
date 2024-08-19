import './index.css'
import 'flowbite'

document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        // Toggle the accordion content
        const content = button.nextElementSibling;
        content.classList.toggle('open');

        // Optional: Close other open contents
        document.querySelectorAll('.accordion-content').forEach(item => {
            if (item !== content) {
                item.classList.remove('open');
            }
        });
    });
});

