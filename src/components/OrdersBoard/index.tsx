import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Order } from '../../@types/Orders';
import api from '../../services/api';
import OrderModal from '../OrderModal';

import {
    Board,
    Header,
    Icon,
    Title,
    Quanty,
    OrdersContainer,
    Button,
    Table,
    QuantyItems,
} from './styles';

interface OrdersProps {
    icon: string;
    title: string;
    orders: Order[];
    onCancelOrder: (orderId: string) => void;
}

const OrdersBoard: React.FC<OrdersProps> = ({
    icon,
    title,
    orders,
    onCancelOrder
}) => {

    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);
    const [loading, setLoading] = useState<boolean>(false)

    const handleOpenModal = (order: Order) => {
        setModalVisible(!modalVisible);
        setSelectedOrder(order);
    };

    const handleCloseModal = () => {
        setModalVisible(!modalVisible);
        setSelectedOrder(null);
    };

    const handleCancelOrder = async () => {
        setLoading(true);
        await api.delete(`/orders/${selectedOrder?._id}`)

        toast.success(`O pedido da mesa ${selectedOrder?.table} foi cancelado!`)
        setLoading(false);
        setModalVisible(false);
        onCancelOrder(selectedOrder!._id)
    }

    return (
        <Board>
            <OrderModal
                visible={modalVisible}
                order={selectedOrder}
                onClose={handleCloseModal}
                onCancelOrder={handleCancelOrder}
                loading={loading}
            />
            <Header>
                <Icon>{icon}</Icon>
                <Title>{title}</Title>
                {orders.length > 0 && (
                    <Quanty>( {orders.length} )</Quanty>
                )}
            </Header>
            {orders.length > 0 && (
                <OrdersContainer>
                    {orders.map((order) => (
                        <Button key={order._id} onClick={() => handleOpenModal(order)}>
                            <Table>Mesa {order.table}</Table>
                            <QuantyItems>{order.products.length} itens</QuantyItems>
                        </Button>
                    ))}
                </OrdersContainer>
            )}
        </Board>
    );
};

export default OrdersBoard;
