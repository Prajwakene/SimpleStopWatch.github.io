import { proxy } from "valtio";

const state = proxy({
//are we on currently homepaeg or not
intro: true,
color: '#EFBD48',
//are we currently displaying the logo
isLogoTexture :true,
isFullTexture: false,
logoDecal: './threejs.png',
fullDecal: './threejs.png'
});

export default state
