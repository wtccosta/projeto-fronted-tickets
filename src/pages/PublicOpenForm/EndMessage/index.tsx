import './styles.css';

type Props = {
  ticketId: number |  null;
  firstTimeProps: boolean;
};

const EndMessage = ({ ticketId, firstTimeProps}: Props) => {
  return (
    !firstTimeProps ? (
    <div className="end-message-content ">
      <div className="card text-dark bg-success mt-5 end-card">
        <h5 className="card-title text-dark mt-3 mb-3">
          Chamado aberto com sucesso!
        </h5>
        <p className="card-text">Anote seu número de protocolo:</p>
        <p className="card-text text-center text-dark text-danger fw-bold fs-2">{ticketId}</p>
        <p className="card-text text-center sti-agreement">
          A STIC agradece seu contato, em breve sua solicitação será atendida.
        </p>
        <p className="card-text text-center sti-agreement fw-bold">
          Interação finalizada. Feche esta página.
        </p>
      </div>
    </div>) : null
  );
};
export default EndMessage;
