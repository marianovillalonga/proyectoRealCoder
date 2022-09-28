import React from "react";
import imagenNosotros from "../../images/Emprendate.webp";

export const Form = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-5 d-none d-lg-block bg-contact-image">
                  <img
                    src={imagenNosotros}
                    alt={imagenNosotros}

                    className="w-100 rounded"
                  />
                </div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <header className="my-3">
                      <h2>Contacto</h2>
                      <p>
                        Déjanos tu mensaje y nos pondremos en contacto a la
                        brevedad.
                      </p>
                    </header>
                    <form method="post">
                      <div className="row">
                        <div className="form-group col-xl-6">
                          <input
                            className="form-control"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Nombre y Apellido"
                          />
                        </div>
                        <div className="form-group col-xl-6">
                          <input
                            className="form-control"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-xl-12">
                          <textarea
                            className="form-control"
                            name="message"
                            id="message"
                            placeholder="Mensaje"
                            rows="6"
                          ></textarea>
                        </div>
                      </div>
                      <div className="row uniform">
                        <div className="col-xl-12">
                          <ul className="actions align-center pt-3">
                            <input
                              type="submit"
                              className="btn btn-primary btn-lg"
                              value="Enviar"
                            />
                          </ul>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
