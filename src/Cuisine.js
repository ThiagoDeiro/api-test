import React from 'react'
import Axios from 'axios'
export default class Cuisine extends React.Component{
   
   
    state = {
        cousineName: []
    }

    componentDidMount () {
        const url_key = 'c5ff9358cc3104a45cd8df377b24b5a3'
        Axios({
           method: "GET",
           url: `https://developers.zomato.com/api/v2.1/cuisines?city_id=260`,
           headers: {
             "user-key": url_key,
             "content-type": "application/json"
           }
         })
           .then(response => {
               const cousineName = response.data.cuisines;
               this.setState({cousineName})
            //    console.log(cousineName)
           })
           .catch(error => {   
             console.log(error);
           });
   }

   handleCousine = () => {
    const cuisineArr = this.state.cousineName

    const cuisineFilter = cuisineArr.map(e => {
        return e.cuisine
    })

    let cuisineN = cuisineFilter.map(e => {
        return e.cuisine_name
    })
    var size = 10;
    const cuisim = cuisineN.slice(0, size).map(i => {
        return i
        })        
        console.log(cuisim)
   }

    render() {
        this.handleCousine()
        
        return(
            <div>
                <ul>
                
                </ul>
            </div>
        )
    }
}