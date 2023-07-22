import { useEffect, useState } from "react"
import { HeaderC } from "../../components"
import { Columns} from "react-bulma-components"
import { useDispatch,  useSelector } from "react-redux"
import { usersInRequest } from "../../store/modules/users/actions"



 const Users = () => {
    const [search, setSearch ] = useState("")
    const [skip, setSkip ] = useState(0)
    const [ limit,  setLimit] = useState(20)

    const dispatch = useDispatch()

    const users =  useSelector(state => state.users)

    useEffect(()=> {
        dispatch(usersInRequest(skip, limit, search))
    }, []);

    useEffect(()=> {
        console.log(users)
    }, [users])

    return (
        <>
            <Columns>
                <Columns.Column>
                    <HeaderC
                        title="Usuários"
                        placeholder="Pesquisar"
                        value={search}
                        onChange={event => setSearch(event.target.value)}
                        route="/usuarios/formularios"
                    />
                </Columns.Column>
            </Columns>
        </>
    )
}


export default Users;