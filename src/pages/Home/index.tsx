

import ContentPanel from 'components/ContentPanel';
import history from 'util/history';

import './styles.css';

const Home = () => {

  const questions: string[] = [
    'computador',
    'impressora',
    'sistemas',
    'telefonia',
    'infraestrutura',
  ];

  const handleClick = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    history.push(e.currentTarget.name);
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
