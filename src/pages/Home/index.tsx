

import ContentPanel from 'components/ContentPanel';
import history from 'util/history';

import './styles.css';

const Home = () => {

  const questions: string[] = [
    'computador (manutenção em geral, instalação física e de programas)',
    'impressora',
    'sistemas',
    'telefonia ou internet',
    'infraestrutura (cabeamento)',
  ];

  const handleClick = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.currentTarget.name === 'computador'){
       history.push('/openform/computer'); 
    }
    if (e.currentTarget.name === 'impressora') {
      history.push('/openform/printer');
    }
    if (e.currentTarget.name === 'sistemas') {
      history.push('/openform/system');
    }
    
  };

  return (
    <div className="container">
   
      <div className="content">
        <ContentPanel
          inf="SELECIONE A OPÇÃO ABAIXO PARA INICIAR O CHAMADO"
          cat="CATEGORIA DO PROBLEMA"
        >
          {questions?.map((question, key) => (
            <div className="form-check" key={key}>
              <input
                className="form-check-input"
                type="radio"
                name={question}
                id={question}
                onClick={handleClick}
              />
              <label className="form-check-label">{question}</label>
            </div>

          ))}
        </ContentPanel>
      </div>
     
    </div>
  );
};

export default Home;
