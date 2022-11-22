import styled from 'styled-components';

import Colors from '../../styles/Colors';

export const Container = styled.header`
    background: ${Colors.RED};
    justify-content: center;
    display: flex;
    height: 198px;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1216px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.h1`
    color: ${Colors.WHITE};
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 10px;
`;

export const SubTitle = styled.h2`
    font-size: 16px;
    font-weight: 400;
    color: ${Colors.WHITE};
    opacity: 0.9;
`;
