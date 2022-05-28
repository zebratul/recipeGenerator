import deepai from 'deepai';
// const deepai = require('deepai'); 

export async function textGenerator (input) {  
  deepai.setApiKey('cedbd3fb-c67b-4fe2-839b-adda0616c632');
  let resp = await deepai.callStandardApi("text-generator", {
          text: `${input}`,
  });
    return resp.output;
}
