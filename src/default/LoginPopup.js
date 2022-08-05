import React from 'react'
// import { Modal, Button } from 'react-bootstrap';
import { Login } from './Login'

export const LoginPopup = (props) => {
    return (
        <div className="modal fade lgoin_register_modal lgoin_register_modal_lg in" id="loginRegisterModal" style={{ display: 'block', paddingRight: '17px' }}>
            <div className="modal-backdrop fade in" style={{height: '608px'}}></div>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><img src="/assets/images/icons/popup_close.svg" width="14" onClick={props.hidePopup} /></button>
                    </div>
                    <div className="modal-body padd30">
                        <div className="login_register_popup_main">
                            <div className="row">
                                <div className="col-sm-6 regsiter_section">
                                    <div className="col-sm-11">
                                        <div className="login_register_popup_cont">
                                            <h4>Noch kein Kundenkonto?</h4>
                                            <h3>Kunde werden</h3>
                                            <p>Mit einem Kundenkonto bei mountainbike-parts.ch bist Du jederzeit bestens über den Bestellverlauf informiert und profitierst von attraktiven Rabattaktionen und preiswerten Ausverkaufsartikeln. Zudem wirst Du regelmässig über Produktneuheiten informiert.</p>
                                        </div>
                                        <a href="/register/" className="btn btn-warning btn-block btn-lg">Registrieren</a>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <form action="/login_check" method="POST" id="userLogin" noValidate="">
                                        <div className="col-sm-11 col-sm-offset-1">
                                            <div className="login_register_popup_cont">
                                                <h4>Einloggen</h4>
                                                <h3>Ich habe ein Kundenkonto</h3>
                                                <div className="login_register_input_field">
                                                    <div className="form-group">
                                                        <input type="text" id="username" name="_username" className="form-control" placeholder="E-Mail Adresse" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" id="password" name="_password" className="form-control" placeholder="Passwort" />
                                                    </div>
                                                </div>
                                                <div className="error" id="login_error"></div>
                                                <div className="margin10"></div>
                                                <div className="chkbox_inline">
                                                    <div className="checkbox">
                                                        <input type="checkbox" id="remember_me" name="_remember_me" value="on" className="styled active" />
                                                        <label htmlFor="remember_me">Login merken</label>
                                                    </div>
                                                    <div className="pull-right">
                                                        <label className="text14_lightgray">
                                                            <a href="/resetting/request" data-toggle="forgotPasswordModal" id="forgotPassword">Passwort vergessen?</a>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-success btn-block btn-lg" id="login">Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
