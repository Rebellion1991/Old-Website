// Contact form handler with custom popup modal feedback
window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('fs-frm');
  const hiddenIframe = document.getElementById('hidden-iframe');
  
  if (!form || !hiddenIframe) {
    console.error('Required elements not found');
    return;
  }
  
  console.log('Contact form found, setting up handler with popup feedback');
  
  // Create modal elements if they don't exist
  if (!document.getElementById('form-feedback-modal')) {
    createFeedbackModal();
  }
  
  // Get modal elements
  const modal = document.getElementById('form-feedback-modal');
  const modalTitle = document.getElementById('form-feedback-modal-title');
  const modalBody = document.getElementById('form-feedback-modal-body');
  const modalCloseBtn = document.getElementById('form-feedback-modal-close');
  
  // Close modal when close button is clicked
  modalCloseBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });
  
  // Close modal when clicking outside of it
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
  
  // Set up form submission handler
  form.addEventListener('submit', function() {
    // Show loading spinner when form is submitted
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';
    
    // Show loading modal
    modalTitle.textContent = 'Sending Message';
    modalBody.innerHTML = `
      <div class="d-flex align-items-center justify-content-center">
        <div class="spinner-border text-primary me-3" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mb-0">Sending your message...</p>
      </div>
    `;
    modal.style.display = 'block';
  });
  
  // Set up iframe load handler
  hiddenIframe.addEventListener('load', function() {
    // This fires when the form submission completes and iframe loads
    const submitButton = form.querySelector('button[type="submit"]');
    
    try {
      // Check if iframe has loaded with a success message
      const iframeContent = hiddenIframe.contentDocument || hiddenIframe.contentWindow.document;
      const iframeText = iframeContent.body.innerText || '';
      
      // Check if the iframe contains success message
      if (iframeText.includes('success') || iframeText.includes('thank')) {
        // Success message
        modalTitle.textContent = 'Success!';
        modalBody.innerHTML = `
          <div class="text-center">
            <div class="mb-3">
              <svg class="text-success" width="64" height="64" role="img" aria-label="Success:">
                <use xlink:href="#check-circle-fill"/>
              </svg>
            </div>
            <p>Thank you for your message!</p>
            <p>I'll get back to you as soon as possible.</p>
          </div>
        `;
        
        // Reset the form
        form.reset();
      } else {
        // Error message
        modalTitle.textContent = 'Error';
        modalBody.innerHTML = `
          <div class="text-center">
            <div class="mb-3">
              <svg class="text-danger" width="64" height="64" role="img" aria-label="Error:">
                <use xlink:href="#exclamation-triangle-fill"/>
              </svg>
            </div>
            <p>There was a problem submitting your form.</p>
            <p>Please try again or contact me directly.</p>
          </div>
        `;
      }
    } catch (error) {
      console.error('Error checking iframe content:', error);
      
      // Assume success if we can't check the iframe content (cross-origin restrictions)
      modalTitle.textContent = 'Success!';
      modalBody.innerHTML = `
        <div class="text-center">
          <div class="mb-3">
            <svg class="text-success" width="64" height="64" role="img" aria-label="Success:">
              <use xlink:href="#check-circle-fill"/>
            </svg>
          </div>
          <p>Thank you for your message!</p>
          <p>I'll get back to you as soon as possible.</p>
        </div>
      `;
      
      // Reset the form
      form.reset();
    } finally {
      // Re-enable the submit button
      submitButton.disabled = false;
      submitButton.innerHTML = 'Send Message';
      
      // Ensure modal is visible
      modal.style.display = 'block';
    }
  });
  
  // Function to create the feedback modal
  function createFeedbackModal() {
    // Create modal container
    const modalContainer = document.createElement('div');
    modalContainer.id = 'form-feedback-modal';
    modalContainer.className = 'modal';
    modalContainer.setAttribute('role', 'dialog');
    modalContainer.setAttribute('aria-modal', 'true');
    modalContainer.style.display = 'none';
    modalContainer.style.position = 'fixed';
    modalContainer.style.zIndex = '1050';
    modalContainer.style.left = '0';
    modalContainer.style.top = '0';
    modalContainer.style.width = '100%';
    modalContainer.style.height = '100%';
    modalContainer.style.overflow = 'auto';
    modalContainer.style.backgroundColor = 'rgba(0,0,0,0.4)';
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.style.backgroundColor = '#fefefe';
    modalContent.style.margin = '15% auto';
    modalContent.style.padding = '20px';
    modalContent.style.border = '1px solid #888';
    modalContent.style.width = '80%';
    modalContent.style.maxWidth = '500px';
    modalContent.style.borderRadius = '5px';
    modalContent.style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2)';
    
    // Create modal header
    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';
    modalHeader.style.display = 'flex';
    modalHeader.style.alignItems = 'center';
    modalHeader.style.justifyContent = 'space-between';
    modalHeader.style.borderBottom = '1px solid #dee2e6';
    modalHeader.style.paddingBottom = '10px';
    modalHeader.style.marginBottom = '15px';
    
    // Create modal title
    const modalTitle = document.createElement('h5');
    modalTitle.id = 'form-feedback-modal-title';
    modalTitle.className = 'modal-title';
    modalTitle.style.margin = '0';
    modalTitle.textContent = 'Form Submission';
    
    // Create close button
    const closeButton = document.createElement('button');
    closeButton.id = 'form-feedback-modal-close';
    closeButton.type = 'button';
    closeButton.className = 'btn-close';
    closeButton.setAttribute('aria-label', 'Close');
    closeButton.style.cursor = 'pointer';
    closeButton.style.background = 'transparent';
    closeButton.style.border = '0';
    closeButton.style.fontSize = '1.5rem';
    closeButton.style.fontWeight = '700';
    closeButton.innerHTML = '&times;';
    
    // Create modal body
    const modalBody = document.createElement('div');
    modalBody.id = 'form-feedback-modal-body';
    modalBody.className = 'modal-body';
    
    // Assemble modal
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContainer.appendChild(modalContent);
    
    // Add modal to document
    document.body.appendChild(modalContainer);
  }
});
