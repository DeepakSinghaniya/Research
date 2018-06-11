import React, {Component} from 'react';
import Input from '../Input/Input';
import axios from '../../axios';
import Loader from '../Loader/Loader';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import withErrorHandler from '../../Hoc/withErrorHandler';
import bootstrap from '../../scss/bootstrap.scss';



class AddUser extends Component {
    state = {
        formConfig: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            age: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Age'
                },
                value: '',
                validation: {
                    required: true,
                    isNumeric: true
                },
                valid: false,
                touched: false
            }
        },
		loader: false
    }

    modalToggle = () => {
        this.setState({ modal: !this.state.modal });
      }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedformConfig = {
            ...this.state.formConfig
        };
        const updatedFormElement = { 
            ...updatedformConfig[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedformConfig[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedformConfig) {
            formIsValid = updatedformConfig[inputIdentifier].valid && formIsValid;
        }
        this.setState({formConfig: updatedformConfig, formIsValid: formIsValid});
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    addUserHendler = (e) => {
        e.preventDefault();
		this.setState({loader: true});
        let dataToPost = {};
        Object.keys(this.state.formConfig).map(fKey => {
            dataToPost[fKey] = this.state.formConfig[fKey].value;  
            return null;
        });
        axios.post('/users.json', dataToPost).then(responce => {
            if(responce.status === 200) {
                const formCopy = {...this.state.formConfig}
                Object.keys(formCopy).forEach(userKey => {
                    formCopy[userKey].value = '';
                });
                this.setState({formConfig: formCopy, loader: false, modal: true});
            }
			
		}).catch((error) => {
            console.log(error);
            this.setState({loader: false}); 
        });
    }
    render(){
       

        const formElementsArray = [];
        for (let key in this.state.formConfig) {
            formElementsArray.push({
                id: key,
                config: this.state.formConfig[key]
            });
        }
        let form = ([ <form key="formElement" onSubmit={this.addUserHendler}>
                {formElementsArray.map(formElement => (
                    <Input bootstrapModule={bootstrap}
                        keyid={formElement.id} 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <button type="submit" className={[bootstrap.btn, bootstrap['btn-outline-success']].join(' ')} disabled={!this.state.formIsValid}>Submit</button>
            </form>,
            <Loader key="Loader" show={this.state.loader} />,
            <Modal cssModule={bootstrap} key="componentModal" isOpen={this.state.modal} toggle={this.modalToggle}>
            <ModalHeader cssModule={bootstrap} toggle={this.modalToggle}>successfully added</ModalHeader>
            <ModalBody cssModule={bootstrap} >
                    Record has been successfully added.
            </ModalBody>
            <ModalFooter cssModule={bootstrap} >
                <Button cssModule={bootstrap} color="primary" onClick={this.modalToggle}>OK</Button>{' '}
            </ModalFooter>
            </Modal>
			]
        );

        return form;
    }
}

export default withErrorHandler(AddUser, axios);