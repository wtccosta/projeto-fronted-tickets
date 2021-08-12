import ContentPanel from 'components/ContentPanel';

import './styles.css';

const Printer = () => {
  return (
    <ContentPanel
      inf="SELECIONE  A OPÇÃO ABAIXO PARA INICIAR O CHAMADO"
      cat="IMPRESSORA"
    >
      <p className="text-justify">
        As impressoras do municipio são locadas, para abertura de chamado, o
        usuario deve ligar para empresa responsavel. O numero de contato esta no
        adesivo que esta colado no equipamento, cada equipamento possui um
        numero de série que tambem esta colado no equipamento, e é com este
        numero que a empresa ira localizar o equipamento para efetuar o
        atendimento.
      </p>
    </ContentPanel>
  );
};

export default Printer;
