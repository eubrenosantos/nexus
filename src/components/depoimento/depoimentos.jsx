import style from "./depoimento.module.css"

const Depoimento =  (props)=>{

    return(
        <>
        

            <div className={style.depoimento}>

                <img src={props.img} alt="" />
                <p>{props.content}</p>
                <span>{props.title}</span>


            </div>


        </>
    )

}

export default Depoimento