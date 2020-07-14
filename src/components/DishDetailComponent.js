import React from 'react';

import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';

class DishDetail extends React.PureComponent {
  renderDish(dish) {
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }
  renderComments(comments) {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return comments.map(comment => (
      <div key={comment.id}>
        <li>{comment.comment}</li>
        <li className="my-3">
          -- {comment.author}&nbsp;,&nbsp;{' '}
          {new Intl.DateTimeFormat('en-US', options).format(
            new Date(comment.date)
          )}
        </li>
      </div>
    ));
  }
  render() {
    const { dish } = this.props;
    if (dish != null)
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">{this.renderDish(dish)}</div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
              {this.renderComments(dish.comments)}
            </ul>
          </div>
        </div>
      );
    else return <div></div>;
  }
}

export default DishDetail;