import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavbarMenu from '../navbar/navbar';
import HomePage from '../pages/homePage';
import About from '../pages/about';
import Catalog from '../pages/catalog';
import Footer from '../footer/footer';
import ShowItem from '../showItem/showItem';
import Basket from '../pages/basket';
import data from '../content/content.json';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            zakaz: [],
            showItem: false,
            fullItem: {},
            orderNumb: 0,
            content: data.localeUA,
            localeUA: true

        }

        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.onShowItem = this.onShowItem.bind(this)
        this.deleteAllOrder = this.deleteAllOrder.bind(this)
        this.addZakaz = this.addZakaz.bind(this)
        this.onLocale = this.onLocale.bind(this)
    }

    onLocale() {
        this.setState({localeUA: !this.state.localeUA})
    }

    onShowItem(item) {
        this.setState({fullItem: item})
        this.setState({showItem: !this.state.showItem})
    }

    deleteOrder(id) {
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})
        this.setState({orderNumb: this.state.orderNumb -1})
    }

    deleteAllOrder() {
        this.setState({orders: []})
        this.setState({orderNumb: 0})
    }

    addToOrder(item) {
        let isInArray = false
        const { img, title, price, id, quantity } = item;
        const orderData = {id, title, img, price, quantity}
        this.state.orders.forEach(el => {
            if(el.id === item.id)
                isInArray = true;
        })
        if (!isInArray)
            this.setState({orders: [...this.state.orders, orderData]})
        if (isInArray === false) {
            this.setState({orderNumb: this.state.orderNumb +1})
        }
    }

    addZakaz(ordersArr, lastName, email, mobile, sum) {
        const newItem = {
            ordersArr, 
            lastName, 
            email, 
            mobile,
            sum
        }

        this.setState(({zakaz}) => {
            const newZakaz = [...zakaz, newItem];
            return {
                zakaz: newZakaz
            }
        })
    }

    render() {  
        return (
            <div className='app'>
                <Router basename="/greenwitch.company/">
                    <NavbarMenu orders={this.state.orders} count={this.state.orderNumb} locale={this.state.localeUA} onLocale={this.onLocale} onDelete={this.deleteOrder} />
                        <Routes>
                            <Route path="/" element={<HomePage locale={this.state.localeUA} />} />
                            <Route path="/about-us" element={<About locale={this.state.localeUA} />} />
                            <Route path="/catalog" element={<Catalog onShowItem={this.onShowItem} orders={this.state.orders} locale={this.state.localeUA} onAdd={this.addToOrder}/>} />
                            <Route path="/basket" element={<Basket orders={this.state.orders} locale={this.state.localeUA} onAddZakaz={this.addZakaz} onDelete={this.deleteOrder} onAllDelete={this.deleteAllOrder} />} />
                        </Routes>
                        {this.state.showItem && <ShowItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem} locale={this.state.localeUA}/>}
                    <Footer />
                </Router>
            </div>
        )
    }
}