import { useState } from "react"
import style from "./faq.module.css"
import {FaArrowAltCircleDown , FaArrowAltCircleUp} from "react-icons/fa"
const Faq =  (props) =>{

    const [visivel, setVisivel] = useState(false)


    return(
        <>

        <div className={style.faq} onClick={()=>{
                setVisivel(visivel? false :true)
        }}>

            <div className={style.contentFaq}>
                <div className={style.rowww}>
                        <span>{props.index}</span>
                        <p>{props.title}</p>

                </div>
                

                 {!visivel &&

                        <FaArrowAltCircleDown onClick={() => {
                            setVisivel(true)
                        }} />
                 }
                 {visivel &&

                        <FaArrowAltCircleUp onClick={()=>{
                            setVisivel(false)
                        }} />
                 }

            </div>
        {visivel &&

                    <div className={style.textofaq}>

                        {props.content}

                    </div>

        }
            

        </div>


        </>
    )

}

export default Faq