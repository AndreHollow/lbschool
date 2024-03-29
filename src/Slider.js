import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';
import photo0 from './photo0.jpg'
import photo1 from './photo1.jpg'
import photo2 from './photo2.jpg'
import photo3 from './photo3.jpg'
import photo4 from './photo4.jpg'


const items = [
    {
        id: 0,
        altText: 'Slide 0',
        caption: 'Slide 0',
        src: photo0
    },
    {
        id: 1,
        altText: 'Slide 1',
        caption: 'Slide 1',
        src: photo1
    },
    {
        id: 2,
        altText: 'Slide 2',
        caption: 'Slide 2',
        src: photo2
    },
    {
        id: 3,
        altText: 'Slide 3',
        caption: 'Slide 3',
        src: photo3
    },
    {
        id: 4,
        altText: 'Slide 4',
        caption: 'Slide 4',
        src: photo4
    }
];

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
        return (
            <CarouselItem
                className="custom-tag"
                tag="div"
                key={item.id}
                onExiting={this.onExiting}
                onExited={this.onExited}
            >
                <img src={item.src} alt={item.altText} style={{ verticalAlign: 'middle', borderStyle: 'none', width: '100%', height: 'auto' }}/>
                {/*<CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />*/}
            </CarouselItem>
            );
        });

        return (
            <div style={{ width: '60%', height: 'auto' }}>
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                    style={{ height: '100%' }}
                >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            </div>
        );
    }
}

export default Slider;