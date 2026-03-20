/**
 * Form validation and simulated submission.
 * Handles both booking and contact forms.
 */
(function () {
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateForm(form) {
    var errors = [];
    var requiredFields = form.querySelectorAll('[required]');

    requiredFields.forEach(function (field) {
      var value = field.value.trim();
      var label = '';
      var labelEl = form.querySelector('label[for="' + field.id + '"]');
      if (labelEl) {
        label = labelEl.textContent.replace('*', '').trim();
      } else {
        label = field.name || field.id;
      }

      if (!value) {
        errors.push({ field: field.id, message: label + ' is required' });
      } else if (field.type === 'email' && !validateEmail(value)) {
        errors.push({ field: field.id, message: 'Please enter a valid email address' });
      }
    });

    return { valid: errors.length === 0, errors: errors };
  }

  function clearErrors(form) {
    var groups = form.querySelectorAll('.form-group');
    groups.forEach(function (group) {
      group.classList.remove('error');
      var msg = group.querySelector('.error-message');
      if (msg) msg.remove();
    });
  }

  function showErrors(form, errors) {
    errors.forEach(function (err) {
      var field = form.querySelector('#' + err.field);
      if (!field) return;
      var group = field.closest('.form-group');
      if (!group) return;

      group.classList.add('error');
      var msg = document.createElement('div');
      msg.className = 'error-message';
      msg.textContent = err.message;
      group.appendChild(msg);
    });
  }

  function showSuccess(form) {
    var card = form.closest('.form-card') || form;
    var successDiv = document.createElement('div');
    successDiv.className = 'form-success';
    successDiv.innerHTML = '<h3>\u2705 Thank you!</h3><p>Your message has been received. I\'ll get back to you soon.</p>';

    // Hide form fields, show success
    Array.prototype.slice.call(form.children).forEach(function (child) {
      child.style.display = 'none';
    });
    form.appendChild(successDiv);
  }

  function initForms() {
    var forms = ['#booking-form', '#contact-form'];

    forms.forEach(function (selector) {
      var form = document.querySelector(selector);
      if (!form) return;

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        clearErrors(form);

        var result = validateForm(form);
        if (result.valid) {
          showSuccess(form);
        } else {
          showErrors(form, result.errors);
        }
      });
    });
  }

  window.initForms = initForms;
  window.validateForm = validateForm;
  window.validateEmail = validateEmail;
})();
