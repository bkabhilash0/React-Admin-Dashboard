import React from 'react';
import './Main.css';
import hello from '../../assets/hello.svg';
import Chart from '../charts/Chart';
import {cardData} from '../../data/cardData';
import Card from '../Card/Card';

const Main = () => {
    return (
        <main>
            <div className="main__container">
                <div className="main__title">
                    <img src={hello} alt="hello"/>
                    <div className="main__greeting">
                        <h1>Hello BKoders</h1>
                        <p>Welcome to your Admin Dashboard</p>
                    </div>
                </div>
                <div className="main__cards">
                    {cardData.map((card, index) => <Card {...card} key={index}/>)}
                </div>
                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Cupertino, California, USA</p>
                            </div>
                            <i className="fas fa-dollar-sign"></i>
                        </div>
                        <Chart/>
                    </div>
                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Stats Report</h1>
                                <p>Cupertino, California, USA</p>
                            </div>
                            <i className="fas fa-dollar-sign"></i>
                        </div>
                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Income</h1>
                                <p>$75,300</p>
                            </div>
                            <div className="card2">
                                <h1>Sales</h1>
                                <p>$124,200</p>
                            </div>
                            <div className="card3">
                                <h1>Users</h1>
                                <p>3900</p>
                            </div>
                            <div className="card4">
                                <h1>Orders</h1>
                                <p>1991</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main
