import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import styled, { keyframes } from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

emailjs.init("xif8fcq67foO9rUd4");

const gradientBorderRotation = keyframes`
  0% {
    border-image-source: linear-gradient(0deg, red, orange, yellow, green, blue, indigo, violet);
  }
  100% {
    border-image-source: linear-gradient(360deg, red, orange, yellow, green, blue, indigo, violet);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 100px; 
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 500px;
  min-width: 290px;
  padding: 40px;
  border: 11px solid transparent;
  border-radius: 10px;
  background: #0e0e0e;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  animation: ${gradientBorderRotation} 5s linear infinite;
  border-image-slice: 1;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    padding: 20px;
    margin: 20px;
  }
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  color: #ccc;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid #555;
  border-radius: 5px;
  background: #1e1e1e;
  color: #fff;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #ff69b4;
    box-shadow: 0 0 10px #ff69b4;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 2px solid #555;
  border-radius: 5px;
  background: #1e1e1e;
  color: #fff;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #ff69b4;
    box-shadow: 0 0 10px #ff69b4;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  max-width: 200px;

  &:hover {
    background-color: #0056b3;
    color: white;
    box-shadow: 0 0 10px #0056b3;
  }
`;

function Form() {
  const [showForm, setShowForm] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data, e) => {
    emailjs.sendForm("service_6aw5w8n", "template_y93odsb", e.target).then(
      (result) => {
        console.log("SUCCESS!", result.text);
        toast.success("Senden erfolgreich.");
        reset();
        setShowForm(false);
      },
      (error) => {
        console.log("FAILED...", error);
        toast.error("Fehler beim Senden der E-Mail.");
      }
    );
  };

  return (
    <>
      <Container>
        {!showForm && <Button onClick={() => setShowForm(true)}>Zur Zusage</Button>}
        {showForm && (
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Label>Vorname:</Label>
              <Input
                type="text"
                {...register("vorname", { required: "Vorname ist erforderlich" })}
              />
              {errors.vorname && <span>{errors.vorname.message}</span>}
            </div>
            <div>
              <Label>Nachname:</Label>
              <Input
                type="text"
                {...register("nachname", { required: "Nachname ist erforderlich" })}
              />
              {errors.nachname && <span>{errors.nachname.message}</span>}
            </div>
            <div>
              <Label>Anzahl der Personen:</Label>
              <Select
                {...register("anzahlPersonen", {
                  required: "Bitte wähle die Anzahl der Personen",
                })}
              >
                <option value="">Wählen...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="mehr">Mehr als 5</option>
              </Select>
              {errors.anzahlPersonen && <span>{errors.anzahlPersonen.message}</span>}
            </div>
            <Button type="submit">Senden</Button>
          </StyledForm>
        )}
      </Container>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default Form;
