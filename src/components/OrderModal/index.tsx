import React, { useEffect } from 'react';

import {
    CloseBtn,
    Container,
    Content,
    Footer,
    Header,
    Icon,
    Image,
    ImageProduct,
    Item,
    OrderDetails,
    OrderItems,
    Overlay,
    PrimaryButton,
    ProductDetails,
    ProductName,
    ProductPrice,
    Quantity,
    SecondaryButton,
    Status,
    StatusContainer,
    StatusTitle,
    Title,
    TitleBtn,
    TitleDetails,
    TotalContainer,
    TotalPrice,
    TotalTitle
} from './styles';

import CloseIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../@types/Orders';
import { FormatCurrency } from '../../utils/FormatCurrency';

interface OrderModalProps {
    visible: boolean;
    order: Order | null;
    onClose: () => void;
    onCancelOrder: () => Promise<void>;
    loading: boolean;
}

const OrderModal: React.FC<OrderModalProps> = ({ visible, order, onClose, onCancelOrder, loading }) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if(event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    if (!visible || !order) {
        return null;
    }

    const total = order.products.reduce((total, {product, quantity}) => {
        return total + (product.price * quantity);
    }, 0);

    return (
        <Overlay>
            <Container>

                <Header>
                    <Title>Mesa {order.table}</Title>
                    <CloseBtn onClick={onClose}>
                        <Image src={CloseIcon} alt="icone de x" />
                    </CloseBtn>
                </Header>

                <StatusContainer>
                    <StatusTitle>Status do pedido</StatusTitle>
                    <Content>
                        <Icon>
                            {order.status === 'WAITING' && '🕑'}
                            {order.status === 'IN_PRODUCTION' && '👩🏼‍🍳'}
                            {order.status === 'DONE' && '✅'}
                        </Icon>
                        <Status>
                            {order.status === 'WAITING' && 'Fila de espera'}
                            {order.status === 'IN_PRODUCTION' && 'Em produção'}
                            {order.status === 'DONE' && 'Pronto!'}
                        </Status>
                    </Content>
                </StatusContainer>

                <OrderDetails>
                    <TitleDetails>Itens</TitleDetails>
                    <OrderItems>
                        {order.products.map(({ _id, product, quantity }) => (
                            <Item
                                key={_id}
                                style={{ marginTop: order.products.length > 1 ? 16 : 0 }}
                            >
                                <ImageProduct
                                    src={`http://localhost:3001/uploads/${product.imagePath}`}
                                    alt={product.name}
                                />
                                <Quantity>{quantity}x</Quantity>
                                <ProductDetails>
                                    <ProductName>{product.name}</ProductName>
                                    <ProductPrice>{FormatCurrency(product.price)}</ProductPrice>
                                </ProductDetails>
                            </Item>
                        ))}
                        <TotalContainer>
                            <TotalTitle>Total</TotalTitle>
                            <TotalPrice>{FormatCurrency(total)}</TotalPrice>
                        </TotalContainer>
                    </OrderItems>
                </OrderDetails>

                <Footer>
                    <PrimaryButton
                        disabled={loading}
                    >
                        <Icon>👩🏼‍🍳</Icon>
                        <TitleBtn>Iniciar produção</TitleBtn>
                    </PrimaryButton>
                    <SecondaryButton
                        onClick={onCancelOrder}
                        disabled={loading}
                    >
                        <TitleBtn>Cancelar Pedido</TitleBtn>
                    </SecondaryButton>
                </Footer>
            </Container>
        </Overlay>
    );
};

export default OrderModal;
