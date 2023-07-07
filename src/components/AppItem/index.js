// Write your code here
import './index.css'

const AppItem = props => {
  const {details} = props
  const {appName, imageUrl} = details

  return (
    <li className="appList">
      <img src={imageUrl} alt={appName} className="image" />
      <h1 className="heading">{appName}</h1>
    </li>
  )
}
export default AppItem
