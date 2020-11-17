import React from 'react';
import Parse from '../Parse.js'
import { Col, Button, Form } from 'react-bootstrap'

class AddReviewForm extends React.Component {
  constructor() {
    super();
    this.state = {
      nickname: '',
      body: '',
      summary: '',
      email: '',
      doRecommend: 0,
      stars: 0,
      size: 0,
      width: 0,
      comfort: 0,
      quality: 0,
      length: 0,
      fit: 0,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    let value = target.value;
    const name = target.name;
    if(name === 'doRecommend' || name === 'fit' || name === 'size' || name === 'width' || name === 'comfort' || name === 'quality' || name === 'length' || name === 'stars') {
      value = Number(value);
    }
    this.setState({
      [name]: value
    });
    console.log(this.state)
  }

  handleSubmit(event) {
    event.preventDefault();
    const characteristicsObj = {
      '14': this.state.size,
      '15': this.state.width,
      '16': this.state.comfort,
      '17': this.state.quality

    }

    const body = {
      rating: this.state.stars,
      summary: this.state.summary,
      body: this.state.body,
      recommend: true,
      name: this.state.nickname,
      email: this.state.email,
      characteristics: characteristicsObj
    }
    Parse.submitReview(body, (err, result) => {
      if(err) {
        console.log(err)
      } else {
        console.log(result)
      }
    })
    console.log(body)
  }

  render() {
    return (
      <div>
        <Form id='addReviewForm'>
        <h3 id='reviewFormTitle'>Write Your Review</h3>
        <Form.Row>
          <Col>
            <Form.Group>
                <Form.Control name='nickname' required maxlength='20' type='text' placeholder='Enter Username' value={this.state.nickname} onChange={this.handleChange}/>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Control name='email' required value={this.state.email} type='email' placeholder='Enter Valid Email' onChange={this.handleChange} />
            </Form.Group>
          </Col>
        </Form.Row>
          <Form.Group>
          <Form.Label id='formQuestions'>What is your overall rating of this product?&nbsp; &nbsp; &nbsp;</Form.Label> <br></br>
            <Form.Check inline name='stars' value={5} label='5 Stars' type='radio' id='inline-radio1' onChange={this.handleChange} />
            <Form.Check inline name='stars' value={4} label='4 Stars' type='radio' id='inline-radio1' onChange={this.handleChange} />
            <Form.Check inline name='stars' value={3} label='3 Stars' type='radio' id='inline-radio1' onChange={this.handleChange} />
            <Form.Check inline name='stars' value={2} label='2 Stars' type='radio' id='inline-radio1' onChange={this.handleChange} />
            <Form.Check inline name='stars' value={1} label='1 Star' type='radio' id='inline-radio1' onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label inline  id='formQuestions'>Do You Recommend This Product?&nbsp; &nbsp; &nbsp;</Form.Label>
            <Form.Check inline name='doRecommend' value={1} label='Yes' type='radio' id='inline-radio1' onChange={this.handleChange} />
            <Form.Check inline name='doRecommend' value={0} label='No' type='radio' id='inline-radio1' onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Control required name='summary' value={this.state.summary} maxlength='60' type='text' placeholder='Enter Review Title' onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Control as='textarea' name='body' value={this.state.body} required maxlength='1000' type='text' placeholder='Enter Full Review' onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label id='formQuestions'>How Was the Quality of the Product You Recieved</Form.Label>
            <Form.Control as='select' defaultValue='None Selected' value={this.state.quality} onChange={this.handleChange} name='quality'>
              <option value={0}>None Selected</option>
              <option value={5}>5 - Perfect</option>
              <option value={4}>4 - Great</option>
              <option value={3}>3 - Not Poor, but Not Great</option>
              <option value={2}>2 - Poor</option>
              <option value={1}>1 - Disapointing</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
          <Form.Label id='formQuestions'>How Comfortable is the Product Your Ordered</Form.Label>
            <Form.Control as='select' defaultValue='None Selected' value={this.state.comfort} onChange={this.handleChange} name='comfort'>
              <option value={0}>None Selected</option>
              <option value={5}>5 - Very Comfortable</option>
              <option value={4}>4 - Somewhat Comfortable</option>
              <option value={3}>3 - It is Average</option>
              <option value={2}>2 - Dissapointing</option>
              <option value={1}>1 - Not Comfortable</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
          <Form.Label id='formQuestions'>Was the Size Accurate With the Listing?</Form.Label>
            <Form.Control as='select' defaultValue='None Selected' value={this.state.size} onChange={this.handleChange} name='size'>
              <option>None Selected</option>
              <option value={5}>5 - Way Too Big</option>
              <option value={4}>4 - A Little Big</option>
              <option value={3}>3 - Perfect</option>
              <option value={2}>2 - A Little Small</option>
              <option value={1}>1 - Way Too Small</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
          <Form.Label id='formQuestions'>Was the Length Accurate With the Listing?</Form.Label>
            <Form.Control as='select' defaultValue='None Selected' value={this.state.length} onChange={this.handleChange} name='length'>
              <option value={0}>None Selected</option>
              <option value={5}>5 - Way Too Long</option>
              <option value={4}>4 - A Little Long</option>
              <option value={3}>3 - Perfect</option>
              <option value={2}>2 - A Little Short</option>
              <option value={1}>1 - Way Too Short</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
          <Form.Label id='formQuestions'>Was the Width Accurate With the Listing?</Form.Label>
            <Form.Control as='select' defaultValue='None Selected' value={this.state.width} onChange={this.handleChange} name='width'>
              <option value={0}>None Selected</option>
              <option value={5}>5 - Way Too Big</option>
              <option value={4}>4 - A Little Big</option>
              <option value={3}>3 - Perfect</option>
              <option value={2}>2 - A Little Tight</option>
              <option value={1}>1 - Way Too Tight</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
          <Form.Label id='formQuestions'>Was the Fit Accurate With the Listing?</Form.Label>
            <Form.Control as='select' defaultValue='None Selected' value={this.state.fit} onChange={this.handleChange} name='fit'>
              <option value={0}>None Selected</option>
              <option value={5}>5 - Fit Perfectly</option>
              <option value={4}>4 - Great Fit</option>
              <option value={3}>3 - As Expected</option>
              <option value={2}>2 - Poor Fit</option>
              <option value={1}>1 - Does Not Fit</option>
            </Form.Control>
          </Form.Group>
          <Button variant='primary' onClick={this.handleSubmit}>Post Review</Button>
        </Form>
      </div>
    )
  }
}

export default AddReviewForm