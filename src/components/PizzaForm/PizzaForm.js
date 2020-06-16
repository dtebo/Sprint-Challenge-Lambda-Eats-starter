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
        toppings: {
            "pepperoni": false,
            "sausage": false,
            "canadianbacon": false,
            "spicyitaliansausage": false,
            "grilledchicken": false,
            "onion": false,
            "greenpepper": false,
            "dicedtomatos": false,
            "blackolives": false,
            "roastedgarlic": false,
            "artichokehearts": false,
            "threecheese": false,
            "pineapple": false,
            "extracheese": false,
        },
        substitute: false,
        qty: 0
    });

    const [buttonDisabled, setButtonDisabled] = useState(true);

    const [errors, setErrors] = useState({
        name: "",
        size: "",
        sauce: "",
        toppings: {
            "pepperoni": "",
            "sausage": "",
            "canadianbacon": "",
            "spicyitaliansausage": "",
            "grilledchicken": "",
            "onion": "",
            "greenpepper": "",
            "dicedtomatos": "",
            "blackolives": "",
            "roastedgarlic": "",
            "artichokehearts": "",
            "threecheese": "",
            "pineapple": "",
            "extracheese": "",
        },
        qty: ""
    });

    const formSchema = yup.object().shape({
        name: yup.string().min(2, "Must be at least 2 characters").required("Name is a required field"),
        size: yup.string().required("A size choice is required"),
        sauce: yup.string().required("A sauce selection is required"),
        toppings: yup.object().shape({
            pepperoni: yup.boolean(),
            sausage: yup.boolean(),
            canadianbacon: yup.boolean(),
            spicyitaliansausage: yup.boolean(),
            grilledchicken: yup.boolean(),
            onion: yup.boolean(),
            greenpepper: yup.boolean(),
            dicedtomatos: yup.boolean(),
            blackolives: yup.boolean(),
            roastedgarlic: yup.boolean(),
            artichokehearts: yup.boolean(),
            threecheese: yup.boolean(),
            pineapple: yup.boolean(),
            extracheese: yup.boolean(),
        }).required("At least one topping should be selected"),
        substitute: yup.boolean(),
        qty: yup.number().moreThan(0, "You must add at least one pizza")
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
            [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
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

                console.log(res.data);

                setFormState({
                    name: "",
                    size: "",
                    sauce: "",
                    toppings: {
                        "pepperoni": false,
                        "sausage": false,
                        "canadianbacon": false,
                        "spicyitaliansausage": false,
                        "grilledchicken": false,
                        "onion": false,
                        "greenpepper": false,
                        "dicedtomatos": false,
                        "blackolives": false,
                        "roastedgarlic": false,
                        "artichokehearts": false,
                        "threecheese": false,
                        "pineapple": false,
                        "extracheese": false,
                    },
                    substitute: false,
                    qty: 0
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
                            <Input type='text' data-cy='name' id='name' name='name' bsSize='lg' value={formState.name} onChange={handleChanges} />
                            {errors.name.length > 0 ? <p className='error'>{errors.name}</p> : null}
                        </Label>
                    </FormGroup>
                    <div className='topping-section'>
                        <h2>Choice of Size</h2>
                        <p>Required</p>
                    </div>
                    <FormGroup>
                        <Label for='size' />
                        <Input type='select' data-cy='size' id='size' name='size' bsSize='md' value={formState.size} onChange={handleChanges}>
                            <option value=''>Select</option>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                            <option value='extralarge'>Extra Large</option>
                        </Input>
                        {errors.size.length > 0 ? <p className='error'>{errors.size}</p> : null}
                    </FormGroup>
                    <div className='topping-section'>
                        <h2>Choice of Sauce</h2>
                        <p>Required</p>
                    </div>
                    <FormGroup check>
                        <Label check>
                            <Input type='radio' data-cy='sauce1' name='sauce'  value={formState.size} onChange={handleChanges} />{' '}
                            Original Red
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='radio' data-cy='sauce2' name='sauce'  value={formState.size} onChange={handleChanges} />{' '}
                            Garlic Ranch
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='radio' data-cy='sauce3' name='sauce'  value={formState.size} onChange={handleChanges} />{' '}
                            BBQ Sauce
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='radio' data-cy='sauce4' name='sauce'  value={formState.size} onChange={handleChanges} />{' '}
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
                                        <Input type='checkbox' data-cy='pepperoni' id='pepperoni' name='toppings.pepperoni' value={formState.toppings.pepperoni} onChange={handleChanges}  />{' '}
                                        Pepperoni
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' data-cy='sausage' id='sausage' name='toppings.sausage' value={formState.toppings.sausage} onChange={handleChanges} />{' '}
                                        Sausage
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' data-cy='canadianbacon' id='canadianbacon' name='toppings.canadianbacon' value={formState.toppings['canadianbacon']} onChange={handleChanges} />{' '}
                                        Canadian Bacon
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' data-cy='spicyitaliansausage' id='spicyitaliansausage' name='toppings.spicyitaliansausage' value={formState.toppings['spicyitaliansausage']} onChange={handleChanges} />{' '}
                                        Spicy Italian Sausage
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' data-cy='grilledchicken' id='grilledchicken' name='toppings.grilledchicken' value={formState.toppings['grilledchicken']} onChange={handleChanges} />{' '}
                                        Grilled Chicken
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' data-cy='onion' id='onion' name='toppings.onion' value={formState.toppings['onion']} onChange={handleChanges} />{' '}
                                        Onion
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' data-cy='greenpepper' id='greenpepper' name='toppings.greenpepper' value={formState.toppings['greenpepper']} onChange={handleChanges} />{' '}
                                        Green Pepper
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' data-cy='dicedtomatos' id='dicedtomatos' name='toppings.dicedtomatos' value={formState.toppings['dicedtomatos']} onChange={handleChanges} />{' '}
                                        Diced Tomatos
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' data-cy='blackolives' id='blackolives' name='toppings.blackolives' value={formState.toppings['blackolives']} onChange={handleChanges} />{' '}
                                        Black Olives
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' data-cy='roastedgarlic' id='roastedgarlic' name='toppings.roastedgarlic' value={formState.toppings['roastedgarlic']} onChange={handleChanges} />{' '}
                                        Roasted Garlic
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' data-cy='artichokehearts' id='artichokehearts' name='toppings.artichokehearts' value={formState.toppings['artichokehearts']} onChange={handleChanges} />{' '}
                                        Artichoke Hearts
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' data-cy='threecheese' id='threecheese' name='toppings.threecheese' value={formState.toppings['threecheese']} onChange={handleChanges} />{' '}
                                        Three Cheese
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' data-cy='pineapple' id='pineapple' name='toppings.pineapple' value={formState.toppings['pineapple']} onChange={handleChanges} />{' '}
                                        Pineapple
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' data-cy='extracheese' id='extracheese' name='toppings.extracheese' value={formState.toppings['extracheese']} onChange={handleChanges} />{' '}
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
                        <CustomInput className='switch' type='switch' id='substitute' name='substitute' label='Gluten Free Crust (+ $1.00)' bsSize='lg' value={formState.substitute} onChange={handleChanges} />
                    </FormGroup>
                    <div className='topping-section'>
                        <h2>Special Instructions</h2>
                    </div>
                    <Input type='text' id='special-instructions' placeholder="Anything else you'd like to add?" />
                    <section className='total-section'>
                        <Row>
                            <Col md={8}>
                                <FormGroup>
                                    <Input type='number' data-cy='qty' name='qty' id='qty' placeholder='0' bsSize='lg' value={formState.qty} onChange={handleChanges} />
                                </FormGroup>
                            </Col>
                            <Col>
                                <Button type='submit' data-cy='submit' size='lg' disabled={buttonDisabled}>Add to Order    $0.00</Button>
                            </Col>
                        </Row>
                    </section>
                </Form>
            </div>
        </>
    );
};

export default PizzaForm;