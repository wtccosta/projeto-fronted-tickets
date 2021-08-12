import { useForm } from 'react-hook-form';
import ContentPanel from 'components/ContentPanel';

import './styles.css';

type FormData = {
  name: string;
  phone: string;
  place: string;
  occurence: string;
};

const Computer = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    console.log(formData);
   
  };

  return (
    <ContentPanel inf="PREENCHA OS DADOS ABAIXO PARA ABERTURA" cat="COMPUTADOR">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <input
            {...register('name', {
              required: 'Campo obrigatório',
            })}
            type="text"
            className={`form-control base-input ${
              errors.name ? 'is-invalid' : ''
            }`}
            placeholder="Nome do solicitante"
            name="name"
          />
          <div className="invalid-feedback d-block">{errors.name?.message}</div>
        </div>
        <div className="mb-2">
          <input
            {...register('phone', {
              required: 'Campo obrigatório',
            })}
            type="number"
            className={`form-control base-input ${
              errors.name ? 'is-invalid' : ''
            }`}
            placeholder="Telefone/Ramal ou Celular"
            name="phone"
          />
          <div className="invalid-feedback d-block">
            {errors.phone?.message}
          </div>
        </div>
        <div className="mb-2">
          <input
            {...register('place', {
              required: 'Campo obrigatório',
            })}
            type="text"
            className={`form-control base-input ${
              errors.name ? 'is-invalid' : ''
            }`}
            placeholder="Local para atendimento"
            name="place"
          />
          <div className="invalid-feedback d-block">
            {errors.place?.message}
          </div>
        </div>
        <div className="mt-3">
          <span className="ocurrence-input-description">Descreva o problema do seu equipamento:</span>
          <div className="form-floating">
            <textarea
              {...register('occurence', {
                required: 'Campo obrigatório',
              })}
              className={`form-control base-input ${
                errors.name ? 'is-invalid' : ''
              }`}
              placeholder="Descreva o problema ou serviço a ser prestado."
              id="floatingTextarea"
              name="occurence"
            ></textarea>
          </div>
          <div className="invalid-feedback d-block">
            {errors.occurence?.message}
          </div>
        </div>
        <div className="submit-button-area d-flex justify-content-around mt-3">
          <button type="submit" className="btn btn-success">
            Abrir Chamado
          </button>
          <button type="reset" className="btn btn-warning">
            Limpar
          </button>
        </div>
      </form>
    </ContentPanel>
  );
};

export default Computer;
