# sl-landingpage-2009
> Restoration of my 2009 personal Flash landing page, rebuilt with web standards.

Tried my best to make a 1:1 *"porting"* of the project but some details are missing or are a bit more complex to reproduce, and so far I'm quite happy with a 98% fidelity.

The big part of the porting is HTML & CSS, Javascript is used only to handle the loading and optimization of the `.svg` files via Webpack and to create the random coordinates for the toon image on a given interval, but the animation itself is a [CSS Transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition).

The links are more or less the same, except for the blog (*moebiusmania.net doesn't exists anymore* 😭) and the Facebook profile (*since [I've deleted it some time ago](https://salvatorelaisa.blog/post/addio-facebook)*) they now points to my actual personal blog [salvatorelaisa.blog](https://salvatorelaisa.blog).

Built on top of my [frontend-starter-kit](https://github.com/mohole/frontend-starter-kit).

## Source material
I've only had the compiled Flash Player `temp.swf` file available, but luckily for me I was able to de-compile it thanks to the awesome [jpexs-decompiler](https://github.com/jindrapetrik/jpexs-decompiler) tool the allowed me to get the original ActionScript code, the vector images and the objects data.

In the `./src` folder I've added all of the available source material:
* the original `temp.swf` file, as both reference and backup
* in the `/as_source` the ActionScript files I've written back in the days
* in the `/svg` the vector graphics (*the toon characters and social media icons*)

## License
Released under the [MIT license](LICENSE).
