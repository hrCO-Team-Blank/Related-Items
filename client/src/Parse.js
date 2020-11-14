import $ from 'jquery';

var Parse = {
  server: 'http://52.26.193.201:3000/reviews/5',

  getAllList: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server + '/list',
      type: 'GET',
      contentType: 'application/json',
      data: {},
      success: successCB,
      error: errorCB || function(error) {
        console.error('Failed to fetch list of reviews from Greenfield')
      }
    });
  },
  getProductMeta: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server + '/meta',
      type: 'GET',
      contentType: 'application/json',
      data: {},
      success: successCB,
      error: errorCB || function(error) {
        console.error('Failed to fetch meta of reviews from Greenfield')
      }
    });
  } ,
  markAsHelpful: function(id, successCB, errorCB = null) {
    $.ajax({
      url: `http://52.26.193.201:3000/reviews/helpful/${id}`,
      type: 'PUT',
      contentType: 'application/json',
      data: {},
      success: successCB,
      error: errorCB || function(error) {
        console.error('Failed to fetch meta of reviews from Greenfield')
      }
    })
  }
}

export default Parse