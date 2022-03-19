# sl-landingpage-2009

> Restoration of my 2009 personal Flash landing page, rebuilt with modern Web standards.

Tried my best to make a 1:1 _"porting"_ of the project but some details are missing or are a bit more complex to reproduce, and so far I'm quite happy with a 98% fidelity.

The big part of the porting is HTML & CSS, Javascript is used only to handle the loading and optimization of the `.svg` files via Webpack and to create the random coordinates for the toon image on a given interval, but the animation itself is a [CSS Transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition).

The links are more or less the same, except for the blog (_moebiusmania.net doesn't exists anymore_ 😭) and the Facebook profile (_since [I've deleted it some time ago](https://salvatorelaisa.blog/post/addio-facebook)_) they now points to my actual personal blog [salvatorelaisa.blog](https://salvatorelaisa.blog).

Built on top of [Vite.js vanilla-ts](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) starter template.

## Source material

I've only had the compiled Flash Player `temp.swf` file available, but luckily for me I was able to de-compile it thanks to the awesome [jpexs-decompiler](https://github.com/jindrapetrik/jpexs-decompiler) tool the allowed me to get the original ActionScript code, the vector images and the objects data.

In the `./src` folder I've added all of the available source material:

- the original `temp.swf` file, as both reference and backup
- in the `/as_source` the ActionScript files I've written back in the days
- in the `/svg` the vector graphics (_the toon characters and social media icons_)

## Quick builds comparison

Since Flash has always being surrounded by misconception and false myths, let's just compare the outputs created by both compilers:

| Flash .swf | New version |
| ---------- | ----------- |
| 39.2kb     | 58.1kb      |

For the "new version" of this repo I've got the size from the `Network` panel in Chrome dev tools running from an Incongito window, so it's counting every file in the build output folder (_html,css,svg,js_) while for the Flash version I'm just looking the file size (_you can do it directly in this repo_).

It's true that Flash files didn't ran as standalone entities in browsers, you always needed to wrap them in regular `.html` files, sometimes using a [particular Javascript utility](https://github.com/swfobject/swfobject) to detect the Flash Player and display an alternative content/message that has a `10.3kb` size.

Beside being more or less 20kb smaller, the `.swf` file is **also** embedding the originally used font (_Myriad Pro_).

So maybe a Flash based project wasn't necessarily a network-intensive beast as many claimed, especially compared to current web standard. And remember that in this specific case, the `.swf` file **has been compiled more than 10 years ago** 🙂.

The performance issues were mainly related to the Flash Player rather than Flash assets or the compiler, but... that's another story and we all know how it ended.

## License

Released under the [MIT license](LICENSE).
