document.addEventListener('DOMContentLoaded', () => {
  initRouter();
  initEligibilityChecker();
  initChecklist();
  registerServiceWorker();
});

// View Routing System
function initRouter() {
  const navButtons = document.querySelectorAll('nav button');
  const views = document.querySelectorAll('.view');

  navButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      navButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');

      const targetId = e.target.getAttribute('data-target');
      views.forEach(view => {
        if (view.id === targetId) {
          view.classList.add('active-view');
        } else {
          view.classList.remove('active-view');
        }
      });
    });
  });
}

// Feature 1: Eligibility Checker
function initEligibilityChecker() {
  const form = document.getElementById('eligibility-form');
  const resultDiv = document.getElementById('eligibility-result');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const age = parseInt(document.getElementById('age-input').value, 10);
    const isCitizen = document.getElementById('citizen-input').value === 'yes';

    try {
      // Fetch mock rules structure. Fails gracefully to hardcoded defaults if missing.
      const response = await fetch('./data/eligibility-rules.json').catch(() => null);
      let rules = { minAge: 18, citizenshipRequired: true }; 
      
      if (response && response.ok) {
         rules = await response.json();
      }

      // Safe DOM update using textContent
      if (age >= rules.minAge && isCitizen === rules.citizenshipRequired) {
        resultDiv.textContent = "✓ Based on basic criteria, you appear eligible to vote!";
        resultDiv.style.color = "var(--success)";
      } else {
        resultDiv.textContent = "✗ Based on basic criteria, you may not be eligible to vote.";
        resultDiv.style.color = "var(--error)";
      }
    } catch (err) {
      resultDiv.textContent = "An error occurred while evaluating eligibility.";
    }
  });
}

// Feature 2: Offline Progress Tracking for Document Checklist
function initChecklist() {
  const checkboxes = document.querySelectorAll('.checklist-container input[type="checkbox"]');
  const status = document.getElementById('checklist-status');
  
  // Load local state
  const savedDocs = JSON.parse(localStorage.getItem('election-docs') || '{}');

  checkboxes.forEach(cb => {
    const docId = cb.getAttribute('data-doc');
    
    // Apply saved state
    if (savedDocs[docId]) {
      cb.checked = true;
    }

    // Save state on change
    cb.addEventListener('change', () => {
      savedDocs[docId] = cb.checked;
      localStorage.setItem('election-docs', JSON.stringify(savedDocs));
      updateChecklistStatus(checkboxes, status);
    });
  });

  // Initial status calculation
  updateChecklistStatus(checkboxes, status);
}

function updateChecklistStatus(checkboxes, statusEl) {
  const total = checkboxes.length;
  const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
  // Use textContent to prevent XSS
  statusEl.textContent = `Progress: ${checkedCount} of ${total} documents prepared.`;
}

// Service Worker Registration
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js')
        .then(registration => {
          console.log('SW Registered successfully with scope:', registration.scope);
        })
        .catch(error => {
          console.error('SW Registration failed:', error);
        });
    });
  }
}
