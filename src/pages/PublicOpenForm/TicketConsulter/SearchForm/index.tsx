import { useForm } from 'react-hook-form';

import './styles.css';

export type TicketData = {
  ticketId?: string;
};

type Props = {
  onSubmitFilter: (data: TicketData) => void;
  onReset: () => void;
};

const SearchForm = ({ onSubmitFilter, onReset }: Props) => {
  const { register, handleSubmit, resetField } = useForm<TicketData>();

  const onSubmit = (formData: TicketData) => {
    onSubmitFilter(formData);
  };

  return (
    <div className="search-input-wrap">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <div className="sytem-version card">
          Versão de testes!
        </div> */}
        <div className="input-group mb-3 input-area">
          <label htmlFor="ticket'ts number" className="search-input-label">Insira o protocolo (número do chamado)</label>
          <input
            {...register('ticketId')}
            type="text"
            className="form-control"
            placeholder="Insira o número do protocolo"
            aria-label="ticket'ts number"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-success mt-2"
            type="submit"
            id="button-addon2"
          >
            Pesquisar
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => {resetField('ticketId', { keepTouched: true }); onReset();  }}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
