# react-html2pdf
Covert html to pdf & print


## Demo & Examples

Live demo: [react-html2pdf](https://5c6e67526bfdff00099d6adc--react-paper.netlify.com/demo/react-html2pdf)

## Install package
```bash
$ npm i react-html2pdf
```

## Usage
```js
//import
import { Preview, print } from 'react-html2pdf';

//render
<Preview id={'jsx-template'} >
    <p>adsf</p>
</Preview>
<button onClick={()=>print('a', 'jsx-template')}> print</button>
```
## Example

Check full example in the [example](https://github.com/sanpyaelin/react-html2pdf/blob/master/examples/index.js) folder.


## License

[MIT License](http://opensource.org/licenses/mit-license.html). © 2018 San Pyae Lin