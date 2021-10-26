import { useForm } from 'react-hook-form';
import ContentPanel from 'components/ContentPanel';

import './styles.css';
import { requestBackend } from 'util/requests';
import { AxiosRequestConfig } from 'axios';
import { useContext, useState } from 'react';
import { removeAuthData } from 'util/storage';
import { AuthContext } from 'util/AuthContext';
import TicketLoader from '../TicketLoader';
import { Ticket } from 'types/Ticket';
import history from 'util/history';

const Computer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setAuthContextData } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Ticket>();

  const assembleContent = (formData: Ticket) => {

    return `<h3>Problema para o grupo ${formData.group}</h3><strong>Chamado aberto por</strong>: ${formData.name} <br>
    <strong>Local de Atendimento</strong>: ${formData.place} <br>
    <strong>Telefone para contato</strong>: ${formData.phone} <br>
    <strong>E-mail</strong>: ${formData.email} <br>
    <strong>Ocorrência</strong>: ${formData.occurence} <br>`;
  };

  const onSubmit = (formData: Ticket) => {
    let patternImpressora = /impressora/gmi;
    let patternSistema = /impressora/gmi;
    if (formData.occurence.match(patternImpressora)) {
      alert("Notei que em seu texto você menciona impressora. Ok, processaremos seu chamado. \n Mas lembramos que apenas instalamos impressoras ou a mudamos de local, não consertamos, trocamos toner ou instalamos scanners, para isso, acione a H2L. \n O número está em uma etiqueta colada no equipamento.");
    }
    if (formData.occurence.match(/sistema/gmi) || formData.occurence.match(/protocolo/gmi) || formData.occurence.match(/tributario/gmi) || formData.occurence.match(/tributário/gmi)  || formData.occurence.match(/atualizar/gmi) || formData.occurence.match(/atualização/gmi) || formData.occurence.match(/compras/gmi))  {
      alert("Use a opção \"Sistemas\" para abrir este tipo de chamado. Mesmo que seja para atualização do Sistema Operacional ou Antivírus.\nNeste último Caso, no campo \"Nome do Sitema\" coloque o que deseja atualizar, Sistem Operacional ou Antivírus, em \"Nome de Usuário\", digite o usuário que usa para acessar iniciar sua sessão no computador. VOCÊ SERÁ REDIRECIONADO!!!");
      history.push('/openform/system')
      return;
    }
    
    
    setValue('group', 'Geral');
    const data = {
      input: {
        name: `Chamado Aberto Via Formulário para o grupo ${formData.group} (Tratar)`,
        requesttypes_id: '1',
        content: assembleContent(formData),
        type: '1',
      },
    };
    
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/Ticket',
      data,
      withCredentials: false,
    };
    setIsLoading(true);
    requestBackend(config)
      .then((response) => {
        setAuthContextData({
          authenticated: false,
          ticketId: response.data.id,
        });
        removeAuthData();
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
    {isLoading ? <TicketLoader /> :
    (<ContentPanel inf="PREENCHA OS DADOS ABAIXO PARA ABERTURA" cat="COMPUTADOR">
      <form onSubmit={handleSubmit(onSubmit)} className="computer-form">
      <div className="mb-2">
          <input
            {...register('group', {
            })}
            type="text"
            className="input-hidden"
            placeholder="Nome do solicitante"
            name="group"
            value="Geral"
          />
        </div>
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
              required: 'Campo obrigatório, somente números!',
            })}
            type="number"
            className={`form-control base-input ${
              errors.name ? 'is-invalid' : ''
            }`}
            placeholder="Telefone/Ramal ou Celular (SOMENTE NÚMEROS)"
            name="phone"
          />
          <div className="invalid-feedback d-block">
            {errors.phone?.message}
          </div>
        </div>
        <div className="mb-2">
          <input
            {...register('email', {
              required: 'Campo obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email inválido'
              }
            })}
            type="email"
            className={`form-control base-input ${
              errors.name ? 'is-invalid' : ''
            }`}
            placeholder="E-mail"
            name="email"
          />
          <div className="invalid-feedback d-block">
            {errors.email?.message}
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
          <span className="ocurrence-input-description">
            Descreva o problema do seu equipamento:
          </span>
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
    </ContentPanel>)}
    </>
  );
};

export default Computer;
