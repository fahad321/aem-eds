export default function decorate(block) {
  const [quoteWrapper] = block.children;
  // eslint-disable-next-line no-console
  console.log(block);
  // eslint-disable-next-line no-console
  console.log(quoteWrapper);
  const blockquote = document.createElement('blockquote');
  blockquote.textContent = quoteWrapper.textContent.trim();
  quoteWrapper.replaceChildren(blockquote);
}
