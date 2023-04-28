import React from 'react'
import "./Banner.css"

let bannerData = {
    title: "J Knowledge Tutor",
    desc: "กว่า 20 ปี ที่สถาบันวิชาการ เจ โนว์เลจ ได้สร้างฝันของน้องๆให้เป็นจริงมาแล้วมากมาย ทั้งคณะและมหาวิทยาลัยชั้นนำระดับประเทศ เราดูแลน้องๆ เหมือนคนในครอบครัว ทีมพี่ๆ STAFF และทีมงาน พร้อมดูแลช่วยเหลือน้องๆ ทุกปัญหา จนกว่าทุกคนจะสอบติด ทั้งหมดนี้ คือ ครอบครัวเดียวกัน ครอบครัว ติว ติด พิชิตฝัน"
}

function Banner() {
    return (
        <div className="banner-bg">
            <div className="container">
                <div className="banner-con">
                    <div className="banner-text">
                        <div className='banner-con-text'>
                            <h1>{bannerData.title}</h1>
                            <div>
                                {bannerData.desc}
                            </div>

                        </div>

                        <a href="https://jknowledgetutor.com" className="banner-btn">Learn More</a>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Banner
