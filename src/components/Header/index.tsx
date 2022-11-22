import logo from '../../assets/images/logo.svg';

import { Container, Content, SubTitle, Title } from './styles';

const Header: React.FC = () => {
    return (
        <Container>
            <Content>
                <div className="page-details">
                    <Title>Pedidos</Title>
                    <SubTitle>Acompanhe os pedidos dos clientes</SubTitle>
                </div>

                <img src={logo} alt="WAITERAPP" />
            </Content>
        </Container>
    );
};

export default Header;
