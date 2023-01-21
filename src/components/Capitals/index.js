import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  onSelect = event => {
    this.setState({activeId: event.target.value})
  }

  render() {
    const {activeId} = this.state

    const filteredList = countryAndCapitalsList.filter(
      each => each.id === activeId,
    )
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Countries and Capitals</h1>
          <form>
            <select onChange={this.onSelect} className="select">
              {countryAndCapitalsList.map(each => (
                <option value={each.id} key={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            is capital of which country?
          </form>
          <h1 className="country">{filteredList[0].country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
