document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('.about-form');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    forms.forEach((form) => {
        const fields = Array.from(form.querySelectorAll('input, select'));
        const submitButton = form.querySelector('button[type="submit"]');

        const validateField = (field) => {
            const errorId = `${field.id}-error`;
            const errorElement = document.getElementById(errorId);
            const fieldValue = field.value.trim();

            let isValid = true;

            if (field.required && fieldValue === '') {
                isValid = false;
            }

            if (field.type === 'email' && fieldValue !== '' && !emailPattern.test(fieldValue)) {
                isValid = false;
            }

            if (field.tagName === 'SELECT' && fieldValue === '') {
                isValid = false;
            }

            if (errorElement) {
                errorElement.hidden = isValid;
            }

            return isValid;
        };

        fields.forEach((field) => {
            field.addEventListener('input', () => validateField(field));
            field.addEventListener('blur', () => validateField(field));
        });

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            let isFormValid = true;

            fields.forEach((field) => {
                if (!validateField(field)) {
                    isFormValid = false;
                }
            });

            if (!isFormValid) {
                return;
            }

            form.reset();

            if (submitButton) {
                const originalText = submitButton.textContent;
                submitButton.textContent = 'Message sent!';
                submitButton.disabled = true;

                window.setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                }, 2000);
            }
        });
    });
});
