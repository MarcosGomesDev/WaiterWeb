import React, { useEffect, useState } from 'react';
import { Order } from '../../@types/Orders';
import api from '../../services/api';
import OrdersBoard from '../OrdersBoard';

import {
    Container,
} from './styles';

const OrderList: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        api.get('/orders')
            .then(({ data }) => {
                setOrders(data)
            })
    }, [])

    const handleCancelOrder = (orderId: string) => {
        setOrders((prevState) => prevState.filter(order => order._id !== orderId));
    }

    const waiting = orders.filter((order) => order.status === 'WAITING');

    const production = orders.filter((order) => order.status === 'IN_PRODUCTION');

    const done = orders.filter((order) => order.status === 'DONE');

    return (
        <Container>
            <OrdersBoard
                icon={'🕑'}
                title="Fila de espera"
                orders={waiting}
                onCancelOrder={handleCancelOrder}

            />
            <OrdersBoard
                icon='👩🏼‍🍳'
                title='Em produção'
                orders={production}
                onCancelOrder={handleCancelOrder}
            />
            <OrdersBoard
                icon='✅'
                title='Pronto!'
                orders={done}
                onCancelOrder={handleCancelOrder}
            />
        </Container>
    );
};

export default OrderList;
