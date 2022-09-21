import illustration from '../assets/img/illustration.svg';
import logoImg from '../assets/img/logo.svg';
import googleIconImg from '../assets/img/google-icon.svg';

// Impotando componentes
import { Button } from '../components/Button';

// CSS
import '../styles/auth.scss';


export function NewRoom(){
  return(
    <div id='page-auth'>
      <aside>
        <img src={illustration} alt="Ilustacao simbolizando perguntas e respostas" />
        <strong> Crie salas de Q&amp; ao-vivo</strong>
        <p> Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className='main-content'>
          <img src={logoImg} alt="Logotipo let me ask"/>
          <h2> Criar uma nova sala </h2>
          <form>
            <input type="text"
            placeholder='Digite o código da sala'
            />
            <Button type='submit'>
              Criar sala
            </Button>
          </form>
          <p> 
            Quer entrar em uma sala existente? <a href="#">Click aqui</a>
          </p>
        </div>
      </main>
    </div>
  )
};