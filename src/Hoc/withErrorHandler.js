import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


import NulledWrapper from './nulledWrapper';

const withErrorHandler = ( WrappedComponent, axios ) => {
    return class extends Component {
        state = {
            error: null
        }

        UNSAFE_componentWillMount () {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
                return error;
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        modalToggle = () => {
            this.setState({error: null});
        }

        render () {
            return (
                <NulledWrapper>
                    <Modal key="componentModal" isOpen={this.state.error? true: false} toggle={this.modalToggle}>
                        <ModalHeader toggle={this.modalToggle}>Error</ModalHeader>
                        <ModalBody>
                            {this.state.error ? this.state.error.message : null}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.modalToggle}>OK</Button>{' '}
                        </ModalFooter>
                </Modal>
            
                    <WrappedComponent {...this.props} />
                </NulledWrapper>
            );
        }
    }
}

export default withErrorHandler;