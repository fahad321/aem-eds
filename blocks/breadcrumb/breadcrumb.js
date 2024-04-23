export default function decorate(block) {
  const pathnames = window.location.pathname.split('/').filter(Boolean);
  const breadcrumbContainer = document.createElement('nav');
  breadcrumbContainer.setAttribute('aria-label', 'Breadcrumb');
  const ol = document.createElement('ol');
  breadcrumbContainer.appendChild(ol);

  pathnames.forEach((path, index) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    // Use template literals for string concatenation
    a.href = `/${pathnames.slice(0, index + 1).join('/')}/`;
    a.textContent = path; // Assuming the path segment can be used as the breadcrumb name
    li.appendChild(a);
    ol.appendChild(li);
  });

  block.innerHTML = '';
  block.appendChild(breadcrumbContainer);
}
