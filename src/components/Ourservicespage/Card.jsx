

function Card({ children, icon }) {
    return (
        <div className='Cards'>
            {icon}
            <p>
                {children}
            </p>
        </div>
    )
}

export default Card