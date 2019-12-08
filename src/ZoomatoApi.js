import React from 'react'
import Axios from 'axios'
import Cuisine from './Cuisine'
export default class ZoomatoApi extends React.Component{
    state = {
        cityData: [],
        searchInput: " ",
    }

  searchHandler = (event) => {
 
    const value = event.target.value;
    this.setState(state => ({...state, searchInput: value}));
  }
    
  handleChange= () => {
        const url_key = 'c5ff9358cc3104a45cd8df377b24b5a3'
         Axios({
            method: "GET",
            url: `https://developers.zomato.com/api/v2.1/search?entity_id=260&entity_type=city&q=${this.state.searchInput}`,
            headers: {
              "user-key": url_key,
              "content-type": "application/json"
            }
          })
            .then(response => {
                const cityData = response.data.restaurants;
                this.setState({cityData})
                console.log(cityData)
            })
            .catch(error => {   
              console.log(error);
            });
    }
    
    render(){

        const dataAPI = this.state.cityData
        const getResp = dataAPI.map(e => {
            return e.restaurant
        })

    const getName = getResp.map((j,id) => <li key={id}>{j.name}</li>)
          
        return(
            <div>
                <h1>Welcome, User</h1>
                <p>What do you feel like ?</p>
                <input type='text' onChange={this.searchHandler}/>
                <button onClick={this.handleChange}>Confirm</button>
                <ul>
                    {getName}
                </ul>
                <Cuisine />
            </div>
            
        )
    }
}