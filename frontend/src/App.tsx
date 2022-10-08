import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
import Modal from 'react-modal';
import Card from '../src/atoms/Card';
import Header from './atoms/header';
import { Colors } from './GlobalStyle';
import './style.css';

type finance = {
  id: string;
  name: string;
  description: string;
  price: number;
  date: string;
}

const GET_FINANCES = gql`
  query{
    finances{
      id
      name
      description
      price
      date
    }
  }
`;

function App() {
  const { data } = useQuery<{ finances: finance[] }>(GET_FINANCES);

  const [isOpenModal, setIsOpenModal] = useState(false)

  function openModal() {
    setIsOpenModal(true);
  }

  function closeModal() {
    setIsOpenModal(false);
  }

  return (
    <>
      <Header>
        <img src="src/assets/logo.svg" alt="" />
      </Header>

      <main className='Container'>
        <section id='balance'>
          <h2 className='sr-only'> Banloço</h2>
          <Card bg={Colors.white} >
            <h3><span>Entradas</span> <img src="src/assets/income.svg" alt="" /> </h3>
            <p id='incomeDisplay'> R$ 00,00</p>
          </Card>
          <Card bg={Colors.white} >
            <h3><span>Saidas</span> <img src="src/assets/expense.svg" alt="" /> </h3>
            <p id='incomeDisplay'> R$ 00,00</p>
          </Card>
          <Card bg={Colors.green} >
            <h3><span>Total</span> <img src="src/assets/total.svg" alt="" /> </h3>
            <p id='incomeDisplay'> R$ 00,00</p>
          </Card>
        </section>

        <section id='transection'>
          <h2 className='sr-only'>Transações</h2>
          <button className='button new' onClick={() => openModal()}> + Nova tansação</button>
          <table id="data-table">
            <thead>
              <tr>
                <th>Produto</th>
                <th>Descrição</th>
                <th>Valor</th>
                <th>Data</th>
                <th></th>
              </tr>
            </thead>
            {data?.finances.map(finance =>

              <tbody>
                <tr data-index="0" key={finance.id}>
                  <td className="production" >{finance.name}</td>
                  <td className="description" >{finance.description}</td>
                  <td className="income" >{finance.price}</td>
                  <td className="date" >{finance.date}</td>
                  <td> <img src="../src/assets/minus.svg" alt="Remover transação" /></td>

                </tr>
              </tbody>

            )}

          </table>

        </section>

        <Modal
          isOpen={isOpenModal}
          onRequestClose={closeModal}
          overlayClassName={"modal-overlay active"}    
          className="modal-content"
        >
          
            <div className="modal">
              <div className="form">
                <h2>Nova transação</h2>
                <form action="" >
                  <div className="input-group">

                    <label className="sr-only" >Produto</label>

                    <input type="text" id="production" name="production" placeholder="Produto" />

                  </div>


                  <div className="input-group">

                    <label className="sr-only" >Descrição</label>

                    <input type="text" id="description" name="description" placeholder="Descrição" />

                  </div>

                  <div className="input-group">

                    <label className="sr-only" >Valor</label>

                    <input type="number" step="0.01" id="amount" name="amount" placeholder="0,00" />

                    <small className="help">Usar o sinal - (negativo) para despesas e , (virgula) para casas desimais</small>
                  </div>

                  <div className="input-group">

                    <label className="sr-only" >Descrição</label>

                    <input type="date" id="date" name="date" placeholder="date" />
                  </div>

                  <div className="input-group action">
                    <button className="button cancel" onClick={closeModal} >Cancelar</button>
                    <button className='button confirm'>Salvar</button>
                  </div>


                </form>




              </div>
            </div>
        </Modal>
      </main>

    </>
  );
}

export default App
