

function ContactCard({ children, icon, title }) {
    return (
        <div>
            {icon}
            <p>{title}</p>
            <p>{children}</p>
        </div>
    )
}

export default ContactCard