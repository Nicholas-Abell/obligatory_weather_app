import './UserInput.scss'

const UserInput = (props) => {
    return (
        <div className='user-input'>
            <input
                type='text'
                className='user-input__text'
                onChange={props.onChange}
                placeholder='   ...city'
                required>
            </input>
            <button onClick={props.onClick} className='user-input__btn'>Push</button>
        </div>
    )
}

export default UserInput;