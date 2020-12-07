import React, { Component } from 'react';
import RelatedCard from '../components/RelatedCard/RelatedCard.jsx'
import RelatedCardList from '../components/RelatedCardList/RelatedCardList.jsx'
import OutfitCardList from '../components/OutfitCardList/OutfitCardList.jsx'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import axios from 'axios';

// import localStorage from 'local-storage';

class RelatedAndOutfitApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainProduct: this.props.match.params.id || 1,
      userSession: 121,
      relatedData: [],
      outfitData: []
    }

    this.clickAddOutfit = this.clickAddOutfit.bind(this)
    this.clickDeleteOutfit = this.clickDeleteOutfit.bind(this)
  }

  componentDidMount() {
    console.log(this.props.match.params.id)
    axios.get(`http://52.26.193.201:3000/products/${this.state.mainProduct}/related`)
      .then(res => {
        const relatedProducts = res.data;
        this.setState({ relatedData: relatedProducts })
      })
      .then(
        res => {
          this.setState({
            outfitData: JSON.parse(localStorage.getItem('outfitLocalStorage')) || []
          })
        }
      )
  }

  clickAddOutfit() {
    console.log(JSON.parse(localStorage.getItem('outfitLocalStorage')))
    if (!localStorage.getItem('outfitLocalStorage')) {
      let outfitArr = JSON.stringify([this.state.mainProduct])
      localStorage.setItem('outfitLocalStorage', outfitArr);
      this.setState({
        outfitData: JSON.parse(localStorage.getItem('outfitLocalStorage'))
      })
    } else if (JSON.parse(localStorage.getItem('outfitLocalStorage')).includes(this.state.mainProduct)) {
      console.log('Already exists', this.state.outfitData)
      return;
    } else {
      let outfitArr = JSON.stringify([...JSON.parse(localStorage.getItem('outfitLocalStorage')), this.state.mainProduct])
      localStorage.setItem('outfitLocalStorage', outfitArr);
      this.setState({
        outfitData: JSON.parse(localStorage.getItem('outfitLocalStorage'))
      })
    }
  }

  clickDeleteOutfit(id) {

    let outfitArr = JSON.parse(localStorage.getItem('outfitLocalStorage'));
    for (let i = 0; i < outfitArr.length; i++) {
      if (outfitArr[i] === id) {
        outfitArr.splice(i, 1)
      }
    }
    localStorage.removeItem('outfitLocalStorage');
    localStorage.setItem('outfitLocalStorage', JSON.stringify(outfitArr));

    this.setState({
      outfitData: JSON.parse(localStorage.getItem('outfitLocalStorage'))
    })
  }

  render() {
    return (
      <div>
        <div>
          <h1>RELATED PRODUCTS</h1>
          <RelatedCardList
            //passing array of indices
            relatedData={this.state.relatedData}
            mainProduct={this.state.mainProduct}
          />
        </div>

        <div>
          <h1>YOUR OUTFIT</h1>
          <OutfitCardList
            clickAddOutfit={this.clickAddOutfit}
            outfitData={this.state.outfitData}
            mainProduct={this.state.mainProduct}
            clickDeleteOutfit={this.clickDeleteOutfit}
          />
        </div>
      </div>
    );
  }
}

export default RelatedAndOutfitApp;