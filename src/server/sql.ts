export function render(): void {
  const div: HTMLDivElement = document.createElement('div');
  div.innerHTML = `
    <div style="color:#888888">
      <h1>Hello World</h1>
    </div>
  `;
  document.querySelector('body').appendChild(div);
}