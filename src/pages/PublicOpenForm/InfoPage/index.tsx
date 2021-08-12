import './styles.css';
const InfoPage = () => {
    return (
      <div className="card card-info-page">
        <div className="custom-body-text">
          <p>
            Olá, servidor, seja bem vindo ao formumário eletrônico de abertura
            de chamados.
          </p>
          <p className="for-mobile badge bg-primary text-wrap">
            Selecione no menu acima, uma categoria de serviço para que possamos
            iniciar o seu atendimento.
          </p>
          <p className="for-desktop badge bg-primary text-wrap">
            Selecione no menu ao lado, uma categoria de serviço para que
            possamos iniciar o seu atendimento.
          </p>
          <p>
            Na tabela abaixo maiores informações sobre as categorias de serviços
            que prestamos.
          </p>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">CATEGORIA</th>
                <th scope="col">DESCRIÇÃO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Computador</th>
                <td>
                  Serviços de Manutenção em geral, instalação de programas,
                  mudança de local, criação de usuário, configuração de máquina
                  nova, dentre outros.
                </td>
              </tr>
              <tr>
                <th scope="row">Impressora</th>
                <td>Impressora e Scanner</td>
              </tr>
              <tr>
                <th scope="row">Sistemas</th>
                <td>
                  Atualização de Sistmas de Gestão da PMC, instalação e
                  comunicação de erros.
                </td>
              </tr>
              <tr>
                <th scope="row">Telefonia</th>
                <td>
                  Telefone ou ramal mudo, mudança, solicitação de linha ou
                  internet, problema com internet ADSL. Problemas com faturas,
                  dentre outros.
                </td>
              </tr>
              <tr>
                <th scope="row">Infraestrutura</th>
                <td>
                  Fibra óptica rompida, cabeamento de interno, Cidade Digital,
                  pedido de vistoria.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
}
export default InfoPage;