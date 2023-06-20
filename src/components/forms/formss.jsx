import { SenderEmail } from "../helpers/sendEmail"
import style from "./forms.module.css"

const Forms = ()=>{
    return( 
        <>

        <div className={style.form}>

            <h1>Fale com um Especialistas</h1>

            <label htmlFor="">
                Nome
                <input id="nome" type="text" />
            </label>

            <label htmlFor="">
                Nome da empresa
                <input id="nomedaempresa" type="text" />
            </label>

            <label htmlFor="">
                Seu melhor E-mail
                <input id="email" type="email" />
            </label>

            <label htmlFor="">
                Telefone/Whatsapp
                <input id="telefone" type="text" />
            </label>

            <label htmlFor="">
                Descreva brevemente seu projeto
                <textarea id="projeto" name=""  cols="30" rows="10"></textarea>
            </label>

            <button onClick={SenderEmail} id="enviarform">ENVIAR</button>

        </div>
        
        </>
    )
}



export default Forms