import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const SignUp = () => {
  return (
    <>
      <Meta title={"Rejestracja"} />
      <BreadCrumb title={"Rejestracja"} />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Zarejestruj się</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  type="text"
                  name="name"
                  placeholder="Imię i nazwisko"
                />
                <CustomInput type="email" name="email" placeholder="Email" />
                <CustomInput
                  type="tel"
                  name="mobile"
                  placeholder="Numer telefonu"
                />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Hasło"
                />
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-20 align-items-center">
                    <button className="button border-0">Zarejestruj się</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SignUp;
