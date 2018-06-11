import React, {Component} from 'react';
import Input from '../Input/Input';
import axios from '../../axios';
import Loader from '../Loader/Loader';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import withErrorHandler from '../../Hoc/withErrorHandler';
import bootstrap from '../../assets/scss/bootstrap.scss';
import {Helmet} from 'react-helmet';


class EditUser extends Component {
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
                valid: true,
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
                valid: true,
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
                valid: true,
                touched: false
            }
        },
        loader: false,
        modal: false  
        
    }
    modalToggle = () => {
        this.setState({ modal: !this.state.modal });
      }
    inputChangedHandler = (event, inputIdentifier) => {
        this.setState({formIsValid: true});
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

    editUserHendler = (e) => {
        e.preventDefault();
		this.setState({loader: true});
        let dataToPost = {};
        Object.keys(this.state.formConfig).map(fKey => {
            dataToPost[fKey] = this.state.formConfig[fKey].value;  
            return null;
        });
        axios.put('/users/'+this.props.match.params.id+'.json', dataToPost).then(responce => {
            if(responce.status=== 200) {
                const formCopy = {...this.state.formConfig}
                Object.keys(formCopy).forEach(userKey => {
                    formCopy[userKey].value = '';
                });
                this.setState({formConfig: formCopy, loader: false, modal: true});
            } else {
                this.setState({loader: false});
            }
			
       
		});
    }
    componentDidMount() {
        this.setState({loader: true});
        axios.get('/users/'+this.props.match.params.id+'.json').then(responce => {
            //responce.data
            const formConfigCopy = {...this.state.formConfig}
            Object.keys(formConfigCopy).forEach(key => {
                formConfigCopy[key].value = responce.data[key];
            });
            this.setState({formConfig: formConfigCopy, loader: false});
        }).catch(error => {

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
        let form =  <form onSubmit={this.editUserHendler}>
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
            </form>;
            return(
                <React.Fragment>
                    <Helmet>
                        <title>Edit User</title>
                    </Helmet>
                    {form}
            <Loader show={this.state.loader} />
            <Modal cssModule={bootstrap} isOpen={this.state.modal} toggle={this.modalToggle}>
            <ModalHeader cssModule={bootstrap} toggle={this.modalToggle}>Successfully updated</ModalHeader>
            <ModalBody cssModule={bootstrap}>
            Record has been successfully updated.
            </ModalBody>
            <ModalFooter cssModule={bootstrap}>
                <Button cssModule={bootstrap} color="primary" onClick={this.modalToggle}>OK</Button>{' '}
            </ModalFooter>
            </Modal>
            </React.Fragment>
        );

    }
}

export default withErrorHandler(EditUser, axios);