import React from 'react'
import Axios from 'axios'

export default class ZoomatoApi extends React.Component{
    state = {
        cityData: [],
        searchInput: " "
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
                const cityData = response.data;
                this.setState({cityData})
                console.log(cityData)
            })
            .catch(error => {   
              console.log(error);
            });
    }

   
  

 
    render(){
            const restaurentResult = this.state.cityData;
            console.log(restaurentResult)
            // const name = restaurentResult.map((e,id) => <li key={id}>{e.name}</li>)
        return(
            <div>
                <p>hello again</p>
                <input type='text' onChange={this.searchHandler}/>
                <button onClick={this.handleChange}>Submit</button>
                <ul>
                
                </ul>
            </div>
        )
    }
}