export default function decorate(block) {
  const [quoteWrapper] = block.children;
  // eslint-disable-next-line no-console
  console.log(block);
  const blockquote = document.createElement('blockquote');
  blockquote.textContent = quoteWrapper.textContent.trim();
  quoteWrapper.replaceChildren(blockquote);
}
