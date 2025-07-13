import './Btn.css'

function Btn({children, setShowModal}) {
  return (
    <button className="btn txt-3" onClick={setShowModal}>{children}</button>
  )
}

export default Btn