import { Menu, Logo, Option, Header, Content } from "./styled"
import LogoImg from "../../assets/logo.png";
import { Dropdown } from "react-bulma-components";
import { exitIn } from "../../store/modules/auth/actions";
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";

export function Navigate({ children }) {

const dispacth = useDispatch()
const navigate = useNavigate()

    const handleDropdown = (value) => {
        if(value === "exit") {
            dispacth(exitIn())
        }
    }

    return (
        <>
            <Menu >
                <Logo src={LogoImg} />
                <Option onClick={()=> navigate("/")} > 
                    <i  className="fa-solid fa-house icon" />
                    Dashboard
                </Option>
                <Option onClick={()=>navigate("/usuarios")}> 
                    <i  className="fa-solid fa-user icon" />
                    Usuários
                </Option>
            </Menu>
            <Header >
                <Dropdown 
                label="Minha conta  "
                closeOnSelect={true}
                onChange={value => handleDropdown(value)}
                icon={
                    <i className="fas fa-angle-down" />
                }
                >
                    <Dropdown.Item value="exit">Sair</Dropdown.Item>
                </Dropdown>
            </Header>
            <Content>{children}</Content>
        </>
    )
}