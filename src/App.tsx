import React from 'react'; 
import Card from '../src/atoms/Card';
import Header from './atoms/header';
import { Colors } from './GlobalStyle';
import './style.css'


function App() {
  return(
    <>
      <Header>
        <img src="src/assets/logo.svg" alt="" />
      </Header>

    <main className='Container'>
      <section id='balance'>
        <h2 className='sr-only'> Banloço</h2>
        <Card bg= {Colors.white} >
          <h3><span>Entradas</span> <img src="src/assets/income.svg" alt="" /> </h3>
          <p id='incomeDisplay'> R$ 00,00</p>
        </Card>
        <Card bg= {Colors.white} >
          <h3><span>Saidas</span> <img src="src/assets/expense.svg" alt="" /> </h3>
          <p id='incomeDisplay'> R$ 00,00</p>
        </Card>
        <Card bg= {Colors.green} >
          <h3><span>Total</span> <img src="src/assets/total.svg" alt="" /> </h3>
          <p id='incomeDisplay'> R$ 00,00</p>
        </Card>
      </section>

      <section id='transection'>
        <h2 className='sr-only'>Transações</h2>
        <a href='#'  className='button new'> + Nova tansação</a>
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
                <tbody><tr data-index="0">
            <td className="production">Televisão</td>
            <td className="description">ttttt</td>
            <td className="income">R$&nbsp;233,00</td>
            <td className="date">07/09/2022</td>
            <td> <img src="./img/minus.svg" alt="Remover transação"/></td>
            
        </tr></tbody>
            </table>
      </section>
    </main> 
    </>
  );
}

export default App
