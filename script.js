// accordion menu toggle function.
document.querySelectorAll('.accordion-btn').forEach(button => {
    button.addEventListener('click', () => {
        const list = button.parentElement;
        list.classList.toggle('active');
    });
});