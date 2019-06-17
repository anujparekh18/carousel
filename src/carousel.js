import React, { Component } from 'react';

const imgUrls = ["https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781", 
"https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900",
"https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328",
"https://i.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg",
"https://ehealthforum.com/health/images/avatars/11699147425707699031013.jpeg"]

class Carousel extends Component {
    constructor (props) {
        super (props);

        this.state = {
            currentImageIndex: 0,
            heightInput:'500',
            widthInput:'500'
        };

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
      const { name, value } = event.target;
      const state = this.state;
      state[name] = value;
      this.setState(state);
    }

    previousSlide () {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState ({
            currentImageIndex: index
        });
    }

    nextSlide () {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState ({
            currentImageIndex: index
        })
    }
    
    render () {
      console.log(this.state.currentImageIndex)
      console.log(imgUrls[this.state.currentImageIndex])
        return (
            <div className="carousel">
                <Arrow
                direction="left"
                clickFunction={ this.previousSlide }
                glyph="&#9664;" />

                <ImageSlide url = { imgUrls[this.state.currentImageIndex] } height={this.state.heightInput} width={this.state.widthInput} />

                <div className="field">
                  <label className="label">Height:</label>
                  <div className="control">
                      <input className="input" name="heightInput" type="number" value={this.state.heightInput} onChange={this.handleChange} />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Width:</label>
                  <div className="control">
                      <input className="input" name="widthInput" type="number" value={this.state.widthInput} onChange={this.handleChange} />
                  </div>
                </div>

                <Arrow
                direction="right"
                clickFunction={ this.nextSlide }
                glyph="&#9654;" />
            </div>
        );
    }
}

const ImageSlide = ({ url, height, width }) => {
    const styles = {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: `${height}px`,
        width: `${width}px`
    };
    console.log(styles)
    return (
        <div className="image-slide" style = {styles}></div>
    );
}

const Arrow = ({ direction, clickFunction, glyph }) => (
    <div
    className = {`slide-arrow ${ direction }`}
    onClick = { clickFunction }>
    { glyph }
    </div>
);

export default Carousel;

