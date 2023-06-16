import { useState } from "react"
import style from "./slide.module.css"
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io"
const Slide = () => {

    const [images, setImages] = useState([{
        index: 0,
        img: "https://77f5c3a5d1.imgdist.com/public/users/Integrators/BeeProAgency/1004675_989512/Design%20sem%20nome%20%282%29.png"
    },
    {
        index: 1,
        img: "https://77f5c3a5d1.imgdist.com/public/users/Integrators/BeeProAgency/1004675_989512/Design%20sem%20nome%20%283%29.png"
    }, {
        index: 2,
        img: "https://77f5c3a5d1.imgdist.com/public/users/Integrators/BeeProAgency/1004675_989512/Design%20sem%20nome%20%284%29.png"
    },])


    const [select, setSelect] = useState({
        index: 0,
        img: "https://77f5c3a5d1.imgdist.com/public/users/Integrators/BeeProAgency/1004675_989512/Design%20sem%20nome%20%282%29.png"
    })


    const handleClickNext = () => {

        if (!select || select.index == images.length - 1) {

            setSelect(images[0])
        } else {

            setSelect(images[select.index + 1])

        }


    }

    const handleClickPrevius = () => {

        if (!select || select.index == 0) {

            setSelect(images[images.length - 1])
        } else {

            setSelect(images[select.index - 1])

        }


    }

    const styles = {
        backgroundImage: select ? `url("${select.img}")` : "",

    }
    return (

        <>

            <div style={styles} className={style.slider}>



                <IoIosArrowDropleftCircle onClick={handleClickPrevius} />
                <IoIosArrowDroprightCircle onClick={handleClickNext} />

            </div>



        </>
    )
}

export default Slide