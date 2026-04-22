// Routing Logic
const router = {
  navigate: function(route) {
    const main = document.getElementById('app-content');
    const template = document.getElementById(`tmpl-${route}`);
    
    if (template) {
      main.innerHTML = '';
      main.appendChild(template.content.cloneNode(true));
      
      // Init view specific logic
      if (route === 'checklist') initChecklist();
    } else {
      main.innerHTML = '<section class="card"><h2>404</h2><p>Page not found.</p></section>';
    }
  }
};

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
  router.navigate('home');
});

// Feature 1: Eligibility Checker
async function checkEligibility() {
  const age = parseInt(document.getElementById('age').value);
  const citizen = document.getElementById('citizen').value;
  const resultBox = document.getElementById('eligibility-result');
  
  try {
    const res = await fetch('data/eligibility-rules.json');
    const data = await res.json();
    const rules = data.default;
    
    resultBox.style.display = 'block';
    
    if (age >= rules.minAge && citizen === 'yes') {
      resultBox.textContent = '✅ You are eligible to vote!';
      resultBox.className = 'result-box result-success';
    } else {
      let reason = age < rules.minAge ? `You must be at least ${rules.minAge} years old. ` : '';
      reason += citizen === 'no' ? 'You must be a citizen.' : '';
      resultBox.textContent = `❌ Not eligible: ${reason}`;
      resultBox.className = 'result-box result-error';
    }
  } catch (e) {
    resultBox.style.display = 'block';
    resultBox.textContent = '❌ Error loading rules. Check connection or run offline.';
    resultBox.className = 'result-box result-error';
  }
}

// Feature 2: Document Checklist
const defaultDocs = [
  { id: 'voter_id', text: 'Voter ID Card' },
  { id: 'aadhaar', text: 'Aadhaar / Passport (Backup)' },
  { id: 'slip', text: 'Polling Slip' }
];

function initChecklist() {
  const ul = document.getElementById('checklist-items');
  const savedState = JSON.parse(localStorage.getItem('election-checklist')) || {};
  
  ul.innerHTML = '';
  defaultDocs.forEach(doc => {
    const li = document.createElement('li');
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = doc.id;
    input.checked = !!savedState[doc.id];
    
    input.addEventListener('change', (e) => {
      const state = JSON.parse(localStorage.getItem('election-checklist')) || {};
      state[doc.id] = e.target.checked;
      localStorage.setItem('election-checklist', JSON.stringify(state));
    });

    const label = document.createElement('label');
    label.htmlFor = doc.id;
    label.textContent = doc.text;
    label.style.flexDirection = 'row';
    label.style.gap = '0.5rem';
    label.style.fontWeight = 'normal';
    label.style.cursor = 'pointer';

    li.appendChild(input);
    li.appendChild(label);
    ul.appendChild(li);
  });
}

function resetChecklist() {
  localStorage.removeItem('election-checklist');
  initChecklist();
}
