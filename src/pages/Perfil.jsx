import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }
    return (
        isAuthenticated && (
            <div className="container rounded bg-white mt-5 mb-5">
                {/* {JSON.stringify(user)} */}
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img className="rounded-circle mt-5" width="150px" src={user.picture} alt={user.name} />
                            <span className="font-weight-bold">{user.nickname}</span>
                            <span></span>
                        </div>
                    </div>
                    <div className="col-md-9 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Perfil</h4>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <label className="labels">Nombres</label>
                                    <input type="text" className="form-control" placeholder="Nombre" value={user.given_name.toUpperCase()} />
                                </div>
                                <div className="col-md-6">
                                    <label className="labels">Apellidos</label>
                                    <input type="text" className="form-control" value={user.family_name.toUpperCase()} placeholder="Apellidos" />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-3">
                                    <label className="labels">Rol</label>
                                    <input type="text" className="form-control" placeholder="tipo usuario" value="" />
                                </div>
                                <div className="col-md-3">
                                    <label className="labels">Teléfono</label>
                                    <input type="text" className="form-control" placeholder="Teléfono" value="" />
                                </div>
                                <div className="col-md-6">
                                    <label className="labels">Email</label>
                                    <input type="text" className="form-control" placeholder="Email" value={user.email.toLowerCase()} />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <label className="labels">Dirección</label>
                                <input type="text" className="form-control" placeholder="Dirección" value="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};