import styled from 'styled-components';
import Colors from '../../styles/Colors';

export const Board = styled.div`
    padding: 16px;
    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
`;

export const Header = styled.header`
    padding: 8px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const Icon = styled.span``;

export const Title = styled.strong``;

export const Quanty = styled.span``;

export const OrdersContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 24px;
`;

export const Button = styled.button`
    height: 128px;
    background: ${Colors.WHITE};
    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    & + Button {
        margin-top: 24px;
    }
`;

export const Table = styled.strong`
    font-weight: 500;
`;

export const QuantyItems = styled.span`
    font-size: 14px;
    color: #666;
`;
