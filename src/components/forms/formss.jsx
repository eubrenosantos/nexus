import style from "./forms.module.css"
const Forms = ()=>{
    return( 
        <>

        <div className={style.form}>

            <h1>Fale com um especialistas</h1>

            <label htmlFor="">
                Nome
                <input type="text" />
            </label>

            <label htmlFor="">
                Nome da empresa
                <input type="text" />
            </label>

            <label htmlFor="">
                Seu melhor E-mail
                <input type="email" />
            </label>

            <label htmlFor="">
                Telefone/Whatsapp
                <input type="text" />
            </label>

            <label htmlFor="">
                Descreva brevemente seu projeto
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </label>

            <button>ENVIAR</button>

        </div>
        
        </>
    )
}



export default Forms