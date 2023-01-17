import React, { ChangeEvent, KeyboardEvent, KeyboardEventHandler, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'


type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}


export const pureAddUser = (name: any, setError: any, setName: any, addUserCallback: any) => {
    if (name) {
        addUserCallback(name)}
    else {
        setError('Ошибка! Введите имя!');
    }
    setName('')
    
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}


export const pureOnBlur = (name: any, setError: any) => {
    if (!name) {
        setError('Ошибка! Введите имя!')}
}


export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: ()=>void) => {
    if (e.code === 'Enter') {addUser()}
}




const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {

        setName(e.currentTarget.value)
        error && setError('') // ???
    }

    const addUser = () => { pureAddUser(name, setError, setName, addUserCallback) }

    const onBlur = () => { pureOnBlur(name, setError) }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => { pureOnEnter(e, addUser) } // ?? Image

    const totalUsers = 0 || users.length; 
    const lastUserName = users.length ? users[users.length-1].name : '' ;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
