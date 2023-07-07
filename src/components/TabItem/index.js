// Write your code here
import './index.css'

const TabItem = props => {
  const {text, updateActiveTab, isActive} = props
  const {tabId, displayText} = text

  const clickOnTab = () => {
    updateActiveTab(tabId)
  }

  const buttonClassName = isActive ? 'active-btn' : 'btn'

  return (
    <li className="list">
      <button type="button" className={buttonClassName} onClick={clickOnTab}>
        <p className="para">{displayText}</p>
      </button>
    </li>
  )
}
export default TabItem
