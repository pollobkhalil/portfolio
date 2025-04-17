

const Button = ({text, className, id}) => {
  return (
    <a className={`${className ?? ' '} cta-wrapper`}>
        <div className="cta-button group">
            <div className="bg-circle">
                <p className="text">{text}</p>
            </div>
            <div className="arrow-wrapper">
                <img src="/images/arrow-down.svg" alt="" />
            </div>
        </div>
    </a>
  )
}

export default Button