function showPage(pageNum) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Show selected page
  document.getElementById('page' + pageNum).classList.add('active');

  // Update tab highlight
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab')[pageNum - 1].classList.add('active');
}
