import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <h1>Implementacija registra lekova za upotrebu u humanoj medicini</h1>
                <p>Dobro došli! Ova web aplikacija predstavlja projekat na temu mog diplomskog rada. Korišćene su sledeće tehnologije:</p>
                <ul>
                    <li><a href='https://get.asp.net/'>ASP.NET Core</a> i <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> za <i>backend</i> deo,</li>
                    <li><a href='https://www.postgresql.org/'>PostgreSQL</a> relaciona baza za čuvanje podataka,</li>
                    <li><a href='https://facebook.github.io/react/'>React</a> za <i>frontend</i> deo, koji upravo vidite i </li>
                    <li><a href='http://getbootstrap.com/'>Bootstrap</a> za ujedačen stil i dizajn sajta</li>
                </ul>
                <p>Pritom, od pomena je i <a href='https://www.material-react-table.com/'>Material React Table</a> biblioteka, čije su mnogobrojne funkcionalnosti iskorišćene za <a href='fetch-data'>prikaz samih podataka</a>.</p>
                <p>Moguće je <a href='authentication/login'>ulogovati se</a> kao administrator, sa kredencijalima <code>admin@example.com</code>/<code>Admin123@</code>. Odatle je moguće promeniti profilne podatke, kao i učitati nov registar lekova. </p>
                <br></br>
                <p style={{ textAlign: 'right' }}>Autor: <a href='https://github.com/aleksamagicka'>Aleksa Savić</a> (2019/0595)</p>
            </div>
        );
    }
}
