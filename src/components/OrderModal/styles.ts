import styled from 'styled-components';
import Colors from '../../styles/Colors';

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(4.5px);
    position: fixed;
`;

export const Container = styled.div`
    background: ${Colors.WHITE};
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 32px;
    gap: 32px;
    border-radius: 8px;
    position: absolute;
    width: 480px;
    height: 557px;
    right: 480px;
    top: calc(50% - 557px/2 - 0.5px);
`;

export const Header = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.strong`
    font-size: 24px;
    color: ${Colors.GRAY1};
`;

export const CloseBtn = styled.button`
    display: flex;
    border: 0;
    background: transparent;
`;

export const Image = styled.img``;

export const StatusContainer = styled.div`
    width: 100%;
`;

export const StatusTitle = styled.small`
    font-size: 14px;
    opacity: 0.8;
`;

export const Content = styled.div`
    margin-top: 8px;
    display: flex;
    gap: 8px;
    align-items: center;
`;

export const Icon = styled.span``;

export const Status = styled.strong``;

export const OrderDetails = styled.div`
    width: 100%;
`;

export const OrderItems = styled.div`
    margin-top: 16px;
`;

export const TitleDetails = styled.strong`
    color: ${Colors.GRAY1};
    opacity: 0.8;
    font-weight: 500;
    font-size: 14px;
`;

export const Item = styled.div`
    display: flex;
`;

export const ImageProduct = styled.img`
    width: 64px;
    height: 52px;
    border-radius: 6px;
`;

export const Quantity = styled.span`
    font-size: 14px;
    display: block;
    color: ${Colors.GRAY2};
    min-width: 24px;
    margin-left: 12px;
`;

export const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const ProductName = styled.strong`
    color: ${Colors.GRAY1};
    display: block;
    margin-bottom: 4px;
`;

export const ProductPrice = styled.span`
    font-weight: 400;
    font-size: 14px;
    color: ${Colors.GRAY2};
`;

export const TotalContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;
`;

export const TotalTitle = styled.span`
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;
`;

export const TotalPrice = styled.strong`
    font-size: 16px;
`;

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const PrimaryButton = styled.button`
    background: ${Colors.GRAY1};
    border-radius: 48px;
    border: 0;
    padding: 12px 24px;
    color: ${Colors.WHITE};
    gap: 12px;
    align-items: center;
    justify-content: center;
    :disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export const TitleBtn = styled.span``;

export const SecondaryButton = styled.button`
    background: transparent;
    border: 0;
    padding: 14px 24px;
    color: ${Colors.RED};
    font-weight: bold;
    margin-top: 16px;
    :disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;
