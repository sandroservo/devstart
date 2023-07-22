import {  Card, Columns } from "react-bulma-components"
import Input from "../input"
import { Title, Flex, SessionInput } from "./styles"
import { useNavigate } from "react-router-dom"
//import Popover from "@idui/react-popover"


export function HeaderC({ title, placeholder, value, onChange, route }) {

    const navigate = useNavigate()
    return (
        <>
        <Columns>
            <Columns.Column>
                <Card>
                    <Card.Content>
                        <Flex>
                            <Title>{title}</Title>
                            <SessionInput>
                                <Input
                                    placeholder={placeholder}
                                    icon="fa-solid fa-magnifying-glass"
                                    value={value}
                                    onChange={onChange}
                                />
                                <button
                                    className="button is-link btn-add"
                                    onClick={() => navigate(route)}
                                >
                                    <span className="icon is small">
                                        <i className="fas fa-plus"></i>
                                    </span>
                                    <span>Adicionar</span>
                                </button>
                            </SessionInput>
                        </Flex>
                    </Card.Content>
                </Card>
            </Columns.Column>
        </Columns>
        </>
    )
}