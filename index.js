
window.addEventListener("load", () => {
  const options = {
    id: "#connect",
    // url: "https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik",
    url: "https://int-widgets.moneydesktop.com/md/connect/jhAcjlwb0n01hqv72mpmtqtk42Z3zcc9qdvgv2z0dgx1b454lr5jnAtt0fb5nqxt6z7tcg481cb25nhl6dv1b6wtqqx52vlh4tkhx8qkgm9A5yjmh2mArwnmf71w5g29778vcwpgsm568lq0k9wlmx08586fmdy3h2qbscg036tpAm4rg7q3g2yv3cz24bwjg7hv1wl25z7cAf2zjdjlvg3f0ttq6z61q2r6p75pbnwtvdnn6sl2t9mqtk4wk0t4Amzj3bmAw0c7v3hqc3Avkncmdcy34xqlmnnlkmw5dmh2v2m1s9pg3qnwqzjpvAl2qr5475ccpzwcw7mm38p94vy4zs2zvh3Azx8r4nt2/eyJ1aV9tZXNzYWdlX3ZlcnNpb24iOjQsInVpX21lc3NhZ2Vfd2Vidmlld191cmxfc2NoZW1lIjoibXgiLCJsb2NhbGUiOiJlbi1VUyJ9",
    height: 400,
    width: 700
  }

  const w = new ww(options)
  const a = new ww(options)

  console.log('w', w);
  console.log('a', a);
  console.log(a === w );
});
