import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

  function RenderDish({dish}) {
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
  function RenderComments({comments}) {
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
  const  DishDetail = (props) => {
    //const { dish } = this.props;
    if (props.dish != null)
      return (
        <div className="container">
        <div className="row">
            <Breadcrumb>

                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr />
            </div>                
        </div>
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                <RenderDish dish={props.dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
                <RenderComments comments={props.comments} />
            </div>
        </div>
        </div>
    );
        else return <div></div>;
  }


export default DishDetail;