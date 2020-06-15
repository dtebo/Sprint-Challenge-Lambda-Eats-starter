import React from 'react';

import {
    Form,
    FormGroup,
    Button,
    Label,
    Input,
    FormText,
    Col,
    Container,
    Row
} from 'reactstrap';

import './PizzaForm.css';

const PizzaForm = () => {
    return (
        <>
            <div className='pizza-form-container'>
                <h1>Build Your Own Pizza</h1>
                <img alt='' src='' />
                <Form>
                    <FormText className='form-intro'>
                        Build Your Own Pizza
                    </FormText>
                    <div className='topping-section'>
                        <h2>Choice of Size</h2>
                        <p>Required</p>
                    </div>
                    <FormGroup>
                        <Label for='size' />
                        <Input type='select' id='size' name='size'>
                            <option value=''>Select</option>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                            <option value='extralarge'>Extra Large</option>
                        </Input>
                    </FormGroup>
                    <div className='topping-section'>
                        <h2>Choice of Sauce</h2>
                        <p>Required</p>
                    </div>
                    <FormGroup check>
                        <Label check>
                            <Input type='radio' name='sauce' />{' '}
                            Original Red
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='radio' name='sauce' />{' '}
                            Garlic Ranch
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='radio' name='sauce' />{' '}
                            BBQ Sauce
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='radio' name='sauce' />{' '}
                            Spinach Alfredo
                        </Label>
                    </FormGroup>
                    <div className='topping-section'>
                        <h2>Add Toppings</h2>
                        <p>Choose up to 10</p>
                    </div>
                    <Container>
                        <Row>
                            <Col md={6}>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' id='pepperoni' name='pepperoni' />{' '}
                                        Pepperoni
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' id='sausage' name='sausage' />{' '}
                                        Sausage
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' id='canadianbacon' name='canadianbacon' />{' '}
                                        Canadian Bacon
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' id='spicyitaliansausage' name='spicyitaliansausage' />{' '}
                                        Spicy Italian Sausage
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' id='grilledchicken' name='grilledchicken' />{' '}
                                        Grilled Chicken
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' id='onion' name='onion' />{' '}
                                        Onion
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' id='greenpepper' name='greenpepper' />{' '}
                                        Green Pepper
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' id='pepperoni' name='pepperoni' />{' '}
                                        Pepperoni
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' id='pepperoni' name='pepperoni' />{' '}
                                        Pepperoni
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' id='pepperoni' name='pepperoni' />{' '}
                                        Pepperoni
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' id='pepperoni' name='pepperoni' />{' '}
                                        Pepperoni
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' id='pepperoni' name='pepperoni' />{' '}
                                        Pepperoni
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' id='pepperoni' name='pepperoni' />{' '}
                                        Pepperoni
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' id='pepperoni' name='pepperoni' />{' '}
                                        Pepperoni
                                    </Label>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Container>
                    <div className='topping-section'>
                        <h2>Choice of Substitute</h2>
                        <p>Choose up to 1</p>
                    </div>
                    <div className='topping-section'>
                        <h2>Special Instructions</h2>
                    </div>
                </Form>
            </div>
        </>
    );
};

export default PizzaForm;