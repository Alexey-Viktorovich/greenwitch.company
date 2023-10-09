import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavbarMenu from '../navbar/navbar';
import HomePage from '../pages/homePage';
import About from '../pages/about';
import Catalog from '../pages/catalog';
import Footer from '../footer/footer';
import ShowItem from '../showItem/showItem';
import Basket from '../basket/basket';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            zakaz: [],
            items: [
                {
                    id: 1,
                    title: 'LED світильник GrowBro 300',
                    titledesc: 'LED лампа 300Вт на діодах Seoul Semiconductors з 3 датчиками',
                    img: 'LED-lamp-GrowBro-300',
                    img1: 'LED-lamp-GrowBro-3001',
                    img2: 'LED-lamp-GrowBro-3002',
                    descp1: 'Окремо ряд синіх діодів 450Нм и і червоних 660Нм. Синій і червоний включаються окремо з мобільного додатку. Потужність регулюється за рахунок діммера в мобільному додатку. Функція схід/захід сонця на 20хв. Включення/вимкнення по графіку. 3 датчики для контролю.',
                    descTextTitle: 'Комплектація:',
                    descText: '- LED модуль на 150Вт – 2шт',
                    descText1: '- драйвер mean-well',
                    descText2: '- радіатор охолодження з примусовою вентиляцією',
                    descText3: '- модуль керування',
                    descText4: '- датчик температури повітря',
                    descText5: '- датчик вологості повітря',
                    descText6: '- датчик інтенсивності освітлення',
                    descTextTitle1: '',
                    descText7: '',
                    descText8: '',
                    descText9: '',
                    descText10: '',
                    category: 'Led лампи',
                    price: '415.00',
                    count: '1'
                },
                {
                    id: 2,
                    title: 'Контроллер клімату для теплиць та гроубоксів',
                    titledesc: 'Greenwitch standart controller – прокачана версія для просунутих користувачів',
                    img: 'controler',
                    img1: 'controler1',
                    img2: 'controler2',
                    descp1: 'Дозволяє отримувати інформацію про клімат у вашій теплиці або гроубоксі і керувати освітленням, поливом, вентиляцією та обігрівом. В комплекті 4 датчки та 4 реле керування.',
                    descTextTitle: 'Комплектація:',
                    descText: '- подовжувач на 5 вилок, з ручним вимикачем',
                    descText1: '- датчик температури повітря',
                    descText2: '- датчик вологості повітря',
                    descText3: '- датчик вологості грунту',
                    descText4: '- датчик інтенсивності освітлення',
                    descText5: '',
                    descText6: '',
                    descTextTitle1: 'Віддалене керування можливе з додатку або за запланованим графіком:',
                    descText7: '- освітленням ( можна підключити лампу до 1кВт )',
                    descText8: '- поливом ( можна підключити насос до 1кВт )',
                    descText9: '- вентиляцією ( можна підключити вентилятори до 1кВт )',
                    descText10: '- обігрівом ( можна підключити обігрівач до 1кВт )',
                    category: 'Девайси',
                    price: '100.00',
                    count: '1'
                },
                {
                    id: 3,
                    title: 'LED світильник GrowBro 150',
                    titledesc: 'LED лампа на діодах Seoul Semiconductors з 3 датчиками та фотокамерою',
                    img: 'LED-lamp-GrowBro-150',
                    img1: 'LED-lamp-GrowBro-1501',
                    img2: 'LED-lamp-GrowBro-1502',
                    descp1: 'Окремо ряд синіх діодів 450Нм и і червоних 660Нм. Синій і червоний включаються окремо з мобільного додатку. Потужність регулюється за рахунок діммера в мобільному додатку. Функція схід/захід сонця на 20хв. Включення/вимкнення по графіку. 3 датчики для контролю.',
                    descTextTitle: 'Комплектація:',
                    descText: '- LED модуль на 150Вт',
                    descText1: '- драйвер mean-well',
                    descText2: '- радіатор охолодження з примусовою вентиляцією',
                    descText3: '- модуль керування',
                    descText4: '- датчик температури повітря',
                    descText5: '- датчик вологості повітря',
                    descText6: '',
                    descTextTitle1: '',
                    descText7: '',
                    descText8: '',
                    descText9: '',
                    descText10: '',
                    category: 'Led лампи',
                    price: '220.00',
                    count: 1
                }
            ],
            showItem: false,
            fullItem: {},
            orderNumb: 0
        }

        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.onShowItem = this.onShowItem.bind(this)
        this.deleteAllOrder = this.deleteAllOrder.bind(this)
        this.addZakaz = this.addZakaz.bind(this)
    }

    render() {    
        return (
            <div className='app'>
                <Router basename="/greenwitch.company/">
                    <NavbarMenu orders={this.state.orders} count={this.state.orderNumb} onDelete={this.deleteOrder} />
                        <Routes>
                            <Route path="/" element={<HomePage key={this.state.items.id} items={this.state.items} />} />
                            <Route path="/about-us" element={<About />} />
                            <Route path="/catalog" element={<Catalog onShowItem={this.onShowItem} orders={this.state.orders} items={this.state.items} onAdd={this.addToOrder}/>} />
                            <Route path="/basket" element={<Basket orders={this.state.orders} onAddZakaz={this.addZakaz} onDelete={this.deleteOrder} onAllDelete={this.deleteAllOrder} />} />
                        </Routes>
                        {this.state.showItem && <ShowItem onShowItem={this.onShowItem} item={this.state.fullItem}/>}
                    <Footer />
                </Router>
            </div>
        )
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
        this.state.orders.forEach(el => {
            if(el.id === item.id)
                isInArray = true;
            // this.setState({orders: [...this.state.orders.count ++]})
        })
        if (isInArray === false) {
            this.setState({orderNumb: this.state.orderNumb +1})
        }
        if (!isInArray)
            this.setState({orders: [...this.state.orders, item]})
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
}