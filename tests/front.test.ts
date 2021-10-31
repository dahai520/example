import { render } from '../src/front/index'

test('test dom', async () => {
  render();
  const expectResult: string = `<div>    <div style="color:#888888">      <h1>Hello World</h1>    </div>  </div>`;
  expect(document.body.innerHTML.replace(/[\r\n]/ig, '')).toEqual(expectResult);
});