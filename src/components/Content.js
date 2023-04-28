import React from 'react'
import "./Content.css"
import img1 from "../asset/news-01-1024x576.jpg"
import Image from 'mui-image'


function Content() {
    return (
        <div className="container">
            <section className="content-con">
                <div className="content-l">
                    <Image src={img1} alt=""
                        duration={500}
                        easing="ease-out"
                        showLoading={true}
                        shift="right"
                        distance="100px"
                        shiftDuration={1500} />
                </div>
                <div className="content-r">
                    <h2>Some title</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat minima sapiente labore consectetur nam assumenda excepturi, doloribus placeat perspiciatis neque vero a, natus aperiam ullam ipsam. Quis, sequi facere?
                    </p>
                </div>
            </section>
            <section className="content-con">
                <div className="content-r">
                    <h2>Some title</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat minima sapiente labore consectetur nam assumenda excepturi, doloribus placeat perspiciatis neque vero a, natus aperiam ullam ipsam. Quis, sequi facere?
                    </p>
                </div>
                <div className="content-l">
                    <Image src={img1} alt=""
                        duration={500}
                        easing="ease-out"
                        showLoading={true}
                        shift="left"
                        distance="100px"
                        shiftDuration={1500} />
                </div>
            </section>
            <section className="content-con">
                <div className="content-l">
                    <Image src={img1} alt=""
                        duration={500}
                        easing="ease-out"
                        showLoading={true}
                        shift="right"
                        distance="100px"
                        shiftDuration={1500} />
                </div>
                <div className="content-r">
                    <h2>Some title</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat minima sapiente labore consectetur nam assumenda excepturi, doloribus placeat perspiciatis neque vero a, natus aperiam ullam ipsam. Quis, sequi facere?
                    </p>
                </div>
            </section>        
        </div>

    )
}

export default Content
