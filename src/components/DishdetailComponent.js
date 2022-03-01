import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    render() {
        if (this.props.dish != null)
            return ( 
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                       <Card>
                            <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                              <CardTitle>{this.props.dish.name}</CardTitle>
                              <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-12 col-md-5 m-1'> 
                        {this.renderComments()}
                    </div>
               </div>
            );
        else
            return(
                <div></div>
            );
    }
    renderComments() {
        return (
            <div>
                <h4>Comment</h4>
                <ul className='list-unstyled'>
                    {this.props.dish.comments.map((c) => {
                        return (
                            <li>
                                <div>{c.comment}</div>
                                <div>--{c.author}, {c.date}</div>
                            </li>
                        )
                    })
                    }                    
                </ul>
            </div>  
        )
    }
}

export default DishDetail;
