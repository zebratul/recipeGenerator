import deepai from 'deepai';
// const deepai = require('deepai'); 

export async function textGenerator (input) {  //это дерьмо сначала пару раз мне вернуло респонс, а потом стало 401
  deepai.setApiKey('cedbd3fb-c67b-4fe2-839b-adda0616c632');
  let resp = await deepai.callStandardApi("text-generator", {
          text: `${input}`,
  });
  console.log(resp);
  console.log(resp.output);
}
