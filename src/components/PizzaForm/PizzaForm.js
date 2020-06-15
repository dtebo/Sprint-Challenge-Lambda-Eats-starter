import React, {useState, useEffect} from 'react';

import * as yup from 'yup';
import axios from 'axios';

import {
    Form,
    FormGroup,
    Button,
    Label,
    Input,
    FormText,
    Col,
    Container,
    Row,
    CustomInput
} from 'reactstrap';

import './PizzaForm.css';

const PizzaForm = () => {
    const [post, setPost] = useState();

    const [serverError, setServerError] = useState("");

    const [formState, setFormState] = useState({
        name: "",
        size: "",
        sauce: "",
        toppings: [],
        substitute: false
    });

    const [buttonDisabled, setButtonDisabled] = useState(true);

    const [errors, setErrors] = useState({
        name: "",
        size: "",
        sauce: "",
        toppings: "",
        substitute: ""
    });

    const formSchema = yup.object().shape({
        name: yup.string().required("Name is a required field"),
        size: yup.string().required("A size choice is required"),
        sauce: yup.string().required("A sauce selection is required"),
        toppings: yup.array().of(yup.string()).required("At least one topping choice is required"),
        substitute: yup.boolean().oneOf([true])
    });

    useEffect(() => {
        formSchema.isValid(formState).then(isValid => {
            setButtonDisabled(!isValid);
        });
    }, [formSchema, formState]);

    const handleChanges = (event) => {
        event.persist();

        const newFormData = {
            ...formState,
            [event.target.name]: event.target.value
        };

        validateChange(event);

        setFormState(newFormData);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post("https://reqres.in/api/form", formState)
            .then(res => {
                setPost(res.data);

                setFormState({
                    name: ""
                });

                setServerError(null);
            })
            .catch(err => {
                setServerError("An error occurred");
            });
    };

    const validateChange = (event) => {

        // inline validation
        yup
            .reach(formSchema, event.target.name)
            .validate(event.target.value)
            .then(isValid => {
                setErrors({
                    ...errors,
                    [event.target.name]: ""
                });
            })
            .catch(err => {
                setErrors({
                    ...errors,
                    [event.target.name]: err.errors[0]
                });
            });
    };

    return (
        <>
            <div className='pizza-form-container'>
                <h1>Build Your Own Pizza</h1>
                <img alt='' src='' />
                <Form onSubmit={handleSubmit}>
                    <FormText className='form-intro'>
                        Build Your Own Pizza
                    </FormText>
                    <FormGroup>
                        <Label for='name'>
                            Name
                            <Input type='text' id='name' name='name' bsSize='sm' value={formState.name} onChange={handleChanges} />
                            {errors.name.length > 0 ? <p className='error'>{errors.name}</p> : null}
                        </Label>
                    </FormGroup>
                    <div className='topping-section'>
                        <h2>Choice of Size</h2>
                        <p>Required</p>
                    </div>
                    <FormGroup>
                        <Label for='size' />
                        <Input type='select' id='size' name='size' value={formState.size} onChange={handleChanges}>
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
                            <Input type='radio' name='sauce'  value={formState.size} onChange={handleChanges} />{' '}
                            Original Red
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='radio' name='sauce'  value={formState.size} onChange={handleChanges} />{' '}
                            Garlic Ranch
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='radio' name='sauce'  value={formState.size} onChange={handleChanges} />{' '}
                            BBQ Sauce
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='radio' name='sauce'  value={formState.size} onChange={handleChanges} />{' '}
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
                                        <Input type='checkbox' id='pepperoni' name='pepperoni'  />{' '}
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
                                        <Input type='checkbox' id='dicedtomatos' name='dicedtomatos' />{' '}
                                        Diced Tomatos
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' id='blackolives' name='blackolives' />{' '}
                                        Black Olives
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' id='roastedgarlic' name='roastedgarlic' />{' '}
                                        Roasted Garlic
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' id='artichokehearts' name='artichokehearts' />{' '}
                                        Artichoke Hearts
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' id='threecheese' name='threecheese' />{' '}
                                        Three Cheese
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' id='pineapple' name='pineapple' />{' '}
                                        Pineapple
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' id='extracheese' name='extracheese' />{' '}
                                        Extra Cheese
                                    </Label>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Container>
                    <div className='topping-section'>
                        <h2>Choice of Substitute</h2>
                        <p>Choose up to 1</p>
                    </div>
                    <FormGroup>
                        <CustomInput type='switch' id='substitute' name='substitute' label='Gluten Free Crust (+ $1.00)' bsSize='lg' value={formState.substitute} onChange={handleChanges} />
                    </FormGroup>
                    <div className='topping-section'>
                        <h2>Special Instructions</h2>
                    </div>
                    <Input type='text' id='special-instructions' placeholder="Anything else you'd like to add?" />
                    <section className='total-section'>
                        <Row>
                            <Col md={8}>
                                <FormGroup>
                                    <Input type='number' name='number' id='number' placeholder='0' bsSize='lg' value={formState.number} onChange={handleChanges} />
                                </FormGroup>
                            </Col>
                            <Col>
                                <Button type='submit' size='lg' disabled={buttonDisabled}>Add to Order    $0.00</Button>
                            </Col>
                        </Row>
                    </section>
                </Form>
            </div>
        </>
    );
};

export default PizzaForm;