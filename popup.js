document.getElementById('checkBtn').addEventListener('click', () => {
  const url = document.getElementById('urlInput').value.toLowerCase();
  const resultDiv = document.getElementById('result');
  
  if (!url) {
    resultDiv.textContent = 'Please enter a URL to scan.';
    resultDiv.className = '';
    return;
  }

  let isSuspicious = false;
  let reason = '';

  if (url.includes('@') || url.includes('login-') || url.includes('-verify')) {
    isSuspicious = true;
    reason = 'Warning: Link contains suspicious words often used in scam emails.';
  } else if (url.includes('http://')) {
    isSuspicious = true;
    reason = 'Warning: This connection is unencrypted (HTTP, not HTTPS).';
  }

  if (isSuspicious) {
    resultDiv.className = 'danger';
    resultDiv.innerHTML = '&#9888; ' + reason;
  } else {
    resultDiv.className = 'safe';
    resultDiv.innerHTML = '&#9989; This link looks normal, but stay alert!';
  }
});