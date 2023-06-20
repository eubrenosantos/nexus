import style from './new.module.css'

const NewDepoimentos = (props)=>{
    const estilo = {
        backgroundImage: `url(${props.imgs})`,
        width: "100%",
        height: '200px',
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat"
        
    }
    return( 
        
        <>


            {props.tab == "top" &&



                <div className={style.newdepoimentos}>
                    <h1>{props.title}</h1>
                    <p>{props.content}</p>
                    <div style={estilo}>

                    </div>
                </div>


            }
            {props.tab == "bottom" &&



                <div className={style.newdepoimentos}>
                    <div style={estilo}>
                        

                    </div>
                    <h1>{props.title}</h1>
                    <p>{props.content}</p>
                </div>


            }

            


        </>
    )
}
export default NewDepoimentos