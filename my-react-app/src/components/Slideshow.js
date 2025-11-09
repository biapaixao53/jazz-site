import React from "react";


export default class Slideshow extends React.Component {
constructor(props) {
super(props);
this.state = { i: 0 };
this.slides = [
"/imagens/img2.png",
"/imagens/img3.png",
"/imagens/img4.png",
];
}
componentDidMount() {
this.timer = setInterval(() => {
this.setState((s) => ({ i: (s.i + 1) % this.slides.length }));
}, 3000);
}
componentWillUnmount() { clearInterval(this.timer); }
render() {
return (
<div id="slideshow">
<img src={process.env.PUBLIC_URL + this.slides[this.state.i]} alt="Slideshow do festival" width={900} />
</div>
);
}
}
